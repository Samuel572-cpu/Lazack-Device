const _0x3427c2=_0x55d3;(function(_0x52e040,_0x4ec34f){const _0xf07678=_0x55d3,_0x1db3c4=_0x52e040();while(!![]){try{const _0x492a2c=-parseInt(_0xf07678(0x1a9))/0x1*(-parseInt(_0xf07678(0x18d))/0x2)+parseInt(_0xf07678(0x19a))/0x3*(-parseInt(_0xf07678(0x198))/0x4)+parseInt(_0xf07678(0x191))/0x5*(-parseInt(_0xf07678(0x1a4))/0x6)+parseInt(_0xf07678(0x1ba))/0x7*(parseInt(_0xf07678(0x18b))/0x8)+-parseInt(_0xf07678(0x1b7))/0x9*(parseInt(_0xf07678(0x1a2))/0xa)+-parseInt(_0xf07678(0x192))/0xb*(-parseInt(_0xf07678(0x18a))/0xc)+-parseInt(_0xf07678(0x1bc))/0xd*(-parseInt(_0xf07678(0x189))/0xe);if(_0x492a2c===_0x4ec34f)break;else _0x1db3c4['push'](_0x1db3c4['shift']());}catch(_0x37dd87){_0x1db3c4['push'](_0x1db3c4['shift']());}}}(_0x5433,0xab003));function _0x55d3(_0x3e089f,_0x3c2962){const _0x5433c0=_0x5433();return _0x55d3=function(_0x55d398,_0x4e4e2c){_0x55d398=_0x55d398-0x185;let _0x26cbc1=_0x5433c0[_0x55d398];return _0x26cbc1;},_0x55d3(_0x3e089f,_0x3c2962);}let FormData=require(_0x3427c2(0x1aa)),Jimp=require(_0x3427c2(0x197)),handler=async(_0x4a1bfe,{conn:_0x107ae0,usedPrefix:_0x2f31d1,command:_0x554913})=>{const _0x4b832f=_0x3427c2;_0x107ae0[_0x4b832f(0x190)]=_0x107ae0['hdr']?_0x107ae0[_0x4b832f(0x190)]:{};if(_0x4a1bfe[_0x4b832f(0x188)]in _0x107ae0[_0x4b832f(0x190)])throw _0x4b832f(0x1b6);let _0x1ab64a=_0x4a1bfe[_0x4b832f(0x1a7)]?_0x4a1bfe[_0x4b832f(0x1a7)]:_0x4a1bfe,_0x4ff4cc=(_0x1ab64a[_0x4b832f(0x19e)]||_0x1ab64a)[_0x4b832f(0x195)]||_0x1ab64a[_0x4b832f(0x18c)]||'';if(!_0x4ff4cc)throw'Kirim\x20gambar\x20dengan\x20caption\x20*'+(_0x2f31d1+_0x554913)+_0x4b832f(0x1be);if(!/image\/(jpe?g|png|video)/[_0x4b832f(0x19b)](_0x4ff4cc))throw _0x4b832f(0x1a3)+_0x4ff4cc+_0x4b832f(0x1b2);else _0x107ae0['hdr'][_0x4a1bfe[_0x4b832f(0x188)]]=!![];await _0x4a1bfe[_0x4b832f(0x187)]('🕘');let _0x4c9da=await _0x1ab64a[_0x4b832f(0x1b0)]?.(),_0x47a163;try{const _0x51cfd3=await processing(_0x4c9da,'enhance');await _0x107ae0['sendFile'](_0x4a1bfe['chat'],_0x51cfd3,'','*'+_0x554913+'*',_0x4a1bfe),_0x4a1bfe[_0x4b832f(0x187)]('✅');}catch(_0x58f176){_0x47a163=!![];}finally{_0x47a163&&_0x4a1bfe[_0x4b832f(0x187)]('❌'),delete _0x107ae0['hdr'][_0x4a1bfe[_0x4b832f(0x188)]];}};function _0x5433(){const _0x4eca0d=['696125nyqGZj','1067XoQarG','submit','limit','mimetype','exports','jimp','8AVNXrN','okhttp/4.9.3','646041IrkgDl','test','error','://','msg','command','data','recolor','130GxMXTe','Mime\x20','54KIoJaS','gzip','multipart/form-data;\x20charset=uttf-8','quoted','https','634063Fiiezh','form-data','.vyro','binary','enhance_image_body.jpg','inferenceengine','end','download','https:','\x20tidak\x20support','Keep-Alive','tags','model_version','Masih\x20ada\x20proses\x20yang\x20sedang\x20belum\x20selesai','713088BzmuNi','append','enhance','2947EyxSYT','includes','15018432LeGqsW','.ai/','*\x20atau\x20tag\x20gambar\x20yang\x20sudah\x20dikirim.','tools','image/jpeg','remini','image','help','react','sender','14IpAfTd','40908TxBjHv','24592gkmTKJ','mediaType','2anMkxU','.ai','dehaze','hdr'];_0x5433=function(){return _0x4eca0d;};return _0x5433();}handler[_0x3427c2(0x186)]=['remini','hd'],handler[_0x3427c2(0x1b4)]=[_0x3427c2(0x1bf)],handler[_0x3427c2(0x194)]=!![],handler[_0x3427c2(0x19f)]=[_0x3427c2(0x1c1),'hd'],module[_0x3427c2(0x196)]=handler;async function processing(_0x4d267a,_0xf57f14){return new Promise(async(_0x508860,_0x354556)=>{const _0x288daf=_0x55d3;let _0x27aba3=[_0x288daf(0x1b9),_0x288daf(0x1a1),_0x288daf(0x18f)];_0x27aba3[_0x288daf(0x1bb)](_0xf57f14)?_0xf57f14=_0xf57f14:_0xf57f14=_0x27aba3[0x0];let _0x112c8d,_0x4d6d04=new FormData(),_0x2f4be0=_0x288daf(0x1a8)+_0x288daf(0x19d)+_0x288daf(0x1ae)+'.vyro'+_0x288daf(0x1bd)+_0xf57f14;_0x4d6d04[_0x288daf(0x1b8)](_0x288daf(0x1b5),0x1,{'Content-Transfer-Encoding':_0x288daf(0x1ac),'contentType':_0x288daf(0x1a6)}),_0x4d6d04[_0x288daf(0x1b8)](_0x288daf(0x185),Buffer['from'](_0x4d267a),{'filename':_0x288daf(0x1ad),'contentType':_0x288daf(0x1c0)}),_0x4d6d04[_0x288daf(0x193)]({'url':_0x2f4be0,'host':_0x288daf(0x1ae)+_0x288daf(0x1ab)+_0x288daf(0x18e),'path':'/'+_0xf57f14,'protocol':_0x288daf(0x1b1),'headers':{'User-Agent':_0x288daf(0x199),'Connection':_0x288daf(0x1b3),'Accept-Encoding':_0x288daf(0x1a5)}},function(_0x5377ec,_0x4577d9){const _0x393ada=_0x288daf;if(_0x5377ec)_0x354556();let _0x3d9ee7=[];_0x4577d9['on'](_0x393ada(0x1a0),function(_0x3351be,_0x77a4dc){_0x3d9ee7['push'](_0x3351be);})['on'](_0x393ada(0x1af),()=>{_0x508860(Buffer['concat'](_0x3d9ee7));}),_0x4577d9['on'](_0x393ada(0x19c),_0xd0894d=>{_0x354556();});});});}