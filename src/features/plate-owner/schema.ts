import { z } from 'zod';
import { plateStates } from './states';
const text = (max: number) => z.string().trim().min(1).max(max).refine(v => !/[\x00-\x1f<>]/.test(v), 'Use plain text.');
export const purchaseDetailsSchema = z.object({ state: text(30), plate: text(12).transform(v => v.toUpperCase()).pipe(z.string().regex(/^[A-Z0-9 -]+$/)), reason: text(500), certified: z.literal(true) }).strict().superRefine((v,ctx) => { if (!plateStates.find(s => s.name === v.state)?.reasons.includes(v.reason)) ctx.addIssue({code:'custom',path:['reason'],message:'Choose a permitted reason for your state.'}); });
export const requestDetailsSchema = z.object({state:z.string(),plate:z.string(),reason:z.string(),certified:z.boolean(),vin:z.string().trim().toUpperCase().refine(v => !v || /^[A-HJ-NPR-Z0-9]{17}$/.test(v),'VIN must be 17 characters.'),vehicle:text(250),name:text(100),address:text(400),secondReason:z.string().max(500)}).strict().superRefine((v,ctx) => {
 const result=purchaseDetailsSchema.safeParse({state:v.state,plate:v.plate,reason:v.reason,certified:v.certified}); if(!result.success) for(const issue of result.error.issues) ctx.addIssue({...issue});
 if(v.state==='Arizona' && v.reason==='Licensed private investigative agency or security service (also select a second reason)' && (!plateStates.find(s=>s.name==='Arizona')?.reasons.includes(v.secondReason)||v.secondReason===v.reason)) ctx.addIssue({code:'custom',path:['secondReason'],message:'Select a second Arizona reason to copy onto the official form.'});
});
export type RequestDetails = z.infer<typeof requestDetailsSchema>;
export const leadSchema = z.object({company:text(150),contact_name:text(100),work_email:z.string().trim().email().max(254),phone:z.string().trim().min(7).max(30).regex(/^[0-9+(). -]+$/),industry:z.enum(['insurance','towing-impound','legal','licensed PI','other']),license_number:z.string().trim().max(100).refine(v=>!/[\x00-\x1f<>]/.test(v)),monthly_volume:z.coerce.number().int().min(0).max(1000000)}).strict();
export const PRICE_CENTS = 999;
export function isPaidKit(session: {mode:string|null;payment_status:string;status:string|null;currency:string|null;amount_total:number|null;metadata:Record<string,string>|null}, userId:string, priceId:string, linePrice:string|undefined, quantity:number|null) {
 return session.mode==='payment' && session.status==='complete' && session.payment_status==='paid' && session.currency==='usd' && session.amount_total===PRICE_CENTS && session.metadata?.kit_user===userId && session.metadata?.kit_product==='plate-owner-request' && linePrice===priceId && quantity===1;
}
