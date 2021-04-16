'use strict';
// #before
  // console
  window.console.log('#### start: script.js');
// #import
  // machineTool
  import{machineTool}from'/content/package/machineTool/machineTool.js';
  // Google Analytics
  machineTool.elementCreate('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},window.document.head);
  machineTool.elementCreate('script',undefined,window.document.head,undefined,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #variable
// #block
// #build
  // font
  window.document.fonts.add(new window.FontFace('New York_','url(/content/resource/font/apple/NewYork.woff2)'));
  // element
  machineTool.loop(()=>{
    for(const value of window.document.documentElement.children){
      if(value.localName==='body'){
        window.document.body.insertAdjacentHTML('beforeend',`
          <div style="perspective: 100vw;">
            <div style="font-size: calc(100vmax/25); transform: rotateX(-15deg); text-align: center; perspective: 61.8vw;">
              <div style="transform: rotateY(-60deg);">
                <a href="//seabye.com">seabye.com</a>
                <span style="font-size: 38.2%;">🔴 10%</span>
                <div style="font-size: 61.8%; color: var(--ic_ve_color_black2);">
                  <div>
                    <span>GUIInitial</span>
                    <a href="//seabye.com/content/package/GUIInitial/GUIInitial.js">.js</a>
                    <a href="//seabye.com/content/package/GUIInitial/GUIInitial.css">.css</a>
                    <span style="font-size: 38.2%;">🟢 90%</span>
                  </div>
                  <div>
                    <span>machineTool</span>
                    <a href="//seabye.com/content/package/machineTool/machineTool.js">.js</a>
                    <a href="//seabye.com/content/package/machineTool/machineTool.css">.css</a>
                    <span style="font-size: 38.2%;">🟡 50%</span>
                  </div>
                </div>
              </div>
              <div style="font-size: 61.8%; color: var(--ic_ve_color_black4); transform: rotateY(-45deg);">
                <a href="//github.com/seabye">github.com/seabye</a>
              </div>
              <div style="color: var(--ic_ve_color_black6); transform: rotateY(-30deg);">
                <a href="//w3daze.com">w3daze.com</a>
                <span style="font-size: 38.2%;">🔴 10%</span>
              </div>
              <div style="color: var(--ic_ve_color_black7); transform: rotateY(-15deg)rotateY(180deg);">
                <a>planC</a>
                <span style="font-size: 38.2%;">🟡 50%</span>
              </div>
              <div style="font-size: 138.2%; color: rgba(255,0,0,0.1875);">Hello, World!</div>
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
  if(window.location.hostname==='localhost'){
    // ic_dg
    window.document.documentElement.classList.add('ic_dg');
    // debug
    window.document.documentElement.classList.add('debug');
  }
  // window.machineTool
  machineTool.debug(()=>{
    window.machineTool=machineTool;
    window.console.log('++++ window.machineTool:',window.machineTool);
  });
  // machineTool test
  machineTool.debug(()=>{
    machineTool.runObject({
      async _loop(){
        window.console.log('++++ loop: start');
        let result=await machineTool.loop(()=>{
          return machineTool.fetch('https://iptv-org.github.io/iptv/channels.nosj','GET',undefined,undefined,undefined,'json',(data)=>{
            window.console.log('++++ loop, response data:',data);
          });
        },500,3,()=>{
          return machineTool.fetch('https://iptv-org.github.io/iptv/channels.json','GET',undefined,undefined,undefined,'json',(data)=>{
            window.console.log('++++ loop, response data:',data);
            return new window.Promise((resolve)=>{
              window.setTimeout(()=>{
                resolve('Ok');
              },1000);
            });
          });
        });
        window.console.log('++++ loop, result:',result);
        window.console.log('++++ loop: end');
      },
      _listenDOM_observe_resize(){
        machineTool.listenDOM('add',window.document.body,'observe_resize',(data)=>{
          window.console.log('++++ listenDOM, observe_resize, data:',data);
        });
      },
      _listenDOM_URI(){
        machineTool.listenDOM('add',()=>{},'URI');
        machineTool.setURI('push',window.location.pathname);
        machineTool.setURI('replace',window.location.pathname);
        machineTool.listenDOM('remove',()=>{},'URI');
      },
      _elementCreate(){},
      _elementState(){},
      async _elementBlock(){
        const block=machineTool.elementBlock(window.document.body,'block');
        await block.add(machineTool.elementCreate(undefined,{class:'b_1'},undefined,undefined,'1'),1);
        await block.add(machineTool.elementCreate(undefined,{class:'b_2'},undefined,undefined,'2'),2);
        await block.add(machineTool.elementCreate(undefined,{class:'b_3'},undefined,undefined,'3'),3);
        await block.hide();
        await block.remove();
        window.console.log('++++ elementBlock, get 3 machineTool_elementBlock_prev:',block.get(3).machineTool_elementBlock_prev);
        block.set(machineTool.elementCreate(undefined,undefined,undefined,undefined,'3Plus'),3);
        await block.add(machineTool.elementCreate(undefined,{class:'b_4'},undefined,undefined,'4'));
        await block.back();
      },
      _doubleKeyContentCountSave(){},
      UUID36ToBLOb22(){
        window.console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, UUID36ToBLOb22:',machineTool.UUID36ToBLOb22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
      },
      BLOb22ToUUID36(){
        window.console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, BLOb22ToUUID36:',machineTool.BLOb22ToUUID36('jvZe6aA5S_Kks2h_zB88ww'));
      },
      stringToBase64URISafeNoPad(){
        window.console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, stringToBase64URISafeNoPad:',machineTool.stringToBase64URISafeNoPad('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
      },
      base64URISafeNoPadToString(){
        window.console.log('++++ 8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3 jvZe6aA5S_Kks2h_zB88ww, base64URISafeNoPadToString:',machineTool.base64URISafeNoPadToString('jvZe6aA5S_Kks2h_zB88ww'));
      }
    },'_');
  });
// #after
  // console
  window.console.log('#### end: script.js');