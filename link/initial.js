'use strict';
// #variable
// #library
    // @initial.js
    // module
// #initial
    // sw
    // element
// #block
    // tool
// #build
    // element
    // sc_cr
// #debug
/*
    script.js
        #variable
        #library
            @initial.js
        #initial
        #block
        #build
        #debug
*/
// #variable
// #library
// #initial
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
            window.document.documentElement.style.setProperty('background-color',`var(--ic_ve_color_white,${window.document.documentElement.style.getPropertyValue('background-color')?window.document.documentElement.style.getPropertyValue('background-color'):window.matchMedia('(prefers-color-scheme:dark)').matches?data.dark?data.dark:'#101010':data.light?data.light:'#FFFFFF'})`);
            window.document.body.style.setProperty('opacity','0');
        }
        window.addEventListener('load',()=>{
            window.document.documentElement.style.removeProperty('background-color');
            window.document.body.style.removeProperty('opacity');
            if(!window.document.documentElement.style[0])window.document.documentElement.removeAttribute('style');
            if(!window.document.body.style[0])window.document.body.removeAttribute('style');
        });
        // orientation
        {
            const action=event=>{
                if(event.type==='orientationchange')window.document.body.style.setProperty('display','none');
                const set=head=>{
                    window.document.documentElement.style.setProperty(`${head}-width`,`${window.innerWidth}px`);
                    if(!window.navigator.userAgent.match('Mobile')||(window.navigator.userAgent.match('Mobile')&&!window.document.activeElement.localName.match(/input|textarea/))){
                        window.document.documentElement.style.setProperty(`${head}-height`,`${window.innerHeight}px`);
                    }
                };
                set('min');
                if(window.parseInt(window.document.documentElement.style.getPropertyValue('min-height'))<=window.parseInt(window.document.documentElement.style.getPropertyValue('min-width'))){
                    set('max');
                    tool.toggle_cls(window.document.documentElement,'ic_oe_orientation_landscape','ic_oe_orientation_portrait',true);
                }else{
                    window.document.documentElement.style.removeProperty('max-width');
                    window.document.documentElement.style.removeProperty('max-height');
                    if(!window.document.documentElement.style[0])window.document.documentElement.removeAttribute('style');
                    tool.toggle_cls(window.document.documentElement,'ic_oe_orientation_portrait','ic_oe_orientation_landscape',true);
                }
                if(event.type==='orientationchange'){
                    window.setTimeout(()=>{
                        window.document.body.style.removeProperty('display');
                        if(!window.document.body.style[0])window.document.body.removeAttribute('style');
                    },350);
                }
            };
            window.addEventListener('load',action);
            window.addEventListener('resize',action);
            window.addEventListener('orientationchange',event=>window.setTimeout(action(event),350));
        }
        if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
            const action=()=>window.document.documentElement.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
            window.addEventListener('load',action);
            window.addEventListener('resize',action);
            window.addEventListener('orientationchange',()=>window.setTimeout(action,350));
        }else{
            window.document.documentElement.addEventListener('pointerdown',event=>{
                if(event.target.localName.match(/input|textarea/)){
                    const action=()=>event.target.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
                    window.setTimeout(action,700);
                }
            });
        }
    // :hov action
    window.addEventListener('pointerover',()=>{});
    // context menu@chromium
    if(!window.CSS.supports('-webkit-touch-callout:none')){
        window.document.documentElement.addEventListener('pointerdown',event=>{
            event.button!==2?window.document.documentElement.addEventListener('contextmenu',tool.stop):window.document.documentElement.removeEventListener('contextmenu',tool.stop);
        });
    }
    // tabindex
    window.document.documentElement.setAttribute('tabindex','-1');
    window.document.body.setAttribute('tabindex','-1');
    // input
    window.document.documentElement.addEventListener('pointerdown',event=>{
        if(!event.target.localName.match(/input|textarea/)){
            window.document.activeElement.blur();
            window.setTimeout(()=>window.document.documentElement.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}),350);
        };
    });
    window.addEventListener('orientationchange',()=>{
        if(window.document.activeElement.localName.match(/input|textarea/))window.document.activeElement.blur();
    });
    window.document.documentElement.addEventListener('keydown',event=>{
        if(event.key==='Enter')window.setTimeout(()=>window.document.documentElement.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}),350);
    });
    // scroll@safari
    if(!window.CSS.supports('overscroll-behavior:contain')){
        const action=()=>{
            window.document.querySelectorAll('*').forEach(element=>{
                if(window.getComputedStyle(element).overflowY.match(/auto|scroll/)){
                    if(element.scrollHeight===element.clientHeight){
                        element.style.setProperty('touch-action','pan-x');
                    }else{
                        element.style.removeProperty('touch-action');
                        if(!element.style[0])element.removeAttribute('style');
                    }
                }
            });
        };
        new MutationObserver(action).observe(window.document.documentElement,{attributes:true,childList:true,subtree:true});
        window.addEventListener('load',action);
        window.addEventListener('resize',action);
        window.addEventListener('orientationchange',()=>window.setTimeout(action,350));
    }
// #block
    // tool
    class tool{
        static stop(event){
            event.stopPropagation();
            event.preventDefault();
        }
        static toggle_cls(element,cls,cls2='',replace=false){
            if(cls2){
                switch(replace){
                    case false:
                        if(element.classList.contains(cls)){
                            element.classList.remove(cls);
                            element.classList.add(cls2);
                        }else if(element.classList.contains(cls2)){
                            element.classList.remove(cls2);
                            element.classList.add(cls);
                        }else{
                            element.classList.add(cls);
                        }
                        break;
                    case true:
                        element.classList.remove(cls2);
                        element.classList.add(cls);
                        break;
                    default:
                        break;
                }
            }else{
                element.classList.contains(cls)?element.classList.remove(cls):element.classList.add(cls);
            }
        }
    }
// #build
    // sw
    export const initial_sw=path=>{
        if('serviceWorker'in window.navigator)window.navigator.serviceWorker.register(path,{scope:'./'}).then(registration=>{
            window.console.log('#### Registration successful, scope is:',registration.scope);
        }).catch(error=>{
            window.console.log('#### Service worker registration failed, error:',error);
        });
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
                const dark='#292929';
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