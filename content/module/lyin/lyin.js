'use strict';
/* <<<< <<<< <<<< <<<<
  lyin
  lyin.js
==== ==== ==== ====
  index.html
~~~~ ~~~~ ~~~~ ~~~~
  <script src="/lyin.js" type="application/javascript" data-lyin="{
    'startBackgroundColor_light': '<""=#FFFFFF>',
    'startBackgroundColor_dark': '<""=#000000>',
    'serviceWorker': '/sw.js',
    'head_title': '<""="">',
    'head_style': '/style.css',
    'head_script': '/script.js',
    'head_icon': '/icon.png',
    'head_icon_apple': '/icon-apple.png',
    'head_themeColor_light': '<""=#FFFFFF>',
    'head_themeColor_dark': '<""=#000000>',
    'head_manifest': '/manifest.webmanifest'
  }"></script>
==== ==== ==== ====
  sw.js
~~~~ ~~~~ ~~~~ ~~~~
  'use strict';
  // #before
  // #import
  // #variable
  // #block
  // #build
    // basic cache
    const version='basic';
    addEventListener('install',(event)=>{
      event.waitUntil(caches.open(version).then((cache)=>{
        return cache.addAll([]);
      }));
    });
    addEventListener('fetch',(event)=>{
      event.respondWith(caches.match(event.request).then((resp)=>{
        return fetch(event.request).then((response)=>{
          const responseClone=response.clone();
          caches.open(version).then((cache)=>{
            cache.put(event.request,responseClone);
          });
          return response;
        }).catch((error)=>{
          return resp;
        });
      }));
    });
    addEventListener('activate',(event)=>{
      event.waitUntil(caches.keys().then((keyList)=>{
        return Promise.all(keyList.map((key)=>{
          if([version].indexOf(key)===-1){
            return caches.delete(key);
          }
        }));
      }));
    });
  // #debug
  // #after
==== ==== ==== ====
  manifest.webmanifest
~~~~ ~~~~ ~~~~ ~~~~
  {
    "name": "~",
    "short_name": "~",
    "start_url": "/#pwa",
    "theme_color": "#000000",
    "background_color": "#000000",
    "orientation": "natural",
    "display": "standalone",
    "icons": [
      {
        "src": "/icon-144x144-any.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icon-192x192-any.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icon-512x512-any.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icon-144x144-maskable.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/icon-192x192-maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/icon-512x512-maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ]
  }
==== ==== ==== ====
  template
~~~~ ~~~~ ~~~~ ~~~~
  'use strict';
  // #before
  // #import
  // #variable
  // #block
  // #build
  // #debug
  // #after
>>>> >>>> >>>> >>>> */
{
// #before
// #import
// #variable
// #block
// #build
  // lyin 💠 🔴 🟡 🟢
  const lyin={
    // 💠 0 base
      /*🟢*/dataset(){
        for(const value of document.scripts){
          if(value.dataset.lyin){
            this.dataset.config=JSON.parse(value.dataset.lyin.replace(/'/g,'"'));
            value.removeAttribute('data-lyin');
            this.dataset.config.lyin_js=value;
            break;
          }
        }
      },
    // 💠 1 boot
      /*🟢*/_removeEmpty_(element,wait=350/2){
        setTimeout(()=>{
          if(!element.style[0]){
            element.removeAttribute('style');
          }
          if(!element.getAttribute('class')){
            element.removeAttribute('class');
          }
        },wait);
      },
      /*🟢*/boot_backgroundColor(){
        document.documentElement.style.setProperty('background-color',`${matchMedia('(prefers-color-scheme:dark)').matches?this.dataset.config.startBackgroundColor_dark?this.dataset.config.startBackgroundColor_dark:'#000000':this.dataset.config.startBackgroundColor_light?this.dataset.config.startBackgroundColor_light:'#FFFFFF'}`);
        addEventListener('load',()=>{
          const loop=()=>{
            if(document.documentElement.style.getPropertyValue('background-color')){
              setTimeout(()=>{
                document.documentElement.style.removeProperty('background-color');
                this._removeEmpty_(document.documentElement);
              },350/2);
            }else{
              setTimeout(loop,1000/24);
            }
          };
          loop();
        },{once:true});
      },
      /*🟢*/boot_opacity(){
        const loop=()=>{
          if(document.body){
            document.body.style.setProperty('opacity','0');
          }else{
            setTimeout(loop,1000/24);
          }
        };
        loop();
        addEventListener('load',()=>{
          const loop=()=>{
            if(document.body.style.getPropertyValue('opacity')){
              setTimeout(()=>{
                document.body.style.removeProperty('opacity');
                this._removeEmpty_(document.body);
              },350/2);
            }else{
              setTimeout(loop,1000/24);
            }
          };
          loop();
        },{once:true});
      },
      /*🟢*/boot_progress(){
        document.documentElement.classList.add('_ic_bk_progressIndicatorCircular_indeterminate_');
        addEventListener('load',()=>{
          if(document.documentElement.classList.contains('_ic_bk_progressIndicatorCircular_indeterminate_')){
            setTimeout(()=>{
              document.documentElement.classList.remove('_ic_bk_progressIndicatorCircular_indeterminate_');
            },350/2);
          }
        },{once:true});
      },
    // 💠 2 write
      /*🟢*/_viewportScrollToZero_(){
        scroll({behavior:'smooth',top:0,left:0});
        document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
      },
      /*🟢*/serviceWorker(){
        if(this.dataset.config.serviceWorker&&'serviceWorker'in navigator){
          navigator.serviceWorker.register(this.dataset.config.serviceWorker,{scope:'/'});
        }
      },
      /*🟢*/navigator_basic(){
        const userAgent=navigator.userAgent;
        const cls=document.documentElement.classList;
        if(userAgent.match(/bot|spider/i)){
          cls.add('ic_nr_user_bot');
        }
        if(userAgent.match(/Mac OS/i)&&!userAgent.match(/iPhone|iPad/i)){
          cls.add('ic_nr_system_brand_apple','ic_nr_system_macos');
        }else if(userAgent.match(/Windows/i)){
          cls.add('ic_nr_system_brand_microsoft','ic_nr_system_windows');
        }else if(userAgent.match(/Linux/i)&&!userAgent.match(/Android/i)){
          cls.add('ic_nr_system_linux');
        }else if(userAgent.match(/CrOS/i)){
          cls.add('ic_nr_system_brand_google','ic_nr_system_chromeos');
        }else if(userAgent.match(/iPhone|iPad/i)){
          cls.add('ic_nr_system_brand_apple','ic_nr_system_ios');
        }else if(userAgent.match(/Android/i)){
          cls.add('ic_nr_system_brand_google','ic_nr_system_android');
        }
        if(userAgent.match(/Firefox/i)&&!userAgent.match(/FxiOS/i)){
          cls.add('ic_nr_browser_firefox');
        }else if((userAgent.match(/Safari/i)&&!userAgent.match(/Chrome|Edg/i))||userAgent.match(/iPhone|iPad/i)){
          cls.add('ic_nr_browser_safari');
        }else if(userAgent.match(/Chrome/i)&&!userAgent.match(/CriOS|Edg/i)){
          cls.add('ic_nr_browser_chrome');
        }else if(userAgent.match(/Edg/i)&&!userAgent.match(/EdgiOS/i)){
          cls.add('ic_nr_browser_edge');
        }
        if(document.documentElement.classList.contains('ic_nr_browser_chrome')||document.documentElement.classList.contains('ic_nr_browser_edge')){
          cls.add('ic_nr_browser_chromium');
        }
        if(userAgent.match(/iPhone|iPad|Android|Mobile/i)){
          cls.add('ic_nr_platform_mobile');
        }
        if(location.search.replace(/^\?/,'').split('&').includes('pwa')||location.hash.replace(/^\#/,'').split('&').includes('pwa')){
          cls.add('ic_nr_pwa');
        }
        if(document.createElement('video').canPlayType('application/vnd.apple.mpegurl')){
          cls.add('ic_nr_video_m3u8');
        }
      },
      /*🟢*/navigator_media(){
        const set_media_prefers_colorScheme=(matches)=>{
          if(matches){
            document.documentElement.classList.remove('ic_nr_media_prefers_colorScheme_light');
            document.documentElement.classList.add('ic_nr_media_prefers_colorScheme_dark');
          }else{
            document.documentElement.classList.remove('ic_nr_media_prefers_colorScheme_dark');
            document.documentElement.classList.add('ic_nr_media_prefers_colorScheme_light');
          }
        };
        set_media_prefers_colorScheme(matchMedia('(prefers-color-scheme:dark)').matches);
        matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
          set_media_prefers_colorScheme(event.matches);
        });
        const set_media_prefers_reducedMotion=(matches)=>{
          if(matches){
            document.documentElement.classList.remove('ic_nr_media_prefers_reducedMotion_false');
            document.documentElement.classList.add('ic_nr_media_prefers_reducedMotion_true');
          }else{
            document.documentElement.classList.remove('ic_nr_media_prefers_reducedMotion_true');
            document.documentElement.classList.add('ic_nr_media_prefers_reducedMotion_false');
          }
        };
        set_media_prefers_reducedMotion(matchMedia('(prefers-reduced-motion:reduce)').matches);
        matchMedia('(prefers-reduced-motion:reduce)').addEventListener('change',(event)=>{
          set_media_prefers_reducedMotion(event.matches);
        });
        const set_media_prefers_reducedData=(matches)=>{
          if(matches){
            document.documentElement.classList.remove('ic_nr_media_prefers_reducedData_false');
            document.documentElement.classList.add('ic_nr_media_prefers_reducedData_true');
          }else{
            document.documentElement.classList.remove('ic_nr_media_prefers_reducedData_true');
            document.documentElement.classList.add('ic_nr_media_prefers_reducedData_false');
          }
        };
        set_media_prefers_reducedData(matchMedia('(prefers-reduced-data:reduce)').matches);
        matchMedia('(prefers-reduced-data:reduce)').addEventListener('change',(event)=>{
          set_media_prefers_reducedData(event.matches);
        });
        const set_media_orientation=(matches)=>{
          if(document.documentElement.classList.contains('ic_nr_browser_safari')&&document.documentElement.classList.value.match(/ic_nr_media_orientation_landscape|ic_nr_media_orientation_portrait/i)){
            setTimeout(()=>{
              document.body.style.setProperty('margin','1px');
              setTimeout(()=>{
                document.body.style.removeProperty('margin');
                this._removeEmpty_(document.body);
                this._viewportScrollToZero_();
              },350/2);
            },350/2);
          }
          if(matches){
            document.documentElement.classList.remove('ic_nr_media_orientation_landscape');
            document.documentElement.classList.add('ic_nr_media_orientation_portrait');
          }else{
            document.documentElement.classList.remove('ic_nr_media_orientation_portrait');
            document.documentElement.classList.add('ic_nr_media_orientation_landscape');
          }
          const style=document.createElement('style');
          style.innerHTML='html * { transition: unset !important; }';
          document.head.insertAdjacentElement('beforeend',style);
          setTimeout(()=>{
            style.parentElement.removeChild(style);
          },350/2);
        };
        set_media_orientation(matchMedia('(orientation:portrait)').matches);
        matchMedia('(orientation:portrait)').addEventListener('change',(event)=>{
          set_media_orientation(event.matches);
        });
        const set_media_displayMode=(matches)=>{
          if(matches){
            document.documentElement.classList.remove('ic_nr_media_displayMode_window');
            document.documentElement.classList.add('ic_nr_media_displayMode_fullscreen');
          }else{
            document.documentElement.classList.remove('ic_nr_media_displayMode_fullscreen');
            document.documentElement.classList.add('ic_nr_media_displayMode_window');
          }
        };
        set_media_displayMode(matchMedia('(display-mode:fullscreen)').matches);
        matchMedia('(display-mode:fullscreen)').addEventListener('change',(event)=>{
          set_media_displayMode(event.matches);
        });
      },
      /*🟢*/head(){
        this.dataset.config.lyin_js.insertAdjacentHTML('beforebegin','<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">');
        this.dataset.config.lyin_js.insertAdjacentHTML('beforebegin','<meta name="format-detection" content="address=no,email=no,telephone=no">');
        if(this.dataset.config.head_title||this.dataset.config.head_title===''){
          this.dataset.config.lyin_js.insertAdjacentHTML('beforebegin',`<title>${this.dataset.config.head_title}</title>`);
        }
        this.dataset.config.lyin_js.insertAdjacentHTML('beforebegin',`<link rel="stylesheet" href="${this.dataset.config.lyin_js.getAttribute('src').replace(/\.js/i,'.css')}" crossorigin>`);
        if(this.dataset.config.head_style){
          this.dataset.config.lyin_js.insertAdjacentHTML('beforebegin',`<link rel="stylesheet" href="${this.dataset.config.head_style}" crossorigin>`);
        }
        if(this.dataset.config.head_script){
          const element=document.createElement('script');
          element.setAttribute('src',this.dataset.config.head_script);
          element.setAttribute('type','module');
          document.head.insertAdjacentElement('beforeend',element);
        }
        if(this.dataset.config.head_icon){
          document.head.insertAdjacentHTML('beforeend',`<link rel="icon" type="image/png" href="${this.dataset.config.head_icon}">`);
        }
        if(document.documentElement.classList.contains('ic_nr_browser_safari')){
          if(this.dataset.config.head_icon_apple){
            document.head.insertAdjacentHTML('beforeend',`<link rel="apple-touch-icon" href="${this.dataset.config.head_icon_apple}">`);
          }
          document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-capable" content="yes">');
          document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-status-bar-style" content="white">');
          if(this.dataset.config.head_title||this.dataset.config.head_title===''){
            document.head.insertAdjacentHTML('beforeend',`<meta name="apple-mobile-web-app-title" content="${this.dataset.config.head_title}">`);
          }
        }else{
          const get_media_prefers_colorScheme=(matches)=>{
            return matches?this.dataset.config.head_themeColor_dark?this.dataset.config.head_themeColor_dark:'#000000':this.dataset.config.head_themeColor_light?this.dataset.config.head_themeColor_light:'#FFFFFF';
          };
          const element=document.createElement('meta');
          element.setAttribute('name','theme-color');
          element.setAttribute('content',get_media_prefers_colorScheme(matchMedia('(prefers-color-scheme:dark)').matches));
          const themeColor=document.head.insertAdjacentElement('beforeend',element);
          matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
            themeColor.setAttribute('content',get_media_prefers_colorScheme(event.matches));
          });
        }
        if(this.dataset.config.head_manifest){
          document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${this.dataset.config.head_manifest}">`);
        }
      },
      /*🟢*/ic_ve_viewport_scale(){
        if('visualViewport'in globalThis){
          let record=0;
          visualViewport.addEventListener('resize',()=>{
            if(visualViewport.scale!==record){
              record=visualViewport.scale;
              const loop=()=>{
                if(document.styleSheets){
                  for(let key=0,length=document.styleSheets.length;key<length;key++){
                    if(document.styleSheets[key].href&&document.styleSheets[key].href.match(/lyin\.css/i)){
                      document.styleSheets[key].insertRule(`html { --ic_ve_viewport_scale: ${record}; }`,document.styleSheets[key].cssRules.length);
                    }
                  }
                }else{
                  loop();
                }
              };
              loop();
            }
          });
        }
      },
      /*🟢*/dotActive(){
        addEventListener('pointerdown',(event)=>{
          event.target.classList.add('ic_active',`ic_active_${event.button}`,`ic_active_${event.pointerType}`);
          if(event.pointerType==='mouse'){
            event.target.classList.add('ic_active_down');
          }else{
            setTimeout(()=>{
              if(event.target.classList.contains('ic_active')&&!event.target.classList.contains('ic_active_move')&&!event.target.classList.contains('ic_active_outer')){
                event.target.classList.add('ic_active_down');
              }
            },350);
          }
          const remove=()=>{
            removeEventListener('pointermove',move);
            removeEventListener('touchmove',move);
            removeEventListener('pointerup',remove);
            removeEventListener('touchend',remove);
            removeEventListener('dragend',remove);
            setTimeout(()=>{
              event.target.classList.remove('ic_active',`ic_active_${event.button}`,`ic_active_${event.pointerType}`,'ic_active_down','ic_active_move','ic_active_outer');
              setTimeout(()=>{
                if(!event.target.getAttribute('class')){
                  event.target.removeAttribute('class');
                }
              },1000/24);
            },1000/24);
          };
          const move=(event_)=>{
            if(!event.target.classList.contains('ic_active_move')&&(event_.y>=event.y+6||event_.y<=event.y-6)){
              event.target.classList.remove('ic_active_down');
              event.target.classList.add('ic_active_move');
            }
            if(document.elementFromPoint(event_.x||event_.changedTouches[0].clientX,event_.y||event_.changedTouches[0].clientY)!==event.target){
              if(!event.target.classList.contains('ic_active_outer')){
                event.target.classList.add('ic_active_outer');
              }
            }else{
              if(event.target.classList.contains('ic_active_outer')){
                event.target.classList.remove('ic_active_outer');
              }
            }
          };
          addEventListener('pointermove',move);
          addEventListener('touchmove',move);
          addEventListener('pointerup',remove,{once:true});
          addEventListener('touchend',remove,{once:true});
          addEventListener('dragend',remove,{once:true});
        });
      },
    // 💠 4 intervene
      /*🟢*/_isKeyboardInputArea_(target){
        const loop=(target)=>{
          if(target!==document.documentElement){
            if(target.contentEditable==='true'||target.localName.match(/input|textarea/)){
              return target;
            }
            return loop(target.parentElement);
          }
          return false;
        };
        return loop(target);
      },
      /*🟢*/no_contextMenu(){
        addEventListener('contextmenu',(event)=>{
          if(!this._isKeyboardInputArea_(event.target)){
            event.preventDefault();
          }
        });
      },
      /*🟢*/no_drag(){
        addEventListener('dragstart',(event)=>{
          if(event.target.localName.match(/a|img/i)){
            event.preventDefault();
          }
        });
      },
      /*🟢*/no_twoFingerZoom(){
        addEventListener('wheel',(event)=>{
          if(event.ctrlKey){
            event.preventDefault();
          }
        },{passive:false});
        addEventListener('gesturestart',(event)=>{
          event.preventDefault();
        });
      },
      /*🟢*/no_doubleClickZoom(){
        addEventListener('touchstart',(event)=>{
          if(event.touches.length>1){
            event.preventDefault();
          }
        });
        let end=0;
        addEventListener('touchend',(event)=>{
          if(Date.now()-end<=350*1.5){
            event.preventDefault();
          }
          end=Date.now();
        });
      },
      /*🔴*/no_touchBack(){},
      /*🔴*/no_buttonBack(){},
      /*🟢*/fixedRootView(){
        addEventListener('touchmove',(event)=>{
          if(event.target===document.documentElement){
            event.preventDefault();
          }
        },{passive:false});
        addEventListener('scroll',()=>{
          this._viewportScrollToZero_();
        });
        if('visualViewport'in globalThis){
          visualViewport.addEventListener('scroll',()=>{
            this._viewportScrollToZero_();
          });
        }
      },
      /*🟢*/input_inputState(){
        addEventListener('pointerup',(event)=>{
          if(document.activeElement.localName.match(/input|textarea/)&&!this._isKeyboardInputArea_(event.target)){
            document.activeElement.blur();
          }
        });
        if('visualViewport'in globalThis){
          visualViewport.addEventListener('resize',()=>{
            this._viewportScrollToZero_();
            if(document.documentElement.clientHeight!==visualViewport.height){
              document.documentElement.classList.add('ic_nr_inputState');
              document.documentElement.style.setProperty('height',`${visualViewport.height}px`);
            }else{
              document.documentElement.classList.remove('ic_nr_inputState');
              document.documentElement.style.removeProperty('height');
              this._removeEmpty_(document.documentElement);
            }
            if(visualViewport.offsetTop){
              document.activeElement.scroll({behavior:'smooth',top:document.activeElement.scrollTop+visualViewport.offsetTop+64,left:0});
            }
          });
        }
      },
      /*🟢*/input_clickBottom(){
        addEventListener('click',(event)=>{
          const target=this._isKeyboardInputArea_(event.target);
          if(target){
            setTimeout(()=>{
              const distance=target.getBoundingClientRect().bottom-event.y;
              if(distance<64){
                target.scroll({behavior:'smooth',top:target.scrollTop+64-distance,left:0});
              }
            },350/4);
          }
        });
      },
      /*🔴*/input_observeCursor(){},
      /*🟢*/partialScroll(){
        if(!CSS.supports('overscroll-behavior:contain')){
          const preventDefault=(event)=>{
            event.preventDefault();
          };
          addEventListener('touchmove',preventDefault,{passive:false});
          let start_y=null;
          let start_x=null;
          let scrollDirection=null;
          let _element_=null;
          addEventListener('touchstart',(event)=>{
            const loop=(target)=>{
              if(getComputedStyle(target).overflowY.match(/auto|scroll/i)||getComputedStyle(target).overflowX.match(/auto|scroll/i)){
                if(getComputedStyle(target).overflowY.match(/auto|scroll/i)){
                  if(target.scrollHeight!==target.offsetHeight){
                    if(target.scrollTop<=0){
                      start_y=event.changedTouches[0].screenY;
                      scrollDirection='top';
                      _element_=target;
                    }else{
                      if(target.scrollTop>=target.scrollHeight-target.offsetHeight){
                        start_y=event.changedTouches[0].screenY;
                        scrollDirection='bottom';
                        _element_=target;
                      }else{
                        removeEventListener('touchmove',preventDefault);
                      }
                    }
                  }
                }else{
                  if(target.scrollWidth!==target.offsetWidth){
                    start_y=event.changedTouches[0].screenY;
                    start_x=event.changedTouches[0].screenX;
                    scrollDirection='horizontal';
                  }else{
                    loop(target.parentElement);
                  }
                }
              }else{
                if(target.parentElement){
                  loop(target.parentElement);
                }else{
                  removeEventListener('touchmove',preventDefault);
                }
              }
            };
            loop(event.target);
          });
          addEventListener('touchmove',(event)=>{
            if(scrollDirection){
              switch(scrollDirection){
                case'top':
                  {
                    if(event.changedTouches[0].screenY<start_y){
                      removeEventListener('touchmove',preventDefault);
                      scrollDirection=null;
                    }else{
                      if(_element_.scrollTop===0){
                        document.documentElement.classList.add('ic_nr_partialScrollEndpointOuter');
                      }
                    }
                  }
                  break;
                case'bottom':
                  {
                    if(event.changedTouches[0].screenY>start_y){
                      removeEventListener('touchmove',preventDefault);
                      scrollDirection=null;
                    }else{
                      if(_element_.scrollTop===_element_.scrollHeight-_element_.offsetHeight){
                        document.documentElement.classList.add('ic_nr_partialScrollEndpointOuter');
                      }
                    }
                  }
                  break;
                case'horizontal':
                  {
                    const move_y=event.changedTouches[0].screenY;
                    if((move_y<=start_y+4&&move_y>=start_y-4)&&event.changedTouches[0].screenX!==start_x){
                      removeEventListener('touchmove',preventDefault);
                      scrollDirection=null;
                    }
                  }
                  break;
                default:
                  break;
              }
            }
          });
          addEventListener('touchend',()=>{
            removeEventListener('touchmove',preventDefault);
            addEventListener('touchmove',preventDefault,{passive:false});
            start_y=null;
            start_x=null;
            scrollDirection=null;
            _element_=null;
            document.documentElement.classList.remove('ic_nr_partialScrollEndpointOuter');
            this._removeEmpty_(document.documentElement);
          });
        }
      }
  };
  for(const key in lyin){
    if(!key.match(/^\_/)){
      lyin[key]();
    }
  }
// #debug
// #after
}