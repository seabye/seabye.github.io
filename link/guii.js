'use strict';
// Graphical User Interface Initial
// ==== ==== ==== ====
// #import
// #global
    // ##variable
    // ##module
    // ##build
// #content
    // ##variable
    // ##module
    // ##build
// #debug
// ==== ==== ==== ====
// {
//     'background_color_light': '',
//     'background_color_dark': '',
//     'service_worker': '',
//     'head_title': '',
//     'head_style': '',
//     'head_script': '',
//     'head_icon': '',
//     'head_icon_apple': '',
//     'head_theme_color_light': '',
//     'head_theme_color_dark': '',
//     'head_manifest': ''
// }
// ==== ==== ==== ====
// #import
// #global
{
    // ##variable
    // ##module
        // guim copy
        const guim={
            throttle:(callback,wait,first)=>{
                if(typeof wait!=='number'){
                    wait=1000/24;
                }
                if(first!==true){
                    first=false;
                }
                let timeout=null;
                return function(){
                    const set=()=>{
                        timeout=window.setTimeout(()=>{
                            timeout=null;
                            callback.apply(this,arguments);
                        },wait);
                    };
                    if(first){
                        first=false;
                        callback.apply(this,arguments);
                        set();
                    }else{
                        if(!timeout){
                            set();
                        }
                    }
                };
            },
            loop:function(condition,callback,wait){
                if(typeof wait!=='number'){
                    wait=1000/24;
                }
                if(condition()){
                    callback();
                }else{
                    window.setTimeout(()=>{
                        this.loop(condition,callback,wait);
                    },wait);
                }
            }
        };
    // ##build
        // guii
            // data
            let config={};
            for(const item of window.document.scripts){
                if(item.dataset.guii){
                    config=window.JSON.parse(item.dataset.guii.replace(/'/g,'"'));
                    config.head_guii_js=item;
                    config.head_guii_css_href=item.getAttribute('src').replace('.js','.css');
                    break;
                }
            }
            // background color
            window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?config.background_color_dark?config.background_color_dark:'#000000':config.background_color_light?config.background_color_light:'#FFFFFF'}`);
            window.addEventListener('load',()=>{
                window.document.documentElement.style.removeProperty('background-color');
            },{once:true});
            // opacity
            guim.loop(()=>{
                let result=false;
                for(const item of window.document.documentElement.children){
                    if(item.localName==='body'){
                        result=true;
                        break;
                    }
                }
                return result;
            },()=>{
                window.document.body.style.setProperty('opacity','0');
            },1000/60);
            window.addEventListener('load',()=>{
                guim.loop(()=>{
                    let result=false;
                    if(window.document.body.style.getPropertyValue('opacity')==='0'){
                        result=true;
                    }
                    return result;
                },()=>{
                    window.document.body.style.removeProperty('opacity');
                    if(!window.document.body.style[0]){
                        window.document.body.removeAttribute('style');
                    }
                },1000/60);
            },{once:true});
            // service worker
            if(config.service_worker&&'serviceWorker'in window.navigator){
                window.navigator.serviceWorker.register(config.service_worker,{scope:'./'}).then((registration)=>{
                    window.console.log('#### Registration successful, scope is:',registration.scope);
                }).catch((error)=>{
                    window.console.log('#### Service worker registration failed, error:',error);
                });
            }
            // head
            config.head_guii_js.insertAdjacentHTML('beforebegin',`
                <meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">
                <meta name="format-detection" content="address=no,email=no,telephone=no">
                <title>${config.head_title}</title>
                <link rel="stylesheet" href="${config.head_guii_css_href}">
                <link rel="stylesheet" href="${config.head_style}">
            `);
            {
                const element=window.document.createElement('script');
                element.setAttribute('src',config.head_script);
                element.setAttribute('type','module');
                window.document.head.insertAdjacentElement('beforeend',element);
            }
            window.document.head.insertAdjacentHTML('beforeend',`
                <link rel="icon" type="image/png" href="${config.head_icon}">
            `);
            if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
                window.document.head.insertAdjacentHTML('beforeend',`
                    <link rel="apple-touch-icon" href="${config.head_icon_apple}">
                    <meta name="apple-mobile-web-app-capable" content="yes">
                    <meta name="apple-mobile-web-app-status-bar-style" content="white">
                    <meta name="apple-mobile-web-app-title" content="${config.head_title}">
                `);
            }else{
                const value=(matches)=>{
                    return matches?config.head_theme_color_dark?config.head_theme_color_dark:'#212121':config.head_theme_color_light?config.head_theme_color_light:'#E1E1E1';
                };
                const element=window.document.createElement('meta');
                element.setAttribute('name','theme-color');
                element.setAttribute('content',value(window.matchMedia('(prefers-color-scheme:dark)').matches));
                const theme_color=window.document.head.insertAdjacentElement('beforeend',element);
                window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
                    theme_color.setAttribute('content',value(event.matches));
                });
            }
            window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${config.head_manifest}">`);
            // size
            {
                const action=(event)=>{
                    if(event.type==='orientationchange'){
                        window.document.body.style.setProperty('display','none');
                    }
                    const set=(head)=>{
                        window.document.documentElement.style.setProperty(`${head}-width`,`${window.innerWidth}px`);
                        if(!window.navigator.userAgent.match('Mobile')||(window.navigator.userAgent.match('Mobile')&&!window.document.activeElement.localName.match(/input|textarea/))){
                            window.document.documentElement.style.setProperty(`${head}-height`,`${window.innerHeight}px`);
                        }
                    };
                    set('min');
                    if(window.parseInt(window.document.documentElement.style.getPropertyValue('min-height'))<window.parseInt(window.document.documentElement.style.getPropertyValue('min-width'))){
                        set('max');
                        window.document.documentElement.classList.remove('ic_nr_orientation_portrait');
                        window.document.documentElement.classList.add('ic_nr_orientation_landscape');
                    }else{
                        window.document.documentElement.style.removeProperty('max-width');
                        window.document.documentElement.style.removeProperty('max-height');
                        if(!window.document.documentElement.style[0]){
                            window.document.documentElement.removeAttribute('style');
                        }
                        window.document.documentElement.classList.remove('ic_nr_orientation_landscape');
                        window.document.documentElement.classList.add('ic_nr_orientation_portrait');
                    }
                    if(event.type==='orientationchange'){
                        window.setTimeout(()=>{
                            window.document.body.style.removeProperty('display');
                            if(!window.document.body.style[0]){
                                window.document.body.removeAttribute('style');
                            }
                        },350);
                    }
                };
                window.addEventListener('load',action,{once:true});
                window.addEventListener('resize',guim.throttle(action,1000/60));
                window.addEventListener('resize',guim.throttle(action,350*3));
                window.addEventListener('orientationchange',(event)=>{
                    window.setTimeout(()=>{
                        action(event);
                    },350);
                });
                window.addEventListener('blur',action);
                window.addEventListener('focus',action);
            }
            if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
                const action=()=>{
                    window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                    if(window.getComputedStyle(window.document.documentElement).transform!=='none'){
                        window.scroll({behavior:'smooth',left:0,top:0});
                    }
                }
                window.addEventListener('load',action,{once:true});
                window.addEventListener('orientationchange',()=>{
                    window.setTimeout(action,350*3);
                });
            }
            // :hov action
            window.addEventListener('pointerdown',()=>{});
            // context menu
            window.addEventListener('contextmenu',(event)=>{
                event.preventDefault();
            });
            // touchpad zoom
            window.addEventListener('wheel',(event)=>{
                if(event.ctrlKey){
                    event.preventDefault();
                }
            },{passive:false});
            // tabindex
            window.document.documentElement.setAttribute('tabindex','-1');
            guim.loop(()=>{
                let result=false;
                for(const item of window.document.documentElement.children){
                    if(item.localName==='body'){
                        result=true;
                        break;
                    }
                }
                return result;
            },()=>{
                window.document.head.setAttribute('tabindex','-1');
                window.document.body.setAttribute('tabindex','-1');
            },1000/60);
            // form input
            window.addEventListener('pointerdown',(event)=>{
                if(!event.target.localName.match(/input|textarea/)&&window.document.activeElement.localName.match(/input|textarea/)){
                    window.document.activeElement.blur();
                    window.setTimeout(()=>{
                        window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                        if(window.getComputedStyle(window.document.documentElement).transform!=='none'){
                            window.scroll({behavior:'smooth',left:0,top:0});
                        }
                    },350);
                };
            });
            window.addEventListener('orientationchange',()=>{
                if(window.document.activeElement.localName.match(/input|textarea/)){
                    window.document.activeElement.blur();
                }
            });
            window.addEventListener('keydown',(event)=>{
                if(event.key==='Enter'){
                    window.setTimeout(()=>{
                        window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                        if(window.getComputedStyle(window.document.documentElement).transform!=='none'){
                            window.scroll({behavior:'smooth',left:0,top:0});
                        }
                    },350);
                }
            });
            if(!(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg'))){
                window.addEventListener('pointerdown',(event)=>{
                    if(event.target.localName.match(/input|textarea/)){
                        window.setTimeout(()=>{
                            event.target.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
                        },350*2);
                    }
                });
            }
            // scroll
            if(!window.CSS.supports('overscroll-behavior:contain')){
                const action=()=>{
                    for(const item of window.document.all){
                        if(window.getComputedStyle(item).overflowY.match(/auto|scroll/)){
                            if(item.scrollHeight===item.clientHeight){
                                item.style.setProperty('touch-action','pan-x');
                            }else{
                                item.style.removeProperty('touch-action');
                                if(!item.style[0]){
                                    item.removeAttribute('style');
                                }
                            }
                        }
                    }
                };
                new MutationObserver(action).observe(window.document.documentElement,{attributes:true,childList:true,subtree:true});
                window.addEventListener('load',action,{once:true});
                window.addEventListener('resize',guim.throttle(action,1000/60));
                window.addEventListener('resize',guim.throttle(action,350*3));
                window.addEventListener('orientationchange',()=>{
                    window.setTimeout(action,350*2);
                });
            }
            // ic_nr / ic_ navigator
            {
                const user_agent=window.navigator.userAgent;
                const class_=window.document.documentElement.classList;
                if(user_agent.match('Unix')){class_.add('ic_nr_system_unix');}
                if(user_agent.match('Mac OS')&&!user_agent.match('iPhone')&&!user_agent.match('iPad')){class_.add('ic_nr_system_brand_apple','ic_nr_system_macos');}
                if(user_agent.match('Windows')){class_.add('ic_nr_system_brand_microsoft','ic_nr_system_windows');}
                if(user_agent.match('Linux')&&!user_agent.match('Android')){class_.add('ic_nr_system_linux');}
                if(user_agent.match('CrOS')){class_.add('ic_nr_system_brand_google','ic_nr_system_chromeos');}
                if(user_agent.match(/iPhone|iPad/)){class_.add('ic_nr_system_brand_apple','ic_nr_system_ios');}
                if(user_agent.match('Android')){class_.add('ic_nr_system_brand_google','ic_nr_system_android');}
                if(user_agent.match('Firefox')){class_.add('ic_nr_browser_firefox');}
                if(user_agent.match('Safari')&&!user_agent.match('Chrome')&&!user_agent.match('Edg')){class_.add('ic_nr_browser_safari');}
                if(user_agent.match('Chrome')&&!user_agent.match('Edg')){class_.add('ic_nr_browser_chrome');}
                if(user_agent.match('Edg')){class_.add('ic_nr_browser_edge');}
            }
}
// #content
    // ##variable
    // ##module
    // ##build
// #debug