'use strict';
// <<<< <<<< <<<< <<<<
// GUI Initial
// for Browser
// gui_initial.js
// ==== ==== ==== ====
// index.html
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
// ~~~~ ~~~~ ~~~~ ~~~~
// sw.js
// 'use strict';
// // #before
//     // console
//     self.console.log('#### start sw.js');
// // #import
// // #variable
// // #method
// // #build
//     // service worker
//     self.addEventListener('fetch',()=>{});
// // #debug
// // #after
//     // console
//     self.console.log('#### end sw.js');
// ~~~~ ~~~~ ~~~~ ~~~~
// manifest.webmanifest
// {
//     "name": "~",
//     "short_name": "~",
//     "description": "~",
//     "start_url": "/?pwa",
//     "theme_color": "#000000",
//     "background_color": "#000000",
//     "orientation": "natural",
//     "display": "standalone",
//     "icons": [
//         {
//             "src": "icon-144x144-any.png",
//             "sizes": "144x144",
//             "type": "image/png",
//             "purpose": "any"
//         },
//         {
//             "src": "icon-192x192-any.png",
//             "sizes": "192x192",
//             "type": "image/png",
//             "purpose": "any"
//         },
//         {
//             "src": "icon-512x512-any.png",
//             "sizes": "512x512",
//             "type": "image/png",
//             "purpose": "any"
//         },
//         {
//             "src": "icon-144x144-maskable.png",
//             "sizes": "144x144",
//             "type": "image/png",
//             "purpose": "maskable"
//         },
//         {
//             "src": "icon-192x192-maskable.png",
//             "sizes": "192x192",
//             "type": "image/png",
//             "purpose": "maskable"
//         },
//         {
//             "src": "icon-512x512-maskable.png",
//             "sizes": "512x512",
//             "type": "image/png",
//             "purpose": "maskable"
//         }
//     ]
// }
// >>>> >>>> >>>> >>>>
{
// #before
    // console
    window.console.log('#### start gui_initial.js');
// #import
// #variable
// #method
// #build
    // gui_initial
    const gui_initial={
        /*🟢*/dataset(){
            for(const value of window.document.scripts){
                if(value.dataset.gui_initial){
                    this.dataset.config=window.JSON.parse(value.dataset.gui_initial.replace(/'/g,'"'));
                    value.removeAttribute('data-gui_initial');
                    this.dataset.config.head_gui_initial_js=value;
                    this.dataset.config.head_gui_initial_css_href=value.getAttribute('src').replace('.js','.css');
                    break;
                }
            }
        },
        /*🟢*/start$background$color(){
            window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?this.dataset.config.background_color_dark?this.dataset.config.background_color_dark:'#000000':this.dataset.config.background_color_light?this.dataset.config.background_color_light:'#FFFFFF'}`);
            window.addEventListener('load',()=>{
                window.document.documentElement.style.removeProperty('background-color');
                if(!window.document.documentElement.style[0]){
                    window.document.documentElement.removeAttribute('style');
                }
            },{once:true});
        },
        /*🟢*/start$opacity(){
            const loop=()=>{
                for(const value of window.document.documentElement.children){
                    if(value.localName==='body'){
                        window.document.body.style.setProperty('opacity','0');
                        return false;
                    }
                }
                window.setTimeout(loop,1000/24);
            };
            loop();
            window.addEventListener('load',()=>{
                const loop=()=>{
                    if(window.document.body.style.getPropertyValue('opacity')==='0'){
                        window.document.body.style.removeProperty('opacity');
                        if(!window.document.body.style[0]){
                            window.document.body.removeAttribute('style');
                        }
                        return false;
                    }
                    window.setTimeout(loop,1000/24);
                };
                loop();
            },{once:true});
        },
        /*🟢*/write$service$worker(){
            if(this.dataset.config.service_worker&&'serviceWorker'in window.navigator){
                window.navigator.serviceWorker.register(this.dataset.config.service_worker,{scope:'./'}).then((registration)=>{
                    window.console.log('==== ing gui_initial.js Registration successful, scope is:',registration.scope);
                }).catch((error)=>{
                    window.console.log('==== ing gui_initial.js Service worker registration failed, error:',error);
                });
            }
        },
        /*🟢*/$navigator$environment(){
            const user_agent=window.navigator.userAgent;
            const class_=window.document.documentElement.classList;
            if(user_agent.match(/Unix/i)){
                class_.add('ic_nr_system_unix');
            }
            if(user_agent.match(/Mac OS/i)&&!user_agent.match(/iPhone|iPad/i)){
                class_.add('ic_nr_system_brand_apple','ic_nr_system_macos');
            }
            if(user_agent.match(/Windows/i)){
                class_.add('ic_nr_system_brand_microsoft','ic_nr_system_windows');
            }
            if(user_agent.match(/Linux/i)&&!user_agent.match(/Android/i)){
                class_.add('ic_nr_system_linux');
            }
            if(user_agent.match(/CrOS/i)){
                class_.add('ic_nr_system_brand_google','ic_nr_system_chromeos');
            }
            if(user_agent.match(/iPhone|iPad/i)){
                class_.add('ic_nr_system_brand_apple','ic_nr_system_ios');
            }
            if(user_agent.match(/Android/i)){
                class_.add('ic_nr_system_brand_google','ic_nr_system_android');
            }
            if(user_agent.match(/Firefox/i)&&!user_agent.match(/FxiOS/i)){
                class_.add('ic_nr_browser_firefox');
            }
            if((user_agent.match(/Safari/i)&&!user_agent.match(/Chrome|Edg/i))||user_agent.match(/FxiOS|CriOS|EdgiOS/i)){
                class_.add('ic_nr_browser_safari');
            }
            if(user_agent.match(/Chrome/i)&&!user_agent.match(/CriOS|Edg/i)){
                class_.add('ic_nr_browser_chrome');
            }
            if(user_agent.match(/Edg/i)&&!user_agent.match(/EdgiOS/i)){
                class_.add('ic_nr_browser_edge');
            }
            if(window.document.createElement('video').canPlayType('application/vnd.apple.mpegurl')){
                class_.add('ic_nr_video_m3u8');
            }
            if(window.location.search.replace(/^\?/,'').split('&').includes('pwa')){
                class_.add('ic_nr_pwa');
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
                if(window.document.documentElement.classList.value.match(/ic_nr_system_ios|ic_nr_browser_safari/)){
                    window.setTimeout(()=>{
                        window.document.body.style.setProperty('margin','1px');
                        window.setTimeout(()=>{
                            window.document.body.style.removeProperty('margin');
                            if(!window.document.body.style[0]){
                                window.document.body.removeAttribute('style');
                            }
                            window.scroll({behavior:'smooth',top:0,left:0});
                            window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                            window.document.body.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                        },350/2);
                    },350/2);
                }
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
        /*🟢*/write$head(){
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
            if(window.document.documentElement.classList.value.match(/ic_nr_system_ios|ic_nr_browser_safari/)){
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
        /*🟢*/tab$index(){
            window.document.documentElement.setAttribute('tabindex','-1');
            const loop=()=>{
                for(const value of window.document.documentElement.children){
                    if(value.localName==='body'){
                        window.document.body.setAttribute('tabindex','-1');
                        return false;
                    }
                }
                window.setTimeout(loop,1000/24);
            };
            loop();
        },
        /*🟢*/no$context$menu(){
            window.addEventListener('contextmenu',(event)=>{
                event.preventDefault();
            });
        },
        /*🟢*/hov(){
            window.addEventListener('touchstart',()=>{});
        },
        /*🟢*/no$touchpad$zoom(){
            window.addEventListener('wheel',(event)=>{
                if(event.ctrlKey){
                    event.preventDefault();
                }
            },{passive:false});
        },
        /*🟢*/no$drag(){
            window.addEventListener('dragstart',(event)=>{
                if(event.target.localName.match(/a|img/)){
                    event.preventDefault();
                }
            });
        },
        /*🔴*/no$back(){},
        /*🔴*/no$touch$back(){},
        /*🟢*/partial$scroll(){
            if(!window.CSS.supports('overscroll-behavior:contain')){
                const preventDefault=(event)=>{
                    event.preventDefault();
                };
                let start_y=null;
                let start_x=null;
                let scroll_direction=null;
                window.addEventListener('touchstart',(event)=>{
                    const loop=(target)=>{
                        if(window.getComputedStyle(target).overflowY.match(/auto|scroll/)||window.getComputedStyle(target).overflowX.match(/auto|scroll/)){
                            if(window.getComputedStyle(target).overflowY.match(/auto|scroll/)){
                                if(target.scrollHeight!==target.offsetHeight){
                                    if(target.scrollTop<=0){
                                        start_y=event.changedTouches[0].screenY;
                                        scroll_direction='top';
                                    }else{
                                        if(target.scrollTop>=target.scrollHeight-target.offsetHeight){
                                            start_y=event.changedTouches[0].screenY;
                                            scroll_direction='bottom';
                                        }else{
                                            window.removeEventListener('touchmove',preventDefault);
                                        }
                                    }
                                }
                            }else{
                                start_y=event.changedTouches[0].screenY;
                                start_x=event.changedTouches[0].screenX;
                                scroll_direction='horizontal';
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
                    if(scroll_direction){
                        switch(scroll_direction){
                            case'top':
                                {
                                    if(event.changedTouches[0].screenY<start_y){
                                        window.removeEventListener('touchmove',preventDefault);
                                        scroll_direction=null;
                                    }
                                }
                                break;
                            case'bottom':
                                {
                                    if(event.changedTouches[0].screenY>start_y){
                                        window.removeEventListener('touchmove',preventDefault);
                                        scroll_direction=null;
                                    }
                                }
                                break;
                            case'horizontal':
                                {
                                    const move_y=event.changedTouches[0].screenY;
                                    if((move_y<=start_y+3&&move_y>=start_y-3)&&event.changedTouches[0].screenX!==start_x){
                                        window.removeEventListener('touchmove',preventDefault);
                                        scroll_direction=null;
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                    }
                });
                window.addEventListener('touchend',()=>{
                    window.addEventListener('touchmove',preventDefault,{passive:false});
                    start_y=start_x=scroll_direction=null;
                });
            }
        },
        /*🟢*/form$input(){
            window.addEventListener('keydown',(event)=>{
                if(event.key==='Enter'&&event.target.localName==='input'){
                    event.target.blur();
                }
            });
        },
        /*🟢*/dot$active(){
            window.addEventListener('pointerdown',(event)=>{
                event.target.classList.add('ic_active',`ic_active_${event.button}`,`ic_active_${event.pointerType}`);
                if(event.pointerType==='mouse'){
                    event.target.classList.add('ic_active_down');
                }else{
                    window.setTimeout(()=>{
                        if(event.target.classList.contains('ic_active')&&!event.target.classList.contains('ic_active_move')){
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
                    if(event.target.classList.contains('ic_active_down')){
                        event.target.classList.remove('ic_active_down');
                    }
                    if(!event.target.classList.contains('ic_active_move')){
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
                window.addEventListener('pointerup',remove);
                window.addEventListener('touchend',remove);
                window.addEventListener('dragend',remove);
            });
        }
    };
    for(const key in gui_initial){
        gui_initial[key]();
    }
// #debug
// #after
    // console
    window.console.log('#### end gui_initial.js');
}