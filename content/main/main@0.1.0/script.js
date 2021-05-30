'use strict';
// #before
// #import
  // tyin
  import{tyin}from'/content/package/tyin@0.1.0/content/main/main@0.1.0/tyin.js';
  // Google Analytics
  tyin.elementCreate('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},document.head);
  tyin.elementCreate('script',undefined,document.head,undefined,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #variable
// #block
// #build
  // font
  tyin.loadFont('SF Pro Text_','/content/package/tyin@0.1.0/content/asset/font@0.1.0/SFPro/SF-Pro-Text-Regular_400.woff2',{weight:'normal'});
  tyin.loadFont('New York_','/content/package/tyin@0.1.0/content/asset/font@0.1.0/newYork/NewYork.woff2');
  // tyin.loadFont('PingFang SC_','/content/package/tyin@0.1.0/content/asset/font@0.1.0/pingFang/PingFang_2_400.woff2',{weight:'normal'});
  // element
  tyin.loop(()=>{
    for(const value of document.documentElement.children){
      if(value.localName==='body'){
        document.body.insertAdjacentHTML('beforeend',`
          <div class="seabye" style="background-color: #1F2023BF; perspective: 100vw;">
            <div style="font-size: calc(100vmax/25); background-color: #1F2023BF; transform: rotateX(-15deg); text-align: center; perspective: 61.8vw;">
              <div style="transform: rotateY(-60deg);">
                <a href="//seabye.com">seabye.com</a>
                <span style="font-size: 38.2%; color: #E6844F;">􀇲</span>
                <div style="font-size: 61.8%;">
                  <div>
                    <span>tyin@0.1.0</span>
                    <span style="font-size: 38.2%; color: #E6844F;">50%</span>
                  </div>
                  <div>
                    <span>lyin@0.1.0</span>
                    <span style="font-size: 38.2%; color: #E6844F;">50%</span>
                  </div>
                </div>
              </div>
              <div style="font-size: 61.8%; transform: rotateY(-45deg);">
                <a href="//github.com/seabye" style="color: #53B1DE;">github.com/seabye</a>
              </div>
              <div style="transform: rotateY(-30deg);">
                <a href="//w3daze.com">w3daze.com</a>
                <span style="font-size: 38.2%; color: #E2378A;">􀇲 0%</span>
              </div>
              <div style="transform: rotateY(-15deg)rotateY(180deg);">
                <span style="color: #6594E9;">pc3</span>
                <span style="font-size: 38.2%; color: #E6844F;">􀇲 50%</span>
              </div>
              <div style="font-size: 138.2%; color: #707C74;">Hello, World!</div>
              <div style="transform: rotateY(30deg);">
                <a href="//luojia.me" style="color: #53B1DE;">luojia.me</a>
              </div>
              <div style="transform: rotateY(45deg);">
                <a href="//pasi.cat" style="color: #53B1DE;">pasi.cat</a>
              </div>
              <div style="font-size: 61.8%; transform: rotateY(-15deg);">
                <a onclick="tyin_test._tyin_package_quill(false,'tyin_simple')" style="color: #64A963; -webkit-mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0)); mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0));">quill_tyin(edit,simple)</a>
              </div>
              <div style="font-size: 61.8%; transform: rotateY(-30deg);">
                <a onclick="tyin_test._tyin_package_quill(false,'tyin_default')" style="color: #64A963; -webkit-mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0)); mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0));">quill_tyin(edit,default)</a>
              </div>
              <div style="font-size: 61.8%; transform: rotateY(-45deg);">
                <a onclick="tyin_test._tyin_package_quill(false,'tyin_full')" style="color: #64A963; -webkit-mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0)); mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0));">quill_tyin(edit,full)</a>
              </div>
              <div style="font-size: 61.8%; transform: rotateY(-60deg);">
                <a onclick="tyin_test._tyin_package_quill(true)" style="color: #64A963; -webkit-mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0)); mask: linear-gradient(-90deg,#000000,rgba(0,0,0,0));">quill_tyin(browse)</a>
              </div>
            </div>
          </div>
        `);
        return true;
      }
    }
    return false;
  },1000/60);
// #debug
  // // debug
  // if(location.hostname.match(/127.0.0.1|192\.168/)){
  //   // ic_dg
  //   document.documentElement.classList.add('ic_dg');
  //   // debug
  //   document.documentElement.classList.add('debug');
  // }
  // tyin
  tyin.debug(()=>{
    console.log('++++ tyin:',tyin);
    globalThis.tyin=tyin;
  });
  // tyin test
  globalThis.tyin_test={
    clear(){
      document.documentElement.classList.remove('ic_dg','debug');
      document.body.innerHTML='';
    },
    async _loop(){
      console.log('++++ tyin, loop: start');
      let result=await tyin.loop(()=>{
        return tyin.fetch('https://iptv-org.github.io/iptv/channels.nosj','GET',undefined,undefined,undefined,'json',(data)=>{
          console.log('++++ tyin, loop, response data:',data);
        });
      },500,3,()=>{
        return tyin.fetch('https://iptv-org.github.io/iptv/channels.json','GET',undefined,undefined,undefined,'json',(data)=>{
          console.log('++++ tyin, loop, response data:',data);
          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve('Ok');
            },1000);
          });
        });
      });
      console.log('++++ tyin, loop, result:',result);
      console.log('++++ tyin, loop: end');
    },
    _listenDOM_observe_resize(){
      tyin.listenDOM('add',document.body,'observe_resize',(data)=>{
        console.log('++++ tyin, listenDOM, observe_resize, data:',data);
      });
    },
    _listenDOM_URL(){
      tyin.listenDOM('add',()=>{},'URL');
      tyin.setURL('push',location.pathname);
      tyin.setURL('replace',location.pathname);
      tyin.listenDOM('remove',()=>{},'URL');
    },
    _elementCreate(){},
    _elementState(){},
    async _elementBlock(){
      const block=tyin.elementBlock(document.body,'block');
      await block.add(tyin.elementCreate(undefined,{class:'b_1'},undefined,undefined,'1'),1);
      await block.add(tyin.elementCreate(undefined,{class:'b_2'},undefined,undefined,'2'),2);
      await block.add(tyin.elementCreate(undefined,{class:'b_3'},undefined,undefined,'3'),3);
      await block.hide();
      await block.remove();
      console.log('++++ tyin, elementBlock, get 3 tyin_elementBlock_prev:',block.get(3).tyin_elementBlock_prev);
      block.set(tyin.elementCreate(undefined,undefined,undefined,undefined,'3Plus'),3);
      await block.add(tyin.elementCreate(undefined,{class:'b_4'},undefined,undefined,'4'));
      await block.back();
    },
    _doubleKeyContentCountSave(){},
    UUID36ToBLOb22(){
      console.log('++++ tyin, UUID36ToBLOb22, 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww:',tyin.UUID36ToBLOb22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
    },
    BLOb22ToUUID36(){
      console.log('++++ tyin, BLOb22ToUUID36, 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww:',tyin.BLOb22ToUUID36('jvZe6aA5S_Kks2h_zB88ww'));
    },
    _webAssembly(){
      console.log('++++ tyin, webAssembly rust module, test():',tyin.test());
      console.log('++++ tyin, webAssembly rust module, test._isWebAssembly_:',tyin.test._isWebAssembly_);
      // console.log('++++ tyin, webAssembly c module, test():',tyin.test());
      // console.log('++++ tyin, webAssembly c module, test._isWebAssembly_:',tyin.test._isWebAssembly_);
    },
    _file_(){
      tyin.elementCreate('input',{type:'file',multiple:'',accept:'image/*'},document.body,undefined,undefined,(input)=>{
        input.addEventListener('change',function(){
          for(let key=0,length=this.files.length;key<length;key++){
            // BLObFile
            const BLObFile=this.files[key];
            console.log(BLObFile);
            // objectURL
            const objectURL=URL.createObjectURL(BLObFile);
            console.log(objectURL);
            // arrayBuffer
            const arrayBuffer=new FileReader();
            arrayBuffer.readAsArrayBuffer(BLObFile);
            arrayBuffer.addEventListener('load',function(){
              console.log(this.result);
            });
            // dataURL
            const dataURL=new FileReader();
            dataURL.readAsDataURL(BLObFile);
            dataURL.addEventListener('load',function(){
              console.log(this.result);
            });
            /* ~~~~ ~~~~ ~~~~ ~~~~ */
            // objectURL
            tyin.elementCreate('img',{src:objectURL},document.body,undefined,undefined,(element)=>{
              element.addEventListener('load',()=>{
                URL.revokeObjectURL(objectURL);
              });
            });
            // arrayBuffer ~ objectURL
            arrayBuffer.addEventListener('load',function(){
              const objectURL=URL.createObjectURL(new Blob([this.result],{type:BLObFile.type}));
              tyin.elementCreate('img',{src:objectURL},document.body,undefined,undefined,(element)=>{
                element.addEventListener('load',()=>{
                  URL.revokeObjectURL(objectURL);
                });
              });
            });
            // dataURL
            dataURL.addEventListener('load',function(){
              tyin.elementCreate('img',{src:this.result},document.body);
            });
          }
        });
      });
    },
    _file(){
      tyin.file();
    },
    _miniEditor(){
      globalThis.tyin_miniEditor=tyin.miniEditor(
        document.body,
        undefined,
        'edit',
        'seabye@live.com',
        '100%',
        '100%'
      );
      console.log('++++ tyin, miniEditor, tyin_miniEditor.tyin_miniEditor_getContent():',tyin_miniEditor.tyin_miniEditor_getContent());
    },
    async package_quill_create(readOnly,mode){
      // globalThis.tyin_package_quill=await tyin.package_quill_create(document.body,undefined,'full','some',undefined,false,'100%','100%',1);
      // globalThis.tyin_package_quill=await tyin.package_quill_create(document.body,undefined,'snow','some',undefined,false,'100%','100%',1);
      // globalThis.tyin_package_quill=await tyin.package_quill_create(document.body,undefined,'bubble','some',undefined,false,'100%','100%',1);
      // globalThis.tyin_package_quill=await tyin.package_quill_create(document.body,undefined,'tyin_full','some',undefined,readOnly,'100%','100%',1);
      // globalThis.tyin_package_quill=await tyin.package_quill_create(document.body,undefined,'tyin_default','some',undefined,readOnly,'100%','100%',1);
      globalThis.tyin_package_quill=await tyin.package_quill_create(document.body,undefined,mode?mode:'tyin_default','some',undefined,readOnly,'100%','100%',1);
      if(readOnly){
        tyin_package_quill.tyin_package_quill.setContents(JSON.parse(
"{\"ops\":[{\"insert\":\"#### 􀤍\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"#### 􀅐\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀅓\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"bold\":true},\"insert\":\"魔法 Magic\"},{\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀅔\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"italic\":true},\"insert\":\"魔法 Magic\"},{\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀅕\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"underline\":true},\"insert\":\"魔法 Magic\"},{\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀅖\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"魔法 Magic\"},{\"insert\":\"\\n#### 􀣶\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"#### 􀎑\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀓡\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法\"},{\"attributes\":{\"script\":\"sub\"},\"insert\":\"Magic\"},{\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀓢\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法\"},{\"attributes\":{\"script\":\"super\"},\"insert\":\"Magic\"},{\"insert\":\"\\n#### 􀬎\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀀺\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法 Magic\"},{\"attributes\":{\"header\":1},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀀼\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法 Magic\"},{\"attributes\":{\"header\":2},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀀾\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法 Magic\"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀁀\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法 Magic\"},{\"attributes\":{\"header\":4},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀁂\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法 Magic\"},{\"attributes\":{\"header\":5},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀁄\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法 Magic\"},{\"attributes\":{\"header\":6},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀋿\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法\"},{\"attributes\":{\"blockquote\":true},\"insert\":\"\\n\"},{\"insert\":\"Magic\"},{\"attributes\":{\"blockquote\":true},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀙚\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"// 魔法 Magic\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"let x='Ривет, мир!';\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"console.log(x);\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀋱\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"M\"},{\"attributes\":{\"indent\":1,\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"a\"},{\"attributes\":{\"indent\":2,\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"g\"},{\"attributes\":{\"indent\":3,\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"i\"},{\"attributes\":{\"indent\":4,\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"c\"},{\"attributes\":{\"indent\":5,\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀣩\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"M\"},{\"attributes\":{\"indent\":1,\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"a\"},{\"attributes\":{\"indent\":2,\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"g\"},{\"attributes\":{\"indent\":3,\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"i\"},{\"attributes\":{\"indent\":4,\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"c\"},{\"attributes\":{\"indent\":5,\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀋶\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法\\nMagic\"},{\"attributes\":{\"indent\":1},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀋵\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法\"},{\"attributes\":{\"indent\":1},\"insert\":\"\\n\"},{\"insert\":\"Magic\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀒆\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"魔法 Magic\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"#### 􀌀\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"underline\":true},\"insert\":\"==== 􀉣\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"attributes\":{\"underline\":true,\"strike\":true,\"italic\":true,\"bold\":true,\"background\":\"unset\",\"link\":\"//seabye.com/\"},\"insert\":\"//seabye.com\"},{\"attributes\":{\"underline\":true,\"strike\":true,\"italic\":true,\"bold\":true,\"script\":\"super\"},\"insert\":\"SEA\"},{\"attributes\":{\"underline\":true,\"strike\":true,\"italic\":true,\"bold\":true,\"script\":\"sub\",\"link\":\"mailto:seabye@live.com\"},\"insert\":\"seabye\"},{\"attributes\":{\"underline\":true,\"strike\":true,\"italic\":true,\"bold\":true,\"script\":\"super\",\"link\":\"mailto:seabye@live.com\"},\"insert\":\"@live.com\"},{\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀏅\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":{\"image\":\"data:image/jpeg;base64,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\"}},{\"insert\":\"\\n\"},{\"attributes\":{\"underline\":true},\"insert\":\"==== 􀊙\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":{\"video\":\"//seabye_com\"}},{\"attributes\":{\"underline\":true},\"insert\":\"==== 􀅮\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":{\"formula\":\"e=mc^2\"}},{\"insert\":\" \\n\"},{\"insert\":{\"formula\":\"\\\\displaystyle \\\\frac{1}{\\\\Bigl(\\\\sqrt{\\\\phi \\\\sqrt{5}}-\\\\phi\\\\Bigr) e^{\\\\frac25 \\\\pi}} = 1+\\\\frac{e^{-2\\\\pi}} {1+\\\\frac{e^{-4\\\\pi}} {1+\\\\frac{e^{-6\\\\pi}} {1+\\\\frac{e^{-8\\\\pi}} {1+\\\\cdots} } } }\"}},{\"insert\":\" \\n\"},{\"insert\":{\"formula\":\"\\\\displaystyle \\\\left( \\\\sum_{k=1}^n a_k b_k \\\\right)^2 \\\\leq \\\\left( \\\\sum_{k=1}^n a_k^2 \\\\right) \\\\left( \\\\sum_{k=1}^n b_k^2 \\\\right)\"}},{\"insert\":\" \\n\"},{\"insert\":{\"formula\":\"\\\\displaystyle {1 +  \\\\frac{q^2}{(1-q)}+\\\\frac{q^6}{(1-q)(1-q^2)}+\\\\cdots }= \\\\prod_{j=0}^{\\\\infty}\\\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \\\\quad\\\\quad \\\\text{for }\\\\lvert q\\\\rvert<1.\"}},{\"insert\":\" \\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"~~~~ 􀇼\"},{\"attributes\":{\"align\":\"right\",\"direction\":\"rtl\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\"}]}"
        ));
      }
      // console.log('++++ tyin, package_quill_create, JSON.stringify(tyin_package_quill.tyin_package_quill.getContents()):',JSON.stringify(tyin_package_quill.tyin_package_quill.getContents()));
    },
    _tyin_package_quill(readOnly,mode){
      this.clear();
      this.package_quill_create(readOnly,mode);
    }
  };
  tyin.debug(()=>{
    tyin.runObject(tyin_test,'_');
  });
// #after