'use strict';
import{initial_sw,initial_head}from'/link/initial.js';
initial_sw('/sw.js');
initial_head({title:'seabye',style:'/style.css',icon:'/base/icon.png',icon_apple:'/base/icon-apple.png',manifest:'/manifest.webmanifest'});
window.document.body.insertAdjacentHTML('beforeend',
`<div style="perspective: 50vw;">
    <div style="font-size: calc(100vw/20); transform: rotateX(-45deg); text-align: center;">
        <div style="color: var(--ic_ve_color_black2);">Hello, World!</div>
        <div><a href="//luojia.me">luojia.me</a></div>
        <div><a href="//pasi.cat">pasi.cat</a></div>
        <div><a href="//oddbye.com">oddbye.com</a></div>
    </div>
</div>`
);