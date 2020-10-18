'use strict';
{
    let white='';
    let black='';
    for(const item of window.document.scripts){
        if(item.dataset.initial){
            const data=window.JSON.parse(item.dataset.initial.replace(/'/g,'"'));
            const element=window.document.createElement('script');
            element.setAttribute('src',data.script);
            element.setAttribute('type','module');
            item.insertAdjacentElement('afterend',element);
            white=data.white?data.white:'#FFFFFF';
            black=data.black?data.black:'#000000';
            item.parentNode.removeChild(item);
            break;
        }
    }
    window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?black:white}`);
}