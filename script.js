'use strict';
// #import
    // initial
    import{initial_tool,initial_option}from'/link/initial.js';
    // Google Analytics
    initial_tool.element('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},window.document.head,'beforeend');
    initial_tool.element('script',false,window.document.head,'beforeend',`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #global
    // ##variable
    // ##module
    // ##build
        // initial
        initial_option({sw:'/sw.js',head:{title:'seabye',style:'/style.css',icon:'/base/icon.png',icon_apple:'/base/icon-apple.png',manifest:'/manifest.webmanifest'}});
// #content
    // ##variable
    // ##module
    // ##build
        // element
        initial_tool.loop(()=>{
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
    // ic_dg / initial container_debug
    window.document.documentElement.classList.add('ic_dg');