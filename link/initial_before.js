'use strict';
for(const item of window.document.scripts){
    if(item.dataset.initial){
        // background color
        const data=window.JSON.parse(item.dataset.initial.replace(/'/g,'"'));
        window.document.documentElement.style.setProperty('background-color',`var(--ic_ve_color_white,${window.matchMedia('(prefers-color-scheme:dark)').matches?data.black?data.black:'#101010':data.white?data.white:'#FFFFFF'})`);
        window.addEventListener('load',()=>{
            window.setTimeout(()=>{
                window.document.documentElement.style.removeProperty('background-color');
                if(!window.document.documentElement.style[0])window.document.documentElement.removeAttribute('style');
            },175);
        });
        // theme color
        if(!(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg'))&&window.matchMedia('(prefers-color-scheme:dark)').addEventListener){
            const white='#E0E0E0';
            const black='#303030';
            const element=window.document.createElement('meta');
            element.setAttribute('name','theme-color');
            element.setAttribute('content',window.matchMedia('(prefers-color-scheme:dark)').matches?black:white);
            const theme_color=window.document.head.insertAdjacentElement('beforeend',element);
            window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',event=>theme_color.content=event.matches?black:white);
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