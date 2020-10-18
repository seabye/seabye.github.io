'use strict';
import{initial_head}from'./link/initial.js';
initial_head({title:'seabye',style:'./style.css',icon:'./base/icon.png',icon_apple:'./base/icon-apple.png',manifest:'./manifest.webmanifest'});
window.document.body.insertAdjacentHTML('beforeend','Hello, World!');