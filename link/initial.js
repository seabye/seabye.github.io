'use strict';
// #library
    // @initial.js
    // @module.js
// #initial
    // variable
    // tool
    // sw
    // head element
// #block
// #build
    // body element
    // sc_cr
// #debug
/*
    script.js
        #library !!
            @initial.js
            @module.js
        #initial !!
        #block !!!
        #build !!!
        #debug !
*/
// switch(this===void 0){
// case false:
// if(!(this===void 0)){
// }
// break;
// case true:
// #variable
// #library
// #initial
    // tool
    export class initial_tool{
        static stop(event){
            event.stopPropagation();
            event.preventDefault();
        }
        static element(tag,attribute=false,insert_element=false,insert_position=false,content=false){
            const element=window.document.createElement(tag);
            if(attribute)for(const [key,value] of attribute)element.setAttribute(key,value);
            if(insert_element)insert_position?insert_element.insertAdjacentElement(insert_position,element):insert_element.appendChild(element);
            if(content)typeof content==='function'?content(element):element.innerHTML=content;
            return element;
        }
        static toggle_cls(element,cls,cls2='',replace=false,wait=0,callback=()=>{}){
            if(cls2){
                switch(replace){
                    case false:
                        if(element.classList.contains(cls)){
                            element.classList.remove(cls);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls2);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls2);
                                callback();
                            }
                        }else if(element.classList.contains(cls2)){
                            element.classList.remove(cls2);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls);
                                callback();
                            }
                        }else{
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls);
                                callback();
                            }
                        }
                        break;
                    case true:
                        if(cls){
                            element.classList.remove(cls2);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls);
                                callback();
                            }
                        }else{
                            element.classList.add(cls2);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.remove(cls2);
                                    callback();
                                },wait);
                            }else{
                                element.classList.remove(cls2);
                                callback();
                            }
                        }
                        break;
                    default:
                        break;
                }
            }else{
                if(element.classList.contains(cls)){
                    element.classList.remove(cls);
                }else{
                    if(wait){
                        window.setTimeout(()=>{
                            element.classList.add(cls);
                            callback();
                        },wait);
                    }else{
                        element.classList.add(cls);
                        callback();
                    }
                }
            }
        }
        static toggle_full(element=window.document.documentElement,top_window=false){
            if(!top_window){
                if(!(window.document.fullscreen||window.document.webkitIsFullScreen)){
                    if('requestFullscreen'in window.document.documentElement){
                        element.requestFullscreen();
                    }else if('webkitRequestFullScreen'in window.document.documentElement){
                        element.webkitRequestFullScreen();
                    }
                }else{
                    if('exitFullscreen'in window.document){
                        window.document.exitFullscreen();
                    }else if('webkitExitFullscreen'in window.document){
                        window.document.webkitExitFullscreen();
                    }
                }
            }else{
                if(!(window.top.document.fullscreen||window.top.document.webkitIsFullScreen)){
                    if('requestFullscreen'in window.top.document.documentElement){
                        element.requestFullscreen();
                    }else if('webkitRequestFullScreen'in window.top.document.documentElement){
                        element.webkitRequestFullScreen();
                    }
                }else{
                    if('exitFullscreen'in window.top.document){
                        window.top.document.exitFullscreen();
                    }else if('webkitExitFullscreen'in window.top.document){
                        window.top.document.webkitExitFullscreen();
                    }
                }
            }
        }
        static window_open(uri=window.location.href,width=640,height=480,left=0,top=0,center=true){
            if(center){
                left=(window.screen.availWidth-width)/2+window.screen.availLeft;
                top=(window.screen.availHeight-height)/2+window.screen.availTop;
            }else{
                left+=window.screen.availLeft;
                top+=window.screen.availTop;
            }
            window.open(uri,'',`width=${width},height=${height},left=${left},top=${top}`);
        }
        static loop(premise,callback,wait=1000/24){
            premise()?callback():window.setTimeout(()=>this.loop(premise,callback,wait),wait);
        }
        static debounce(callback,wait=1000/24,before_function=false){
            let timeout=null;
            return function(){
                const context=this;
                const args=arguments;
                window.clearTimeout(timeout);
                if(before_function)before_function();
                timeout=window.setTimeout(()=>callback.apply(context,args),wait);
            };
        }
    }
    // if(this===void 0){
    // display
        // ~background color
        {
            let data={};
            for(const item of window.document.scripts){
                if(item.dataset.initial){
                    data=window.JSON.parse(item.dataset.initial.replace(/'/g,'"'));
                    break;
                }
            }
            window.document.documentElement.style.setProperty('background-color',`var(--ic_ve_color_white,${window.document.documentElement.style.getPropertyValue('background-color')?window.document.documentElement.style.getPropertyValue('background-color'):window.matchMedia('(prefers-color-scheme:dark)').matches?data.dark?data.dark:'#000000':data.light?data.light:'#FFFFFF'})`);
        }
        initial_tool.loop(()=>{
            let result=false;
            for(const item of window.document.documentElement.children){
                if(item.localName==='body'){
                    result=true;
                    break;
                }
            }
            return result;
        },()=>window.document.body.style.setProperty('opacity','0'),1000/60);
        window.addEventListener('load',()=>{
            window.document.documentElement.style.removeProperty('background-color');
            if(!window.document.documentElement.style[0])window.document.documentElement.removeAttribute('style');
            initial_tool.loop(()=>window.document.body.style.getPropertyValue('opacity')==='0'?true:false,()=>{
                window.document.body.style.removeProperty('opacity');
                if(!window.document.body.style[0])window.document.body.removeAttribute('style');
            },1000/60);
        },{once:true});
        // orientation
        {
            const action=event=>{
                if(event.type==='orientationchange')window.document.body.style.setProperty('display','none');
                const set=head=>{
                    window.document.documentElement.style.setProperty(`${head}-width`,`${window.innerWidth}px`);
                    if(!window.navigator.userAgent.match('Mobile')||(window.navigator.userAgent.match('Mobile')&&!window.document.activeElement.localName.match(/input|textarea/)))window.document.documentElement.style.setProperty(`${head}-height`,`${window.innerHeight}px`);
                };
                set('min');
                if(window.parseInt(window.document.documentElement.style.getPropertyValue('min-height'))<=window.parseInt(window.document.documentElement.style.getPropertyValue('min-width'))){
                    set('max');
                    initial_tool.toggle_cls(window.document.documentElement,'ic_oe_orientation_landscape','ic_oe_orientation_portrait',true);
                }else{
                    window.document.documentElement.style.removeProperty('max-width');
                    window.document.documentElement.style.removeProperty('max-height');
                    if(!window.document.documentElement.style[0])window.document.documentElement.removeAttribute('style');
                    initial_tool.toggle_cls(window.document.documentElement,'ic_oe_orientation_portrait','ic_oe_orientation_landscape',true);
                }
                if(event.type==='orientationchange'){
                    window.setTimeout(()=>{
                        window.document.body.style.removeProperty('display');
                        if(!window.document.body.style[0])window.document.body.removeAttribute('style');
                    },350);
                }
            };
            window.addEventListener('load',action,{once:true});
            window.addEventListener('resize',action);
            window.addEventListener('orientationchange',event=>window.setTimeout(action(event),350));
        }
        if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
            const action=()=>window.document.documentElement.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
            window.addEventListener('load',action,{once:true});
            window.addEventListener('orientationchange',()=>window.setTimeout(action,350));
        }else{
            window.addEventListener('pointerdown',event=>{
                if(event.target.localName.match(/input|textarea/))window.setTimeout(()=>event.target.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}),700);
            });
        }
    // :hov action
    window.addEventListener('pointerdown',()=>{});
    // context menu
    window.addEventListener('contextmenu',initial_tool.stop);
    // tabindex
    window.document.documentElement.setAttribute('tabindex','-1');
    initial_tool.loop(()=>{
        let result=false;
        for(const item of window.document.documentElement.children){
            if(item.localName==='body'){
                result=true;
                break;
            }
        }
        return result;
    },()=>window.document.body.setAttribute('tabindex','-1'),1000/60);
    // input
    window.addEventListener('pointerdown',event=>{
        if(!event.target.localName.match(/input|textarea/)){
            window.document.activeElement.blur();
            window.setTimeout(()=>window.document.documentElement.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}),350);
        };
    });
    window.addEventListener('orientationchange',()=>{
        if(window.document.activeElement.localName.match(/input|textarea/))window.document.activeElement.blur();
    });
    window.addEventListener('keydown',event=>{
        if(event.key==='Enter')window.setTimeout(()=>window.document.documentElement.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}),350);
    });
    // scroll@safari
    if(!window.CSS.supports('overscroll-behavior:contain')){
        const action=()=>{
            for(const item of window.document.all){
                if(window.getComputedStyle(item).overflowY.match(/auto|scroll/)){
                    if(item.scrollHeight===item.clientHeight){
                        item.style.setProperty('touch-action','pan-x');
                    }else{
                        item.style.removeProperty('touch-action');
                        if(!item.style[0])item.removeAttribute('style');
                    }
                }
            }
        };
        new MutationObserver(action).observe(window.document.documentElement,{attributes:true,childList:true,subtree:true});
        window.addEventListener('load',action,{once:true});
        window.addEventListener('resize',action);
        window.addEventListener('orientationchange',()=>window.setTimeout(action,350));
    }
    // }
