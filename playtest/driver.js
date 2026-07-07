// Generic playtest driver: runs the session, calls POLICY.decide(api) every 250ms
// of game time, captures every narrator line the run triggers, writes a JSON report.
const REPORT={name:POLICY.name,events:[],notes:[]};
const TRANSCRIPT=[];
const _ns=N.start.bind(N);
N.start=(t,w)=>{TRANSCRIPT.push({t:Math.round(__clock),day:S.day,ch:w==='carrot'?'CARROT':'bark',text:t});_ns(t,w);};
const _nts=NT.startLine.bind(NT);
NT.startLine=function(){const l=NT.lines[NT.i],tx=(l&&l.text)||l,w=(l&&l.who)||'narr';
 TRANSCRIPT.push({t:Math.round(__clock),day:S.day,ch:w==='carrot'?'CARROT-SETPIECE':'SETPIECE',text:tx});_nts();};
const _award=award;
award=function(code,data){const had=S.eggs.has(code);_award(code,data);
  if(!had&&S.eggs.has(code))REPORT.events.push('EGG FILED: '+code+' at '+Math.round(__clock)+'s day '+S.day);};
const memoCard=document.getElementById('memocard');
let lastMemoHash='';
function clickMemo(){if(memoCard._btn){const b=memoCard._btn;memoCard._btn=null;try{b.onclick();}catch(e){REPORT.events.push('memoBtn err: '+e.message);}}}

const api={
 get S(){return S;}, ITEMS,TIERS,TPS,DAYS,THROW_CAP,STAFF,
 clock:()=>__clock,
 order:(item,tierKey)=>placeOrder(item,TIERS.find(x=>x.k===tierKey)||TIERS[0]),
 burstAll:()=>{for(const b of S.boxes.slice()){let n=0;while(S.boxes.includes(b)&&n++<6)tapBox(b);}},
 burstOne:()=>{const b=S.boxes[0];if(b)tapBox(b);},
 deliver:(item,deskIdx)=>{if(deskIdx===undefined){const r=S.requests.find(r=>r.item===item);if(r&&S.stock[item]>0)throwSupplies(item,r);}else deliverTo(item,deskIdx);},
 deliverReq:r=>{if(S.requests.includes(r)&&S.stock[r.item]>0)throwSupplies(r.item,r);},
 deliverAll:()=>{for(const r of S.requests.slice())if(S.stock[r.item]>0)throwSupplies(r.item,r);},
 deliverTPS:k=>deliverTPS(k),
 hire:()=>hireRunner(),
 tapButton:()=>tapButton(), pokeEye:()=>pokeEye(), tapPlant:()=>plantTapped(),
 tapWindow:()=>windowTapped(), tapWorker:i=>workerTapped(i), tapDrawer:()=>drawerTapped(),
 tapRunner:i=>{const r=S.runners[i];if(r)runnerTapped(r);},
 tapBin:k=>binTapped(k),
 emptyTap:()=>{S.idleT=0;if(S.dir&&S.dir.k==='still')S.dir.touched=true;S.tapTimes.push(nowT);S.tapTimes=S.tapTimes.filter(t=>nowT-t<2);S.sel=null;if(S.tapTimes.length>=7)N.say('click_spam',{},1,20);},
 carryEnvelope:()=>{if(S.envelope){S.envelope=null;startFinaleCarry();}},
 note:m=>REPORT.notes.push('['+Math.round(__clock)+'s d'+S.day+'] '+m),
};

clickMemo();                                   // CLOCK IN
let ticks=0,outcome='timeout',retries=0;
while(ticks++<14000){
 __clock+=0.25; nowT+=0.25; flushTimers();
 try{NT.update(.25);N.update(.25);}catch(e){REPORT.events.push('narr err: '+e.message);}
 if(NT.on){NT.tap();NT.tap();continue;}
 if(S.phase==='memo'){
   const h=memoCard._html.slice(0,60);
   if(h!==lastMemoHash){lastMemoHash=h;
     TRANSCRIPT.push({t:Math.round(__clock),day:S.day,ch:'MEMO',text:memoCard._html.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().slice(0,300)});}
   if(memoCard._html.includes('OFFER OF EMPLOYMENT')){outcome='WIN';break;}
   if(memoCard._html.includes('NOTICE OF ACQUISITION')){
     retries++;REPORT.events.push('FIRED on day '+S.day+' ('+Math.round(__clock)+'s)');
     if(retries>3){outcome='GAVE UP AFTER 3 RETRIES';break;}}
   clickMemo();continue;
 }
 if(S.phase!=='play')continue;
 try{step(0.25);}catch(e){REPORT.events.push('STEP CRASH d'+S.day+': '+e.stack.split('\n').slice(0,3).join(' | '));outcome='CRASH';break;}
 if(ticks%8===0){try{render();}catch(e){REPORT.events.push('RENDER CRASH: '+e.stack.split('\n').slice(0,3).join(' | '));outcome='CRASH';break;}}
 try{POLICY.decide(api);}catch(e){if(!REPORT._perr){REPORT._perr=1;REPORT.events.push('policy err: '+e.stack.split('\n').slice(0,2).join(' | '));}}
}
REPORT.outcome=outcome; REPORT.endedOnDay=S.day; REPORT.simSeconds=Math.round(__clock);
REPORT.stats=S.stats; REPORT.money=Math.round(S.money); REPORT.staplers=S.staplers;
REPORT.kudos=Math.round(S.kudos); REPORT.bestStreak=S.bestStreak; REPORT.odometer=S.odo;
REPORT.complianceDial=S.dial; REPORT.eggsFiled=[...S.eggs]; REPORT.shimErrors=__shimErrors.slice(0,10);
REPORT.transcript=TRANSCRIPT.slice(0,700);
require('fs').writeFileSync(OUT_PATH,JSON.stringify(REPORT,null,1));
console.log('outcome='+outcome+' day='+S.day+' staplers='+S.staplers+' $'+Math.round(S.money)+' eggs='+S.eggs.size+' transcript='+TRANSCRIPT.length+' lines -> '+OUT_PATH);
