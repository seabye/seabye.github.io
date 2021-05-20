'use strict';
/* <<<< <<<< <<<< <<<<
  tyin
  tyin.js
==== ==== ==== ====
  script.js
~~~~ ~~~~ ~~~~ ~~~~
  import{tyin}from'tyin.js';
>>>> >>>> >>>> >>>> */
// #before
// #import
// #variable
// #block
  // tyin 💠 🔴 🟡 🟢
  export const tyin={
    // 💠 base
      /*🟢*/throttle(callback,wait=1000/24,first=false){
        let timeOut=null;
        return function(...arg){
          const set=()=>{
            timeOut=setTimeout(()=>{
              timeOut=null;
              callback.apply(this,arg);
            },wait);
          };
          if(first){
            first=false;
            callback.apply(this,arg);
            set();
          }else{
            if(!timeOut){
              set();
            }
          }
        };
      },
      /*🟢*/debounce(callback,wait=1000/24,first=false){
        let timeOut=null;
        return function(...arg){
          const set=()=>{
            timeOut=setTimeout(()=>{
              callback.apply(this,arg);
            },wait);
          };
          if(first){
            first=false;
            callback.apply(this,arg);
            set();
          }else{
            clearTimeout(timeOut);
            set();
          }
        };
      },
      /*🟢*/async loop(condition,wait=1000/24,count,countZeroCallback){
        const result=await condition();
        this.debug(()=>{
          console.log('#### loop, condition() result:',result);
        });
        if(result){
          return result;
        }else{
          this.debug(()=>{
            if(count){
              console.log('#### loop, false, count:',count);
            }
          });
          const loop=()=>{
            return new Promise((resolve)=>{
              setTimeout(()=>{
                resolve(this.loop(condition,wait,count,countZeroCallback));
              },wait);
            });
          };
          if(typeof count==='number'){
            count-=1;
            if(count){
              return loop();
            }else{
              if(countZeroCallback){
                this.debug(()=>{
                  console.log('#### loop, false, countZeroCallback()');
                });
                return countZeroCallback();
              }
            }
          }else{
            return loop();
          }
        }
      },
      /*🟢*/timeOut(callback,wait=1000/24){
        return new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(callback());
          },wait);
        });
      },
      /*🟡*/observeFunction(originFunction,eventType,eventOption={},whoListen,dataPlus=()=>{}){
        const insertEvent=new CustomEvent(eventType,eventOption);
        return function(...arg){
          insertEvent._arg_=arg;
          insertEvent[eventType]=dataPlus.apply(this,arg);
          whoListen.dispatchEvent(insertEvent);
          return originFunction.apply(this,arg);
        };
      },
      /*🟢*/for(data,callback,conditionDepth,type='auto'){
        switch(type){
          case'auto':
            {
              const run=(data,depth)=>{
                let next=[];
                switch(Object.prototype.toString.call(data)){
                  case'[object Array]':
                    {
                      for(let key=0,length=data.length;key<length;key++){
                        if(typeof conditionDepth==='number'){
                          if(conditionDepth===depth){
                            callback(key,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Array]'?'array':Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                          }
                        }else{
                          callback(key,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Array]'?'array':Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                        }
                        if(Object.prototype.toString.call(data[key])==='[object Array]'||Object.prototype.toString.call(data[key])==='[object Object]'){
                          next.push(data[key]);
                        }
                      }
                    }
                    break;
                  case'[object Object]':
                    {
                      let count=0;
                      for(const key in data){
                        if(typeof conditionDepth==='number'){
                          if(conditionDepth===depth){
                            callback(count,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Object]'?'object':Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                            count+=1;
                          }
                        }else{
                          callback(count,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Object]'?'object':Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                          count+=1;
                        }
                        if(Object.prototype.toString.call(data[key])==='[object Object]'||Object.prototype.toString.call(data[key])==='[object Array]'){
                          next.push(data[key]);
                        }
                      }
                    }
                    break;
                  default:
                    break;
                }
                if(next.length){
                  for(let key=0,length=next.length;key<length;key++){
                    run(next[key],depth+1);
                  }
                }
              };
              run(data,0);
            }
            break;
          case'array':
            {
              const run=(data,depth)=>{
                let next=[];
                for(let key=0,length=data.length;key<length;key++){
                  if(typeof conditionDepth==='number'){
                    if(conditionDepth===depth){
                      callback(key,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                    }
                  }else{
                    callback(key,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                  }
                  if(Object.prototype.toString.call(data[key])==='[object Array]'){
                    next.push(data[key]);
                  }
                }
                if(next.length){
                  for(let key=0,length=next.length;key<length;key++){
                    run(next[key],depth+1);
                  }
                }
              };
              run(data,0);
            }
            break;
          case'object':
            {
              const run=(data,depth)=>{
                let next=[];
                let count=0;
                for(const key in data){
                  if(typeof conditionDepth==='number'){
                    if(conditionDepth===depth){
                      callback(count,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                      count+=1;
                    }
                  }else{
                    callback(count,key,data[key],depth,Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                    count+=1;
                  }
                  if(Object.prototype.toString.call(data[key])==='[object Object]'){
                    next.push(data[key]);
                  }
                }
                if(next.length){
                  for(let key=0,length=next.length;key<length;key++){
                    run(next[key],depth+1);
                  }
                }
              };
              run(data,0);
            }
            break;
          default:
            break;
        }
      },
      /*🟢*/runObject(object,excludePrefix){
        if(excludePrefix){
          let RE=new RegExp(`^${excludePrefix}`);
          for(const key in object){
            if(!key.match(RE)){
              object[key]();
            }
          }
        }else{
          for(const key in object){
            object[key]();
          }
        }
      },
      /*🔴*/worker(type){
        switch(type){
          case'dedicated':
            {}
            break;
          case'shared':
            {}
            break;
          case'service':
            {}
            break;
          default:
            break;
        }
      },
      /*🔴*/doubleKeyContentCountSave(){
        if(!this.doubleKeyContentCountSave.template){
          this.doubleKeyContentCountSave.template=class template{
            constructor(){
              this.data=[];
            }
            add(keyOne,keyTwo,content,count){
              this.data.push({
                keyOne:typeof keyOne==='string'?tyin.hashCode(keyOne,true):keyOne,
                keyTwo:typeof keyTwo==='string'?tyin.hashCode(keyTwo,true):keyTwo,
                content:content,
                count:count?count:0
              });
            }
            remove(keyOne,keyTwo){}
            get(keyOne,keyTwo){}
            set(keyOne,keyTwo){}
          }
        }
        return new this.doubleKeyContentCountSave.template();
      },
      /*🔴*/taskTransfer(){},
      /*🟢*/notMatchRE(RE){
        return new RegExp(`^((?!${RE.toString().replace(RE.toString().split('/')[RE.toString().split('/').length-1],'').replace(/^\//,'').replace(/\/$/,'')}).)*$`,RE.toString().split('/')[RE.toString().split('/').length-1]);
      },
      /*🟢*/random(){
        return parseInt(Math.random().toString().replace(/^0\./,''));
      },
      /*🟢*/hashCode(string,abs=false){
        let result;
        for(let key=0,length=string.length;key<length;key++){
          result=Math.imul(31,result)+string.charCodeAt(key)|0;
        }
        if(abs){
          result=Math.abs(result);
        }
        return result;
      },
      /*🟢*/URLObject(data=location&&(location.search||location.hash)?`${location.search}${location.hash}`:''){
        const result={
          search:{},
          hash:{}
        };
        if(data.match(/^\?/)){
          this.for(data.split('#')[0].replace(/^\?/,'').split('&'),(...data)=>{
            const right=data[2].split('=')[1];
            result.search[data[2].split('=')[0]]=right?right:'';
          },0);
        }
        if(data.match(/\#/)){
          this.for(data.split('#')[1].split('&'),(...data)=>{
            const right=data[2].split('=')[1];
            result.hash[data[2].split('=')[0]]=right?right:'';
          },0);
        }
        return result;
      },
      /*🟢*/isBot(type='user-agent',data=navigator&&navigator.userAgent?navigator.userAgent:''){
        switch(type){
          case'user-agent':
            {
              return (/bot|spider/i).test(data);
            }
            break;
          case'location':
            {}
            break;
          case'ip':
            {}
            break;
          default:
            break;
        }
      },
      /*🟢*/isPortrait(width,height,trueCallback,falseCallback){
        if(width<=height){
          if(trueCallback){
            trueCallback();
          }
          return true;
        }
        if(falseCallback){
          falseCallback();
        }
        return false;
      },
      /*🟢*/humanTime(millisecond,leadingZero=[false,true,true],unit=[':',':','']){
        const zero=(number)=>{
          return`${number<10?0:''}${number}`;
        };
        const hour=Math.floor(millisecond/(3600*1000));
        const minute=Math.floor(millisecond%(3600*1000)/(60*1000));
        const second=Math.floor(millisecond%(60*1000)/1000);
        return`${leadingZero[0]?zero(hour):hour}${unit[0]}${leadingZero[1]?zero(minute):minute}${unit[1]}${leadingZero[2]?zero(second):second}${unit[2]}`;
      },
      /*🟢*/percent(total,current,integer=true,unit='%'){
        if(integer){
          return`${(current/total*100).toFixed()}${unit}`;
        }
        return`${current/total*100}${unit}`;
      },
      /*🟢*/UUID(){
        const objectURL=URL.createObjectURL(new Blob([''],{type:'text/plain'}));
        const result=objectURL.match(/.+\/(.+)/).pop();
        URL.revokeObjectURL(objectURL);
        return result;
      },
      /*🟢*/UUID36ToBLOb22(UUID36){
        if(UUID36.length===36){
          const UUID32='0'+UUID36.replace(/-/g,'');
          if(UUID32.length===33){
            const char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
            let result='';
            for(let key=0;key<11;key++){
              const start=key*3;
              const str=parseInt(UUID32[start]+UUID32[start+1]+UUID32[start+2],16);
              result+=char[Math.floor(str/64)]+char[str%64];
            }
            return result;
          }
        }
      },
      /*🟢*/BLOb22ToUUID36(BLOb22){
        if(BLOb22.length===22){
          const getCharIndex=()=>{
            const char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
            let result={};
            for(let key=0,length=char.length;key<length;key++){
              const char0=char[key];
              result[char0]=key;
            }
            return result;
          };
          let charIndex=getCharIndex();
          let result='';
          for(let key=0;key<22;key+=2){
            let u=(charIndex[BLOb22[key]]*64+charIndex[BLOb22[key+1]]).toString(16).padStart(3,'0');
            if(key===0&&u[0]==='0'){
              u=u.substr(1);
            }
            result+=u;
          }
          return`${result.substr(0,8)}-${result.substr(8,4)}-${result.substr(12,4)}-${result.substr(16,4)}-${result.substr(20)}`;
        }
      },
      /*🟢*/import(src,callback){
        return import(src).then((module)=>{
          if(callback){
            return callback(module);
          }
          return module;
        }).catch((error)=>{
          console.log('#### import, catch:',error);
        });
      },
      /*🟢*/webAssembly(src,callback){
        return this.import(src,(module)=>{
          return module.default().then(()=>{
            if(callback){
              return callback(module);
            }
            return module;
          });
        }).catch((error)=>{
          console.log('#### webAssembly, catch:',error);
        });
      },
    // 💠 local data
      /*🔴*/
      file(listenElement,progressCallback,resultType='arrayBuffer'){
        // resultType<'BLObFile','objectURL','arrayBuffer','dataURL',undefined='arrayBuffer'>
        console.log('#### file, ???');
      },
      /*🔴*/fileSystem(){},
      /*🔴*/localStorage(){},
      /*🔴*/sessionStorage(){},
      /*🔴*/indexedDB(){},
      /*🔴*/cookie(){},
      /*🔴*/token(){},
      /*🔴*/cache(){},
      /*🔴*/SQLite(){},
      /*🔴*/postgreSQL(){},
      /*🔴*/mySQL(){},
      /*🔴*/redis(){},
      /*🔴*/mongoDB(){},
      /*🔴*/memcached(){},
      /*🟢*/async loadPackage_IDB(){
        if(!('idb'in globalThis)){
          // this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/IDB@6.1.0/build/iife/index-min.js')}`},document.head);
          this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/IDB@6.1.0/build/iife/with-async-ittr-min.js')}`},document.head);
        }
        return await this.loop(()=>{
          if('idb'in globalThis){
            return idb;
          }
          return false;
        });
      },
      /*🟢*/async loadPackage_IDBKeyVal(){
        if(!('idbKeyval'in globalThis)){
          // this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/IDBKeyVal@5.0.5/dist/iife/index-min.js')}`},document.head);
          this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/IDBKeyVal@5.0.5/dist/iife-compat/index-min.js')}`},document.head);
        }
        return await this.loop(()=>{
          if('idbKeyval'in globalThis){
            return idbKeyval;
          }
          return false;
        });
      },
    // 💠 network data
      /*🟢*/fetch(URL,method,data,dataPack,requestDataType,responseDataType,callback,optionPlus,optionHeadersPlus){
        const option={};
        option.method=method;
        if(dataPack!==undefined){
          option.body=JSON.stringify({info:dataPack,data:data});
        }else{
          switch(typeof body){
            case'object':
              {
                option.body=JSON.stringify(body);
              }
              break;
            case'string':
              {
                option.body=body;
              }
              break;
            default:
              break;
          }
        }
        if(optionPlus){
          this.for(optionPlus,(...data)=>{
            option[data[1]]=data[2];
          },0);
        }
        if(requestDataType){
          option.headers={
            'Content-Type':`${requestDataType}; charset=utf-8`
          };
        }
        if(optionHeadersPlus){
          if(!option.headers){
            option.headers={};
          }
          this.for(optionHeadersPlus,(...data)=>{
            option.headers[data[1]]=data[2];
          },0);
        }
        const result={};
        this.debug(()=>{
          console.log('#### fetch, request, URL:',URL);
          console.log('#### fetch, request, option:',option);
        });
        return fetch(URL,option).then((data)=>{
          result.status=data.status;
          if(responseDataType&&responseDataType.match(/arrayBuffer|blob|formData|json|text/i)){
            return data[responseDataType]();
          }
          return data;
        }).then((data)=>{
          result.result=data;
          this.debug(()=>{
            console.log('#### fetch, response, result:',result);
          });
          if(callback){
            return callback(result);
          }
          return result;
        }).catch((error)=>{
          console.log('#### fetch, response, catch:',error);
          if(!result.status){
            result.status=0;
          }
          if(!result.result){
            result.result=null;
          }
          if(callback){
            return callback(result);
          }
        });
      },
      /*🔴*/HTTP(){},
      /*🔴*/byteUpload(){},
      /*🔴*/byteDownload(){},
    // 💠 application programming interface
      /*🔴*/listenPort(){},
      /*🔴*/portReceive(URL,method,data,callback,data2){
        const result={
          URL:URL,
          method:method,
          data:data
        };
        if(data2){
          Object.assign(result,data2);
        }
        if(callback){
          return callback(result);
        }
        return result;
      },
      /*🔴*/portSend(){},
      /*🔴*/route(){},
      /*🔴*/extract(){},
      /*🔴*/middleware(){},
      /*🔴*/staticFile(){},
      /*🔴*/siteMapGenerator(){},
      /*🔴*/siteMapHTMLGenerator(){},
    // 💠 graphics
      /*🔴*/async loadPackage_openCV(){},
      /*🔴*/package_openCV_removeWatermark(){},
    // 💠 command line interface
      /*🔴*/cli(){},
    // 💠 graphical user interface
      /*🔴*/cliEmulator(){},
      /*🟡*/listenDOM(action,target,type,callback,option={},option2='',option3=''){
        switch(type){
          case'pointer_down':
            {
              switch(action){
                case'add':
                  {}
                  break;
                case'remove':
                  {}
                  break;
                default:
                  break;
              }
            }
            break;
          case'pointer_move':
            {
              switch(action){
                case'add':
                  {}
                  break;
                case'remove':
                  {}
                  break;
                default:
                  break;
              }
            }
            break;
          case'pointer_up':
            {
              const id=`id_${this.random()}`;
              const remove=()=>{
                target.removeEventListener('pointerdown',this.listenDOM.pointer_up_data[id]);
                this.listenDOM.pointer_up_data[id].count-=1;
                if(this.listenDOM.pointer_up_data[id].count===0){
                  delete this.listenDOM.pointer_up_data[id];
                  if(!Object.keys(this.listenDOM.pointer_up_data).length){
                    delete this.listenDOM.pointer_up_data;
                  }
                }
              };
              switch(action){
                case'add':
                  {
                    if(!this.listenDOM.pointer_up_data){
                      this.listenDOM.pointer_up_data={};
                    }
                    if(!this.listenDOM.pointer_up_data[id]){
                      this.listenDOM.pointer_up_data[id]=(data)=>{
                        const once_id=`once_${id}`;
                        data.target.parentNode.removeEventListener('pointerup',this.listenDOM.pointer_up_data[once_id]);
                        delete this.listenDOM.pointer_up_data[once_id];
                        const run=()=>{
                          const left=data.target.getBoundingClientRect().left;
                          const right=data.target.getBoundingClientRect().right;
                          const top=data.target.getBoundingClientRect().top;
                          const bottom=data.target.getBoundingClientRect().bottom;
                          this.listenDOM.pointer_up_data[once_id]=(event)=>{
                            if((event.target===data.target||event.target===data.target.parentNode)&&(event.clientX>=left&&event.clientX<=right&&event.clientY>=top&&event.clientY<=bottom)){
                              if(event.target.childElementCount){
                                let block=false;
                                for(const value of event.target.children){
                                  if(getComputedStyle(value).pointerEvents!=='none'&&getComputedStyle(value).visibility!=='hidden'){
                                    block=true;
                                    let intersect=false;
                                    for(const value of event.target.children){
                                      if((getComputedStyle(value).pointerEvents!=='none'&&getComputedStyle(value).visibility!=='hidden')&&(event.clientX>=value.getBoundingClientRect().left&&event.clientX<=value.getBoundingClientRect().right&&event.clientY>=value.getBoundingClientRect().top&&event.clientY<=value.getBoundingClientRect().bottom)){
                                        intersect=true;
                                        break;
                                      }
                                    }
                                    if(!intersect){
                                      callback(data);
                                      if(option.once){
                                        remove();
                                      }
                                    }
                                    break;
                                  }
                                }
                                if(!block){
                                  callback(data);
                                  if(option.once){
                                    remove();
                                  }
                                }
                              }else{
                                callback(data);
                                if(option.once){
                                  remove();
                                }
                              }
                            }
                          };
                          data.target.parentNode.addEventListener('pointerup',this.listenDOM.pointer_up_data[once_id],{once:true});
                          const remove=()=>{
                            removeEventListener('pointerup',remove);
                            removeEventListener('touchend',remove);
                            removeEventListener('dragend',remove);
                            if(data.target.parentNode){
                              data.target.parentNode.removeEventListener('pointerup',this.listenDOM.pointer_up_data[once_id]);
                            }
                          };
                          if(option3){
                            const move=(event)=>{
                              if(event.y>=data.y+6||event.y<=data.y-6){
                                removeEventListener('pointermove',move);
                                removeEventListener('touchmove',move);
                                remove();
                              }
                            };
                            addEventListener('pointermove',move);
                            addEventListener('touchmove',move);
                          }
                          addEventListener('pointerup',remove,{once:true});
                          addEventListener('touchend',remove,{once:true});
                          addEventListener('dragend',remove,{once:true});
                        };
                        if(typeof option2==='number'){
                          if(data.button===option2){
                            run();
                          }
                        }else{
                          run();
                        }
                        this.debug(()=>{
                          console.log('#### listenDOM, pointer_up, pointer_up_data length:',Object.keys(this.listenDOM.pointer_up_data).length);
                        });
                      };
                      this.listenDOM.pointer_up_data[id].count=0;
                    }
                    if(option.once){
                      target.addEventListener('pointerdown',this.listenDOM.pointer_up_data[id]);
                    }else{
                      target.addEventListener('pointerdown',this.listenDOM.pointer_up_data[id],option);
                    }
                    this.listenDOM.pointer_up_data[id].count+=1;
                  }
                  break;
                case'remove':
                  {
                    remove();
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          case'observe_mutation':
            {
              switch(action){
                case'add':
                  {
                    this.debug(()=>{
                      console.log('#### listenDOM, observe_mutation, add, target:',target);
                    });
                    target.tyin_listenDOM_observe_mutation=new MutationObserver((mutation_list)=>{
                      this.debug(()=>{
                        console.log('#### listenDOM, observe_mutation, mutation_list:',mutation_list);
                      });
                      mutation_list.forEach((mutation)=>{
                        switch(mutation.type){
                          case'childList':
                            {
                              callback(mutation);
                            }
                            break;
                          case'attributes':
                            {
                              callback(mutation);
                            }
                            break;
                          case'characterData':
                            {
                              callback(mutation);
                            }
                            break;
                          default:
                            break;
                        }
                      });
                    });
                    target.tyin_listenDOM_observe_mutation.observe(target,option);
                  }
                  break;
                case'remove':
                  {
                    this.debug(()=>{
                      console.log('#### listenDOM, observe_mutation, remove, target:',target);
                    });
                    target.tyin_listenDOM_observe_mutation.disconnect();
                    delete target.tyin_listenDOM_observe_mutation;
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          case'observe_intersection':
            {
              switch(action){
                case'add':
                  {
                    this.debug(()=>{
                      console.log('#### listenDOM, observe_intersection, add, target:',target);
                    });
                    target.tyin_listenDOM_observe_intersection=new IntersectionObserver((entries)=>{
                      this.debug(()=>{
                        console.log('#### listenDOM, observe_intersection, entries:',entries);
                      });
                      entries.forEach((entry)=>{
                        callback(entry);
                      });
                    },option);
                    target.tyin_listenDOM_observe_intersection.observe(target);
                  }
                  break;
                case'remove':
                  {
                    this.debug(()=>{
                      console.log('#### listenDOM, observe_intersection, remove, target:',target);
                    });
                    target.tyin_listenDOM_observe_intersection.disconnect();
                    delete target.tyin_listenDOM_observe_intersection;
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          case'observe_resize':
            {
              switch(action){
                case'add':
                  {
                    this.debug(()=>{
                      console.log('#### listenDOM, observe_resize, add, target:',target);
                    });
                    target.tyin_listenDOM_observe_resize=new ResizeObserver((entries)=>{
                      this.debug(()=>{
                        console.log('#### listenDOM, observe_resize, entries:',entries);
                      });
                      entries.forEach((entry)=>{
                        callback(entry);
                      });
                    });
                    target.tyin_listenDOM_observe_resize.observe(target);
                  }
                  break;
                case'remove':
                  {
                    this.debug(()=>{
                      console.log('#### listenDOM, observe_resize, remove, target:',target);
                    });
                    target.tyin_listenDOM_observe_resize.disconnect();
                    delete target.tyin_listenDOM_observe_resize;
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          case'URL':
            {
              if(!this.listenDOM.URL_template){
                this.listenDOM.URL_template=class template{
                  constructor(callback){
                    if(history.pushState.name){
                      history.pushState=tyin.observeFunction(history.pushState,'pushState',undefined,globalThis,(...arg)=>{
                        return arg[2];
                      });
                    }
                    if(history.replaceState.name){
                      history.replaceState=tyin.observeFunction(history.replaceState,'replaceState',undefined,globalThis,(...arg)=>{
                        return arg[2];
                      });
                    }
                    this.callback=callback;
                  }
                  _popstate=(data)=>{
                    tyin.debug(()=>{
                      console.log('#### listenDOM, URL, popstate:',data.type,tyin.URLPath());
                    });
                    this.callback({
                      type:data.type,
                      path:tyin.URLPath()
                    });
                  }
                  _pushState=(data)=>{
                    tyin.debug(()=>{
                      console.log('#### listenDOM, URL, pushState:',data.type,data.pushState.replace());
                    });
                    this.callback({
                      type:data.type,
                      path:data.pushState.replace()
                    });
                  }
                  _replaceState=(data)=>{
                    tyin.debug(()=>{
                      console.log('#### listenDOM, URL, replaceState:',data.type,data.replaceState.replace());
                    });
                    this.callback({
                      type:data.type,
                      path:data.replaceState.replace()
                    });
                  }
                  add(){
                    addEventListener('popstate',this._popstate);
                    addEventListener('pushState',this._pushState);
                    addEventListener('replaceState',this._replaceState);
                  }
                  remove(){
                    removeEventListener('popstate',this._popstate);
                    removeEventListener('pushState',this._pushState);
                    removeEventListener('replaceState',this._replaceState);
                  }
                }
              }
              const callback=target;
              const id=`id_${this.hashCode(callback.toString().replace(/[\r\n\s]/g,''),true)}`;
              if(!this.listenDOM.URL_data){
                this.listenDOM.URL_data={};
              }
              switch(action){
                case'add':
                  {
                    if(!this.listenDOM.URL_data[id]){
                      this.listenDOM.URL_data[id]=new this.listenDOM.URL_template(callback);
                      this.listenDOM.URL_data[id].add();
                      this.debug(()=>{
                        console.log('#### listenDOM, URL, add, listenDOM.URL_data:',this.listenDOM.URL_data);
                      });
                    }
                  }
                  break;
                case'remove':
                  {
                    if(this.listenDOM.URL_data[id]){
                      this.listenDOM.URL_data[id].remove();
                      delete this.listenDOM.URL_data[id];
                      if(!Object.keys(this.listenDOM.URL_data).length){
                        delete this.listenDOM.URL_data;
                      }
                      this.debug(()=>{
                        console.log('#### listenDOM, URL, remove, listenDOM.URL_data:',this.listenDOM.URL_data);
                      });
                    }
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          default:
            {
              switch(action){
                case'add':
                  {
                    target.addEventListener(type,callback,option);
                  }
                  break;
                case'remove':
                  {
                    target.removeEventListener(type,callback);
                  }
                  break;
                default:
                  break;
              }
            }
            break;
        }
      },
      /*🟢*/elementCreate(...arg){
        switch(typeof arg[0]){
          case'string':
            {
              // single mode
              //   tag<string,undefined='div'>,
              //   attribute<object=({key:'value'...}),undefined=false>,
              //   insertElement<element,undefined=false>,
              //   insertPosition<'beforebegin','afterbegin','beforeend','afterend',undefined='beforeend'>,
              //   content<string,element,undefined=false>,
              //   callback<function(element),undefined=false>
              let tag=arg[0];
              const attribute=arg[1];
              const insertElement=arg[2];
              let insertPosition=arg[3];
              const content=arg[4];
              const callback=arg[5];
              if(!tag){
                tag='div';
              }
              if(!insertPosition){
                insertPosition='beforeend';
              }
              const element=document.createElement(tag);
              if(attribute){
                for(const key in attribute){
                  element.setAttribute(key,attribute[key]);
                }
              }
              if(content){
                if(typeof content==='string'){
                  element.innerHTML=content;
                }else{
                  if(content instanceof HTMLElement){
                    element.insertAdjacentElement('beforeend',content);
                  }
                }
              }
              if(insertElement){
                insertElement.insertAdjacentElement(insertPosition,element);
              }
              if(callback){
                callback(element);
              }
              return element;
            }
            break;
          case'object':
            {
              // tree mode
              //   data<{
              //     key&class<string/~single~/=(key&class),string=('key&class class2...','',' class...',' class class2...')>:{
              //       <element:[
              //         tag<string,undefined='div'>,
              //         attribute<object=({key:'value'...}),undefined=false>,
              //         content<string,element,undefined=false>,
              //         callback<function(element),undefined=false>
              //       ],undefined=false>,
              //       <function:function(elements,element)/~this.element===elements.key&class===element~/,undefined=false>,
              //       key&class:<object,array>...
              //     },
              //     key&class:<object,array>...
              //   },[
              //     function(){},
              //     key&class:<object,array>...
              //   ]>,
              //   insertElement<element,undefined=false>,
              //   insertPosition<'beforebegin','afterbegin','beforeend','afterend',undefined='beforeend'>,
              //   elements<elements,undefined=elements>,
              //   callback<function(elements),undefined=false>
              //   /~tyin.elementCreate()===tyin.elementCreate({key&class<...>:{}})._first_===tyin.elementCreate([{}])._first_===tyin.elementCreate([[]])._first_~/
              const object=arg[0];
              const insertElement=arg[1];
              let insertPosition=arg[2];
              let elements=arg[3];
              const callback=arg[4];
              if(!insertPosition){
                insertPosition='beforeend';
              }
              if(!elements){
                elements={};
              }
              let elementBuildTop=true;
              let first=false;
              const elementBuild=(data,insertElement,insertPosition,key='')=>{
                if(elementBuildTop){
                  elementBuildTop=false;
                  for(const key in data){
                    if(typeof data[key]!=='function'&&key!=='element'){
                      elementBuild(data[key],insertElement,insertPosition,key);
                    }
                  }
                }else{
                  const cls=key.trim().split(' ').filter((item)=>{
                    return isNaN(parseInt(item));
                  }).join(' ');
                  if(data.element){
                    if(!data.element[0]){
                      data.element[0]='div';
                    }
                    if(data.element[1]){
                      if(data.element[1].class){
                        data.element[1].class=[...new Set(key.trim().split(' ').filter((item)=>{
                          return isNaN(parseInt(item));
                        }).concat(data.element[1].class.trim().split(' ')))].join(' ');
                      }else{
                        if(cls){
                          data.element[1].class=cls;
                        }
                      }
                    }else{
                      if(cls){
                        data.element[1]={class:cls};
                      }
                    }
                  }else{
                    data.element=['div'];
                    if(cls){
                      data.element[1]={class:cls};
                    }
                  }
                  const element=this.elementCreate(data.element[0],data.element[1]?data.element[1]:undefined,insertElement,insertPosition,data.element[2]?data.element[2]:undefined,data.element[3]?data.element[3]:undefined);
                  if(!first){
                    first=element;
                    elements._first_=element;
                  }
                  if(isNaN(key.split(' ')[0])||key.split(' ')[0]===''){
                    elements[key.split(' ')[0]]=element;
                  }
                  for(const key in data){
                    if(typeof data[key]==='function'){
                      switch(Object.prototype.toString.call(data)){
                        case'[object Array]':
                          {
                            if(!data[key].name){
                              data[key].element=element;
                            }
                          }
                          break;
                        case'[object Object]':
                          {
                            if(key==='function'&&data[key].name==='function'){
                              data[key].element=element;
                            }
                          }
                          break;
                        default:
                          break;
                      }
                    }else{
                      if(key!=='element'){
                        elementBuild(data[key],element,'beforeend',key);
                      }
                    }
                  }
                }
              };
              elementBuild(object,insertElement,insertPosition);
              let functionRunTop=true;
              const functionRun=(data)=>{
                if(functionRunTop){
                  functionRunTop=false;
                  for(const key in data){
                    if(typeof data[key]!=='function'&&key!=='element'){
                      functionRun(data[key]);
                    }
                  }
                }else{
                  for(const key in data){
                    if(typeof data[key]==='function'){
                      switch(Object.prototype.toString.call(data)){
                        case'[object Array]':
                          {
                            if(!data[key].name){
                              data[key].call(data[key],elements,data[key].element);
                            }
                          }
                          break;
                        case'[object Object]':
                          {
                            if(key==='function'&&data[key].name==='function'){
                              data[key].call(data[key],elements,data[key].element);
                            }
                          }
                          break;
                        default:
                          break;
                      }
                    }else{
                      if(key!=='element'){
                        functionRun(data[key]);
                      }
                    }
                  }
                }
              };
              functionRun(object);
              if(callback){
                callback(elements);
              }
              return elements;
            }
            break;
          default:
            {
              return this.elementCreate('div',arg[1],arg[2],arg[3],arg[4],arg[5]);
            }
            break;
        }
      },
      /*🟢*/elementState(...arg){
        if(arg[0]instanceof HTMLElement){
          // base mode
          //   element<element>,
          //   one<string=('class class2...'),null,undefined=''>,
          //   two<string=('class class2...'),undefined=''>,
          //   setOne<boolean,undefined=false>,
          //   nextWait<number,undefined=0>,
          //   callback<function(element,=(one,two,'')),undefined=()=>{}>
          // flash mode
          //   (element<>,null,two<>,true,wait<>,callback<>)
          const element=arg[0];
          let one=arg[1];
          let two=arg[2];
          let setOne=arg[3];
          let nextWait=arg[4];
          let callback=arg[5];
          if(!one&&one!==null){
            one='';
          }
          if(!two){
            two='';
          }
          if(setOne!==true){
            setOne=false;
          }
          if(!nextWait){
            nextWait=0;
          }
          if(!callback){
            callback=()=>{};
          }
          const contains=(data)=>{
            for(const value of data.split(' ')){
              if(element.classList.contains(value)){
                return true;
              }
            }
            return false;
          };
          const add=(data)=>{
            for(const value of data.split(' ')){
              element.classList.add(value);
            }
          };
          const remove=(data)=>{
            for(const value of data.split(' ')){
              element.classList.remove(value);
            }
          };
          if(two){
            if(setOne){
              if(one){
                if(!contains(one)){
                  setTimeout(()=>{
                    remove(two);
                  },0);
                  setTimeout(()=>{
                    add(one);
                    callback(element,one);
                  },nextWait);
                }
              }else{
                if(one===null){
                  setTimeout(()=>{
                    add(two);
                  },0);
                  setTimeout(()=>{
                    remove(two);
                    callback(element,'');
                  },nextWait);
                }else{
                  setTimeout(()=>{
                    remove(two);
                  },0);
                  setTimeout(()=>{
                    callback(element,'');
                  },nextWait);
                }
              }
            }else{
              if(contains(one)){
                setTimeout(()=>{
                  remove(one);
                },0);
                setTimeout(()=>{
                  add(two);
                  callback(element,two);
                },nextWait);
              }else{
                if(contains(two)){
                  setTimeout(()=>{
                    remove(two);
                  },0);
                  setTimeout(()=>{
                    add(one);
                    callback(element,one);
                  },nextWait);
                }else{
                  setTimeout(()=>{
                    add(one);
                  },0);
                  setTimeout(()=>{
                    callback(element,one);
                  },nextWait);
                }
              }
            }
          }else{
            if(setOne){
              if(!contains(one)){
                setTimeout(()=>{
                  add(one);
                },0);
                setTimeout(()=>{
                  callback(element,one);
                },nextWait);
              }
            }else{
              if(contains(one)){
                setTimeout(()=>{
                  remove(one);
                },0);
                setTimeout(()=>{
                  callback(element,'');
                },nextWait);
              }else{
                setTimeout(()=>{
                  add(one);
                },0);
                setTimeout(()=>{
                  callback(element,one);
                },nextWait);
              }
            }
          }
        }else{
          if(Array.isArray(arg[0])){
            switch(arg[0][0]){
              case'target':
                {
                  // target mode
                  //   [
                  //     'target',
                  //     [
                  //       open<string=('class class2...'),undefined='_'>,
                  //       close<string=('class class2...'),undefined='_'>,
                  //       [
                  //         targetElement<element>...
                  //       ],
                  //       [
                  //         [
                  //           start<boolean>,
                  //           switchType<'auto','open','close'>,
                  //           [
                  //             buttonElement<element>...
                  //           ],
                  //           listenType<string=('item,item2...')>,
                  //           callback<function(event_data),undefined=()=>{}>,
                  //           option<object,undefined>,
                  //           option2<any,undefined/~'pointer_up...'~/>,
                  //           option3<any,undefined/~'pointer_up...'~/>
                  //         ]...
                  //       ]
                  //     ]
                  //   ]
                  const data=arg[0][1];
                  const open=data[0]?data[0]:'_';
                  const close=data[1]?data[1]:'_';
                  const targetElement_array=data[2];
                  const button_array=data[3];
                  for(const button of button_array){
                    const start=button[0];
                    const switchType=button[1];
                    const buttonElement_array=button[2];
                    const listenType=button[3];
                    let callback=button[4];
                    const option=button[5];
                    const option2=button[6];
                    const option3=button[7];
                    if(!callback){
                      callback=()=>{};
                    }
                    const eventFunction=()=>{
                      const setButtonElement=(_,current)=>{
                        for(const button of button_array){
                          const buttonElement_array=button[2];
                          for(const buttonElement of buttonElement_array){
                            this.elementState(buttonElement,current,`${open} ${close}`,true);
                          }
                        }
                      };
                      switch(switchType){
                        case'auto':
                          {
                            for(const targetElement of targetElement_array){
                              this.elementState(targetElement,open,close,undefined,undefined,setButtonElement);
                            }
                          }
                          break;
                        case'open':
                          {
                            for(const targetElement of targetElement_array){
                              this.elementState(targetElement,open,close,true,undefined,setButtonElement);
                            }
                          }
                          break;
                        case'close':
                          {
                            for(const targetElement of targetElement_array){
                              this.elementState(targetElement,close,open,true,undefined,setButtonElement);
                            }
                          }
                          break;
                        default:
                          break;
                      }
                    };
                    if(start){
                      eventFunction();
                      callback();
                    }
                    for(const buttonElement of buttonElement_array){
                      for(const value of listenType.split(',')){
                        this.listenDOM('add',buttonElement,value,eventFunction,option,option2,option3);
                        this.listenDOM('add',buttonElement,value,callback,option,option2,option3);
                      }
                    }
                  }
                }
                break;
              case'tab':
                {
                  // tab mode
                  //   [
                  //     'tab',
                  //     [
                  //       open<string=('class class2...'),undefined='_'>,
                  //       close<string=('class class2...'),undefined='_'>,
                  //       [
                  //         [
                  //           start<boolean>,
                  //           [
                  //             targetElement<element>...
                  //           ],
                  //           [
                  //             buttonElement<element>...
                  //           ],
                  //           listenType<string=('item,item2...')>,
                  //           callback<function(event_data),undefined=()=>{}>,
                  //           option<object,undefined>,
                  //           option2<any,undefined/~'pointer_up...'~/>,
                  //           option3<any,undefined/~'pointer_up...'~/>
                  //         ]...
                  //       ]
                  //     ]
                  //   ]
                  const data=arg[0][1];
                  const open=data[0]?data[0]:'_';
                  const close=data[1]?data[1]:'_';
                  const content_array=data[2];
                  for(const content of content_array){
                    const start=content[0];
                    const targetElement_array=content[1];
                    const buttonElement_array=content[2];
                    const listenType=content[3];
                    let callback=content[4];
                    const option=content[5];
                    const option2=content[6];
                    const option3=content[7];
                    if(!callback){
                      callback=()=>{};
                    }
                    const eventFunction=()=>{
                      for(const content of content_array){
                        const targetElement_array_=content[1];
                        const buttonElement_array_=content[2];
                        if(targetElement_array_!==targetElement_array){
                          for(const targetElement_ of targetElement_array_){
                            this.elementState(targetElement_,close,open,true);
                          }
                        }
                        if(buttonElement_array_!==buttonElement_array){
                          for(const buttonElement_ of buttonElement_array_){
                            this.elementState(buttonElement_,close,open,true);
                          }
                        }
                      }
                      for(const targetElement of targetElement_array){
                        this.elementState(targetElement,open,close,true);
                      }
                      for(const buttonElement of buttonElement_array){
                        this.elementState(buttonElement,open,close,true);
                      }
                    };
                    if(start){
                      eventFunction();
                      callback();
                    }
                    for(const buttonElement of buttonElement_array){
                      for(const value of listenType.split(',')){
                        this.listenDOM('add',buttonElement,value,eventFunction,option,option2,option3);
                        this.listenDOM('add',buttonElement,value,callback,option,option2,option3);
                      }
                    }
                  }
                }
                break;
              default:
                break;
            }
          }
        }
      },
      /*🔴*/DOMState(){},
      /*🟢*/elementBlock(element,group='group',insertPosition='beforeend',wait=350){
        if(!this.elementBlock.template){
          this.elementBlock.template=class template{
            constructor(element,group,insertPosition,wait){
              this.element=element;
              this.group=group;
              this.insertPosition=insertPosition;
              this.wait=wait;
              this.elements=[];
              this.lock=false;
              this.style='html * { pointer-events: none !important; }';
            }
            add(element,record,wait=this.wait){
              return new Promise((resolve)=>{
                if(!this.lock){
                  this.lock=true;
                  const style=tyin.insertStyle(this.style);
                  if(wait>1000/12){
                    wait=wait-1000/12;
                  }else{
                    wait=0;
                  }
                  let recordState=false;
                  if(record){
                    tyin.for(this.elements,(...data)=>{
                      if(data[2].tyin_elementBlock_persistentRecord===record){
                        recordState=true;
                        element=data[2];
                      }
                    },0);
                  }
                  if(record&&!recordState){
                    element.tyin_elementBlock_persistentRecord=record;
                  }
                  if(!recordState){
                    this.elements.push(element);
                    element.tyin_elementBlock_prev=this.elements.indexOf(element)===0?null:this.elements[this.elements.indexOf(element)-1];
                  }
                  tyin.for(this.elements,(...data)=>{
                    if(data[2]!==element&&data[2].classList.contains(`${this.group}_last`)){
                      setTimeout(()=>{
                        tyin.elementState(data[2],`${this.group}_prev`,`${this.group}_last`,true);
                      },1000/12);
                    }
                  },0);
                  tyin.elementState(element,`${this.group}_last ${this.group}_ready`,`${this.group}_hide`,true);
                  element.style.setProperty('opacity','0');
                  setTimeout(()=>{
                    if(!recordState){
                      this.element.insertAdjacentElement(this.insertPosition,element);
                    }
                    setTimeout(()=>{
                      element.style.removeProperty('opacity');
                      tyin.removeEmpty(element);
                      tyin.elementState(element,`${this.group}_go`,'',true);
                      setTimeout(()=>{
                        tyin.elementState(element,'',`${this.group}_ready`,true);
                        tyin.removeElement(style);
                        this.lock=false;
                        resolve(element);
                      },wait);
                    },1000/24);
                  },1000/24);
                }
              });
            }
            back(wait=this.wait,record){
              return new Promise((resolve)=>{
                if(!this.lock){
                  this.lock=true;
                  let element=null;
                  tyin.for(this.elements,(...data)=>{
                    if(!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)&&data[2].classList.contains(`${this.group}_last`)){
                      element=data[2];
                    }
                  },0);
                  if(element&&element.tyin_elementBlock_persistentRecord){
                    this.lock=false;
                    resolve(this.hide(wait));
                  }else{
                    this.lock=false;
                    resolve(this.remove(wait));
                  }
                }
              });
            }
            hide(wait=this.wait,record){
              return new Promise((resolve)=>{
                if(!this.lock){
                  this.lock=true;
                  const style=tyin.insertStyle(this.style);
                  let element=null;
                  tyin.for(this.elements,(...data)=>{
                    if(!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)&&data[2].classList.contains(`${this.group}_last`)){
                      element=data[2];
                    }
                  },0);
                  tyin.elementState(element,`${this.group}_remove`,'',true);
                  setTimeout(()=>{
                    tyin.elementState(element,`${this.group}_hide`,`${this.group}_ready ${this.group}_go ${this.group}_last ${this.group}_prev ${this.group}_remove`,true);
                    tyin.removeElement(style);
                    this.lock=false;
                    if(last){
                      resolve(last);
                    }else{
                      resolve('null');
                    }
                  },wait);
                  let last=null;
                  tyin.for(this.elements,(...data)=>{
                    if(data[2]!==element&&!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)){
                      last=data[2];
                    }
                  },0);
                  if(last){
                    tyin.elementState(last,`${this.group}_last`,`${this.group}_prev`,true);
                  }
                }
              });
            }
            remove(wait=this.wait,record){
              return new Promise((resolve)=>{
                if(!this.lock){
                  this.lock=true;
                  const style=tyin.insertStyle(this.style);
                  let element=null;
                  let next=null;
                  tyin.for(this.elements,(...data)=>{
                    if(element&&!next){
                      next=data[2];
                    }
                    if(!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)&&data[2].classList.contains(`${this.group}_last`)){
                      element=data[2];
                    }
                  },0);
                  if(next){
                    next.tyin_elementBlock_prev=element.tyin_elementBlock_prev;
                  }
                  this.elements.splice(this.elements.indexOf(element),1);
                  tyin.elementState(element,`${this.group}_remove`,'',true);
                  setTimeout(()=>{
                    tyin.elementState(element,'',`${this.group}_ready ${this.group}_go ${this.group}_last ${this.group}_prev ${this.group}_hide ${this.group}_remove`,true);
                    if(element){
                      tyin.removeElement(element);
                    }
                    tyin.removeElement(style);
                    this.lock=false;
                    if(last){
                      resolve(last);
                    }else{
                      resolve('null');
                    }
                  },wait);
                  let last=null;
                  tyin.for(this.elements,(...data)=>{
                    if(data[2]!==element&&!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)){
                      last=data[2];
                    }
                  },0);
                  if(last){
                    tyin.elementState(last,`${this.group}_last`,`${this.group}_prev`,true);
                  }
                }
              });
            }
            get(record){
              let element=null;
              tyin.for(this.elements,(...data)=>{
                if(data[2].tyin_elementBlock_persistentRecord===record){
                  element=data[2];
                }
              },0);
              if(element){
                return element;
              }
              return null;
            }
            set(newElement,record){
              let element=null;
              tyin.for(this.elements,(...data)=>{
                if(data[2].tyin_elementBlock_persistentRecord===record){
                  element=data[2];
                }
              },0);
              if(element){
                element.innerHTML=newElement.innerHTML;
                return element;
              }
              return null;
            }
          }
        }
        return new this.elementBlock.template(element,group,insertPosition,wait);
      },
      /*🔴*/DOM(){},
      /*🟢*/isKeyboardInputArea(target){
        const loop=(target)=>{
          if(target&&target!==document.documentElement){
            if(target.contentEditable==='true'||target.localName.match(/input|textarea/)){
              return target;
            }
            return loop(target.parentElement);
          }
          return false;
        };
        return loop(target);
      },
      /*🔴*/magicForm(){},
      /*🟢*/insertStyle(style,wait){
        const element=this.elementCreate('style',undefined,document.head,undefined,style);
        if(wait){
          setTimeout(()=>{
            this.removeElement(element);
          },wait);
        }
        return element;
      },
      /*🔴*/modifyStyleSheet(){},
      /*🟢*/removeElement(element){
        element.parentElement.removeChild(element);
      },
      /*🟢*/removeEmpty(element,...attribute){
        if(attribute[0]){
          for(let key=0,length=attribute.length;key<length;key++){
            element.removeAttribute(attribute[key]);
          }
        }else{
          if(!element.getAttribute('class')){
            element.removeAttribute('class');
          }
          if(!element.style[0]){
            element.removeAttribute('style');
          }
        }
      },
      /*🟢*/findOuter(find,start,end=document.documentElement,trueCallback,falseCallback){
        if(find instanceof HTMLElement&&start===find){
          if(trueCallback){
            trueCallback(start);
          }
          return start;
        }else{
          if(start.classList.contains(find)){
            if(trueCallback){
              trueCallback(start);
            }
            return start;
          }else{
            if(start===end){
              if(falseCallback){
                falseCallback();
              }
              return false;
            }
          }
        }
        return this.findOuter(find,start.parentElement,end,trueCallback,falseCallback);
      },
      /*🟢*/elementPath(element){
        let result='';
        const run=(element)=>{
          if(element.parentElement){
            for(let key=0,length=element.parentElement.childElementCount;key<length;key++){
              if(element.parentElement.children[key]===element){
                result=`${key},${result}`;
                break;
              }
            }
            run(element.parentElement);
          }
        };
        run(element);
        return result.replace(/,$/,'');
      },
      /*🟢*/URLPath(hash=true){
        switch(hash){
          case true:
            {
              return location.href.replace(location.origin,'');
            }
            break;
          case false:
            {
              return location.href.replace(location.origin,'').replace(location.hash,'');
            }
            break;
          default:
            break;
        }
      },
      /*🟢*/setURL(type,path){
        switch(type){
          case'push':
            {
              history.pushState(null,null,path);
            }
            break;
          case'replace':
            {
              history.replaceState(null,null,path);
            }
            break;
          default:
            break;
        }
      },
      /*🔴*/startLoad(type,callback){
        document.addEventListener('readystatechange',(event)=>{
          switch(event.target.readyState){
            case'loading':
              {}
              break;
            case'interactive':
              {}
              break;
            case'complete':
              {}
              break;
            default:
              break;
          }
        });
      },
      /*🟢*/fullScreen(element=document.documentElement,top=false){
        const root=top?top:globalThis;
        if(navigator.userAgent.match(/iPhone|iPad/i)&&element.webkitSupportsFullscreen){
          if(element.webkitDisplayingFullscreen){
            element.webkitExitFullScreen();
          }else{
            element.webkitEnterFullScreen();
          }
        }else{
          if(root.document.fullscreenElement||root.document.webkitCurrentFullScreenElement){
            if('exitFullscreen'in root.document){
              root.document.exitFullscreen();
            }else{
              if('webkitExitFullscreen'in root.document){
                root.document.webkitExitFullscreen();
              }
            }
          }else{
            if('requestFullscreen'in root.document.documentElement){
              element.requestFullscreen();
            }else{
              if('webkitRequestFullScreen'in root.document.documentElement){
                element.webkitRequestFullScreen();
              }
            }
          }
        }
      },
      /*🔴*/orientationSwitch(){},
      /*🔴*/iframe(){},
      /*🔴*/languageSwitch(){},
      /*🟢*/openTab(URL=location.href,name=''){
        return open(URL,name);
      },
      /*🟢*/openWindow(URL=location.href,name='',width=720,height=450,left,top){
        if(typeof left==='number'){
          left+=screen.availLeft;
        }else{
          left=(screen.availWidth-width)/2+screen.availLeft;
        }
        if(typeof top==='number'){
          top+=screen.availTop;
        }else{
          top=(screen.availHeight-height)/2+screen.availTop;
        }
        return open(URL,name,`width=${width},height=${height},left=${left},top=${top}`);
      },
      /*🟢*/debug(callback){
        if('document'in globalThis&&document.documentElement.classList.contains('debug')){
          callback();
        }
      },
      /*🟢*/loadFont(title,URL,option={}){
        return new Promise(async(resolve)=>{
          const font=await new FontFace(title,`url(${URL})`,option).load();
          document.fonts.add(font);
          resolve(true);
        });
      },
      /*🟢*/async loadPackage_fontAwesomeFree(){
        this.elementCreate('link',{rel:'stylesheet',href:`${import.meta.url.replace('/main/tyin.js','/package/fontAwesomeFree@5.15.3/css/all.min.css')}`,crossorigin:''},document.head);
      },
      /*🟢*/async loadPackage_HLS(){
        if(!('Hls'in globalThis)){
          this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/HLS@1.0.2/hls.min.js')}`},document.head);
        }
        return await this.loop(()=>{
          if('Hls'in globalThis){
            return Hls;
          }
          return false;
        });
      },
      /*🟢*/package_HLS_play(mode='auto',video,src,poster='',config={
        autoStartLoad:video.getAttribute('preload')==='auto'?true:false,
        maxBufferLength:4,
        maxBufferSize:4*1000*1000
      }){
        if(!('Hls'in globalThis)){
          (async()=>{
            await this.loadPackage_HLS();
          })();
        }
        this.loop(()=>{
          if('Hls'in globalThis){
            video.pause();
            if(!this.package_HLS_play.play){
              this.package_HLS_play.play=()=>{
                video._HLS_.startLoad();
              };
            }
            if(!this.package_HLS_play.pause){
              this.package_HLS_play.pause=()=>{
                video._HLS_.stopLoad();
              };
            }
            video.setAttribute('src',src);
            video.setAttribute('poster',poster);
            if(src.match(/\.m3u8/i)){
              const HLSGo=()=>{
                if(video._HLS_){
                  video._HLS_.destroy();
                  delete video._HLS_;
                  video.removeEventListener('play',this.package_HLS_play.play);
                  video.removeEventListener('pause',this.package_HLS_play.pause);
                }
                const HLS=new Hls(config);
                HLS.loadSource(src);
                HLS.attachMedia(video);
                video.addEventListener('play',this.package_HLS_play.play);
                video.addEventListener('pause',this.package_HLS_play.pause);
                video._HLS_=HLS;
                return HLS;
              };
              return this.loop(()=>{
                switch(mode){
                  case'auto':
                    {
                      if(video.canPlayType('application/vnd.apple.mpegurl')){
                        return true;
                      }else{
                        if('Hls'in globalThis&&Hls.isSupported()){
                          return HLSGo();
                        }
                      }
                    }
                    break;
                  case'HLS':
                    {
                      if('Hls'in globalThis&&Hls.isSupported()){
                        return HLSGo();
                      }
                    }
                    break;
                  default:
                    break;
                }
                return false;
              });
            }
            return true;
          }
          return false;
        });
      },
      /*🔴*/unit(){},
      /*🔴*/colorDictionary(){},
      /*🔴*/uploadListEditor(){},
      /*🔴*/downloadListEditor(){},
      /*🔴*/miniEditor(insertElement,insertPosition,mode,initialContent,width,height){
        const resultAttribute={class:'tyin_miniEditor'};
        if(width||height){
          resultAttribute.style=`${width?`width: ${width}; `:''}${height?`height: ${height};`:''}`;
        }
        const result=this.elementCreate('div',resultAttribute,insertElement,insertPosition);
        // if(mode==='edit'){
          const undoState=()=>{
            document.execCommand('undo',false,null);
            this.elementState(redo,'','tyin_mk_disable',true);
            const state=document.execCommand('undo',false,null);
            if(state){
              document.execCommand('redo',false,null);
              this.elementState(undo,'','tyin_mk_disable',true);
            }else{
              this.elementState(undo,'tyin_mk_disable','',true);
            }
          };
          const redoState=()=>{
            document.execCommand('redo',false,null);
            this.elementState(undo,'','tyin_mk_disable',true);
            const state=document.execCommand('redo',false,null);
            if(state){
              document.execCommand('undo',false,null);
              this.elementState(redo,'','tyin_mk_disable',true);
            }else{
              this.elementState(redo,'tyin_mk_disable','',true);
            }
          };
          const toolbar=this.elementCreate('div',{class:'tyin_miniEditor_toolbar'},result);
          let cr=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr'},toolbar);
          let group=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group'},cr);
          const file=this.elementCreate('input',{type:'file',accept:'image/*'},undefined,undefined,undefined,(input)=>{
            input.addEventListener('change',function(){
              for(let key=0,length=this.files.length;key<length;key++){
                const dataURL=new FileReader();
                dataURL.readAsDataURL(this.files[key]);
                dataURL.addEventListener('load',function(){
                  document.execCommand('insertimage',0,this.result);
                });
              }
            });
          });
          this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item'},group,undefined,'􀏅',(image)=>{
            image.addEventListener('click',()=>{
              file.click();
            });
          });
          cr=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr'},toolbar);
          group=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group'},cr);
          const undo=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item tyin_mk_disable'},group,undefined,'􀱎');
          this.listenDOM('add',undo,'pointer_up',undoState,undefined,0);
          const redo=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item tyin_mk_disable'},group,undefined,'􀱔');
          this.listenDOM('add',redo,'pointer_up',redoState,undefined,0);
          group=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group'},cr);
          this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item'},group,undefined,'􀁶');
        // }
        const container=this.elementCreate('div',{
          class:'tyin_miniEditor_container',
          contenteditable:mode==='edit'?true:false
        },result,undefined,initialContent);
        container.addEventListener('focus',()=>{
          document.execCommand('defaultParagraphSeparator',false,'div');
        });
        container.addEventListener('input',(event)=>{
          if(!event.inputType.match('history')){
            this.elementState(undo,'','tyin_mk_disable',true);
            this.elementState(redo,'tyin_mk_disable','',true);
          }
        });
        // this.listenDOM('add',container,'observe_mutation',()=>{
        //   if(container.innerHTML==='<br>'){
        //     container.innerHTML='';
        //   }
        // },{childList:true,subtree:true,characterData:true});
        container.addEventListener('paste',async(event)=>{
          event.preventDefault();
          let text='';
          if(event.clipboardData&&event.clipboardData.getData){
            text=event.clipboardData.getData('text/plain');
          }else{
            text=await navigator.clipboard.readText();
          }
          document.execCommand('insertHTML',false,text);
        });
        result.tyin_miniEditor_getContent=()=>{
          return container.innerHTML;
        };
        return result;
      },
      /*🔴*/miniEditor(insertElement,insertPosition='beforeend',mode,initialContent,width,height){
        const miniEditorAttribute={class:'tyin_miniEditor'};
        if(width||height){
          miniEditorAttribute.style=`${width?`width: ${width}; `:''}${height?`height: ${height};`:''}`;
        }
        const miniEditor=this.elementCreate('div',miniEditorAttribute);
        switch(mode){
          case'browse':
            {}
            break;
          case'edit':
            {
              const toolbar=this.elementCreate('div',{class:'tyin_miniEditor_toolbar'},miniEditor);
              let cr=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr'},toolbar);
              let group=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group'},cr);
              let item=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item'},group,undefined,'􀏅');
              cr=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr'},toolbar);
              group=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group'},cr);
              item=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item tyin_mk_disable'},group,undefined,'􀱎');
              item=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item tyin_mk_disable'},group,undefined,'􀱔');
              group=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group'},cr);
              item=this.elementCreate('div',{class:'tyin_miniEditor_toolbar_cr_group_item'},group,undefined,'􀁶');
              const container=this.elementCreate('div',{class:'tyin_miniEditor_container'},miniEditor);
              const line=this.elementCreate('div',{class:'tyin_miniEditor_container_line'},container);
              const content=this.elementCreate('div',{class:'tyin_miniEditor_container_content'},container,undefined,initialContent);
              content.addEventListener('pointerdown',()=>{
                content.innerHTML=content.innerHTML.replace('<span class="tyin_miniEditor_container_content_prev">','').replace('</span><textarea class="tyin_miniEditor_container_content_cursor"></textarea>','');
              });
              this.listenDOM('add',content,'pointer_up',()=>{
                const select=getSelection();
                content.innerHTML=`${content.innerHTML.slice(0,select.focusOffset)}<span class="tyin_miniEditor_container_content_prev"></span><textarea class="tyin_miniEditor_container_content_cursor"></textarea>${content.innerHTML.slice(select.focusOffset)}`;
                const cursor=document.querySelector('.tyin_miniEditor_container_content_cursor');
                cursor.focus();
                cursor.addEventListener('input',()=>{
                  cursor.previousElementSibling.innerHTML=cursor.value;
                });
              },undefined,0);
              const data=[];
              const record=[];
              const insert=()=>{};
              if(initialContent){
                insert(initialContent);
              }
              miniEditor.tyin_miniEditor_getContent=data;
            }
            break;
          default:
            break;
        }
        if(insertElement){
          insertElement.insertAdjacentElement(insertPosition,miniEditor);
        }
        return miniEditor;
      },
      /*🟢*/async loadPackage_kaTeX(){
        if(!('katex'in globalThis)){
          this.elementCreate('link',{rel:'stylesheet',href:`${import.meta.url.replace('/main/tyin.js','/package/kaTeX@0.13.3/katex.min.css')}`,crossorigin:''},document.head);
          this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/kaTeX@0.13.3/katex.min.js')}`},document.head);
          // this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/kaTeX@0.13.3/contrib/auto-render.min.js')}`},document.head);
        }
        return await this.loop(()=>{
          if('katex'in globalThis){
            return katex;
          }
          return false;
        });
      },
      /*🟢*/async loadPackage_highlight(){
        if(!('hljs'in globalThis)){
          this.elementCreate('link',{rel:'stylesheet',href:`${import.meta.url.replace('/main/tyin.js','/package/highlight@10.7.2/build/styles/monokai-sublime.min.css')}`,crossorigin:''},document.head);
          this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/highlight@10.7.2/build/highlight.min.js')}`},document.head);
        }
        return await this.loop(()=>{
          if('hljs'in globalThis){
            return hljs;
          }
          return false;
        });
      },
      /*🟢*/async loadPackage_quill(){
        if(!('Quill'in globalThis)){
          this.elementCreate('link',{rel:'stylesheet',href:`${import.meta.url.replace('/main/tyin.js','/main/tyin_package_quill_tyin.css')}`,crossorigin:''},document.head);
          // this.elementCreate('link',{rel:'stylesheet',href:`${import.meta.url.replace('/main/tyin.js','/package/quill@1.3.7/quill.snow.css')}`,crossorigin:''},document.head);
          // this.elementCreate('link',{rel:'stylesheet',href:`${import.meta.url.replace('/main/tyin.js','/package/quill@1.3.7/quill.bubble.css')}`,crossorigin:''},document.head);
          this.elementCreate('script',{async:'module',src:`${import.meta.url.replace('/main/tyin.js','/package/quill@1.3.7/quill.min.js')}`},document.head);
        }
        return await this.loop(()=>{
          if('Quill'in globalThis){
            return Quill;
          }
          return false;
        });
      },
      /*🟢*/async package_quill_create(insertElement,insertPosition,mode='tyin_default',placeholder='...',content,readOnly=false,width,height,first){
        if(!('Quill'in globalThis)){
          this.loadPackage_kaTeX();
          this.loadPackage_highlight();
          this.loadPackage_IDBKeyVal();
          await this.loop(()=>{
            if('hljs'in globalThis){
              hljs.configure({
                useBR:false
              });
              hljs.highlightAll();
              this.loadPackage_quill();
              return true;
            }
            return false;
          });
        }
        const UUID=this.UUID();
        const option={
          modules:{
            formula:true,
            syntax:true
          },
          placeholder:placeholder,
          readOnly:readOnly,
          theme:mode==='bubble'?'bubble':'snow'
        };
        switch(mode){
          case'full':
            {
              option.modules.toolbar=[
                [{'font':[]},{'size':['small',false,'large','huge']}],
                ['bold','italic','underline','strike'],
                [{'color':[]},{'background':[]}],
                [{'script':'sub'},{'script':'super'}],
                [{'header':[1,2,3,4,5,6,false]}],
                [{'header':1},{'header':2},{'header':3},{'header':4},{'header':5},{'header':6},'blockquote','code-block'],
                [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
                [{'direction':'rtl'},{'align':[]}],
                ['link','image','video','formula'],
                ['clean','undo','redo','list_button']
              ];
            }
            break;
          case'tyin_full':
            {
              option.modules.toolbar=[
                ['blockquote',{'font':'monospace'},'code-block','link','image','video','formula'],
                [{'header':1},{'header':2},{'header':3},{'header':4},{'header':5},{'header':6}],
                ['bold','italic','underline','strike',{'script':'super'},{'script':'sub'},{'size':'small'},{'size':'large'}],
                [
                  {'color':'var(--qt_ve_color_red)'},{'color':'var(--qt_ve_color_green)'},{'color':'var(--qt_ve_color_blue)'},{'color':'var(--qt_ve_color_orange)'},
                  {'background':'var(--qt_ve_background_red)'},{'background':'var(--qt_ve_background_green)'},{'background':'var(--qt_ve_background_blue)'},{'background':'var(--qt_ve_background_orange)'},
                ],
                [{'list':'bullet'},{'list':'ordered'},{'indent':'-1'},{'indent':'+1'},{'align':'center'},{'align':'right'},{'align':'justify'},{'direction':'rtl'}],
                ['clean','undo','redo','list_button']
              ];
            }
            break;
          case'tyin_default':
            {
              option.modules.toolbar=[
                ['blockquote','code-block','formula',{'header':1},{'header':3},{'header':5}],
                ['bold','italic','underline','strike',{'size':'small'},{'size':'large'}],
                [{'color':'var(--qt_ve_color_red)'},{'color':'var(--qt_ve_color_green)'},{'color':'var(--qt_ve_color_blue)'},{'color':'var(--qt_ve_color_orange)'},{'script':'super'},{'script':'sub'}],
                [{'list':'bullet'},{'indent':'-1'},{'indent':'+1'},{'align':'center'},'link','image'],
                ['clean','undo','redo','list_button']
              ];
            }
            break;
          case'tyin_simple':
            {
              option.modules.toolbar=[
                ['bold','italic','underline','strike',{'header':1},{'header':4}],
                [{'color':'var(--qt_ve_color_red)'},{'color':'var(--qt_ve_color_green)'},{'color':'var(--qt_ve_color_blue)'},{'color':'var(--qt_ve_color_orange)'},{'script':'super'},{'script':'sub'}],
                [{'list':'bullet'},{'indent':'-1'},{'indent':'+1'},{'align':'center'},'link','image'],
                ['clean','undo','redo','list_button']
              ];
            }
            break;
          default:
            {
              if(typeof mode!=='string'){
                option.modules.toolbar=mode;
              }
            }
            break;
        }
        return this.loop(async()=>{
          if('katex'in globalThis&&'hljs'in globalThis&&'idbKeyval'in globalThis&&'Quill'in globalThis){
            await tyin.loadPackage_IDBKeyVal();
            const db=idbKeyval.createStore('tyin_package_quill','basic');
            let last_UUID=await idbKeyval.get('last',db);
            let last_content=null;
            if(last_UUID){
              last_content=await idbKeyval.get(last_UUID,db);
            }else{
              last_UUID=this.UUID();
            }
            const font=Quill.import('formats/font');
            font.whitelist=['monospace'];
            Quill.register(font,true);
            const attribute={
              class:`tyin_package_quill_container tyin_package_quill_UUID_${UUID}`
            };
            if(width||height){
              attribute.style=`${width?`width: ${width}; `:''}${height?`height: ${height};`:''}`;
            }
            const result=this.elementCreate(
              'div',
              attribute,
              insertElement,
              insertPosition,
              `<div class="tyin_package_quill_list" tabindex="-1"></div><div class="tyin_package_quill_origin tyin_package_quill_UUID_${UUID}"><div class="tyin_package_quill_${typeof mode==='string'?mode:'custom'}_container tyin_package_quill_UUID_${UUID}">${typeof content==='string'?content:''}</div></div>`,
              (element)=>{
                element.tyin_package_quill=new Quill(
                  `.tyin_package_quill_${typeof mode==='string'?mode:'custom'}_container.tyin_package_quill_UUID_${UUID}`,
                  option
                );
              }
            );
            if(typeof content==='object'){
              result.tyin_package_quill.setContents(content);
            }else{
              if(last_content){
                result.tyin_package_quill.setContents(JSON.parse(last_content));
              }
            }
            const inputDataset=result.lastElementChild.lastElementChild.children[1].dataset;
            inputDataset.link=location.origin;
            inputDataset.video='URL';
            if(readOnly){
              this.removeElement(result.lastElementChild.firstElementChild);
            }else{
              const undo=document.querySelector(`.tyin_package_quill_origin.tyin_package_quill_UUID_${UUID}>.ql-toolbar>.ql-formats>.ql-undo`);
              const redo=document.querySelector(`.tyin_package_quill_origin.tyin_package_quill_UUID_${UUID}>.ql-toolbar>.ql-formats>.ql-redo`);
              if(undo){
                undo.addEventListener('click',()=>{
                  if(result.tyin_package_quill.history.stack.undo.length>first){
                    result.tyin_package_quill.history.undo();
                    result.tyin_package_quill.container.firstElementChild.focus();
                  }
                });
              }
              if(redo){
                redo.addEventListener('click',()=>{
                  result.tyin_package_quill.history.redo();
                  result.tyin_package_quill.container.firstElementChild.focus();
                });
              }
              this.listenDOM('add',result.tyin_package_quill.container.firstElementChild,'observe_mutation',this.throttle(()=>{
                idbKeyval.set(last_UUID,JSON.stringify(tyin_quill.tyin_package_quill.getContents()),db);
                idbKeyval.set('last',last_UUID,db);
              },1000/2),{attributes:true,childList:true,subtree:true});
              const list_element=document.querySelector(`.tyin_package_quill_container.tyin_package_quill_UUID_${UUID}>.tyin_package_quill_list`);
              const list_button=document.querySelector(`.tyin_package_quill_origin.tyin_package_quill_UUID_${UUID}>.ql-toolbar>.ql-formats>.ql-list_button`);
              await idbKeyval.keys(db).then((key)=>{
                this.for(key,(...data)=>{
                  this.elementCreate('div',{'data-abc':data[2]},list_element,undefined,data[2]);
                },0);
              });
              if(list_button){
                this.listenDOM('add',result,'pointer_up',(event)=>{
                  if(event.target===result){
                    this.elementState(list_element,'tyin_package_quill_mk_display');
                    this.elementState(list_element,'tyin_package_quill_mk_display_lock','',true);
                    setTimeout(()=>{
                      result.tyin_package_quill.container.firstElementChild.setAttribute('contenteditable','true');
                      this.elementState(list_element,'','tyin_package_quill_mk_display_lock',true);
                    },350);
                  }
                },undefined,0);
                this.listenDOM('add',list_button,'pointer_up',()=>{
                  this.elementState(list_element,'tyin_package_quill_mk_display');
                  result.tyin_package_quill.container.firstElementChild.setAttribute('contenteditable','false');
                },undefined,0);
                result.tyin_package_quill.container.firstElementChild.addEventListener('focus',()=>{
                  if(list_element.classList.contains('tyin_package_quill_mk_display_lock')){
                    document.activeElement.blur();
                  }
                });
              }
            }
            return result;
          }
          return false;
        });
      },
    // 💠 other
      w3daze:{
        package:{
          editor:{
            note:{}
          }
        },
        assistant:{
          preview:{
            image:{},
            audio:{},
            video:{}
          },
          editor:{
            math:{},
            color:{}
          },
          bag:{
            font:{},
            symbol:{},
            phrase:{},
            math:{},
            color:{}
          }
        },
        index:{
          editor:{
            note:{},
            manuscript:{},
            table:{},
            speech:{},
            canvas:{},
            code:{},
            folder:{}
          }
        }
      },
      unknown:{
        mediaQuery:{
          async _URLMode(arg,callback){
            switch(Object.prototype.toString.call(arg[0])){
              case'[object String]':
                {
                  return callback(arg[0],arg);
                }
                break;
              case'[object Array]':
                {
                  const result={};
                  for await(const value of (async function*(){
                    for(let key=0,length=arg[0].length;key<length;key++){
                      const value_=await callback(arg[0][key],arg);
                      yield [arg[0][key],value_];
                    }
                  })()){
                    result[value[0]]=value[1];
                  }
                  return result;
                }
                break;
              default:
                break;
            }
          },
          video:{
            _filter(data,dataProperty,filter,info){
              let result={result:[]};
              if(data.result){
                if(filter){
                  tyin.for(data.result[dataProperty],(...data)=>{
                    const match=[];
                    tyin.for(filter,(...data_)=>{
                      if(data[2][data_[1]].toString().trim().match(data_[2])){
                        match.push(true);
                      }else{
                        match.push(false);
                      }
                    },0);
                    if(!match.includes(false)){
                      // data[2].type_id=data[2].type_id;
                      data[2].type_name=data[2].type_name.trim();
                      result.result.push(data[2]);
                    }
                  },0);
                }else{
                  tyin.for(data.result[dataProperty],(...data)=>{
                    // data[2].type_id=data[2].type_id;
                    data[2].type_name=data[2].type_name.trim();
                    result.result.push(data[2]);
                  },0);
                }
                if(info){
                  result._page_=parseInt(data.result.page);
                  result._pagecount_=parseInt(data.result.pagecount);
                  result._limit_=parseInt(data.result.limit);
                  result._total_=parseInt(data.result.total);
                }
              }
              return result;
            },
            /*🟢*/info(...arg){
              // tyin.unknown.mediaQuery.video.info(URL,filter,iterator)
              //   URL<string,array>,
              //   filter<object=({key:RE}),undefined>,
              //   iterator<function,undefined>
              return tyin.unknown.mediaQuery._URLMode(arg,(URL,...arg)=>{
                const filter=arg[0][1];
                const iterator=arg[0][2];
                return tyin.fetch(`${URL}?pg=999999999&ac=list`,'GET',undefined,undefined,undefined,'json',async(data)=>{
                  const result=this._filter(data,'class',filter,true);
                  result.in_URL=URL;
                  result.in_filter=filter;
                  if(iterator){
                    for await(const value of (function*(){
                      for(let key=0,length=result.result.length;key<length;key++){
                        yield iterator(result.result[key]);
                      }
                    })()){}
                  }
                  return result;
                });
              });
            },
            /*🔴*/all(...arg){
              // tyin.unknown.mediaQuery.video.all(URL,filter,limit,start,end);
              //   URL<string,array>,
              //   filter<object=({key:RE}),undefined>,
              //   limit<number>,
              //   start<number>,
              //   end<number,undefined=start>
              return tyin.unknown.mediaQuery._URLMode(arg,(URL,...arg)=>{
                const filter=arg[0][1];
                const limit=arg[0][2];
                const start=arg[0][3];
                const end=arg[0][4]?arg[0][4]:arg[0][3];
                return tyin.fetch(`${URL}?pg=${start}&ac=list`,'GET',undefined,undefined,undefined,'json',(data)=>{
                  const result=this._filter(data,'list',filter,true);
                  result.in_URL=URL;
                  result.in_filter=filter;
                  result.in_limit=limit;
                  result.in_start=start;
                  result.in_end=end;
                  return result;
                });
              });
            },
            /*🔴*/category(...arg){
              // tyin.unknown.mediaQuery.video.category(URL,filter,category,limit,start,end);
              //   URL<string,array>,
              //   filter<object=({key:RE}),undefined>,
              //   category<number>,
              //   limit<number>,
              //   start<number>,
              //   end<number,undefined=start>
              return tyin.unknown.mediaQuery._URLMode(arg,(URL,...arg)=>{
                const filter=arg[0][1];
                const category=arg[0][2];
                const limit=arg[0][3];
                const start=arg[0][4];
                const end=arg[0][5]?arg[0][5]:arg[0][4];
                return tyin.fetch(`${URL}?t=${category}&pg=${start}&ac=list`,'GET',undefined,undefined,undefined,'json',(data)=>{
                  const result=this._filter(data,'list',filter,true);
                  result.in_URL=URL;
                  result.in_filter=filter;
                  result.in_category=category;
                  result.in_limit=limit;
                  result.in_start=start;
                  result.in_end=end;
                  return result;
                });
              });
            },
            /*🔴*/search(...arg){
              // tyin.unknown.mediaQuery.video.search(URL,filter,search,limit,start,end);
              //   URL<string,array>,
              //   filter<object=({key:RE}),undefined>,
              //   search<string>,
              //   limit<number>,
              //   start<number>,
              //   end<number,undefined=start>
              return tyin.unknown.mediaQuery._URLMode(arg,(URL,...arg)=>{
                const filter=arg[0][1];
                const search=arg[0][2];
                const limit=arg[0][3];
                const start=arg[0][4];
                const end=arg[0][5]?arg[0][5]:arg[0][4];
                return tyin.fetch(`${URL}?wd=${search}&pg=${start}&ac=list`,'GET',undefined,undefined,undefined,'json',(data)=>{
                  const result=this._filter(data,'list',filter,true);
                  result.in_URL=URL;
                  result.in_filter=filter;
                  result.in_search=search;
                  result.in_limit=limit;
                  result.in_start=start;
                  result.in_end=end;
                  return result;
                });
              });
            },
            /*🟢*/single(...arg){
              // tyin.unknown.mediaQuery.video.single(URL,filter,start,end,iterator);
              //   URL<string>,
              //   filter<object=({key:RE}),undefined>,
              //   start<number>,
              //   end<number,undefined=start>,
              //   iterator<function,undefined>
              return tyin.unknown.mediaQuery._URLMode(arg,async(URL,...arg)=>{
                const filter=arg[0][1];
                const start=arg[0][2];
                const end=arg[0][3]?arg[0][3]:arg[0][2];
                const iterator=arg[0][4];
                const result_={result:[]};
                for await(const value of (function*(){
                  for(let key=start,length=end;key<=length;key++){
                    yield tyin.fetch(`${URL}?ids=${key}&ac=detail`,'GET',undefined,undefined,undefined,'json',async(data)=>{
                      const result=tyin.unknown.mediaQuery.video._filter(data,'list',filter,false);
                      if(!result_.in_URL){
                        result_.in_URL=URL;
                        result_.in_filter=filter;
                        result_.in_start=start;
                        result_.in_end=end;
                      }
                      if(iterator){
                        await iterator(result.result[0]);
                      }
                      return result;
                    });
                  }
                })()){
                  if(value&&value.result[0]){
                    result_.result.push(value.result[0]);
                  }
                }
                return result_;
              });
            }
          },
          audio:{},
          image:{},
          text:{}
        },
        mediaSync:{
          video:{},
          audio:{},
          image:{},
          text:{}
        },
        mediaMatch:{
          video:{},
          audio:{},
          image:{},
          text:{}
        }
      }
  };
  // CSS
  if('document'in globalThis){
    tyin.elementCreate('link',{rel:'stylesheet',href:`${import.meta.url.replace('tyin.js','tyin.css')}`,crossorigin:''},document.head);
  }
  // // merge webAssembly rust
  // await tyin.webAssembly('../module/tyin_wasm_rust/result/tyin_wasm_rust.js',(module)=>{
  //   for(const key in module){
  //     module[key]._isWebAssembly_='rust';
  //   }
  //   Object.assign(tyin,module);
  // });
  // // merge webAssembly c
  // await tyin.webAssembly('../module/tyin_wasm_c/result/tyin_wasm_c.js',(module)=>{
  //   for(const key in module){
  //     module[key]._isWebAssembly_='c';
  //   }
  //   Object.assign(tyin,module);
  // });
  // // add underscore
  // await tyin.import('../package/underscore@1.13.1/underscore-esm-min.js',(module)=>{
  //   tyin._=module;
  //   tyin._._isPackage_='underscore';
  // });
// #build
// #debug
// #after