// #build
    // sw
    export const initial_sw=path=>{
        if('serviceWorker'in window.navigator)window.navigator.serviceWorker.register(path,{scope:'./'}).then(registration=>window.console.log('#### Registration successful, scope is:',registration.scope)).catch(error=>window.console.log('#### Service worker registration failed, error:',error));
    };
    // ic_oe
    export const initial_ic_oe=()=>{
        const user_agent=window.navigator.userAgent;
        const element_class=window.document.documentElement.classList;
        if(user_agent.match('Unix'))element_class.add('ic_oe_system_unix');
        if(user_agent.match('Mac OS')&&!user_agent.match('iPhone')&&!user_agent.match('iPad'))element_class.add('ic_oe_system_brand_apple','ic_oe_system_macos');
        if(user_agent.match('Windows'))element_class.add('ic_oe_system_brand_microsoft','ic_oe_system_windows');
        if(user_agent.match('Linux')&&!user_agent.match('Android'))element_class.add('ic_oe_system_linux');
        if(user_agent.match('CrOS'))element_class.add('ic_oe_system_brand_google','ic_oe_system_chromeos');
        if(user_agent.match(/iPhone|iPad/))element_class.add('ic_oe_system_brand_apple','ic_oe_system_ios');
        if(user_agent.match('Android'))element_class.add('ic_oe_system_brand_google','ic_oe_system_android');
        if(user_agent.match('Firefox'))element_class.add('ic_oe_browser_firefox');
        if(user_agent.match('Safari')&&!user_agent.match('Chrome')&&!user_agent.match('Edg'))element_class.add('ic_oe_browser_safari');
        if(user_agent.match('Chrome')&&!user_agent.match('Edg'))element_class.add('ic_oe_browser_chrome');
        if(user_agent.match('Edg'))element_class.add('ic_oe_browser_edge');
    };
    // head
    export const initial_head=(option={})=>{
        window.document.head.insertAdjacentHTML('afterbegin',
`<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">
<meta name="format-detection" content="address=no,email=no,telephone=no">
<title>${option.title?option.title:''}</title>
<link rel="stylesheet" href="${option.style?option.style:''}">`
        );
        window.document.head.insertAdjacentHTML('beforeend',
`<link rel="icon" type="image/png" href="${option.icon?option.icon:''}">`
        );
        if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
            window.document.head.insertAdjacentHTML('beforeend',
`<link rel="apple-touch-icon" href="${option.icon_apple?option.icon_apple:''}">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="white">
<meta name="apple-mobile-web-app-title" content="${option.title?option.title:''}">`
            );
        }else if(window.matchMedia('(prefers-color-scheme:dark)').addEventListener){
            // ~theme color
            let theme_color=null;
            for(const item of window.document.head.children){
                if(item.name==='theme-color'){
                    theme_color=item;
                    break;
                }
            }
            if(theme_color){
                window.document.head.insertAdjacentElement('beforeend',theme_color);
            }else{
                const light='#E1E1E1';
                const dark='#212121';
                const element=window.document.createElement('meta');
                element.setAttribute('name','theme-color');
                element.setAttribute('content',window.matchMedia('(prefers-color-scheme:dark)').matches?dark:light);
                const theme_color=window.document.head.insertAdjacentElement('beforeend',element);
                window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',event=>theme_color.content=event.matches?dark:light);
            }
        }
        window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${option.manifest?option.manifest:''}">`);
    };
// #debug
// break;
// default:
// break;
// }