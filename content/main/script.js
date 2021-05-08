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
  document.fonts.add(new FontFace('New York_','url(/content/module/tyin/content/asset/font/apple/NewYork.woff2)'));
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
  if(location.hostname==='localhost'){
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
        console.log('++++ tyin:',tyin);
        globalThis.tyin=tyin;
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
      _listenDOM_URI(){
        tyin.listenDOM('add',()=>{},'URI');
        tyin.setURI('push',location.pathname);
        tyin.setURI('replace',location.pathname);
        tyin.listenDOM('remove',()=>{},'URI');
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
      async package_quill_create(){
        //
        // globalThis.editor_full=await tyin.package_quill_create(document.body,undefined,'full','在此输入内容');
        // globalThis.editor_snow=await tyin.package_quill_create(document.body,undefined,'snow','在此输入内容');
        // globalThis.editor_buble=await tyin.package_quill_create(document.body,undefined,'bubble','在此输入内容');
        globalThis.editor_default=await tyin.package_quill_create(document.body,undefined,undefined,'在此输入内容',JSON.parse(`{\"ops\":[{\"attributes\":{\"underline\":true},\"insert\":\"H1下划\"},{\"attributes\":{\"header\":1},\"insert\":\"\\n\"},{\"attributes\":{\"strike\":true},\"insert\":\"H2删除\"},{\"attributes\":{\"header\":2},\"insert\":\"\\n\"},{\"insert\":\"基线\"},{\"attributes\":{\"script\":\"sub\"},\"insert\":\"下标\"},{\"attributes\":{\"script\":\"super\"},\"insert\":\"上标\"},{\"insert\":\"\\n引用\"},{\"attributes\":{\"blockquote\":true},\"insert\":\"\\n\"},{\"insert\":{\"formula\":\"E=mc^2\"}},{\"insert\":\"\\n\"},{\"attributes\":{\"link\":\"//seabye.com\"},\"insert\":\"seabye.com\"},{\"insert\":\"\\n比如\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"二层\"},{\"attributes\":{\"indent\":1,\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"三层\"},{\"attributes\":{\"indent\":2,\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"比如\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"二层\"},{\"attributes\":{\"indent\":1,\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"三层\"},{\"attributes\":{\"indent\":2,\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"// 注释\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"const zifuchuan='abc';﻿\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":{\"image\":\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCABOAEMDAREAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAgUBBv/EADoQAAIBAwMBBQUGAgsAAAAAAAECAwAEEQUSITETQVFxgSJhobHBFBUjQpHwMmIkMzVDUmNyssLR4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD0M00cEZklcIg6k0GW11c6gzJah44gcbxwT693pk+VBeHRYEbfM7SMeT3Z9evxoOyDTYSIxBHI46Ike9v350AZbaS4jIkjjsrYD2sAF2H/ABoLqq2k9rLAhjgf8FlPH+lv340GvQdoJQZeuxq+mvuztVlZsHuyM0F49LSNFRLm6CAYAEpAFB37rtz/AFhll90krEfpmgahgjhXbFGsa+CjFAvPal37QPl88GTkJ5DxoKNbR3GnvEkjNuyRIxyd3j+vhQF06drmzjkcYfGHH8w4NA5QSgV1KPtbC4Txjb5UFrR+0tIX/wASA/CgYoJQcoKrkZzjHdQI239H1KeDokwEyefRvofWg0aCUFWAYFT0NAjo7E6dGp6xkxn0OKBt3WNSzsFUdSTgCgDFqFpLII4riN3PQK2aBqglBlavKkCpdIy9tbHdtJ5Kngj9+FBoW06XFvHMhyrrkUBqCUGPpt7DHNewu+0rOxGfA/8AuaA13cWlzbSRfaEyw4xzg91Bj/eU89y0Fw2xCm+MBMFHHI+IoND76jEaDC9sQNw3Z57+FyaDvaahdDCRSKD+Zz2Sj0GWoLJpAlj23crMOuyIbF/7PrQc0mVoJX0yY/iQcxnGN6UGvQQ8UGFZaYlyGvWlmiad2crG+MgnigZh060mMiuly2xtuZJW58uelAvfaJAsaS2kAMkTbihJO8eHNA/YPayQ77VEQdGVVwVPgRQGt7hLiMvGSQCV5GORQHoMbWw9rPb6jEu4xHY48VP7+NAymqWToGeSNGPVX6jzoCapL2OnzuDg7CB5ngfOgNbRCC2jiH5FC0BcUADdW4baZ492cY3jNAC4sA0v2i3cwXHe4GQ3uI76Cq3VzDxdWzH/ADIfbB9OooJJq1mkZYyPwP4ShBP6igwNR1u41ENbQRbY24wBlmoAJpN9foLkJvD/AJtw5xx9KD0eqyLJPa2eQWkmBZf5Rz9KBy4uYrZA0rYycAAZJPuFAnPqFxEFb7H/ABnCK0gDt6AGguIb2Q7ytrB34KFz6nIoCFdRXpJbSe4oy/U0Ehu90ghmjMM2MhTyG8j30DmBQCSCKNi0caIzdSFwTQean1Z9OuJrVM7UkbHqSfrQPqsg1KMtAxliSSU4I9snjj5c0DsMItlNzdSKZiPacn2UHgPAUCtxewm4juIbiElVKYkJA5I5BA91BY6uRyGsmHgLnB+K0DFlqMd3hQjxuRkK4xuHiPGgNdW63ERUkhhyrDqp7iKAdlO0qNHLgTRHbIB49x8iKB2g8jrVpv1WdvEj5Cg3x/bp91sP91BR8XV+0cgzHb7TtPRmboT5UGjgAdKDhjU9VU+lAlqMeLczLgSQfiKfIcjyI4oG423orYxuANAnc/gXsE6/3jdi48c8g+h+ZoNCgVkA7Q8UH//Z\"}},{\"insert\":\"\\n\"}]}`),undefined,'75%','75%');
        // globalThis.editor_custom=await tyin.package_quill_create(document.body,undefined,['clean'],'在此输入内容');
        //
        console.log('editor_default.tyin_package_quill.getContents()',editor_default.tyin_package_quill.getContents());
      }
    },'_');
  });
// #after