const a0_0x108740=a0_0x43c1;function a0_0x3194(){const _0x142b72=['socialActions','length','https://api.gatewayai.app/v1/social/','question','\x0a⏳\x20Memulai\x20proses\x20auto\x20task...','30FZHDQy','cfonts','parse','73474pXVDjf','\x0a🎉\x20Proses\x20selesai!','❌\x20Error\x20[','toLowerCase','https://api.gatewayai.app/v1/social/claim','\x0a🎯\x20Memproses\x20wallet\x20','🌐\x20Mau\x20menggunakan\x20proxy?\x20(y/n)\x20:\x20','105028iONIyi','------------------------','readline','address','582736RPGVht','cyan','socialAction','log',']:\x20','stdout','❌\x20Error:\x20wallets.json\x20tidak\x20ditemukan!','📌\x20Claiming:\x20','chalk','startsWith','http-proxy-agent','close','\x20\x20Completed\x20At:\x20','450502hbHzmf','entries','\x0a📋\x20Memproses\x20kategori:\x20','block','magenta','message','\x20\x20ID:\x20','post','http','socks-proxy-agent','xpRewarded','blue','\x20PTS','completed','\x0aScript\x20coded\x20by\x20-\x20@balveerxyz\x20|\x20Channel\x20Tele:\x20t.me/airdroplocked\x20|\x20Auto\x20Task\x20byData\x0a','stdin','❌\x20Tidak\x20ada\x20proxy\x20yang\x20valid!\x20Melanjutkan\x20tanpa\x20proxy...','data','https://api.gatewayai.app/v1/social/complete','3zeFVTG','completedAt','9tGRsMa','✅\x20Claimed\x20','1257808eMzYSQ','Airdrop\x20888','say','yellow','red','SOCIAL','⚠️\x20Proxy\x20failed,\x20switching\x20to\x20next\x20proxy...','title','gray','187495vLmWir','readFileSync','bold','❌\x20Error:\x20proxy.txt\x20tidak\x20ditemukan!','filter','get','utf8','proxy.txt','3710qMkByF','center','green','PARTNERS','transparent'];a0_0x3194=function(){return _0x142b72;};return a0_0x3194();}(function(_0x205a82,_0x31255b){const _0x19e922=a0_0x43c1,_0x227ede=_0x205a82();while(!![]){try{const _0x4daec3=parseInt(_0x19e922(0x1ec))/0x1+-parseInt(_0x19e922(0x204))/0x2+parseInt(_0x19e922(0x217))/0x3*(parseInt(_0x19e922(0x1f3))/0x4)+parseInt(_0x19e922(0x224))/0x5*(parseInt(_0x19e922(0x1e9))/0x6)+-parseInt(_0x19e922(0x1f7))/0x7+parseInt(_0x19e922(0x21b))/0x8+-parseInt(_0x19e922(0x219))/0x9*(-parseInt(_0x19e922(0x22c))/0xa);if(_0x4daec3===_0x31255b)break;else _0x227ede['push'](_0x227ede['shift']());}catch(_0x20f240){_0x227ede['push'](_0x227ede['shift']());}}}(a0_0x3194,0x21484));const axios=require('axios'),fs=require('fs'),chalk=require(a0_0x108740(0x1ff)),cfonts=require(a0_0x108740(0x1ea)),readline=require(a0_0x108740(0x1f5)),HttpsProxyAgent=require(a0_0x108740(0x201)),SocksProxyAgent=require(a0_0x108740(0x20d)),rl=readline['createInterface']({'input':process[a0_0x108740(0x213)],'output':process[a0_0x108740(0x1fc)]});function showBanner(){const _0xb02c3f=a0_0x108740;cfonts[_0xb02c3f(0x21d)](_0xb02c3f(0x21c),{'font':_0xb02c3f(0x207),'align':_0xb02c3f(0x22d),'colors':[_0xb02c3f(0x1f8),_0xb02c3f(0x21e)],'background':_0xb02c3f(0x1e3),'letterSpacing':0x1,'lineHeight':0x1,'space':!![]}),console['log'](chalk[_0xb02c3f(0x208)][_0xb02c3f(0x226)](_0xb02c3f(0x212)));}function sleep(){return new Promise(_0x36957f=>setTimeout(_0x36957f,0x7d0));}function loadProxies(){const _0x4e1a59=a0_0x108740;try{return fs[_0x4e1a59(0x225)](_0x4e1a59(0x22b),_0x4e1a59(0x22a))['split']('\x0a')['map'](_0x4c87e4=>_0x4c87e4['trim']())[_0x4e1a59(0x228)](_0xb013e3=>_0xb013e3['length']>0x0);}catch(_0x2aba11){return console[_0x4e1a59(0x1fa)](chalk[_0x4e1a59(0x21f)](_0x4e1a59(0x227))),[];}}function loadWallets(){const _0x223f8a=a0_0x108740;try{return JSON[_0x223f8a(0x1eb)](fs['readFileSync']('wallets.json',_0x223f8a(0x22a)));}catch(_0x241d49){return console[_0x223f8a(0x1fa)](chalk['red'](_0x223f8a(0x1fd))),[];}}async function getActions(_0x38d812,_0x4a2deb,_0x28cde5,_0x1fac95=0x0){const _0x5172c6=a0_0x108740;let _0x1366e8;if(_0x28cde5[_0x5172c6(0x1e5)]>0x0){const _0x3367fb=_0x28cde5[_0x1fac95];_0x1366e8=_0x3367fb[_0x5172c6(0x200)](_0x5172c6(0x20c))?new HttpsProxyAgent(_0x3367fb):new SocksProxyAgent(_0x3367fb);}try{const _0x1c3a53=await axios[_0x5172c6(0x229)](_0x5172c6(0x1e6)+_0x38d812+'?category='+_0x4a2deb,{'httpsAgent':_0x1366e8});return _0x1c3a53[_0x5172c6(0x215)][_0x5172c6(0x1e4)];}catch(_0x33a76f){if(_0x28cde5['length']>0x0&&_0x1fac95<_0x28cde5[_0x5172c6(0x1e5)]-0x1)return console[_0x5172c6(0x1fa)](chalk[_0x5172c6(0x21e)](_0x5172c6(0x221))),getActions(_0x38d812,_0x4a2deb,_0x28cde5,_0x1fac95+0x1);throw _0x33a76f;}}async function completeTask(_0x50673c,_0x54221d,_0x3c7cc0,_0x111db4=0x0){const _0x1c02ed=a0_0x108740;let _0x444e6a;if(_0x3c7cc0[_0x1c02ed(0x1e5)]>0x0){const _0x1a8655=_0x3c7cc0[_0x111db4];_0x444e6a=_0x1a8655[_0x1c02ed(0x200)](_0x1c02ed(0x20c))?new HttpsProxyAgent(_0x1a8655):new SocksProxyAgent(_0x1a8655);}const _0x4305a4={'id':_0x54221d,'walletAddress':_0x50673c};try{const _0x5e8075=await axios['post'](_0x1c02ed(0x216),_0x4305a4,{'httpsAgent':_0x444e6a});return _0x5e8075[_0x1c02ed(0x215)][_0x1c02ed(0x1f9)];}catch(_0x520ee9){if(_0x3c7cc0['length']>0x0&&_0x111db4<_0x3c7cc0[_0x1c02ed(0x1e5)]-0x1)return console['log'](chalk['yellow'](_0x1c02ed(0x221))),completeTask(_0x50673c,_0x54221d,_0x3c7cc0,_0x111db4+0x1);throw _0x520ee9;}}async function claimTask(_0x26a716,_0xb2bd57,_0x4ae557,_0x4efa23=0x0){const _0x110dbe=a0_0x108740;let _0x537fa7;if(_0x4ae557[_0x110dbe(0x1e5)]>0x0){const _0x11be04=_0x4ae557[_0x4efa23];_0x537fa7=_0x11be04[_0x110dbe(0x200)]('http')?new HttpsProxyAgent(_0x11be04):new SocksProxyAgent(_0x11be04);}const _0x195176={'templateId':_0xb2bd57,'walletAddress':_0x26a716};try{const _0x425959=await axios[_0x110dbe(0x20b)](_0x110dbe(0x1f0),_0x195176,{'httpsAgent':_0x537fa7});return _0x425959[_0x110dbe(0x215)]['socialAction'];}catch(_0x2de327){if(_0x4ae557[_0x110dbe(0x1e5)]>0x0&&_0x4efa23<_0x4ae557[_0x110dbe(0x1e5)]-0x1)return console[_0x110dbe(0x1fa)](chalk['yellow']('⚠️\x20Proxy\x20failed,\x20switching\x20to\x20next\x20proxy...')),claimTask(_0x26a716,_0xb2bd57,_0x4ae557,_0x4efa23+0x1);throw _0x2de327;}}async function processTasks(_0x8b2796,_0x546f7d,_0x3be822){const _0x37fbec=a0_0x108740;console[_0x37fbec(0x1fa)](chalk['blue'](_0x37fbec(0x206)+_0x546f7d));const _0x155f18=await getActions(_0x8b2796,_0x546f7d,_0x3be822);for(const _0xda04f9 of _0x155f18){if(_0xda04f9[_0x37fbec(0x211)]&&!_0xda04f9['claimed']){console['log'](chalk[_0x37fbec(0x1f8)](_0x37fbec(0x1fe)+_0xda04f9['title'])),await sleep();const _0xfaf3ac=await claimTask(_0x8b2796,_0xda04f9['id'],_0x3be822);console['log'](chalk[_0x37fbec(0x1e1)]('✅\x20Claimed\x20'+_0xda04f9['xpRewarded']+_0x37fbec(0x210))),console[_0x37fbec(0x1fa)](chalk[_0x37fbec(0x223)]('\x20\x20ID:\x20'+_0xfaf3ac['id'])),console[_0x37fbec(0x1fa)](chalk[_0x37fbec(0x223)](_0x37fbec(0x203)+_0xfaf3ac[_0x37fbec(0x218)]));}else{if(!_0xda04f9[_0x37fbec(0x211)]){console['log'](chalk[_0x37fbec(0x1f8)]('📌\x20Completing:\x20'+_0xda04f9[_0x37fbec(0x222)])),await sleep();const _0x48bb79=await completeTask(_0x8b2796,_0xda04f9['id'],_0x3be822);console[_0x37fbec(0x1fa)](chalk['green']('✅\x20Completed')),console['log'](chalk[_0x37fbec(0x223)](_0x37fbec(0x20a)+_0x48bb79['id'])),console[_0x37fbec(0x1fa)](chalk[_0x37fbec(0x223)](_0x37fbec(0x203)+_0x48bb79[_0x37fbec(0x218)])),console[_0x37fbec(0x1fa)](chalk[_0x37fbec(0x1f8)]('📌\x20Claiming:\x20'+_0xda04f9[_0x37fbec(0x222)])),await sleep();const _0x3e2080=await claimTask(_0x8b2796,_0xda04f9['id'],_0x3be822);console[_0x37fbec(0x1fa)](chalk[_0x37fbec(0x1e1)](_0x37fbec(0x21a)+_0xda04f9[_0x37fbec(0x20e)]+'\x20PTS')),console[_0x37fbec(0x1fa)](chalk[_0x37fbec(0x223)](_0x37fbec(0x20a)+_0x3e2080['id'])),console[_0x37fbec(0x1fa)](chalk['gray'](_0x37fbec(0x203)+_0x3e2080['completedAt']));}}console[_0x37fbec(0x1fa)](chalk[_0x37fbec(0x223)](_0x37fbec(0x1f4))),await sleep();}}async function main(){const _0x6b0b6b=a0_0x108740;showBanner();const _0x31a5c9=loadWallets();if(_0x31a5c9['length']===0x0){console[_0x6b0b6b(0x1fa)](chalk[_0x6b0b6b(0x21f)]('❌\x20Tidak\x20ada\x20wallet\x20yang\x20tersedia!')),rl[_0x6b0b6b(0x202)]();return;}rl[_0x6b0b6b(0x1e7)](chalk[_0x6b0b6b(0x20f)](_0x6b0b6b(0x1f2)),async _0x1814f1=>{const _0x416e6a=_0x6b0b6b,_0x59ff0c=_0x1814f1[_0x416e6a(0x1ef)]()==='y'?loadProxies():[];_0x1814f1['toLowerCase']()==='y'&&_0x59ff0c[_0x416e6a(0x1e5)]===0x0&&console['log'](chalk[_0x416e6a(0x21f)](_0x416e6a(0x214)));console[_0x416e6a(0x1fa)](chalk['yellow'](_0x416e6a(0x1e8)));for(const [_0x3b8a6d,_0x35bc89]of _0x31a5c9[_0x416e6a(0x205)]()){console[_0x416e6a(0x1fa)](chalk[_0x416e6a(0x208)](_0x416e6a(0x1f1)+(_0x3b8a6d+0x1)+'/'+_0x31a5c9[_0x416e6a(0x1e5)]+'\x20['+_0x35bc89['address']+']'));try{await processTasks(_0x35bc89[_0x416e6a(0x1f6)],_0x416e6a(0x220),_0x59ff0c),await processTasks(_0x35bc89['address'],_0x416e6a(0x1e2),_0x59ff0c);}catch(_0xcad4fa){console['log'](chalk[_0x416e6a(0x21f)](_0x416e6a(0x1ee)+_0x35bc89[_0x416e6a(0x1f6)]+_0x416e6a(0x1fb)+_0xcad4fa[_0x416e6a(0x209)]));}}console['log'](chalk[_0x416e6a(0x1e1)](_0x416e6a(0x1ed))),rl[_0x416e6a(0x202)]();});}function a0_0x43c1(_0x1a235e,_0x22afab){const _0x3194fb=a0_0x3194();return a0_0x43c1=function(_0x43c1a3,_0x2b415f){_0x43c1a3=_0x43c1a3-0x1e1;let _0x29678d=_0x3194fb[_0x43c1a3];return _0x29678d;},a0_0x43c1(_0x1a235e,_0x22afab);}main();