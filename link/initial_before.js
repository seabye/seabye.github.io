'use strict';
for(const item of window.document.scripts){
    if(item.dataset.initial){
        const data=window.JSON.parse(item.dataset.initial.replace(/'/g,'"'));
        const element=window.document.createElement('script');
        element.setAttribute('src',data.script);
        element.setAttribute('type','module');
        item.insertAdjacentElement('afterend',element);
        window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?data.black?data.black:'#101010':data.white?data.white:'#FFFFFF'}`);
        item.parentNode.removeChild(item);
        break;
    }
}