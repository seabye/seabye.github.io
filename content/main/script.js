'use strict';
// #before
// #import
  // tyin
  import{tyin}from'/content/module/tyin/content/main/tyin.js';
  // Google Analytics
  tyin.elementCreate('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},document.head);
  tyin.elementCreate('script',undefined,document.head,undefined,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #variable
// #block
// #build
  // font
  tyin.loadFont('SF Pro Text_','/content/module/tyin/content/asset/font/SFPro/SF-Pro-Text-Regular_400.woff2',{weight:'normal'});
  tyin.loadFont('New York_','/content/module/tyin/content/asset/font/newYork/NewYork.woff2');
  // tyin.loadFont('PingFang SC_','/content/module/tyin/content/asset/font/pingFang/PingFang_2_400.woff2',{weight:'normal'});
  // element
  tyin.loop(()=>{
    for(const value of document.documentElement.children){
      if(value.localName==='body'){
        document.body.insertAdjacentHTML('beforeend',`
          <div class="seabye" style="background-color: #1F2023BF; perspective: 100vw;">
            <div style="font-size: calc(100vmax/25); background-color: #1F2023BF; transform: rotateX(-15deg); text-align: center; perspective: 61.8vw;">
              <div style="transform: rotateY(-60deg);">
                <a href="//seabye.com">seabye.com</a>
                <span style="font-size: 38.2%; color: #E2378A;">꩜ 10%</span>
                <div style="font-size: 61.8%;">
                  <div>
                    <span>lyin</span>
                    <a href="/content/module/lyin/lyin.js">.js</a>
                    <a href="/content/module/lyin/lyin.css">.css</a>
                    <span style="font-size: 38.2%; color: #64A963;">꩜ 90%</span>
                  </div>
                  <div>
                    <span>tyin</span>
                    <a href="/content/module/tyin/content/main/tyin.js">.js</a>
                    <a href="/content/module/tyin/content/main/tyin.css">.css</a>
                    <span style="font-size: 38.2%; color: #DEA615;">꩜ 50%</span>
                  </div>
                  <div>
                    <span>tyin_rust</span>
                    <span style="font-size: 38.2%; color: #E2378A;">꩜ 10%</span>
                  </div>
                  <div>
                    <span>tyin_pg_rust</span>
                    <span style="font-size: 38.2%; color: #E2378A;">꩜ 10%</span>
                  </div>
                </div>
              </div>
              <div style="font-size: 61.8%; transform: rotateY(-45deg);">
                <a href="//github.com/seabye">github.com/seabye</a>
              </div>
              <div style="transform: rotateY(-30deg);">
                <a href="//w3daze.com">w3daze.com</a>
                <span style="font-size: 38.2%; color: #E2378A;">꩜ 10%</span>
              </div>
              <div style="transform: rotateY(-15deg)rotateY(180deg);">
                <span>planC</span>
                <span style="font-size: 38.2%; color: #DEA615;">꩜ 50%</span>
              </div>
              <div style="font-size: 138.2%; color: #707C74;">Hello, World!</div>
              <div style="transform: rotateY(30deg);">
                <a href="//luojia.me">luojia.me</a>
              </div>
              <div style="transform: rotateY(45deg);">
                <a href="//pasi.cat">pasi.cat</a>
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
  // debug
  if(location.hostname.match(/localhost|192\.168/)){
    // ic_dg
    document.documentElement.classList.add('ic_dg');
    // debug
    document.documentElement.classList.add('debug');
  }
  // tyin
  tyin.debug(()=>{
    console.log('++++ tyin:',tyin);
    globalThis.tyin=tyin;
  });
  // tyin test
  tyin.debug(()=>{
    tyin.runObject({
      clear(){
        document.documentElement.classList.remove('ic_dg','debug');
        document.body.innerHTML='';
      },
      async _loop(){
        console.log('++++ loop: start');
        let result=await tyin.loop(()=>{
          return tyin.fetch('https://iptv-org.github.io/iptv/channels.nosj','GET',undefined,undefined,undefined,'json',(data)=>{
            console.log('++++ loop, response data:',data);
          });
        },500,3,()=>{
          return tyin.fetch('https://iptv-org.github.io/iptv/channels.json','GET',undefined,undefined,undefined,'json',(data)=>{
            console.log('++++ loop, response data:',data);
            return new Promise((resolve)=>{
              setTimeout(()=>{
                resolve('Ok');
              },1000);
            });
          });
        });
        console.log('++++ loop, result:',result);
        console.log('++++ loop: end');
      },
      _listenDOM_observe_resize(){
        tyin.listenDOM('add',document.body,'observe_resize',(data)=>{
          console.log('++++ listenDOM, observe_resize, data:',data);
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
        console.log('++++ elementBlock, get 3 tyin_elementBlock_prev:',block.get(3).tyin_elementBlock_prev);
        block.set(tyin.elementCreate(undefined,undefined,undefined,undefined,'3Plus'),3);
        await block.add(tyin.elementCreate(undefined,{class:'b_4'},undefined,undefined,'4'));
        await block.back();
      },
      _doubleKeyContentCountSave(){},
      UUID36ToBLOb22(){
        console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, UUID36ToBLOb22:',tyin.UUID36ToBLOb22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
      },
      BLOb22ToUUID36(){
        console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, BLOb22ToUUID36:',tyin.BLOb22ToUUID36('jvZe6aA5S_Kks2h_zB88ww'));
      },
      _webAssembly(){
        console.log('++++ tyin webAssembly rust module, test():',tyin.test());
        console.log('++++ tyin webAssembly rust module, test._isWebAssembly_:',tyin.test._isWebAssembly_);
        // console.log('++++ tyin webAssembly c module, test():',tyin.test());
        // console.log('++++ tyin webAssembly c module, test._isWebAssembly_:',tyin.test._isWebAssembly_);
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
        console.log('++++ tyin_miniEditor.tyin_miniEditor_getContent():',tyin_miniEditor.tyin_miniEditor_getContent());
      },
      async package_quill_create(){
        // globalThis.tyin_quill=await tyin.package_quill_create(document.body,undefined,'full','在此输入内容','<a href="https://seabye.com">https://seabye.com</a>',false,'100%','100%');
        // globalThis.tyin_quill=await tyin.package_quill_create(document.body,undefined,'snow','在此输入内容','<a href="https://seabye.com">https://seabye.com</a>',false,'100%','100%');
        // globalThis.tyin_quill=await tyin.package_quill_create(document.body,undefined,'bubble','在此输入内容','<a href="https://seabye.com">https://seabye.com</a>',false,'100%','100%');
        // globalThis.tyin_quill=await tyin.package_quill_create(document.body,undefined,undefined,'在此输入内容','<a href="https://seabye.com">https://seabye.com</a>',false,'100%','100%');
        globalThis.tyin_quill=await tyin.package_quill_create(document.body,undefined,[
          ['underline','strike','link','image']
        ],'在此输入内容','<a href="https://seabye.com">https://seabye.com</a><br><br>',false,'100%','100%');
        console.log('++++ tyin_quill.tyin_package_quill.getContents():',JSON.stringify(tyin_quill.tyin_package_quill.getContents()));
      }
    },'_');
  });
// #after