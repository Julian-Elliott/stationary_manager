// Headless browser shims for CTRL+ALT+DELIVER playtesting.
// Prepended to the game's <script> so the whole game runs in Node.
let __clock = 0;
const __timers = [];
function setTimeout(fn, ms){ __timers.push({t:__clock + (ms||0)/1000, fn}); return __timers.length; }
function setInterval(fn, ms){ const o={t:__clock+(ms||0)/1000, fn, iv:(ms||0)/1000}; __timers.push(o); return o; }
function clearInterval(o){ const i=__timers.indexOf(o); if(i>=0) __timers.splice(i,1); }
function clearTimeout(o){}
function flushTimers(){
  for(let i=0;i<__timers.length;i++){
    const t=__timers[i];
    if(t.t<=__clock){
      if(t.iv){ t.t=__clock+t.iv; try{t.fn();}catch(e){ __shimErrors.push('timer: '+e.message); } }
      else { __timers.splice(i,1); i--; try{t.fn();}catch(e){ __shimErrors.push('timer: '+e.message); } }
    }
  }
}
const __shimErrors=[];
class CanvasRenderingContext2D{}
const __ctxProxy = new Proxy(function(){}, {
  get(){ return __ctxProxy; }, set(){ return true; }, apply(){ return __ctxProxy; },
});
function makeEl(id){
  return {
    id, _html:'', _btn:null, classList:{add(){},remove(){},toggle(){},contains(){return false;}},
    style:{}, disabled:false, title:'', textContent:'', className:'', onclick:null,
    set innerHTML(v){ this._html=v; this._btn=null; },
    get innerHTML(){ return this._html; },
    appendChild(b){ this._btn=b; },
    querySelectorAll(){ return []; },
    addEventListener(){}, getContext(){ return __ctxProxy; },
    getBoundingClientRect(){ return {left:0, top:0}; },
    setPointerCapture(){}, clientWidth:400, clientHeight:700, width:0, height:0,
  };
}
const __els = {};
const document = {
  getElementById(id){ return __els[id] || (__els[id]=makeEl(id)); },
  createElement(){ return makeEl('dyn'); },
  addEventListener(){}, hidden:false,
};
const window = { devicePixelRatio:1, addEventListener(){}, AudioContext:undefined, webkitAudioContext:undefined };
const localStorage = { getItem(){ return null; }, setItem(){} };
const matchMedia = q => ({ matches:false });
const performance = { now(){ return __clock*1000; } };
const requestAnimationFrame = fn => 0;
const location = { reload(){} };
