'use strict';
// #before
    // console
    window.console.log('#### start script.js');
// #import
    // machine_tool
    import{machine_tool}from'/link/machine_tool.js';
    // Google Analytics
    machine_tool.element_create('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},window.document.head);
    machine_tool.element_create('script',undefined,window.document.head,undefined,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #variable
// #method
// #build
    // element
    machine_tool.loop(()=>{
        for(const item of window.document.documentElement.children){
            if(item.localName==='body'){
                window.document.body.insertAdjacentHTML('beforeend',`
                    <div style="perspective: 100vw;">
                        <div style="font-size: calc(100vmax/25); transform: rotateX(-15deg); text-align: center; perspective: 50vw;">
                            <div style="transform: rotateY(-60deg);">
                                <a href="//seabye.com">🍁seabye.com</a>
                                <div style="color: var(--ic_ve_color_black4);">
                                    <a href="//seabye.com/link/gui_initial.js">🌱guii.j</a>
                                    <a href="//seabye.com/link/gui_initial.css">🌱guii.c</a>
                                    <a href="//seabye.com/link/machine_tool.js">🌱mt.j</a>
                                </div>
                            </div>
                            <div style="font-size: 75%; color: var(--ic_ve_color_black4); transform: rotateY(-45deg);">
                                <a href="//github.com/seabye">💧github.com/seabye</a>
                            </div>
                            <div style="color: var(--ic_ve_color_black6); transform: rotateY(-30deg);">
                                <a href="//w3daze.com">🍁w3daze.com</a>
                            </div>
                            <div style="font-size: 125%; color: rgba(255,0,0,0.1875);">Hello, World!</div>
                            <div style="transform: rotateY(30deg);">
                                <a href="//luojia.me">🍄luojia.me</a>
                            </div>
                            <div style="transform: rotateY(45deg);">
                                <a href="//pasi.cat">🍄pasi.cat</a>
                            </div>
                            <div style="transform: rotateY(60deg);">
                                <a href="//oddbye.com">🍄oddbye.com</a>
                            </div>
                        </div>
                    </div>
                `);
                return true;
            }
        }
        return false;
    },1000/60);
// #debug
    // ic_dg / ic_ debug
    window.document.documentElement.classList.add('ic_dg');
// #after
    // console
    window.console.log('#### end script.js');