'use strict';
// #before
    // console
    window.console.log('#### start: machineTool_demo.js');
// #import
// #variable
// #block
// #build
export const machineTool_demo=(machineTool)=>{
    machineTool.run_object({
        loop(){
            machineTool.loop(()=>{
                window.console.log('lloooopp');
                return true;
            });
        },
        async async_loop(){
            // window.console.log(await machineTool.async_loop(
            //     ()=>{
            //         return false;
            //     },
            //     ()=>{
            //         window.console.log('async_loop()','1');
            //         return 11;
            //     },
            //     1000,
            //     2,
            //     ()=>{
            //         window.console.log('async_loop()','2');
            //         return 22;
            //     }
            // ));
        },
        async time_out(){
            // window.console.log('time_out()');
            // await machineTool.time_out(()=>{
            //     window.console.log('time_out()','2000');
            // },2000);
        },
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
        uuid_36_to_uuid_22(){
            window.console.log('uuid_36_to_uuid_22()',machineTool.uuid_36_to_uuid_22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
        },
        uuid_22_to_uuid_36(){
            window.console.log('uuid_22_to_uuid_36()',machineTool.uuid_22_to_uuid_36('jvZe6aA5S_Kks2h_zB88ww'));
        },
        string_to_base64_uri_safe_no_pad(){
            window.console.log('string_to_base64_uri_safe_no_pad()',machineTool.string_to_base64_uri_safe_no_pad('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
        },
        base64_uri_safe_no_pad_to_string(){
            window.console.log('base64_uri_safe_no_pad_to_string()',machineTool.base64_uri_safe_no_pad_to_string('jvZe6aA5S_Kks2h_zB88ww'));
        },
        element_create(){
            machineTool.element_create([
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
            window.console.log(machineTool.element_create({
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
            window.console.log(machineTool.element_create([
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
        element_state(){
            this.elements=machineTool.element_create({
                target_mode:{
                    element:[,{style:'z-index: 1; position: fixed; left: 0; top: 0; width: 128px; height: 192px; background-color: gray; display: flex; justify-content: center; align-items: center; flex-direction: column;'}],
                    function(elements){
                        machineTool.element_state([
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
                                            window.console.log('element_state()','1 4 pointer_up',data);
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
                                            window.console.log('element_state()','2 pointer_up',data);
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
                                            window.console.log('element_state()','3 pointer_up',data);
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
                        machineTool.element_state([
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
                                            window.console.log('element_state()','red pointer_up',data);
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
                                            window.console.log('element_state()','green pointer_up',data);
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
                                            window.console.log('element_state()','blue pointer_up',data);
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
        listen_target(){
            // machineTool.listen_target('add',window.document.documentElement,'pointer_down',()=>{
            //     window.console.log('listen_target()','pointer_down');
            // });
            // machineTool.listen_target('add',window.document.documentElement,'pointer_move',()=>{
            //     window.console.log('listen_target()','pointer_move');
            // });
            machineTool.listen_target('add',window.document.documentElement,'pointerup',()=>{
                window.console.log('listen_target()','pointerup');
            });
            machineTool.listen_target('add',window.document.documentElement,'pointer_up',()=>{
                window.console.log('listen_target()','pointer_up');
            },undefined,0);
            machineTool.listen_target('add',this.elements.target,'observe_mutation',()=>{
                window.console.log('listen_target()','observe_mutation');
                if(this.elements.target.classList.contains('open_state')){
                    machineTool.element_state(this.elements.target_mode,'open_state','_',true);
                }else{
                    if(this.elements.target.classList.contains('_')){
                        machineTool.element_state(this.elements.target_mode,'_','open_state',true);
                    }
                }
            },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
            // machineTool.listen_target('remove',this.elements.target,'observe_mutation',()=>{
            //     window.console.log('listen_target()','observe_mutation');
            //     if(this.elements.target.classList.contains('open_state')){
            //         machineTool.element_state(this.elements.target_mode,'open_state','close_state',true);
            //     }else{
            //         if(this.elements.target.classList.contains('close_state')){
            //             machineTool.element_state(this.elements.target_mode,'close_state','open_state',true);
            //         }
            //     }
            // },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                machineTool.listen_target('add',this.elements.red_target,'observe_mutation',()=>{
                    window.console.log('listen_target()','observe_mutation');
                    if(this.elements.target.classList.contains('open_state')){
                        machineTool.element_state(this.elements.target_mode,'open_state','close_state',true);
                    }else{
                        if(this.elements.target.classList.contains('close_state')){
                            machineTool.element_state(this.elements.target_mode,'close_state','open_state',true);
                        }
                    }
                },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                    machineTool.listen_target('remove',this.elements.red_target,'observe_mutation',()=>{
                        window.console.log('listen_target()','observe_mutation');
                        if(this.elements.target.classList.contains('open_state')){
                            machineTool.element_state(this.elements.target_mode,'open_state','close_state',true);
                        }else{
                            if(this.elements.target.classList.contains('close_state')){
                                machineTool.element_state(this.elements.target_mode,'close_state','open_state',true);
                            }
                        }
                    },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
            // machineTool.listen_target('add',window.document.documentElement,'observe_intersection',(data)=>{
            //     window.console.log('listen_target()','observe_intersection',data);
            // },{});
            machineTool.listen_target('add',window.document.documentElement,'observe_resize',(data)=>{
                window.console.log('listen_target()','observe_resize',data);
            });
            machineTool.listen_target('add',(data)=>{
                window.console.log('listen_target()','uri',data);
            },'uri');
            // window.history.pushState(null,null,'/x/');
            // window.history.pushState(null,null,'/');
            // window.history.replaceState(null,null,window.location.href);
        },
        element_block(){
            const block=machineTool.element_block(window.document.body,'block');
            block.add(machineTool.element_create('',{class:'b_1'}),1);
            block.add(machineTool.element_create('',{class:'b_2'}),2);
            block.add(machineTool.element_create('',{class:'b_3'}),3);
            block.add(machineTool.element_create('',{class:'b_4'}),4);
            block.add(machineTool.element_create('',{class:'b_5'}),5);
            block.add(machineTool.element_create('',{class:'b_6'}),6);
            block.hide();
            block.hide();
            block.remove();
            block.remove();
        }
    });
};
// #debug
// #after
    // console
    window.console.log('#### end: machineTool_demo.js');