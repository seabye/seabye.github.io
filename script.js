'use strict';
// #import
    // guim
    import{guim}from'/link/guim.js';
    // Google Analytics
    guim.create('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},window.document.head);
    guim.create('script',false,window.document.head,false,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #global
    // ##variable
    // ##module
    // ##build
// #content
    // ##variable
    // ##module
    // ##build
        // element
        guim.loop(()=>{
            let result=false;
            for(const item of window.document.documentElement.children){
                if(item.localName==='body'){
                    result=true;
                    break;
                }
            }
            return result;
        },()=>{
            window.document.body.insertAdjacentHTML('beforeend',`
                <div style="perspective: 100vw;">
                    <div style="font-size: calc(100vmax/20); transform: rotateX(-15deg); text-align: center; perspective: 50vw;">
                        <div style="transform: rotateY(-60deg);"><a href="//seabye.com">seabye.com</a></div>
                        <div style="font-size: 75%; color: var(--ic_ve_color_black4); transform: rotateY(-45deg);"><a href="//github.com/seabye">github.com/seabye</a></div>
                        <div style="color: var(--ic_ve_color_black6); transform: rotateY(-30deg);"><a href="//w3daze.com">w3daze.com</a></div>
                        <div style="font-size: 125%; color: rgba(255,0,0,0.25);">Hello, World!</div>
                        <div style="transform: rotateY(30deg);"><a href="//luojia.me">luojia.me</a></div>
                        <div style="transform: rotateY(45deg);"><a href="//pasi.cat">pasi.cat</a></div>
                        <div style="transform: rotateY(60deg);"><a href="//oddbye.com">oddbye.com</a></div>
                    </div>
                </div>
            `);
        },1000/60);
// #debug
    // ic_dg / ic_ debug
    window.document.documentElement.classList.add('ic_dg');
    // guim
    guim.bind('add',window.document.documentElement,'observer_intersection',()=>{
        window.console.log('???');
    },{});
    guim.bind('add',window.document.documentElement,'observer_resize',()=>{
        window.console.log('???');
    });
    guim.switch(['target',[]]);
    guim.switch(['tab',[]]);