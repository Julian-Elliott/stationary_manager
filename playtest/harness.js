#!/usr/bin/env node
// usage: node playtest/harness.js <policy.js> [out.json]
// Composes shims + the live game + your policy + the driver, then runs the session headless.
const fs=require('fs'),cp=require('child_process'),os=require('os'),path=require('path');
const [,,policyPath,outPath]=process.argv;
if(!policyPath){console.error('usage: node harness.js <policy.js> [out.json]');process.exit(2);}
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const game=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const shims=fs.readFileSync(path.join(__dirname,'shims.js'),'utf8');
const driver=fs.readFileSync(path.join(__dirname,'driver.js'),'utf8');
const policy=fs.readFileSync(policyPath,'utf8');
const out=path.resolve(outPath||policyPath.replace(/\.js$/,'')+'.report.json');
const composed=shims+'\n'+game
 +'\nconst POLICY=(function(){\n'+policy+'\nreturn {name:(typeof NAME!=="undefined"?NAME:"anon"),decide};})();'
 +'\nconst OUT_PATH='+JSON.stringify(out)+';\n'+driver;
const tmp=path.join(os.tmpdir(),'cad_playtest_'+process.pid+'_'+Math.random().toString(36).slice(2)+'.js');
fs.writeFileSync(tmp,composed);
const r=cp.spawnSync('node',[tmp],{stdio:'inherit',timeout:180000});
fs.unlinkSync(tmp);
process.exit(r.status===null?1:r.status);
