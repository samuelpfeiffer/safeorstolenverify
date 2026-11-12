import type {RequestDetails} from './schema';
import {plateStates, kitNote, certificationText} from './states';
export function kitLines(details:RequestDetails) {
 const state=plateStates.find(s=>s.name===details.state);
 if(!state) throw new Error('Unsupported state.');
 return ['Official Plate Owner Request Kit',`${state.name} · SafeOrStolen kit $9.99 (state fee separate)`, 'Your details — copy onto the official form',`Plate: ${details.plate}`,`VIN: ${details.vin||'Not provided'}`,`Vehicle: ${details.vehicle}`,`Requester: ${details.name}`,`Mailing address: ${details.address}`,`Official form: ${state.form}`,`Download: ${state.url}`,`Reason box to check: ${details.reason}`, ...(details.secondReason?[`Second reason box: ${details.secondReason}`]:[]),`State fee: ${state.fee}`,state.submission,`ID / notary: ${state.id}`,state.time||'Processing time: not stated here; check with the agency.',...(state.note?[state.note]:[]),'Checklist','1. Download the official form and copy your details and selected reason.','2. Write your ID number on the official form yourself. Never send it to SafeOrStolen.','3. Attach supporting documentation or written consent required for your reason.','4. Sign, and arrange notarization or ID copies where required by the form.','5. Enclose the state fee and submit directly to the agency. Keep a copy.',certificationText,kitNote,`Source: official ${state.agency} form, checked Nov 2026`];
}
export async function downloadKit(details:RequestDetails) {
 const {jsPDF}=await import('jspdf'); const doc=new jsPDF(); let y=18;
 for(const text of kitLines(details)) { const plain=text.replace(/[—–]/g,'-').replace(/[’]/g,"'").replace(/×/g,'x'); const lines:string[]=doc.splitTextToSize(plain,175); for(const line of lines) {if(y>278){doc.addPage();y=18;}doc.setFontSize(11);doc.text(line,18,y);y+=6;}y+=4; }
 doc.save('official-plate-owner-request-kit.pdf');
}
