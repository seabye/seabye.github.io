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
            /*🟢*/loop(condition,wait=1000/24){
                if(!condition()){
                    window.setTimeout(()=>{
                        this.loop(condition,wait);
                    },wait);
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
        /*🟢*/ic_nr$ic_$navigator(){
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
                const value=(matches)=>{
                    return matches?this.dataset.config.head_theme_color_dark?this.dataset.config.head_theme_color_dark:'#212121':this.dataset.config.head_theme_color_light?this.dataset.config.head_theme_color_light:'#E1E1E1';
                };
                const element=window.document.createElement('meta');
                element.setAttribute('name','theme-color');
                element.setAttribute('content',value(window.matchMedia('(prefers-color-scheme:dark)').matches));
                const theme_color=window.document.head.insertAdjacentElement('beforeend',element);
                window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
                    theme_color.setAttribute('content',value(event.matches));
                });
            }
            if(this.dataset.config.head_manifest){
                window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${this.dataset.config.head_manifest}">`);
            }
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
        /*🟢*/html$orientation(){
            new window.ResizeObserver((data)=>{
                if(data[0].contentRect.width<=data[0].contentRect.height){
                    if(!window.document.documentElement.classList.contains('ic_nr_orientation_portrait')){
                        window.document.documentElement.classList.remove('ic_nr_orientation_landscape');
                        window.document.documentElement.classList.add('ic_nr_orientation_portrait');
                    }
                }else{
                    if(!window.document.documentElement.classList.contains('ic_nr_orientation_landscape')){
                        window.document.documentElement.classList.remove('ic_nr_orientation_portrait');
                        window.document.documentElement.classList.add('ic_nr_orientation_landscape');
                    }
                }
            }).observe(window.document.documentElement);
        },
        /*🟢*/input$scroll(){
            if(!(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg'))){
                const blur=()=>{
                    if(window.document.activeElement.localName.match(/input|textarea/)){
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
                    }
                };
                window.addEventListener('pointerdown',(event)=>{
                    if(event.target.localName.match(/input|textarea/)){
                        window.addEventListener('pointerup',(event_)=>{
                            window.document.documentElement.style.setProperty('width',`${window.innerWidth}px`);
                            window.document.documentElement.style.setProperty('height',`${window.innerHeight}px`);
                            if(event.target===event_.target){
                                window.setTimeout(()=>{
                                    event.target.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
                                },350*2);
                            }
                        },{once:true});
                    }else{
                        blur();
                    }
                });
                new window.ResizeObserver(blur).observe(window.document.documentElement);
                window.addEventListener('keydown',(event)=>{
                    if(event.key==='Enter'){
                        blur();
                    }
                });
            }
        },
        /*🟢*/partial$scroll(){
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
                new window.MutationObserver(action).observe(window.document.documentElement,{attributes:true,childList:true,subtree:true});
                new window.ResizeObserver(action).observe(window.document.documentElement);
            }
        }
    });
// #debug
// #after
    // console
    window.console.log('#### end gui_initial.js');
}