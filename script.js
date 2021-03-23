'use strict';
// #before
    // console
    window.console.log('#### start: script.js');
// #import
    // machineTool
    import{machineTool}from'/link/machineTool.js';
    // Google Analytics
    machineTool.elementCreate('script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-SBCF7D104D'},window.document.head);
    machineTool.elementCreate('script',undefined,window.document.head,undefined,`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SBCF7D104D');`);
// #variable
// #block
// #build
    // font
    window.document.fonts.add(new window.FontFace('New York_','url(/link/font/NewYork.woff2)'));
    // element
    machineTool.loop(()=>{
        for(const value of window.document.documentElement.children){
            if(value.localName==='body'){
                window.document.body.insertAdjacentHTML('beforeend',`
                    <div style="perspective: 100vw;">
                        <div style="font-size: calc(100vmax/25); transform: rotateX(-15deg); text-align: center; perspective: 50vw;">
                            <div style="transform: rotateY(-60deg);">
                                <a href="//seabye.com">seabye.com</a>
                                <span style="font-size: 38.2%;">🔴 10%</span>
                                <div style="color: var(--ic_ve_color_black2);">
                                    <span style="font-size: 61.8%;">GUIInitial</span>
                                    <a href="//seabye.com/link/GUIInitial.js">.js</a>
                                    <a href="//seabye.com/link/GUIInitial.css">.css</a>
                                    <span style="font-size: 38.2%;">🟢 90%</span>
                                    <div>
                                        <span style="font-size: 61.8%;">machineTool</span>
                                        <a href="//seabye.com/link/machineTool.js">.js</a>
                                        <span style="font-size: 38.2%;">🟡 50%</span>
                                    </div>
                                </div>
                            </div>
                            <div style="font-size: 75%; color: var(--ic_ve_color_black4); transform: rotateY(-45deg);">
                                <a href="//github.com/seabye">github.com/seabye</a>
                            </div>
                            <div style="color: var(--ic_ve_color_black6); transform: rotateY(-30deg);">
                                <a href="//w3daze.com">w3daze.com</a>
                                <span style="font-size: 38.2%;">🔴 10%</span>
                            </div>
                            <div style="color: var(--ic_ve_color_black7); transform: rotateY(-15deg)rotateY(180deg);">
                                <a>planC</a>
                                <span style="font-size: 38.2%;">🟡 40%</span>
                            </div>
                            <div style="font-size: 125%; color: rgba(255,0,0,0.1875);">Hello, World!</div>
                            <div style="transform: rotateY(30deg);">
                                <a href="//luojia.me">luojia.me</a>
                            </div>
                            <div style="transform: rotateY(45deg);">
                                <a href="//pasi.cat">pasi.cat</a>
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
    // ic_dg
    window.document.documentElement.classList.add('ic_dg');
    // debug
    window.document.documentElement.classList.add('debug');
// #after
    // console
    window.console.log('#### end: script.js');