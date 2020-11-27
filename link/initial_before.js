'use strict';
// #import
// #global
    // ##variable
    // ##module
    // ##build
        // initial
        for(const item of window.document.scripts){
            if(item.dataset.initial){
                // background color~
                const data=window.JSON.parse(item.dataset.initial.replace(/'/g,'"'));
                window.document.documentElement.style.setProperty('background-color',`var(--ic_ve_color_white,${window.matchMedia('(prefers-color-scheme:dark)').matches?data.dark?data.dark:'#000000':data.light?data.light:'#FFFFFF'})`);
                window.addEventListener('load',()=>{
                    window.document.documentElement.style.removeProperty('background-color');
                    if(!window.document.documentElement.style[0]){
                        window.document.documentElement.removeAttribute('style');
                    }
                },{once:true});
                // theme color~
                if(!(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg'))&&window.matchMedia('(prefers-color-scheme:dark)').addEventListener){
                    const light='#E1E1E1';
                    const dark='#212121';
                    const element=window.document.createElement('meta');
                    element.setAttribute('name','theme-color');
                    element.setAttribute('content',window.matchMedia('(prefers-color-scheme:dark)').matches?dark:light);
                    const theme_color=window.document.head.insertAdjacentElement('beforeend',element);
                    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
                        theme_color.setAttribute('content',event.matches?dark:light);
                    });
                }
                // script
                if(data.script){
                    const element=window.document.createElement('script');
                    element.setAttribute('src',data.script);
                    element.setAttribute('type','module');
                    item.insertAdjacentElement('afterend',element);
                }
                // clear
                item.parentNode.removeChild(item);
                break;
            }
        }
// #content
    // ##variable
    // ##module
    // ##build
// #debug