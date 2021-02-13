import{machine_tool}from'./machine_tool.js';
export const _={
    _start(){
        window.console.log('<<<< start machine_tool_.js');
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
        machine_tool.element_create({
            '':{},
            '':{},
            ' _':{},
            ' _':{},
            [machine_tool.random()]:{},
            [machine_tool.random()]:{},
            ' _':{
                function(elements){
                    window.console.log('element_create()',elements);
                }
            }
        },window.document.body);
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
    listen_element(){
        machine_tool.listen_element('add',window.document.documentElement,'pointerup',()=>{
            window.console.log('listen_element()','pointerup');
        });
        machine_tool.listen_element('add',window.document.documentElement,'pointer_up',()=>{
            window.console.log('listen_element()','pointer_up');
        },undefined,0);
        // machine_tool.listen_element('add',window.document.documentElement,'pointer_track',()=>{
        //     window.console.log('listen_element()','pointer_track');
        // });
        machine_tool.listen_element('add',this.elements.target,'observe_mutation',()=>{
            window.console.log('listen_element()','observe_mutation');
            if(this.elements.target.classList.contains('open_state')){
                machine_tool.element_state(this.elements.target_mode,'open_state','_',true);
            }else{
                if(this.elements.target.classList.contains('_')){
                    machine_tool.element_state(this.elements.target_mode,'_','open_state',true);
                }
            }
        },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
        // machine_tool.listen_element('remove',this.elements.target,'observe_mutation',()=>{
        //     window.console.log('listen_element()','observe_mutation');
        //     if(this.elements.target.classList.contains('open_state')){
        //         machine_tool.element_state(this.elements.target_mode,'open_state','close_state',true);
        //     }else{
        //         if(this.elements.target.classList.contains('close_state')){
        //             machine_tool.element_state(this.elements.target_mode,'close_state','open_state',true);
        //         }
        //     }
        // },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
            machine_tool.listen_element('add',this.elements.red_target,'observe_mutation',()=>{
                window.console.log('listen_element()','observe_mutation');
                if(this.elements.target.classList.contains('open_state')){
                    machine_tool.element_state(this.elements.target_mode,'open_state','close_state',true);
                }else{
                    if(this.elements.target.classList.contains('close_state')){
                        machine_tool.element_state(this.elements.target_mode,'close_state','open_state',true);
                    }
                }
            },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
                machine_tool.listen_element('remove',this.elements.red_target,'observe_mutation',()=>{
                    window.console.log('listen_element()','observe_mutation');
                    if(this.elements.target.classList.contains('open_state')){
                        machine_tool.element_state(this.elements.target_mode,'open_state','close_state',true);
                    }else{
                        if(this.elements.target.classList.contains('close_state')){
                            machine_tool.element_state(this.elements.target_mode,'close_state','open_state',true);
                        }
                    }
                },{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
        // machine_tool.listen_element('add',window.document.documentElement,'observe_intersection',(data)=>{
        //     window.console.log('listen_element()','observe_intersection',data);
        // },{});
        machine_tool.listen_element('add',window.document.documentElement,'observe_resize',(data)=>{
            window.console.log('listen_element()','observe_resize',data);
        });
    },
    element_recursion(){
        machine_tool.element_create('div',{class:'er0'},window.document.body,undefined,undefined,(data)=>{
            const er=machine_tool.element_recursion(data,'er');
            er.add('',{class:'er1'});
            const er2=er.add('',{class:'er2 fr0'});
                const fr=machine_tool.element_recursion(er2,'fr');
                fr.add('',{class:'fr1'});
                const fr2=fr.add('',{class:'fr2 gr0 hr0 ir0'});
                    const gr=machine_tool.element_recursion(fr2,'gr','gghhii');
                    const hr=machine_tool.element_recursion(fr2,'hr','gghhii');
                    const ir=machine_tool.element_recursion(fr2,'ir','gghhii');
                    gr.add('',{class:'gr1'});
                    gr.add('',{class:'gr2'});
                    hr.add('',{class:'hr1'});
                    hr.add('',{class:'hr2'});
                    hr.add('',{class:'hr3'});
                    ir.add('',{class:'ir1'});
                    ir.add('',{class:'ir2'});
                    ir.add('',{class:'ir3'});
            er.add('',{class:'er3'});
                fr.add('',{class:'fr3'});
                    gr.add('',{class:'gr3'});
// er.remove('',{class:'er3'});
// fr.remove('',{class:'fr3'});
// gr.remove('',{class:'gr3'});
//     hr.remove('',{class:'hr3'});
//     gr.remove('',{class:'gr2'});
//     gr.remove('',{class:'gr1'});
            // window.setTimeout(()=>{
            //     er.remove();
            //     fr.remove();
            //     gr.remove();
            //     window.setTimeout(()=>{
            //         er.add('',{class:'er4'});
            //         fr.add('',{class:'fr4'});
            //         gr.add('',{class:'gr4'});
            //     },3000);
            // },3000);
            // er0     - er0
            // er1     - er1
            // er2+fr0 - er2+fr0
            // er3     -     fr1
            // fr1     -     fr2+gr0
            // fr2+gr0 -         gr1
            // fr3     -         gr2
            // gr1     -         gr3
            // gr2     -     fr3
            // gr3     - er3
            // window.console.log(er.add);
            // window.console.log(er.remove);
        });
    },
    listen_uri(){
        machine_tool.listen_uri('add',(data)=>{
            window.console.log('listen_uri()',data);
        });
        // window.history.pushState(null,null,'/x/');
        // window.history.pushState(null,null,'/');
        // window.history.replaceState(null,null,window.location.href);
    },
    _end(){
        window.console.log('>>>> end machine_tool_.js');
    }
};