import {test} from 'node:test';
import assert from 'node:assert/strict';
import {purchasedCheckLimit,UNIVERSAL_CHECK_PRICE_ID} from './purchasedCheckLimit';
import {checkUsageGate} from './engine.server';

test('new price grants one check; every older pack retains two',()=>{
 assert.equal(purchasedCheckLimit({stripe_price_id:UNIVERSAL_CHECK_PRICE_ID}),1);
 assert.equal(purchasedCheckLimit({stripe_price_id:'price_1T8uNDGxnZLw8J7OrBKrbePR'}),2);
 assert.equal(purchasedCheckLimit({stripe_price_id:null}),2);
});
function database(row:any){
 return {from(table:string){let patch:any=null; const q:any={
  select(){return q},eq(){return q},is(){return q},update(p:any){patch=p;return q},
  maybeSingle:async()=>({data:table==='profiles'?{subscription_tier:'free'}:null}),
  then(resolve:any){if(patch){Object.assign(row,patch);return Promise.resolve({data:[{id:row.id}]}).then(resolve)}return Promise.resolve({data:table==='subscriptions'?[{...row}]:null}).then(resolve)},
 };return q;},rpc:async()=>({data:false})};
}
test('guest spends the new one-check purchase once and cannot spend it again',async()=>{
 const row={id:'test',plan:'complete',checks_used_this_month:0,stripe_price_id:UNIVERSAL_CHECK_PRICE_ID};const db:any=database(row);
 const first=await checkUsageGate(db,null,'test-fingerprint',null);assert.equal(first.allowed,true);assert.equal((first as any).checksRemaining,0);
 const again=await checkUsageGate(db,null,'test-fingerprint',null);assert.equal(again.allowed,false);assert.equal(row.checks_used_this_month,1);
});
test('older two-check pack still permits both checks',async()=>{
 const row={id:'old',plan:'single',checks_used_this_month:0,stripe_price_id:null};const db:any=database(row);
 assert.equal((await checkUsageGate(db,null,'test-fingerprint',null)).allowed,true);
 assert.equal((await checkUsageGate(db,null,'test-fingerprint',null)).allowed,true);
 assert.equal(row.checks_used_this_month,2);
});
