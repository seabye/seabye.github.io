'use strict';
import{initial_sw,initial_head}from'/link/initial.js';
initial_sw('/sw.js');
initial_head({title:'seabye',style:'/style.css',icon:'/base/icon.png',icon_apple:'/base/icon-apple.png',manifest:'/manifest.webmanifest'});
window.document.body.insertAdjacentHTML('beforeend',
`<div>Hello, World!</div>
<div>[ <a href="//luojia.me">luojia.me</a> <a href="//pasi.cat">pasi.cat</a> <a href="//oddbye.com">oddbye.com</a> ]</div>`
);