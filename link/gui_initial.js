'use strict';
// <<<< <<<< <<<< <<<<
// GUI Initial
// for Browser
// gui_initial.js
// ==== ==== ==== ====
// <script src="gui_initial.js" type="application/javascript" data-gui_initial="{
//     'background_color_light': '</""/=#FFFFFF>',
//     'background_color_dark': '</""/=#000000>',
//     'service_worker': 'sw.js',
//     'head_title': '</""/="">',
//     'head_style': 'style.css',
//     'head_script': 'script.js',
//     'head_icon': 'icon.png',
//     'head_icon_apple': 'icon-apple.png',
//     'head_theme_color_light': '</""/=#E1E1E1>',
//     'head_theme_color_dark': '</""/=#212121>',
//     'head_manifest': 'manifest.webmanifest'
// }"></script>
// >>>> >>>> >>>> >>>>
{
// #before
    // console
    window.console.log('#### start gui_initial.js');
// #import
// #variable
// #method
    // machine_tool of machine_tool.js
    const machine_tool={
        // base
            /*🟢*/throttle(callback,wait=1000/24,first=false){
                let timeout=null;
                return function(...argument){
                    const set=()=>{
                        timeout=window.setTimeout(()=>{
                            timeout=null;
                            callback.apply(this,argument);
                        },wait);
                    };
                    if(first){
                        first=false;
                        callback.apply(this,argument);
                        set();
                    }else{
                        if(!timeout){
                            set();
                        }
                    }
                };
            },
            /*🟢*/loop(condition,wait=1000/24){
                const result=condition();
                if(!result){
                    window.setTimeout(()=>{
                        this.loop(condition,wait);
                    },wait);
                }else{
                    return result;
                }
            },
            /*🟢*/run_object(object){
                for(const item in object){
                    object[item]();
                }
            }
    };
// #build
    // gui_initial
    machine_tool.run_object({
        /*🟢*/dataset(){
            for(const item of window.document.scripts){
                if(item.dataset.gui_initial){
                    this.dataset.config=window.JSON.parse(item.dataset.gui_initial.replace(/'/g,'"'));
                    item.removeAttribute('data-gui_initial');
                    this.dataset.config.head_gui_initial_js=item;
                    this.dataset.config.head_gui_initial_css_href=item.getAttribute('src').replace('.js','.css');
                    break;
                }
            }
        },
        /*🟢*/background$color(){
            window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?this.dataset.config.background_color_dark?this.dataset.config.background_color_dark:'#000000':this.dataset.config.background_color_light?this.dataset.config.background_color_light:'#FFFFFF'}`);
            window.addEventListener('load',()=>{
                window.document.documentElement.style.removeProperty('background-color');
                if(!window.document.documentElement.style[0]){
                    window.document.documentElement.removeAttribute('style');
                }
            },{once:true});
        },
        /*🟢*/opacity(){
            machine_tool.loop(()=>{
                for(const item of window.document.documentElement.children){
                    if(item.localName==='body'){
                        window.document.body.style.setProperty('opacity','0');
                        return true;
                    }
                }
                return false;
            },1000/60);
            window.addEventListener('load',()=>{
                machine_tool.loop(()=>{
                    if(window.document.body.style.getPropertyValue('opacity')==='0'){
                        window.document.body.style.removeProperty('opacity');
                        if(!window.document.body.style[0]){
                            window.document.body.removeAttribute('style');
                        }
                        return true;
                    }
                    return false;
                },1000/60);
            },{once:true});
        },
        /*🟢*/service$worker(){
            if(this.dataset.config.service_worker&&'serviceWorker'in window.navigator){
                window.navigator.serviceWorker.register(this.dataset.config.service_worker,{scope:'./'}).then((registration)=>{
                    window.console.log('#### Registration successful, scope is:',registration.scope);
                }).catch((error)=>{
                    window.console.log('#### Service worker registration failed, error:',error);
                });
            }
        },
        /*🟢*/$navigator$environment(){
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
            if(window.location.search.replace(/^\?/,'').split('&').includes('pwa')){
                window.document.documentElement.classList.add('ic_nr_pwa');
            }
        },
        /*🟢*/head(){
            this.dataset.config.head_gui_initial_js.insertAdjacentHTML('beforebegin',`
                <meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">
                <meta name="format-detection" content="address=no,email=no,telephone=no">
            `);
            if(this.dataset.config.head_title||this.dataset.config.head_title===''){
                this.dataset.config.head_gui_initial_js.insertAdjacentHTML('beforebegin',`<title>${this.dataset.config.head_title}</title>`);
            }
            this.dataset.config.head_gui_initial_js.insertAdjacentHTML('beforebegin',`<link rel="stylesheet" href="${this.dataset.config.head_gui_initial_css_href}">`);
            if(this.dataset.config.head_style){
                this.dataset.config.head_gui_initial_js.insertAdjacentHTML('beforebegin',`<link rel="stylesheet" href="${this.dataset.config.head_style}">`);
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
            if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
                if(this.dataset.config.head_icon_apple){
                    window.document.head.insertAdjacentHTML('beforeend',`<link rel="apple-touch-icon" href="${this.dataset.config.head_icon_apple}">`);
                }
                window.document.head.insertAdjacentHTML('beforeend',`
                    <meta name="apple-mobile-web-app-capable" content="yes">
                    <meta name="apple-mobile-web-app-status-bar-style" content="white">
                `);
                if(this.dataset.config.head_title||this.dataset.config.head_title===''){
                    window.document.head.insertAdjacentHTML('beforeend',`<meta name="apple-mobile-web-app-title" content="${this.dataset.config.head_title}">`);
                }
            }else{
                const get_media_prefers_color_scheme=(matches)=>{
                    return matches?this.dataset.config.head_theme_color_dark?this.dataset.config.head_theme_color_dark:'#212121':this.dataset.config.head_theme_color_light?this.dataset.config.head_theme_color_light:'#E1E1E1';
                };
                const element=window.document.createElement('meta');
                element.setAttribute('name','theme-color');
                element.setAttribute('content',get_media_prefers_color_scheme(window.matchMedia('(prefers-color-scheme:dark)').matches));
                const theme_color=window.document.head.insertAdjacentElement('beforeend',element);
                window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
                    theme_color.setAttribute('content',get_media_prefers_color_scheme(event.matches));
                });
            }
            if(this.dataset.config.head_manifest){
                window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${this.dataset.config.head_manifest}">`);
            }
        },
        /*🟢*/$navigator$media(){
            const set_media_prefers_color_scheme=(matches)=>{
                if(matches){
                    window.document.documentElement.classList.remove('ic_nr_media_prefers_color_scheme_light');
                    window.document.documentElement.classList.add('ic_nr_media_prefers_color_scheme_dark');
                }else{
                    window.document.documentElement.classList.remove('ic_nr_media_prefers_color_scheme_dark');
                    window.document.documentElement.classList.add('ic_nr_media_prefers_color_scheme_light');
                }
            };
            set_media_prefers_color_scheme(window.matchMedia('(prefers-color-scheme:dark)').matches);
            window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
                set_media_prefers_color_scheme(event.matches);
            });
            const set_media_prefers_reduced_motion=(matches)=>{
                if(matches){
                    window.document.documentElement.classList.remove('ic_nr_media_prefers_reduced_motion_false');
                    window.document.documentElement.classList.add('ic_nr_media_prefers_reduced_motion_true');
                }else{
                    window.document.documentElement.classList.remove('ic_nr_media_prefers_reduced_motion_true');
                    window.document.documentElement.classList.add('ic_nr_media_prefers_reduced_motion_false');
                }
            };
            set_media_prefers_reduced_motion(window.matchMedia('(prefers-reduced-motion:reduce)').matches);
            window.matchMedia('(prefers-reduced-motion:reduce)').addEventListener('change',(event)=>{
                set_media_prefers_reduced_motion(event.matches);
            });
            const set_media_prefers_reduced_data=(matches)=>{
                if(matches){
                    window.document.documentElement.classList.remove('ic_nr_media_prefers_reduced_data_false');
                    window.document.documentElement.classList.add('ic_nr_media_prefers_reduced_data_true');
                }else{
                    window.document.documentElement.classList.remove('ic_nr_media_prefers_reduced_data_true');
                    window.document.documentElement.classList.add('ic_nr_media_prefers_reduced_data_false');
                }
            };
            set_media_prefers_reduced_data(window.matchMedia('(prefers-reduced-data:reduce)').matches);
            window.matchMedia('(prefers-reduced-data:reduce)').addEventListener('change',(event)=>{
                set_media_prefers_reduced_data(event.matches);
            });
            const set_media_orientation=(matches)=>{
                if(matches){
                    window.document.documentElement.classList.remove('ic_nr_media_orientation_landscape');
                    window.document.documentElement.classList.add('ic_nr_media_orientation_portrait');
                }else{
                    window.document.documentElement.classList.remove('ic_nr_media_orientation_portrait');
                    window.document.documentElement.classList.add('ic_nr_media_orientation_landscape');
                }
                window.setTimeout(()=>{
                    window.document.body.style.setProperty('margin','1px');
                    window.setTimeout(()=>{
                        window.document.body.style.removeProperty('margin');
                        if(!window.document.body.style[0]){
                            window.document.body.removeAttribute('style');
                        }
                    },350/2);
                },350/2);
            };
            set_media_orientation(window.matchMedia('(orientation:portrait)').matches);
            window.matchMedia('(orientation:portrait)').addEventListener('change',(event)=>{
                set_media_orientation(event.matches);
            });
            const set_media_display_mode=(matches)=>{
                if(matches){
                    window.document.documentElement.classList.remove('ic_nr_media_display_mode_fullscreen_false');
                    window.document.documentElement.classList.add('ic_nr_media_display_mode_fullscreen_true');
                }else{
                    window.document.documentElement.classList.remove('ic_nr_media_display_mode_fullscreen_true');
                    window.document.documentElement.classList.add('ic_nr_media_display_mode_fullscreen_false');
                }
            };
            set_media_display_mode(window.matchMedia('(display-mode:fullscreen)').matches);
            window.matchMedia('(display-mode:fullscreen)').addEventListener('change',(event)=>{
                set_media_display_mode(event.matches);
            });
        },
        /*🟢*/tabindex(){
            window.document.documentElement.setAttribute('tabindex','-1');
            machine_tool.loop(()=>{
                for(const item of window.document.documentElement.children){
                    if(item.localName==='body'){
                        window.document.head.setAttribute('tabindex','-1');
                        window.document.body.setAttribute('tabindex','-1');
                        return true;
                    }
                }
                return false;
            },1000/60);
        },
        /*🟢*/touch$hov(){
            window.addEventListener('pointerdown',()=>{});
        },
        /*🟢*/touchpad$zoom(){
            window.addEventListener('wheel',(event)=>{
                if(event.ctrlKey){
                    event.preventDefault();
                }
            },{passive:false});
        },
        /*🟢*/context$menu(){
            window.addEventListener('contextmenu',(event)=>{
                event.preventDefault();
            });
        },
        /*🟠*/partial$scroll(){
            if(!window.CSS.supports('overscroll-behavior:contain')){
                const action=()=>{
                    for(const item of window.document.querySelectorAll('*')){
                        if(window.getComputedStyle(item).overflowY.match(/auto|scroll/)){
                            if(item.scrollHeight===item.clientHeight){
                                item.style.setProperty('touch-action','none');
                            }else{
                                item.style.removeProperty('touch-action');
                                if(!item.style[0]){
                                    item.removeAttribute('style');
                                }
                            }
                        }
                    }
                };
                new window.MutationObserver(machine_tool.throttle(action,1000/60)).observe(window.document.documentElement,{attributes:true,childList:true,subtree:true});
                new window.ResizeObserver(machine_tool.throttle(action,1000/60)).observe(window.document.documentElement);
            }
        },
        /*🟠*/input$scroll(){
            if(!(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg'))){
                const blur=()=>{
                    window.document.activeElement.blur();
                    window.setTimeout(()=>{
                        window.document.documentElement.style.removeProperty('width');
                        window.document.documentElement.style.removeProperty('height');
                        if(!window.document.documentElement.style[0]){
                            window.document.documentElement.removeAttribute('style');
                        }
                        window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                        if(window.getComputedStyle(window.document.documentElement).transform!=='none'){
                            window.scroll({behavior:'smooth',left:0,top:0});
                        }
                    },350);
                };
                window.addEventListener('pointerdown',(event)=>{
                    if(event.target.localName.match(/input|textarea/)){
                        window.addEventListener('pointerup',(event_)=>{
                            if(!window.document.documentElement.style.getPropertyValue('width')&&!window.document.documentElement.style.getPropertyValue('height')){
                                window.document.documentElement.style.setProperty('width',`${window.innerWidth}px`);
                                window.document.documentElement.style.setProperty('height',`${window.innerHeight}px`);
                                if(event.target===event_.target){
                                    window.setTimeout(()=>{
                                        event.target.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
                                    },350*2);
                                }
                            }
                        },{once:true});
                    }else{
                        blur();
                    }
                });
                window.addEventListener('keydown',(event)=>{
                    if(event.key==='Enter'){
                        blur();
                    }
                });
                new window.ResizeObserver(machine_tool.throttle(blur,1000/60)).observe(window.document.documentElement);
            }
        }
    });
// #debug
// #after
    // console
    window.console.log('#### end gui_initial.js');
}