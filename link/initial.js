'use strict';
// #library
    // @initial.js
    // module
// #initial
    // sw
    // element
// #block
    // tool
// #build
    // element variable
    // sc_cr
// #debug
/*
    script.js
        #library
            @initial.js
        #initial
        #block
        #build
        #debug
*/
// #library
// #initial
    // display
    window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?'#000000':'#FFFFFF'}`);
    window.setTimeout(()=>{
        window.document.documentElement.style.removeProperty('background-color');
        if(!window.document.documentElement.style[0])window.document.documentElement.removeAttribute('style');
    },1400);
    window.document.body.style.setProperty('opacity','0');
    window.setTimeout(()=>{
        window.document.body.style.removeProperty('opacity');
        if(!window.document.body.style[0])window.document.body.removeAttribute('style');
    },1400);
    // active
    window.addEventListener('touchstart',()=>{});
    // callout
    if(!window.CSS.supports('-webkit-touch-callout:none')){
        window.document.documentElement.addEventListener('pointerdown',event=>{
            event.button!==2?window.document.documentElement.addEventListener('contextmenu',tool.stop):window.document.documentElement.removeEventListener('contextmenu',tool.stop);
        });
    }
    // input and scroll
    // {
    //     let system=null;
    //     let loop=(result=window)=>{
    //         if(result.location.pathname==='/system/'){
    //             system=result;
    //         }else if(result!==window.top){
    //             loop(result.parent);
    //         }
    //     };
    //     loop();
    //     window.document.documentElement.addEventListener('pointerdown',event=>{
    //         system.postMessage([`input_${event.target.localName.match(/input|textarea/)?'focus':'blur'}`,''],'*');
    //     });
    // }
    window.document.documentElement.addEventListener('pointerdown',event=>{
        if(!event.target.localName.match(/input|textarea/))window.document.activeElement.blur();
    });
    window.document.documentElement.addEventListener('pointerdown',event=>{
        if(event.target.localName.match(/input|textarea/))window.console.log(event.target.localName);;
    });
    if(!window.CSS.supports('overscroll-behavior:contain')){
        window.document.documentElement.addEventListener('touchstart',event=>{
            let event_element=event.target;
            window.document.querySelectorAll('*').forEach(element=>{
                if(event_element.localName.match(/input|textarea/)&&event_element.scrollHeight!==event_element.offsetHeight){
                    element.removeEventListener('touchmove',tool.stop);
                }else if(window.getComputedStyle(element).overflowY.match(/auto|overlay|scroll/)){
                    if(element.scrollHeight===element.offsetHeight){
                        element.removeEventListener('touchmove',tool.stop);
                        element.addEventListener('touchmove',tool.stop);
                    }else{
                        element.removeEventListener('touchmove',tool.stop);
                    }
                }
            });
        });
    }
// #block
    // tool
    class tool{
        static stop(event){
            event.stopPropagation();
            event.preventDefault();
        }
    }
// #build
    // sw
    export let initial_sw=path=>{
        if('serviceWorker'in window.navigator)window.navigator.serviceWorker.register(path);
    };
    // head
    export let initial_head=(option={})=>{
        window.document.head.insertAdjacentHTML('afterbegin',
`<meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">
<meta name="format-detection" content="address=no,email=no,telephone=no">
<title>${option.title?option.title:''}</title>
<link rel="stylesheet" href="${option.style?option.style:''}">`
        );
        window.document.head.insertAdjacentHTML('beforeend',
`<link rel="icon" type="image/png" href="${option.icon?option.icon:''}">
<link rel="apple-touch-icon" href="${option.icon_apple?option.icon_apple:''}">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="white">
<meta name="apple-mobile-web-app-title" content="${option.title?option.title:''}">
<!-- <meta name="theme-color" content="#000000"> -->
<link rel="manifest" href="${option.manifest?option.manifest:''}">`
        );
    };
    // ic_oe
    export let initial_ic_oe=()=>{
        let user_agent=window.navigator.userAgent;
        let element_class=window.document.documentElement.classList;
        if(user_agent.match('Unix'))element_class.add('ic_oe_system_unix');
        if(user_agent.match('Mac OS')&&!user_agent.match('iPhone')&&!user_agent.match('iPad'))element_class.add('ic_oe_system_macos');
        if(user_agent.match('Windows'))element_class.add('ic_oe_system_windows');
        if(user_agent.match('Linux')&&!user_agent.match('Android'))element_class.add('ic_oe_system_linux');
        if(user_agent.match('CrOS'))element_class.add('ic_oe_system_chromeos');
        if(user_agent.match(/iPhone|iPad/))element_class.add('ic_oe_system_ios');
        if(user_agent.match('Android'))element_class.add('ic_oe_system_android');
        if(user_agent.match('Firefox'))element_class.add('ic_oe_browser_firefox');
        if(user_agent.match('Safari')&&!user_agent.match('Chrome')&&!user_agent.match('Edg'))element_class.add('ic_oe_browser_safari');
        if(user_agent.match('Chrome')&&!user_agent.match('Edg'))element_class.add('ic_oe_browser_chrome');
        if(user_agent.match('Edg'))element_class.add('ic_oe_browser_edge');
    };
// #debug