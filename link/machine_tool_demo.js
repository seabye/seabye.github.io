import{machine_tool}from'./machine_tool.js';
export const _={
    _start(){
        window.console.log('#### start machine_tool_demo.js');
        // machine_tool.element_create([
        //     {
        //         element:['span',{class:'one'},'?'],
        //         function(els){
        //             this.element.classList.add('is_me');
        //             window.console.log(this.element,els);
        //         },
        //         '':{},
        //         '1':{
        //             function(els){
        //                 this.element.classList.add('_1');
        //                 window.console.log('1',this.element,els);
        //             }
        //         },
        //         '2':{
        //             function(els){
        //                 this.element.classList.add('_2');
        //                 window.console.log('2',this.element,els);
        //             }
        //         }
        //     },
        //     [
        //         function(els){
        //             this.element.classList.add('is_me');
        //             window.console.log(this.element,els);
        //         },
        //         [],
        //         [
        //             function(els){
        //                 this.element.classList.add('_1');
        //                 window.console.log(this.element,els);
        //             }
        //         ],
        //         [
        //             function(els){
        //                 this.element.classList.add('_2');
        //                 window.console.log(this.element,els);
        //             }
        //         ]
        //     ]
        // ],window.document.body);
    },
    loop(){
        machine_tool.loop(()=>{
            window.console.log('lloooopp');
            return true;
        });
    },
    async aw_loop(){
        // window.console.log(await machine_tool.aw_loop(
        //     ()=>{
        //         return false;
        //     },
        //     ()=>{
        //         window.console.log('aw_loop()','1');
        //         return 11;
        //     },
        //     1000,
        //     2,
        //     ()=>{
        //         window.console.log('aw_loop()','2');
        //         return 22;
        //     }
        // ));
    },
    async time_out(){
        // window.console.log('time_out()');
        // await machine_tool.time_out(()=>{
        //     window.console.log('time_out()','2000');
        // },2000);
    },
    for(){
        // let data=['A','B',['D','E'],'AA','BB',['DD','EE']];
        // machine_tool.for(data,(count,key,value,depth,type)=>{
        //     window.console.log('all====',count,key,value,depth,type);
        // });
        // machine_tool.for(data,(count,key,value,depth,type)=>{
        //     window.console.log('0====',count,key,value,depth,type);
        // },0);
        // machine_tool.for(data,(count,key,value,depth,type)=>{
        //     window.console.log('1====',count,key,value,depth,type);
        // },1);
        // let data2={a:'A',b:'B',c:{d:'D',e:'E'},aa:'AA',bb:'BB',cc:{dd:'DD',ee:'EE'}};
        // machine_tool.for(data2,(count,key,value,depth,type)=>{
        //     window.console.log('all====',count,key,value,depth,type);
        // });
        // machine_tool.for(data2,(count,key,value,depth,type)=>{
        //     window.console.log('0====',count,key,value,depth,type);
        // },0);
        // machine_tool.for(data2,(count,key,value,depth,type)=>{
        //     window.console.log('1====',count,key,value,depth,type);
        // },1);
        let data3={a:'A',b:'B',c:['D','E'],aa:'AA',bb:'BB',cc:['DD','EE']};
        machine_tool.for(data3,(count,key,value,depth,type)=>{
            window.console.log('all====',count,key,value,depth,type);
        });
        // machine_tool.for(data3,(count,key,value,depth,type)=>{
        //     window.console.log('0====',count,key,value,depth,type);
        // },0);
        // machine_tool.for(data3,(count,key,value,depth,type)=>{
        //     window.console.log('1====',count,key,value,depth,type);
        // },1);
        // let data4=['A','B',{d:'D',e:'E'},'AA','BB',{dd:'DD',ee:'EE'}];
        // machine_tool.for(data4,(count,key,value,depth,type)=>{
        //     window.console.log('all====',count,key,value,depth,type);
        // });
        // machine_tool.for(data4,(count,key,value,depth,type)=>{
        //     window.console.log('0====',count,key,value,depth,type);
        // },0);
        // machine_tool.for(data4,(count,key,value,depth,type)=>{
        //     window.console.log('1====',count,key,value,depth,type);
        // },1);
        let data5={a:'A',b:'B',c:['D','E'],aa:'AA',bb:'BB',cc:['DD','EE']};
        machine_tool.for(data5,(count,key,value,depth,type)=>{
            window.console.log('all====',count,key,value,depth,type);
        },undefined,'');
    },
    uuid_36_to_uuid_22(){
        window.console.log('uuid_36_to_uuid_22()',machine_tool.uuid_36_to_uuid_22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
    },
    uuid_22_to_uuid_36(){
        window.console.log('uuid_22_to_uuid_36()',machine_tool.uuid_22_to_uuid_36('jvZe6aA5S_Kks2h_zB88ww'));
    },
    string_to_base64_uri_safe_no_pad(){
        window.console.log('string_to_base64_uri_safe_no_pad()',machine_tool.string_to_base64_uri_safe_no_pad('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
    },
    base64_uri_safe_no_pad_to_string(){
        window.console.log('base64_uri_safe_no_pad_to_string()',machine_tool.base64_uri_safe_no_pad_to_string('jvZe6aA5S_Kks2h_zB88ww'));
    },
    element_create(){
        window.console.log(machine_tool.element_create({
            '':{},
            _:{},
            ' _':{},
            0:{},
            1:{},
            [`x xx`]:{},
            [machine_tool.random()]:{},
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
        window.console.log(machine_tool.element_create([
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
        this.elements=machine_tool.element_create({
            target_mode:{
                element:[,{style:'z-index: 1; position: fixed; left: 0; top: 0; width: 128px; height: 192px; background-color: gray; display: flex; justify-content: center; align-items: center; flex-direction: column;'}],
                function(elements){
                    machine_tool.element_state([
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
                                    0
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
                                    0
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
                                    0
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
                    machine_tool.element_state([
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
                                    0
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
                                    0
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
                                    0
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
        // machine_tool.listen_target('add',window.document.documentElement,'pointer_down',()=>{
        //     window.console.log('listen_target()','pointer_down');
        // });
        // machine_tool.listen_target('add',window.document.documentElement,'pointer_move',()=>{
        //     window.console.log('listen_target()','pointer_move');
        // });
        machine_tool.listen_target('add',window.document.documentElement,'pointerup',()=>{
            window.console.log('listen_target()','pointerup');
        });
        machine_tool.listen_target('add',window.document.documentElement,'pointer_up',()=>{
            window.console.log('listen_target()','pointer_up');
        },undefined,0);
        machine_tool.listen_target('add',this.elements.target,'observe_mutation',()=>{
            window.console.log('listen_target()','observe_mutation');
            if(this.elements.target.classList.contains('open_state')){
                machine_tool.element_state(this.elements.target_mode,'open_state','_',true);
            }else{
                if(this.elements.target.classList.contains('_')){
                    machine_tool.element_state(this.elements.target_mode,'_','open_state',true);
                }
            }
        },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
        // machine_tool.listen_target('remove',this.elements.target,'observe_mutation',()=>{
        //     window.console.log('listen_target()','observe_mutation');
        //     if(this.elements.target.classList.contains('open_state')){
        //         machine_tool.element_state(this.elements.target_mode,'open_state','close_state',true);
        //     }else{
        //         if(this.elements.target.classList.contains('close_state')){
        //             machine_tool.element_state(this.elements.target_mode,'close_state','open_state',true);
        //         }
        //     }
        // },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
            machine_tool.listen_target('add',this.elements.red_target,'observe_mutation',()=>{
                window.console.log('listen_target()','observe_mutation');
                if(this.elements.target.classList.contains('open_state')){
                    machine_tool.element_state(this.elements.target_mode,'open_state','close_state',true);
                }else{
                    if(this.elements.target.classList.contains('close_state')){
                        machine_tool.element_state(this.elements.target_mode,'close_state','open_state',true);
                    }
                }
            },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                machine_tool.listen_target('remove',this.elements.red_target,'observe_mutation',()=>{
                    window.console.log('listen_target()','observe_mutation');
                    if(this.elements.target.classList.contains('open_state')){
                        machine_tool.element_state(this.elements.target_mode,'open_state','close_state',true);
                    }else{
                        if(this.elements.target.classList.contains('close_state')){
                            machine_tool.element_state(this.elements.target_mode,'close_state','open_state',true);
                        }
                    }
                },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
        // machine_tool.listen_target('add',window.document.documentElement,'observe_intersection',(data)=>{
        //     window.console.log('listen_target()','observe_intersection',data);
        // },{});
        machine_tool.listen_target('add',window.document.documentElement,'observe_resize',(data)=>{
            window.console.log('listen_target()','observe_resize',data);
        });
        machine_tool.listen_target('add',(data)=>{
            window.console.log('listen_target()','uri',data);
        },'uri');
        // window.history.pushState(null,null,'/x/');
        // window.history.pushState(null,null,'/');
        // window.history.replaceState(null,null,window.location.href);
    },
    element_block(){
        const block=machine_tool.element_block(window.document.body,'block');
        block.add(machine_tool.element_create('',{class:'b_1'}),1);
        block.add(machine_tool.element_create('',{class:'b_2'}),2);
        block.add(machine_tool.element_create('',{class:'b_3'}),3);
        block.add(machine_tool.element_create('',{class:'b_4'}),4);
        block.add(machine_tool.element_create('',{class:'b_5'}),5);
        block.add(machine_tool.element_create('',{class:'b_6'}),6);
        block.hide();
        block.hide();
        block.remove();
        block.remove();
    },
    _end(){
        window.console.log('#### end machine_tool_demo.js');
    }
};