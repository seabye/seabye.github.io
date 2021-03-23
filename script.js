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
    // debug
    if(window.location.hostname==='localhost'){
        // ic_dg
        window.document.documentElement.classList.add('ic_dg');
        // debug
        window.document.documentElement.classList.add('debug');
    }
    // window.machineTool
    machineTool.debug(()=>{
        window.machineTool=machineTool;
    });
    // machineTool test
    machineTool.debug(()=>{
        machineTool.runObject({
            for(){
                // let data=['A','B',['D','E'],'AA','BB',['DD','EE']];
                // machineTool.for(data,(count,key,value,depth,type)=>{
                //     window.console.log('all====',count,key,value,depth,type);
                // });
                // machineTool.for(data,(count,key,value,depth,type)=>{
                //     window.console.log('0====',count,key,value,depth,type);
                // },0);
                // machineTool.for(data,(count,key,value,depth,type)=>{
                //     window.console.log('1====',count,key,value,depth,type);
                // },1);
                // let data2={a:'A',b:'B',c:{d:'D',e:'E'},aa:'AA',bb:'BB',cc:{dd:'DD',ee:'EE'}};
                // machineTool.for(data2,(count,key,value,depth,type)=>{
                //     window.console.log('all====',count,key,value,depth,type);
                // });
                // machineTool.for(data2,(count,key,value,depth,type)=>{
                //     window.console.log('0====',count,key,value,depth,type);
                // },0);
                // machineTool.for(data2,(count,key,value,depth,type)=>{
                //     window.console.log('1====',count,key,value,depth,type);
                // },1);
                let data3={a:'A',b:'B',c:['D','E'],aa:'AA',bb:'BB',cc:['DD','EE']};
                machineTool.for(data3,(count,key,value,depth,type)=>{
                    window.console.log('all====',count,key,value,depth,type);
                });
                // machineTool.for(data3,(count,key,value,depth,type)=>{
                //     window.console.log('0====',count,key,value,depth,type);
                // },0);
                // machineTool.for(data3,(count,key,value,depth,type)=>{
                //     window.console.log('1====',count,key,value,depth,type);
                // },1);
                // let data4=['A','B',{d:'D',e:'E'},'AA','BB',{dd:'DD',ee:'EE'}];
                // machineTool.for(data4,(count,key,value,depth,type)=>{
                //     window.console.log('all====',count,key,value,depth,type);
                // });
                // machineTool.for(data4,(count,key,value,depth,type)=>{
                //     window.console.log('0====',count,key,value,depth,type);
                // },0);
                // machineTool.for(data4,(count,key,value,depth,type)=>{
                //     window.console.log('1====',count,key,value,depth,type);
                // },1);
                let data5={a:'A',b:'B',c:['D','E'],aa:'AA',bb:'BB',cc:['DD','EE']};
                machineTool.for(data5,(count,key,value,depth,type)=>{
                    window.console.log('all====',count,key,value,depth,type);
                },undefined,'');
            },
            UUID36ToUUID22(){
                window.console.log('UUID36ToUUID22()',machineTool.UUID36ToUUID22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
            },
            UUID22ToUUID36(){
                window.console.log('UUID22ToUUID36()',machineTool.UUID22ToUUID36('jvZe6aA5S_Kks2h_zB88ww'));
            },
            stringToBase64URISafeNoPad(){
                window.console.log('stringToBase64URISafeNoPad()',machineTool.stringToBase64URISafeNoPad('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
            },
            base64URISafeNoPadToString(){
                window.console.log('base64URISafeNoPadToString()',machineTool.base64URISafeNoPadToString('jvZe6aA5S_Kks2h_zB88ww'));
            },
            elementCreate(){
                machineTool.elementCreate([
                    {
                        element:['span',{class:'one'},'?'],
                        function(els){
                            this.element.classList.add('is_me');
                            window.console.log(this.element,els);
                        },
                        '':{},
                        '1':{
                            function(els){
                                this.element.classList.add('_1');
                                window.console.log('1',this.element,els);
                            }
                        },
                        '2':{
                            function(els){
                                this.element.classList.add('_2');
                                window.console.log('2',this.element,els);
                            }
                        }
                    },
                    [
                        function(els){
                            this.element.classList.add('is_me');
                            window.console.log(this.element,els);
                        },
                        [],
                        [
                            function(els){
                                this.element.classList.add('_1');
                                window.console.log(this.element,els);
                            }
                        ],
                        [
                            function(els){
                                this.element.classList.add('_2');
                                window.console.log(this.element,els);
                            }
                        ]
                    ]
                ],window.document.body);
                window.console.log(machineTool.elementCreate({
                    '':{},
                    _:{},
                    ' _':{},
                    0:{},
                    1:{},
                    [`x xx`]:{},
                    [machineTool.random()]:{},
                    array:[
                        {
                            element:['',{class:'child'}],
                            function(){
                                window.console.log(this.element);
                            }
                        },
                        {},
                        {
                            array2:[
                                {},
                                {},
                                {}
                            ]
                        }
                    ]
                },window.document.body));
                window.console.log(machineTool.elementCreate([
                    [
                        [
                            [
                                function(elements,element){
                                    window.console.log('!!!',this,this.element,elements,element);
                                },
                                []
                            ]
                        ]
                    ],
                    {
                        element:[,{class:'a'}],
                        one:{}
                    },
                    {}
                ],window.document.body));
            },
            elementState(){
                this.elements=machineTool.elementCreate({
                    target_mode:{
                        element:[,{style:'z-index: 1; position: fixed; left: 0; top: 0; width: 128px; height: 192px; background-color: gray; display: flex; justify-content: center; align-items: center; flex-direction: column;'}],
                        function(elements){
                            machineTool.elementState([
                                'target',
                                [
                                    'open_state',
                                    ,
                                    [
                                        elements.target,
                                        elements.target2
                                    ],
                                    [
                                        [
                                            false,
                                            'auto',
                                            [
                                                elements.button,
                                                elements.button4
                                            ],
                                            'pointer_up',
                                            (data)=>{
                                                window.console.log('elementState()','1 4 pointer_up',data);
                                            },
                                            ,
                                            0,
                                        ],
                                        [
                                            false,
                                            'open',
                                            [
                                                elements.button2
                                            ],
                                            'pointer_up',
                                            (data)=>{
                                                window.console.log('elementState()','2 pointer_up',data);
                                            },
                                            ,
                                            0,
                                        ],
                                        [
                                            true,
                                            'close',
                                            [
                                                elements.button3
                                            ],
                                            'pointer_up',
                                            (data)=>{
                                                window.console.log('elementState()','3 pointer_up',data);
                                            },
                                            ,
                                            0,
                                        ]
                                    ]
                                ]
                            ]);
                        },
                        target:{
                            element:[,{style:'width: 100%; height: 32px; background-color: white;'}]
                        },
                        target2:{
                            element:[,{style:'width: 100%; height: 32px; background-color: white;'}]
                        },
                        button:{
                            element:[,{style:'width: 100%; height: 32px; background-color: darkgray;'}]
                        },
                        button2:{
                            element:[,{style:'width: 100%; height: 32px; background-color: darkred;'}]
                        },
                        button3:{
                            element:[,{style:'width: 100%; height: 32px; background-color: darkblue;'}]
                        },
                        button4:{
                            element:[,{style:'width: 100%; height: 32px; background-color: darkgray;'}]
                        }
                    },
                    tab_mode:{
                        element:[,{style:'z-index: 1; position: fixed; left: 128px; top: 0; width: 128px; height: 192px; background-color: gray; display: flex; justify-content: center; align-items: center; flex-direction: column;'}],
                        function(elements){
                            machineTool.elementState([
                                'tab',
                                [
                                    'open_state',
                                    ,
                                    [
                                        [
                                            true,
                                            [
                                                elements.red_target,
                                                elements.red_target2
                                            ],
                                            [
                                                elements.red_button,
                                                elements.red_button2
                                            ],
                                            'pointer_up',
                                            (data)=>{
                                                window.console.log('elementState()','red pointer_up',data);
                                            },
                                            ,
                                            0,
                                        ],
                                        [
                                            false,
                                            [
                                                elements.green_target,
                                                elements.green_target2
                                            ],
                                            [
                                                elements.green_button,
                                                elements.green_button2
                                            ],
                                            'pointer_up',
                                            (data)=>{
                                                window.console.log('elementState()','green pointer_up',data);
                                            },
                                            ,
                                            0,
                                        ],
                                        [
                                            false,
                                            [
                                                elements.blue_target,
                                                elements.blue_target2
                                            ],
                                            [
                                                elements.blue_button,
                                                elements.blue_button2
                                            ],
                                            'pointer_up',
                                            (data)=>{
                                                window.console.log('elementState()','blue pointer_up',data);
                                            },
                                            ,
                                            0,
                                        ]
                                    ]
                                ]
                            ]);
                        },
                        red_target:{
                            element:[,{style:'width: 100%; height: 16px; background-color: white;'}]
                        },
                        red_target2:{
                            element:[,{style:'width: 75%; height: 16px; background-color: white;'}]
                        },
                        red_button:{
                            element:[,{style:'width: 50%; height: 16px; background-color: darkgray;'}]
                        },
                        red_button2:{
                            element:[,{style:'width: 25%; height: 16px; background-color: darkgray;'}]
                        },
                        green_target:{
                            element:[,{style:'width: 100%; height: 16px; background-color: white;'}]
                        },
                        green_target2:{
                            element:[,{style:'width: 75%; height: 16px; background-color: white;'}]
                        },
                        green_button:{
                            element:[,{style:'width: 50%; height: 16px; background-color: darkgray;'}]
                        },
                        green_button2:{
                            element:[,{style:'width: 25%; height: 16px; background-color: darkgray;'}]
                        },
                        blue_target:{
                            element:[,{style:'width: 100%; height: 16px; background-color: white;'}]
                        },
                        blue_target2:{
                            element:[,{style:'width: 75%; height: 16px; background-color: white;'}]
                        },
                        blue_button:{
                            element:[,{style:'width: 50%; height: 16px; background-color: darkgray;'}]
                        },
                        blue_button2:{
                            element:[,{style:'width: 25%; height: 16px; background-color: darkgray;'}]
                        }
                    }
                },window.document.body);
            },
            listenTarget(){
                // machineTool.listenTarget('add',window.document.documentElement,'pointer_down',()=>{
                //     window.console.log('listenTarget()','pointer_down');
                // });
                // machineTool.listenTarget('add',window.document.documentElement,'pointer_move',()=>{
                //     window.console.log('listenTarget()','pointer_move');
                // });
                machineTool.listenTarget('add',window.document.documentElement,'pointerup',()=>{
                    window.console.log('listenTarget()','pointerup');
                });
                machineTool.listenTarget('add',window.document.documentElement,'pointer_up',()=>{
                    window.console.log('listenTarget()','pointer_up');
                },undefined,0);
                machineTool.listenTarget('add',this.elements.target,'observe_mutation',()=>{
                    window.console.log('listenTarget()','observe_mutation');
                    if(this.elements.target.classList.contains('open_state')){
                        machineTool.elementState(this.elements.target_mode,'open_state','_',true);
                    }else{
                        if(this.elements.target.classList.contains('_')){
                            machineTool.elementState(this.elements.target_mode,'_','open_state',true);
                        }
                    }
                },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                // machineTool.listenTarget('remove',this.elements.target,'observe_mutation',()=>{
                //     window.console.log('listenTarget()','observe_mutation');
                //     if(this.elements.target.classList.contains('open_state')){
                //         machineTool.elementState(this.elements.target_mode,'open_state','close_state',true);
                //     }else{
                //         if(this.elements.target.classList.contains('close_state')){
                //             machineTool.elementState(this.elements.target_mode,'close_state','open_state',true);
                //         }
                //     }
                // },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                    machineTool.listenTarget('add',this.elements.red_target,'observe_mutation',()=>{
                        window.console.log('listenTarget()','observe_mutation');
                        if(this.elements.target.classList.contains('open_state')){
                            machineTool.elementState(this.elements.target_mode,'open_state','close_state',true);
                        }else{
                            if(this.elements.target.classList.contains('close_state')){
                                machineTool.elementState(this.elements.target_mode,'close_state','open_state',true);
                            }
                        }
                    },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                        machineTool.listenTarget('remove',this.elements.red_target,'observe_mutation',()=>{
                            window.console.log('listenTarget()','observe_mutation');
                            if(this.elements.target.classList.contains('open_state')){
                                machineTool.elementState(this.elements.target_mode,'open_state','close_state',true);
                            }else{
                                if(this.elements.target.classList.contains('close_state')){
                                    machineTool.elementState(this.elements.target_mode,'close_state','open_state',true);
                                }
                            }
                        },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                // machineTool.listenTarget('add',window.document.documentElement,'observe_intersection',(data)=>{
                //     window.console.log('listenTarget()','observe_intersection',data);
                // },{});
                machineTool.listenTarget('add',window.document.documentElement,'observe_resize',(data)=>{
                    window.console.log('listenTarget()','observe_resize',data);
                });
                machineTool.listenTarget('add',(data)=>{
                    window.console.log('listenTarget()','URI',data);
                },'URI');
                // window.history.pushState(null,null,'/x/');
                // window.history.pushState(null,null,'/');
                // window.history.replaceState(null,null,window.location.href);
            },
            elementBlock(){
                const block=machineTool.elementBlock(window.document.body,'block');
                block.add(machineTool.elementCreate('',{class:'b_1'}),1);
                block.add(machineTool.elementCreate('',{class:'b_2'}),2);
                block.add(machineTool.elementCreate('',{class:'b_3'}),3);
                block.add(machineTool.elementCreate('',{class:'b_4'}),4);
                block.add(machineTool.elementCreate('',{class:'b_5'}),5);
                block.add(machineTool.elementCreate('',{class:'b_6'}),6);
                block.hide();
                block.hide();
                block.remove();
                block.remove();
            }
        });
    });
// #after
    // console
    window.console.log('#### end: script.js');