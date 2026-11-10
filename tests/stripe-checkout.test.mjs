import {test} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import vm from 'node:vm';

async function endpoint(name, event = null, processed = false) {
 const calls={sessions:[],grants:[]};let handler;
 const db={auth:{getUser:async()=>({data:null})},from(table){
  const q={select(){return q},eq(){return q},is(){return q},ilike(){return q},
   insert(){return q},update(){return q},
   upsert(row){if(table==='subscriptions')calls.grants.push(row);return q},
   single:async()=>({data:table==='stripe_webhook_events'&&processed?{id:'old',processed_at:'2026-11-10'}:null}),
   maybeSingle:async()=>({data:table==='subscriptions'&&event?.ready?{status:'active'}:null}),then(resolve){return Promise.resolve({data:null,error:null}).then(resolve)}
  };return q;
 }};
 class Stripe {constructor(){this.checkout={sessions:{retrieve:async()=>event?.session,create:async config=>{calls.sessions.push(config);return{id:'cs_qa',url:'https://checkout.stripe.com/qa'}},listLineItems:async()=>({data:[{price:{id:event?.price || 'price_1UaFfUGxnZLw8J7OhpJBpwCB'}}]})}};this.webhooks={constructEventAsync:async()=>event};}}
 const bundle=await build({entryPoints:[`supabase/functions/${name}/index.ts`],bundle:true,write:false,platform:'node',format:'cjs',plugins:[{name:'billing-boundaries',setup(b){
  b.onResolve({filter:/^https:|_shared\/(cors|errors)/},a=>({path:a.path,namespace:'stub'}));
  b.onLoad({filter:/.*/,namespace:'stub'},a=>({contents:a.path.includes('stripe@')?'export default globalThis.billingTest.Stripe;':a.path.includes('supabase-js')?'export const createClient=()=>globalThis.billingTest.db;':a.path.includes('http/server')?'export const serve=h=>globalThis.billingTest.capture(h);':a.path.includes('cors')?'export const handleCorsPreFlight=()=>null;export const getCorsHeaders=()=>({});':'export const createErrorResponse=e=>new Response(JSON.stringify({error:String(e)}),{status:500});'}));
 }}]});
 vm.runInNewContext(bundle.outputFiles[0].text,{billingTest:{Stripe,db,capture:h=>handler=h},Deno:{env:{get:k=>k==='STRIPE_SECRET_KEY'?'sk_test_fake':'test'}},Request,Response,Date,console:{log(){},error(){},warn(){}}});
 return{calls,request:async body=>handler(new Request('https://example.test',{method:'POST',headers:{'stripe-signature':'qa'},body:JSON.stringify(body)}))};
}
test('every old and new one-time UI choice is server-priced as exactly one universal check',async()=>{
 for(const plan of ['single','complete','gun_buyer']){
  const f=await endpoint('create-checkout');assert.equal((await f.request({plan,fingerprint:'qa-fingerprint'})).status,200);
  const s=f.calls.sessions[0];assert.equal(s.line_items[0].price,'price_1UaFfUGxnZLw8J7OhpJBpwCB');assert.equal(s.line_items[0].quantity,1);assert.equal(s.metadata.checks,'1');assert.equal(s.mode,'payment');assert.equal(s.automatic_tax.enabled,true);
 }
});
test('monthly keeps the existing $10 recurring price',async()=>{
 const f=await endpoint('create-checkout');await f.request({isSubscription:true,fingerprint:'qa-fingerprint'});
 assert.equal(f.calls.sessions[0].line_items[0].price,'price_1T8uToGxnZLw8J7O6GcOuV1w');assert.equal(f.calls.sessions[0].mode,'subscription');
});
function paidEvent(paid=true){return{id:'evt_qa',type:'checkout.session.completed',data:{object:{id:'cs_qa',mode:'payment',payment_status:paid?'paid':'unpaid',amount_total:499,currency:'usd',metadata:{fingerprint:'qa-fingerprint'},customer:'cus_qa'}}};}
test('paid webhook grants one full check using the price ID; unpaid events grant nothing',async()=>{
 const f=await endpoint('stripe-webhook',paidEvent());assert.equal((await f.request({})).status,200);
 assert.equal(f.calls.grants.length,1);assert.equal(f.calls.grants[0].checks_limit,1);assert.equal(f.calls.grants[0].plan,'complete');assert.equal(f.calls.grants[0].stripe_price_id,'price_1UaFfUGxnZLw8J7OhpJBpwCB');
 const u=await endpoint('stripe-webhook',paidEvent(false));await u.request({});assert.equal(u.calls.grants.length,0);
});
test('processed webhooks are not granted again and older pack price is preserved',async()=>{
 const f=await endpoint('stripe-webhook',paidEvent(),true);await f.request({});assert.equal(f.calls.grants.length,0);
 const event=paidEvent();event.price='price_1T8uNDGxnZLw8J7OrBKrbePR';const old=await endpoint('stripe-webhook',event);await old.request({});assert.equal(old.calls.grants[0].stripe_price_id,event.price);assert.equal(old.calls.grants[0].plan,'single');
});

test('payment status requires ownership and paid, active access before showing success',async()=>{
 const session={id:'cs_qa_test_123',status:'complete',payment_status:'paid',amount_total:541,total_details:{amount_tax:42},currency:'usd',mode:'payment',metadata:{fingerprint:'qa-fingerprint'}};
 const f=await endpoint('create-checkout',{session,ready:true});
 const ok=await f.request({action:'payment_status',sessionId:session.id,fingerprint:'qa-fingerprint'});const receipt=await ok.json();assert.equal(receipt.ready,true);
 assert.deepEqual(receipt.purchase,{transactionId:session.id,value:4.99,tax:0.42,currency:'USD',plan:'single'});
 const wrong=await f.request({action:'payment_status',sessionId:session.id,fingerprint:'someone-else'});assert.equal(wrong.status,404);
 const pending=await endpoint('create-checkout',{session,ready:false});const r=await pending.request({action:'payment_status',sessionId:session.id,fingerprint:'qa-fingerprint'});const activation=await r.json();assert.equal(activation.ready,false);assert.equal(activation.purchase,undefined);
 const unpaid=await endpoint('create-checkout',{session:{...session,payment_status:'unpaid'},ready:true});const u=await unpaid.request({action:'payment_status',sessionId:session.id,fingerprint:'qa-fingerprint'});assert.equal((await u.json()).purchase,undefined);
});
