'use strict';
{
    let white='';
    let black='';
    for(const item of window.document.scripts){
        if(item.dataset.initial===''){
            if(item.dataset.initial_background_color){
                const color=item.dataset.initial_background_color.split(',');
                white=color[0];
                black=color[1];
            }
            const element=window.document.createElement('script');
            element.setAttribute('src',item.outerHTML.match(/src="([^"]+)"/)[1].replace('initial_before.js','script.js'));
            element.setAttribute('type','module');
            item.insertAdjacentElement('afterend',element);
            item.parentNode.removeChild(item);
            break;
        }
    }
    if(!white){
        white='#FFFFFF';
        black='#000000';
    }
    window.document.documentElement.style.setProperty('background-color',`${window.matchMedia('(prefers-color-scheme:dark)').matches?black:white}`);
}