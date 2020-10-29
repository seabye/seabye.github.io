'use strict';
import'https://www.googletagmanager.com/gtag/js?id=UA-48096764-1';
window.dataLayer=window.dataLayer||[];
function gtag(){
    dataLayer.push(arguments);
}
gtag('js',new Date());
gtag('config','UA-48096764-1');
import{initial_tool,initial_sw,initial_head}from'/link/initial.js';
initial_sw('/sw.js');
initial_head({title:'seabye',style:'/style.css',icon:'/base/icon.png',icon_apple:'/base/icon-apple.png',manifest:'/manifest.webmanifest'});
window.document.documentElement.classList.add('ic_dg');
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
    window.document.body.insertAdjacentHTML('beforeend',
    `<div style="perspective: 50vw;">
        <div style="font-size: calc(100vmax/20); transform: rotateX(-45deg); text-align: center; perspective: 50vw;">
            <div style="color: var(--ic_ve_color_black2); transform: rotateY(-45deg);">Hello, World!</div>
            <div style="transform: rotateY(30deg);"><a href="//luojia.me">luojia.me</a></div>
            <div style="transform: rotateY(45deg);"><a href="//pasi.cat">pasi.cat</a></div>
            <div style="transform: rotateY(60deg);"><a href="//oddbye.com">oddbye.com</a></div>
        </div>
    </div>`
    );
},1000/60);