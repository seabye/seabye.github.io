'use strict';
// #library
    // @initial.js
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
    // touch active
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
// #debug