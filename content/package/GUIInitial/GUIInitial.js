'use strict';
// <<<< <<<< <<<< <<<<
// GUI Initial
// for Browser
// GUIInitial.js
// ==== ==== ==== ====
// index.html
// <script src="/GUIInitial.js" type="application/javascript" data-gui_initial="{
//   'startBackgroundColor_light': '</""/=#FFFFFF>',
//   'startBackgroundColor_dark': '</""/=#000000>',
//   'serviceWorker': '/sw.js',
//   'head_title': '</""/="">',
//   'head_style': '/style.css',
//   'head_script': '/script.js',
//   'head_icon': '/icon.png',
//   'head_icon_apple': '/icon-apple.png',
//   'head_themeColor_light': '</""/=#FFFFFF>',
//   'head_themeColor_dark': '</""/=#000000>',
//   'head_manifest': '/manifest.webmanifest'
// }"></script>
// ~~~~ ~~~~ ~~~~ ~~~~
// sw.js
// 'use strict';
// // #before
//   // console
//   self.console.log('#### start: sw.js');
// // #import
// // #variable
// // #block
// // #build
//   // auto cache
//   const version='auto';
//   self.addEventListener('install',(event)=>{
//     event.waitUntil(self.caches.open(version).then((cache)=>{
//       return cache.addAll([]);
//     }));
//   });
//   self.addEventListener('fetch',(event)=>{
//     event.respondWith(self.caches.match(event.request).then((respond)=>{
//       return self.fetch(event.request).then((response)=>{
//         const responseClone=response.clone();
//         self.caches.open(version).then((cache)=>{
//           cache.put(event.request,responseClone);
//         });
//         return response;
//       }).catch((error)=>{
//         return respond;
//       });
//     }));
//   });
//   self.addEventListener('activate',(event)=>{
//     event.waitUntil(self.caches.keys().then((keyList)=>{
//       return self.Promise.all(keyList.map((key)=>{
//         if([version].indexOf(key)===-1){
//           return self.caches.delete(key);
//         }
//       }));
//     }));
//   });
// // #debug
// // #after
//   // console
//   self.console.log('#### end: sw.js');
// ~~~~ ~~~~ ~~~~ ~~~~
// manifest.webmanifest
// {
//   "name": "~",
//   "short_name": "~",
//   "start_url": "/#pwa",
//   "theme_color": "#000000",
//   "background_color": "#000000",
//   "orientation": "natural",
//   "display": "standalone",
//   "icons": [
//     {
//       "src": "/icon-144x144-any.png",
//       "sizes": "144x144",
//       "type": "image/png",
//       "purpose": "any"
//     },
//     {
//       "src": "/icon-192x192-any.png",
//       "sizes": "192x192",
//       "type": "image/png",
//       "purpose": "any"
//     },
//     {
//       "src": "/icon-512x512-any.png",
//       "sizes": "512x512",
//       "type": "image/png",
//       "purpose": "any"
//     },
//     {
//       "src": "/icon-144x144-maskable.png",
//       "sizes": "144x144",
//       "type": "image/png",
//       "purpose": "maskable"
//     },
//     {
//       "src": "/icon-192x192-maskable.png",
//       "sizes": "192x192",
//       "type": "image/png",
//       "purpose": "maskable"
//     },
//     {
//       "src": "/icon-512x512-maskable.png",
//       "sizes": "512x512",
//       "type": "image/png",
//       "purpose": "maskable"
//     }
//   ]
// }
// >>>> >>>> >>>> >>>>
{
// #before
  // console
  window.console.log('#### start: GUIInitial.js');
// #import
// #variable
// #block
// #build
  // GUIInitial
  const GUIInitial={
    /*🟢*/dataset(){
      for(const value of window.document.scripts){
        if(value.dataset.gui_initial){
          this.dataset.config=window.JSON.parse(value.dataset.gui_initial.replace(/'/g,'"'));
          value.removeAttribute('data-gui_initial');
          this.dataset.config.GUIInitial_js=value;
          break;
        }
      }
    },
    /*🟢*/start_backgroundColor(){
      window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?this.dataset.config.startBackgroundColor_dark?this.dataset.config.startBackgroundColor_dark:'#000000':this.dataset.config.startBackgroundColor_light?this.dataset.config.startBackgroundColor_light:'#FFFFFF'}`);
      window.addEventListener('load',()=>{
        const loop=()=>{
          if(window.document.documentElement.style.getPropertyValue('background-color')){
            window.setTimeout(()=>{
              window.document.documentElement.style.removeProperty('background-color');
              window.setTimeout(()=>{
                if(!window.document.documentElement.style[0]){
                  window.document.documentElement.removeAttribute('style');
                }
              },350/2);
            },350/2);
            return true;
          }
          window.setTimeout(loop,1000/24);
        };
        loop();
      },{once:true});
    },
    /*🟢*/start_opacity(){
      const loop=()=>{
        if(window.document.body){
          window.document.body.style.setProperty('opacity','0');
          return true;
        }
        window.setTimeout(loop,1000/24);
      };
      loop();
      window.addEventListener('load',()=>{
        const loop=()=>{
          if(window.document.body.style.getPropertyValue('opacity')){
            window.setTimeout(()=>{
              window.document.body.style.removeProperty('opacity');
              window.setTimeout(()=>{
                if(!window.document.body.style[0]){
                  window.document.body.removeAttribute('style');
                }
              },350/2);
            },350/2);
            return true;
          }
          window.setTimeout(loop,1000/24);
        };
        loop();
      },{once:true});
    },
    /*🟢*/start_progress(){
      window.document.documentElement.classList.add('_ic_bk_progressIndicatorCircular_indeterminate_');
      window.addEventListener('load',()=>{
        if(window.document.documentElement.classList.contains('_ic_bk_progressIndicatorCircular_indeterminate_')){
          window.setTimeout(()=>{
            window.document.documentElement.classList.remove('_ic_bk_progressIndicatorCircular_indeterminate_');
          },350/2);
        }
      },{once:true});
    },
    /*🟢*/serviceWorker(){
      if(this.dataset.config.serviceWorker&&'serviceWorker'in window.navigator){
        window.navigator.serviceWorker.register(this.dataset.config.serviceWorker,{scope:'/'});
      }
    },
    /*🟢*/navigator(){
      const userAgent=window.navigator.userAgent;
      const cls=window.document.documentElement.classList;
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
      if(userAgent.match(/iPhone|iPad|Android|Mobile/i)){
        cls.add('ic_nr_platform_mobile');
      }
      if(window.location.search.replace(/^\?/,'').split('&').includes('pwa')||window.location.hash.replace(/^\#/,'').split('&').includes('pwa')){
        cls.add('ic_nr_pwa');
      }
      if(window.document.createElement('video').canPlayType('application/vnd.apple.mpegurl')){
        cls.add('ic_nr_video_m3u8');
      }
    },
    /*🟢*/navigator_media(){
      const set_media_prefers_colorScheme=(matches)=>{
        if(matches){
          window.document.documentElement.classList.remove('ic_nr_media_prefers_colorScheme_light');
          window.document.documentElement.classList.add('ic_nr_media_prefers_colorScheme_dark');
        }else{
          window.document.documentElement.classList.remove('ic_nr_media_prefers_colorScheme_dark');
          window.document.documentElement.classList.add('ic_nr_media_prefers_colorScheme_light');
        }
      };
      set_media_prefers_colorScheme(window.matchMedia('(prefers-color-scheme:dark)').matches);
      window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
        set_media_prefers_colorScheme(event.matches);
      });
      const set_media_prefers_reducedMotion=(matches)=>{
        if(matches){
          window.document.documentElement.classList.remove('ic_nr_media_prefers_reducedMotion_false');
          window.document.documentElement.classList.add('ic_nr_media_prefers_reducedMotion_true');
        }else{
          window.document.documentElement.classList.remove('ic_nr_media_prefers_reducedMotion_true');
          window.document.documentElement.classList.add('ic_nr_media_prefers_reducedMotion_false');
        }
      };
      set_media_prefers_reducedMotion(window.matchMedia('(prefers-reduced-motion:reduce)').matches);
      window.matchMedia('(prefers-reduced-motion:reduce)').addEventListener('change',(event)=>{
        set_media_prefers_reducedMotion(event.matches);
      });
      const set_media_prefers_reducedData=(matches)=>{
        if(matches){
          window.document.documentElement.classList.remove('ic_nr_media_prefers_reducedData_false');
          window.document.documentElement.classList.add('ic_nr_media_prefers_reducedData_true');
        }else{
          window.document.documentElement.classList.remove('ic_nr_media_prefers_reducedData_true');
          window.document.documentElement.classList.add('ic_nr_media_prefers_reducedData_false');
        }
      };
      set_media_prefers_reducedData(window.matchMedia('(prefers-reduced-data:reduce)').matches);
      window.matchMedia('(prefers-reduced-data:reduce)').addEventListener('change',(event)=>{
        set_media_prefers_reducedData(event.matches);
      });
      const set_media_orientation=(matches)=>{
        if(window.document.documentElement.classList.contains('ic_nr_browser_safari')&&window.document.documentElement.classList.value.match(/ic_nr_media_orientation_landscape|ic_nr_media_orientation_portrait/i)){
          window.setTimeout(()=>{
            window.document.body.style.setProperty('margin','1px');
            window.setTimeout(()=>{
              window.document.body.style.removeProperty('margin');
              window.setTimeout(()=>{
                if(!window.document.body.style[0]){
                  window.document.body.removeAttribute('style');
                }
              },350/2);
              window.scroll({behavior:'smooth',top:0,left:0});
              window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
              window.document.body.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
            },350/2);
          },350/2);
        }
        if(matches){
          window.document.documentElement.classList.remove('ic_nr_media_orientation_landscape');
          window.document.documentElement.classList.add('ic_nr_media_orientation_portrait');
        }else{
          window.document.documentElement.classList.remove('ic_nr_media_orientation_portrait');
          window.document.documentElement.classList.add('ic_nr_media_orientation_landscape');
        }
        const style=window.document.createElement('style');
        style.innerHTML='html * { transition: unset !important; }';
        window.document.head.insertAdjacentElement('beforeend',style);
        window.setTimeout(()=>{
          style.parentElement.removeChild(style);
        },350/2);
      };
      set_media_orientation(window.matchMedia('(orientation:portrait)').matches);
      window.matchMedia('(orientation:portrait)').addEventListener('change',(event)=>{
        set_media_orientation(event.matches);
      });
      const set_media_displayMode=(matches)=>{
        if(matches){
          window.document.documentElement.classList.remove('ic_nr_media_displayMode_window');
          window.document.documentElement.classList.add('ic_nr_media_displayMode_fullscreen');
        }else{
          window.document.documentElement.classList.remove('ic_nr_media_displayMode_fullscreen');
          window.document.documentElement.classList.add('ic_nr_media_displayMode_window');
        }
      };
      set_media_displayMode(window.matchMedia('(display-mode:fullscreen)').matches);
      window.matchMedia('(display-mode:fullscreen)').addEventListener('change',(event)=>{
        set_media_displayMode(event.matches);
      });
    },
    /*🟢*/head(){
      this.dataset.config.GUIInitial_js.insertAdjacentHTML('beforebegin','<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">');
      this.dataset.config.GUIInitial_js.insertAdjacentHTML('beforebegin','<meta name="format-detection" content="address=no,email=no,telephone=no">');
      if(this.dataset.config.head_title||this.dataset.config.head_title===''){
        this.dataset.config.GUIInitial_js.insertAdjacentHTML('beforebegin',`<title>${this.dataset.config.head_title}</title>`);
      }
      this.dataset.config.GUIInitial_js.insertAdjacentHTML('beforebegin',`<link rel="stylesheet" href="${this.dataset.config.GUIInitial_js.getAttribute('src').replace(/\.js/i,'.css')}" crossorigin>`);
      if(this.dataset.config.head_style){
        this.dataset.config.GUIInitial_js.insertAdjacentHTML('beforebegin',`<link rel="stylesheet" href="${this.dataset.config.head_style}" crossorigin>`);
      }
      if(this.dataset.config.head_script){
        const element=window.document.createElement('script');
        element.setAttribute('src',this.dataset.config.head_script);
        element.setAttribute('type','module');
        window.document.head.insertAdjacentElement('beforeend',element);
      }
      if(this.dataset.config.head_icon){
        window.document.head.insertAdjacentHTML('beforeend',`<link rel="icon" type="image/png" href="${this.dataset.config.head_icon}">`);
      }
      if(window.document.documentElement.classList.contains('ic_nr_browser_safari')){
        if(this.dataset.config.head_icon_apple){
          window.document.head.insertAdjacentHTML('beforeend',`<link rel="apple-touch-icon" href="${this.dataset.config.head_icon_apple}">`);
        }
        window.document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-capable" content="yes">');
        window.document.head.insertAdjacentHTML('beforeend','<meta name="apple-mobile-web-app-status-bar-style" content="white">');
        if(this.dataset.config.head_title||this.dataset.config.head_title===''){
          window.document.head.insertAdjacentHTML('beforeend',`<meta name="apple-mobile-web-app-title" content="${this.dataset.config.head_title}">`);
        }
      }else{
        const get_media_prefers_colorScheme=(matches)=>{
          return matches?this.dataset.config.head_themeColor_dark?this.dataset.config.head_themeColor_dark:'#000000':this.dataset.config.head_themeColor_light?this.dataset.config.head_themeColor_light:'#FFFFFF';
        };
        const element=window.document.createElement('meta');
        element.setAttribute('name','theme-color');
        element.setAttribute('content',get_media_prefers_colorScheme(window.matchMedia('(prefers-color-scheme:dark)').matches));
        const themeColor=window.document.head.insertAdjacentElement('beforeend',element);
        window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
          themeColor.setAttribute('content',get_media_prefers_colorScheme(event.matches));
        });
      }
      if(this.dataset.config.head_manifest){
        window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${this.dataset.config.head_manifest}">`);
      }
    },
    /*🟢*/no_contextMenu(){
      window.addEventListener('contextmenu',(event)=>{
        event.preventDefault();
      });
    },
    /*🟢*/no_zoom_doubleClick(){
      window.addEventListener('touchstart',(event)=>{
        if(event.touches.length>1){
          event.preventDefault();
        }
      });
      let end=0;
      window.addEventListener('touchend',(event)=>{
        if(window.Date.now()-end<=350*1.5){
          event.preventDefault();
        }
        end=window.Date.now();
      });
    },
    /*🟢*/no_zoom_twoFinger(){
      window.addEventListener('wheel',(event)=>{
        if(event.ctrlKey){
          event.preventDefault();
        }
      },{passive:false});
      window.addEventListener('gesturestart',(event)=>{
        event.preventDefault();
      });
    },
    /*🟢*/no_drag(){
      window.addEventListener('dragstart',(event)=>{
        if(event.target.localName.match(/a|img/i)){
          event.preventDefault();
        }
      });
    },
    /*🔴*/no_back_touch(){},
    /*🔴*/no_back_button(){},
    /*🟢*/form_focus(){
      if(window.document.documentElement.classList.contains('ic_nr_platform_mobile')){
        window.addEventListener('keydown',(event)=>{
          if(event.key==='Enter'&&event.target.localName==='input'){
            event.target.blur();
          }
        });
      }
    },
    /*🟢*/partialScroll(){
      if(!window.CSS.supports('overscroll-behavior:contain')){
        const preventDefault=(event)=>{
          event.preventDefault();
        };
        window.addEventListener('touchmove',preventDefault,{passive:false});
        let start_y=null;
        let start_x=null;
        let scrollDirection=null;
        window.addEventListener('touchstart',(event)=>{
          const loop=(target)=>{
            if(window.getComputedStyle(target).overflowY.match(/auto|scroll/i)||window.getComputedStyle(target).overflowX.match(/auto|scroll/i)){
              if(window.getComputedStyle(target).overflowY.match(/auto|scroll/i)){
                if(target.scrollHeight!==target.offsetHeight){
                  if(target.scrollTop<=0){
                    start_y=event.changedTouches[0].screenY;
                    scrollDirection='top';
                  }else{
                    if(target.scrollTop>=target.scrollHeight-target.offsetHeight){
                      start_y=event.changedTouches[0].screenY;
                      scrollDirection='bottom';
                    }else{
                      window.removeEventListener('touchmove',preventDefault);
                    }
                  }
                }
              }else{
                if(target.scrollWidth!==target.offsetWidth){
                  start_y=event.changedTouches[0].screenY;
                  start_x=event.changedTouches[0].screenX;
                  scrollDirection='horizontal';
                }
              }
            }else{
              if(target.parentElement){
                loop(target.parentElement);
              }else{
                window.removeEventListener('touchmove',preventDefault);
              }
            }
          };
          loop(event.target);
        });
        window.addEventListener('touchmove',(event)=>{
          if(scrollDirection){
            switch(scrollDirection){
              case'top':
                {
                  if(event.changedTouches[0].screenY<start_y){
                    window.removeEventListener('touchmove',preventDefault);
                    scrollDirection=null;
                  }
                }
                break;
              case'bottom':
                {
                  if(event.changedTouches[0].screenY>start_y){
                    window.removeEventListener('touchmove',preventDefault);
                    scrollDirection=null;
                  }
                }
                break;
              case'horizontal':
                {
                  const move_y=event.changedTouches[0].screenY;
                  if((move_y<=start_y+3&&move_y>=start_y-3)&&event.changedTouches[0].screenX!==start_x){
                    window.removeEventListener('touchmove',preventDefault);
                    scrollDirection=null;
                  }
                }
                break;
              default:
                break;
            }
          }
        });
        window.addEventListener('touchend',()=>{
          window.removeEventListener('touchmove',preventDefault);
          window.addEventListener('touchmove',preventDefault,{passive:false});
          start_y=start_x=scrollDirection=null;
        });
      }
    },
    /*🟢*/dotActive(){
      window.addEventListener('pointerdown',(event)=>{
        event.target.classList.add('ic_active',`ic_active_${event.button}`,`ic_active_${event.pointerType}`);
        if(event.pointerType==='mouse'){
          event.target.classList.add('ic_active_down');
        }else{
          window.setTimeout(()=>{
            if(event.target.classList.contains('ic_active')&&!event.target.classList.contains('ic_active_move')&&!event.target.classList.contains('ic_active_outer')){
              event.target.classList.add('ic_active_down');
            }
          },350);
        }
        const remove=()=>{
          window.removeEventListener('pointermove',move);
          window.removeEventListener('touchmove',move);
          window.removeEventListener('pointerup',remove);
          window.removeEventListener('touchend',remove);
          window.removeEventListener('dragend',remove);
          window.setTimeout(()=>{
            event.target.classList.remove('ic_active',`ic_active_${event.button}`,`ic_active_${event.pointerType}`,'ic_active_down','ic_active_move','ic_active_outer');
            window.setTimeout(()=>{
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
          if(window.document.elementFromPoint(event_.x||event_.changedTouches[0].clientX,event_.y||event_.changedTouches[0].clientY)!==event.target){
            if(!event.target.classList.contains('ic_active_outer')){
              event.target.classList.add('ic_active_outer');
            }
          }else{
            if(event.target.classList.contains('ic_active_outer')){
              event.target.classList.remove('ic_active_outer');
            }
          }
        };
        window.addEventListener('pointermove',move);
        window.addEventListener('touchmove',move);
        window.addEventListener('pointerup',remove,{once:true});
        window.addEventListener('touchend',remove,{once:true});
        window.addEventListener('dragend',remove,{once:true});
      });
    }
  };
  for(const key in GUIInitial){
    GUIInitial[key]();
  }
// #debug
// #after
  // console
  window.console.log('#### end: GUIInitial.js');
}