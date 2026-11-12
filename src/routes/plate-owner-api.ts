import {createFileRoute} from '@tanstack/react-router';
import {createClient} from '@supabase/supabase-js';
import {z} from 'zod';
import {purchaseDetailsSchema, isPaidKit, requestDetailsSchema} from '@/features/plate-owner/schema';
import {kitLines} from '@/features/plate-owner/pdf';
export const Route=createFileRoute('/plate-owner-api')({server:{handlers:{POST:async({request})=>{
 const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json','Cache-Control':'private, no-store'}});
 try {
  const origin=new URL(request.url).origin; if(request.headers.get('origin')!==origin)return json({error:'Request origin not allowed.'},403);
  const raw=await request.text(); if(raw.length>10000)return json({error:'Request too large.'},413);
  const body=z.object({action:z.enum(['checkout','confirm','history','email']),details:z.unknown().optional(),sessionId:z.string().regex(/^cs_[A-Za-z0-9_]+$/).max(255).optional()}).strict().parse(JSON.parse(raw));
  const url=process.env['SUPABASE_URL'];const key=process.env['SUPABASE_PUBLISHABLE_KEY'];if(!url||!key)return json({error:'Account service unavailable.'},503);
  const token=request.headers.get('authorization')?.replace(/^Bearer /,'');if(!token)return json({error:'Please sign in before purchasing.'},401);
  const db=createClient(url,key,{auth:{persistSession:false},global:{headers:{Authorization:`Bearer ${token}`}}});
  const {data:userData,error:authError}=await db.auth.getUser(token);if(authError||!userData.user)return json({error:'Please sign in again.'},401);
  const user=userData.user;
  if(body.action==='history'){const {data,error}=await db.from('plate_owner_kit_purchases').select('state,plate,selected_reason,payment_id,created_at').order('created_at',{ascending:false}).limit(100);if(error)throw error;return json({purchases:data});}
  if(body.action==='email') {
   const details=requestDetailsSchema.parse(body.details);const {data}=await db.from('plate_owner_kit_purchases').select('id').eq('payment_id',body.sessionId||'').eq('state',details.state).eq('plate',details.plate.toUpperCase()).eq('selected_reason',details.reason).maybeSingle();if(!data)return json({error:'A confirmed purchase is required.'},403);
   const emailKey=process.env['RESEND_API_KEY'];if(!emailKey||!user.email)return json({error:'Email is unavailable. Please download your PDF.'},503);
   const result=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${emailKey}`,'Content-Type':'application/json','Idempotency-Key':`plate-kit-${body.sessionId}`},body:JSON.stringify({from:'SafeOrStolen <support@safeorstolen.com>',to:[user.email],subject:'Your Official Plate Owner Request Kit',text:kitLines(details).join('\n\n')})});if(!result.ok)return json({error:'Email could not be sent. Your PDF is still available.'},503);return json({sent:true});
  }
  // Do not charge while the legacy webhook treats unknown kit prices as verification plans.
  const priceId=process.env['PLATE_OWNER_KIT_PRICE_ID'];const isolated=process.env['PLATE_OWNER_KIT_CHECKOUT_ISOLATED']==='true';const secret=process.env['STRIPE_SECRET_KEY'];
  if(!priceId||!isolated||!secret)return json({error:'Request-kit checkout is not available yet. You have not been charged.'},503);
  const {default:Stripe}=await import('stripe');const stripe=new Stripe(secret,{httpClient:Stripe.createFetchHttpClient()});
  if(body.action==='checkout'){
   const details=purchaseDetailsSchema.parse(body.details);
   const price=await stripe.prices.retrieve(priceId);if(price.unit_amount!==999||price.currency!=='usd'||price.recurring||!price.active)throw new Error('Kit price is not configured correctly.');
   const session=await stripe.checkout.sessions.create({mode:'payment',line_items:[{price:priceId,quantity:1}],customer_email:user.email,metadata:{kit_product:'plate-owner-request',kit_user:user.id,kit_state:details.state,kit_plate:details.plate,kit_reason:details.reason},success_url:`${origin}/plate-owner-request?session_id={CHECKOUT_SESSION_ID}`,cancel_url:`${origin}/plate-owner-request?cancelled=1`});return json({url:session.url});
  }
  if(!body.sessionId)return json({error:'Missing payment reference.'},400);
  const session=await stripe.checkout.sessions.retrieve(body.sessionId);const items=await stripe.checkout.sessions.listLineItems(body.sessionId,{limit:2});
  if(items.data.length!==1||!isPaidKit(session,user.id,priceId,items.data[0]?.price?.id,items.data[0]?.quantity??null))return json({error:'Payment is not confirmed for this account.'},403);
  const details=purchaseDetailsSchema.parse({state:session.metadata?.kit_state,plate:session.metadata?.kit_plate,reason:session.metadata?.kit_reason,certified:true});
  const {supabaseAdmin}=await import('@/integrations/supabase/client.server');const {error}=await supabaseAdmin.from('plate_owner_kit_purchases').upsert({user_id:user.id,state:details.state,plate:details.plate,selected_reason:details.reason,payment_id:session.id},{onConflict:'payment_id',ignoreDuplicates:true});if(error)throw error;
  return json({paid:true,details});
 }catch(error){if(error instanceof z.ZodError)return json({error:error.issues[0]?.message||'Please check your details.'},400);return json({error:'The request could not be completed. Please try again.'},500);}
}}}});
