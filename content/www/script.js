'use strict';
// #before
  // console
  console.log('#### start: script.js');
// #import
  // machineTool
  import{machineTool}from'/content/package/machineTool/machineTool.js';
  // Google Analytics
  machineTool.elementCreate('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},document.head);
  machineTool.elementCreate('script',undefined,document.head,undefined,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #variable
// #block
// #build
  // font
  document.fonts.add(new FontFace('New York_','url(/content/resource/font/apple/NewYork.woff2)'));
  // element
  machineTool.loop(()=>{
    for(const value of document.documentElement.children){
      if(value.localName==='body'){
        document.body.insertAdjacentHTML('beforeend',`
          <div style="background-color: #1F2023BF; perspective: 100vw;">
            <div style="font-size: calc(100vmax/25); background-color: #1F2023BF; transform: rotateX(-15deg); text-align: center; perspective: 61.8vw;">
              <div style="transform: rotateY(-60deg);">
                <a href="//seabye.com">seabye.com</a>
                <span style="font-size: 38.2%; color: #E2378A;">꩜ 10%</span>
                <div style="font-size: 61.8%;">
                  <div>
                    <span>GUIInitial</span>
                    <a href="/content/package/GUIInitial/GUIInitial.js">.js</a>
                    <a href="/content/package/GUIInitial/GUIInitial.css">.css</a>
                    <span style="font-size: 38.2%; color: #64A963;">꩜ 90%</span>
                  </div>
                  <div>
                    <span>machineTool</span>
                    <a href="/content/package/machineTool/machineTool.js">.js</a>
                    <a href="/content/package/machineTool/machineTool.css">.css</a>
                    <span style="font-size: 38.2%; color: #DEA615;">꩜ 50%</span>
                  </div>
                  <div>
                    <span>machine_tool_rust</span>
                    <span style="font-size: 38.2%; color: #E2378A;">꩜ 10%</span>
                  </div>
                  <div>
                    <span>machine_tool_pg_rust</span>
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
  if(location.hostname==='localhost'){
    // ic_dg
    document.documentElement.classList.add('ic_dg');
    // debug
    document.documentElement.classList.add('debug');
  }
  // machineTool
  machineTool.debug(()=>{
    console.log('++++ machineTool:',machineTool);
    globalThis.machineTool=machineTool;
  });
  // machineTool test
  machineTool.debug(()=>{
    machineTool.runObject({
      async _loop(){
        console.log('++++ loop: start');
        let result=await machineTool.loop(()=>{
          return machineTool.fetch('https://iptv-org.github.io/iptv/channels.nosj','GET',undefined,undefined,undefined,'json',(data)=>{
            console.log('++++ loop, response data:',data);
          });
        },500,3,()=>{
          return machineTool.fetch('https://iptv-org.github.io/iptv/channels.json','GET',undefined,undefined,undefined,'json',(data)=>{
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
        machineTool.listenDOM('add',document.body,'observe_resize',(data)=>{
          console.log('++++ listenDOM, observe_resize, data:',data);
        });
      },
      _listenDOM_URI(){
        machineTool.listenDOM('add',()=>{},'URI');
        machineTool.setURI('push',location.pathname);
        machineTool.setURI('replace',location.pathname);
        machineTool.listenDOM('remove',()=>{},'URI');
      },
      _elementCreate(){},
      _elementState(){},
      async _elementBlock(){
        const block=machineTool.elementBlock(document.body,'block');
        await block.add(machineTool.elementCreate(undefined,{class:'b_1'},undefined,undefined,'1'),1);
        await block.add(machineTool.elementCreate(undefined,{class:'b_2'},undefined,undefined,'2'),2);
        await block.add(machineTool.elementCreate(undefined,{class:'b_3'},undefined,undefined,'3'),3);
        await block.hide();
        await block.remove();
        console.log('++++ elementBlock, get 3 machineTool_elementBlock_prev:',block.get(3).machineTool_elementBlock_prev);
        block.set(machineTool.elementCreate(undefined,undefined,undefined,undefined,'3Plus'),3);
        await block.add(machineTool.elementCreate(undefined,{class:'b_4'},undefined,undefined,'4'));
        await block.back();
      },
      _doubleKeyContentCountSave(){},
      UUID36ToBLOb22(){
        console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, UUID36ToBLOb22:',machineTool.UUID36ToBLOb22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
      },
      BLOb22ToUUID36(){
        console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, BLOb22ToUUID36:',machineTool.BLOb22ToUUID36('jvZe6aA5S_Kks2h_zB88ww'));
      },
      webAssembly(){
        console.log('++++ machineTool webAssembly rust module, test():',machineTool.test());
        console.log('++++ machineTool webAssembly rust module, test._isWebAssembly_:',machineTool.test._isWebAssembly_);
        console.log('++++ machineTool webAssembly rust module, test._webAssemblyType_:',machineTool.test._webAssemblyType_);
        // console.log('++++ machineTool webAssembly c module, test():',machineTool.test());
        // console.log('++++ machineTool webAssembly c module, test._isWebAssembly_:',machineTool.test._isWebAssembly_);
        // console.log('++++ machineTool webAssembly c module, test._webAssemblyType_:',machineTool.test._webAssemblyType_);
      },
      file_(){
        machineTool.elementCreate('input',{type:'file',multiple:'',accept:'image/*'},document.body,undefined,undefined,(input)=>{
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
              // dataURL ~ base64
              const dataURL=new FileReader();
              dataURL.readAsDataURL(BLObFile);
              dataURL.addEventListener('load',function(){
                console.log(this.result);
              });
                // objectURL
                machineTool.elementCreate('img',{src:objectURL},document.body,undefined,undefined,(element)=>{
                  element.addEventListener('load',()=>{
                    URL.revokeObjectURL(objectURL);
                  });
                });
                // arrayBuffer ~ objectURL
                arrayBuffer.addEventListener('load',function(){
                  const objectURL=URL.createObjectURL(new Blob([this.result],{type:BLObFile.type}));
                  machineTool.elementCreate('img',{src:objectURL},document.body,undefined,undefined,(element)=>{
                    element.addEventListener('load',()=>{
                      URL.revokeObjectURL(objectURL);
                    });
                  });
                });
                // dataURL
                dataURL.addEventListener('load',function(){
                  machineTool.elementCreate('img',{src:this.result},document.body);
                });
            }
          });
        });
      },
      file(){
        machineTool.file();
      }
    },'_');
  });
// #after
  // console
  console.log('#### end: script.js');