'use strict';
// <<<< <<<< <<<< <<<<
// Machine Tool
// for Browser and Deno
// machine_tool.js
// ==== ==== ==== ====
// import{machine_tool}from'machine_tool.js';
// >>>> >>>> >>>> >>>>
// #before
    // console
    window.console.log('#### start machine_tool.js');
// #import
// #variable
// #method
    // machine_tool
    export const machine_tool={
        // base
            /*🟢*/throttle(callback,wait=1000/24,first=false){
                let timeout=null;
                return function(...argument){
                    const set=()=>{
                        timeout=window.setTimeout(()=>{
                            timeout=null;
                            callback.apply(this,argument);
                        },wait);
                    };
                    if(first){
                        first=false;
                        callback.apply(this,argument);
                        set();
                    }else{
                        if(!timeout){
                            set();
                        }
                    }
                };
            },
            /*🟢*/debounce(callback,wait=1000/24,first=false){
                let timeout=null;
                return function(...argument){
                    const set=()=>{
                        timeout=window.setTimeout(()=>{
                            callback.apply(this,argument);
                        },wait);
                    };
                    if(first){
                        first=false;
                        callback.apply(this,argument);
                        set();
                    }else{
                        window.clearTimeout(timeout);
                        set();
                    }
                };
            },
            /*🟢*/loop(condition,wait=1000/24){
                const result=condition();
                if(!result){
                    window.setTimeout(()=>{
                        this.loop(condition,wait);
                    },wait);
                }else{
                    return result;
                }
            },
            /*🟢*/async aw_loop(condition,callback,wait=1000/24,count,count_callback){
                const run=async()=>{
                    const condition_result=await condition();
                    if(condition_result){
                        if(callback){
                            return callback(condition_result);
                        }else{
                            return condition_result;
                        }
                    }else{
                        return new window.Promise((resolve)=>{
                            window.setTimeout(()=>{
                                resolve(this.aw_loop(condition,callback,wait,count,count_callback));
                            },wait);
                        });
                    }
                };
                if(typeof count==='number'){
                    if(count!==0){
                        count-=1;
                        return await run();
                    }else{
                        if(count_callback){
                            return count_callback();
                        }
                    }
                }else{
                    return await run();
                }
            },
            /*🟢*/time_out(callback,wait=1000/24){
                return new window.Promise((resolve)=>{
                    window.setTimeout(()=>{
                        if(typeof callback==='function'){
                            resolve(callback());
                        }else{
                            resolve(callback);
                        }
                    },wait);
                });
            },
            /*🟠*/observe_function(origin_function,event_type,event_option={},who_listen,data_plus=()=>{}){
                const insert_event=new window.CustomEvent(event_type,event_option);
                return function(...argument){
                    insert_event.function_argument=argument;
                    insert_event[event_type]=data_plus.apply(this,argument);
                    who_listen.dispatchEvent(insert_event);
                    return origin_function.apply(this,argument);
                };
                // remove observe
            },
            /*🟢*/import(src,callback){
                import(src).then((data)=>{
                    callback(data);
                }).catch(()=>{});
            },
            /*🔴*/web_assembly(){},
            /*🟢*/uuid_36_to_uuid_22(uuid_36){
                if(uuid_36.length===36){
                    const uuid_32='0'+uuid_36.replace(/-/g,'');
                    if(uuid_32.length===33){
                        const char='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';
                        let result='';
                        for(let index=0;index<11;index++){
                            const start=index*3;
                            const str=window.parseInt(uuid_32[start]+uuid_32[start+1]+uuid_32[start+2],16);
                            result+=char[window.Math.floor(str/64)]+char[str%64];
                        }
                        return result;
                    }
                }
            },
            /*🟢*/uuid_22_to_uuid_36(uuid_22){
                if(uuid_22.length===22){
                    const get_char_index=()=>{
                        const char='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';
                        let result={};
                        for(let index=0;index<char.length;index++){
                            const char0=char[index];
                            result[char0]=index;
                        }
                        return result;
                    };
                    let char_index=get_char_index();
                    let result='';
                    for(let index=0;index<22;index+=2){
                        let u=(char_index[uuid_22[index]]*64+char_index[uuid_22[index+1]]).toString(16).padStart(3,'0');
                        if(index===0&&u[0]==='0'){
                            u=u.substr(1);
                        }
                        result+=u;
                    }
                    return`${result.substr(0,8)}-${result.substr(8,4)}-${result.substr(12,4)}-${result.substr(16,4)}-${result.substr(20)}`;
                }
            },
            /*🔴*/string_to_base64_uri_safe_no_pad(){},
            /*🔴*/base64_uri_safe_no_pad_to_string(){},
            /*🟢*/java_string_hash_code(string){
                let result;
                for(let i=0;i<string.length;i++){
                    result=window.Math.imul(31,result)+string.charCodeAt(i)|0;
                }
                return result;
            },
            /*🟢*/random(){
                return window.Math.random().toString().replace('0.','');
            },
            /*🟢*/is_portrait(width,height,true_callback,false_callback){
                if(width<=height){
                    if(true_callback){
                        true_callback();
                    }
                    return true;
                }
                if(false_callback){
                    false_callback();
                }
                return false;
            },
            /*🟢*/run_object(object){
                for(const item in object){
                    object[item]();
                }
            },
        // local data
            /*🔴*/file(){},
            /*🔴*/local_storage(){},
            /*🔴*/session_storage(){},
            /*🔴*/indexeddb(){},
            /*🔴*/web_sql(){},
            /*🔴*/cookie(){},
            /*🔴*/database(){},
            /*🔴*/cache(){},
        // network data
            /*🔴*/fetch(uri=window.location.href,method,data,callback){
                switch(method){
                    case'GET':
                        {}
                        break;
                    case'HEAD':
                        {}
                        break;
                    case'POST':
                        {}
                        break;
                    case'PUT':
                        {}
                        break;
                    case'DELETE':
                        {}
                        break;
                    case'CONNECT':
                        {}
                        break;
                    case'OPTIONS':
                        {}
                        break;
                    case'TRACE':
                        {}
                        break;
                    case'PATCH':
                        {}
                        break;
                    default:
                        break;
                }
            },
        // command line interface
            /*🔴*/cli(){},
            /*🔴*/cli_emulator(){},
        // graphical user interface
            /*🟢*/element_create(...argument){
                switch(typeof argument[0]){
                    case'string':
                        {
                            // single mode
                            //     tag<string,undefined='div'>,
                            //     attribute<object/{key:'value'...}/,undefined=false>,
                            //     insert_element<element,undefined=false>,
                            //     insert_position<'beforebegin','afterbegin','beforeend','afterend',undefined='beforeend'>,
                            //     content<string,element,undefined=false>,
                            //     callback<function(element),undefined=false>
                            let tag=argument[0];
                            const attribute=argument[1];
                            const insert_element=argument[2];
                            let insert_position=argument[3];
                            const content=argument[4];
                            const callback=argument[5];
                            if(!tag){
                                tag='div';
                            }
                            if(!insert_position){
                                insert_position='beforeend';
                            }
                            const element=window.document.createElement(tag);
                            if(attribute){
                                for(const item in attribute){
                                    element.setAttribute(item,attribute[item]);
                                }
                            }
                            if(content){
                                if(typeof content==='string'){
                                    element.innerHTML=content;
                                }else{
                                    if(content instanceof window.HTMLElement){
                                        element.insertAdjacentElement('beforeend',content);
                                    }
                                }
                            }
                            if(insert_element){
                                insert_element.insertAdjacentElement(insert_position,element);
                            }
                            if(callback){
                                callback(element);
                            }
                            return element;
                        }
                        break;
                    case'object':
                        {
                            // tree mode
                            //     data<{
                            //         key&class<char/key&class/,string/'key&class class2...','',' class...',' class class2...'/>:{
                            //             <element:[
                            //                 tag<string,undefined='div'>,
                            //                 attribute<object/{key:'value'...}/,undefined=false>,
                            //                 content<string,element,undefined=false>,
                            //                 callback<function(element),undefined=false>
                            //             ],undefined=false>,
                            //             <function:function(elements)/this.element===elements.key&class/,undefined=false>,
                            //             key&class:{}...
                            //         },
                            //         key&class:{}...
                            //     },undefined='div'>,
                            //     insert_element<element,undefined=false>,
                            //     insert_position<'beforebegin','afterbegin','beforeend','afterend',undefined='beforeend'>,
                            //     elements<elements,undefined=elements>,
                            //     callback<function(elements),undefined=false>
                            const data=argument[0];
                            const insert_element=argument[1];
                            let insert_position=argument[2];
                            let elements=argument[3];
                            const callback=argument[4];
                            if(!insert_position){
                                insert_position='beforeend';
                            }
                            if(!elements){
                                elements={};
                            }
                            const element_build=(data,insert_element,insert_position)=>{
                                for(const item in data){
                                    if(data[item].element){
                                        if(!data[item].element[0]){
                                            data[item].element[0]='div';
                                        }
                                        if(data[item].element[1]){
                                            if(data[item].element[1].class){
                                                data[item].element[1].class=window.Array.from(new window.Set(item.trim().split(' ').concat(data[item].element[1].class.trim().split(' ')))).join(' ');
                                            }else{
                                                if(item.trim()){
                                                    data[item].element[1].class=item.trim();
                                                }
                                            }
                                        }else{
                                            if(item.trim()){
                                                data[item].element[1]={class:item.trim()};
                                            }
                                        }
                                    }else{
                                        data[item].element=['div'];
                                        if(item.trim()){
                                            data[item].element[1]={class:item.trim()};
                                        }
                                    }
                                    const element=this.element_create(data[item].element[0],data[item].element[1]?data[item].element[1]:undefined,insert_element,insert_position,data[item].element[2]?data[item].element[2]:undefined,data[item].element[3]?data[item].element[3]:undefined);
                                    if(item.split(' ')[0]){
                                        elements[item.split(' ')[0]]=data[item].element=element;
                                    }else{
                                        data[item].element=element;
                                    }
                                    for(const item_ in data[item]){
                                        if(!item_.match(/element|function/)){
                                            const data_={};
                                            data_[item_]=data[item][item_];
                                            element_build(data_,data[item].element,'beforeend');
                                        }
                                    }
                                }
                            };
                            element_build(data,insert_element,insert_position);
                            const function_run=(data)=>{
                                for(const item in data){
                                    if(data[item].function){
                                        data[item].function(elements);
                                    }
                                    for(const item_ in data[item]){
                                        if(!item_.match(/element|function/)){
                                            const data_={};
                                            data_[item_]=data[item][item_];
                                            function_run({data_:data[item][item_]});
                                        }
                                    }
                                }
                            };
                            function_run(data);
                            if(callback){
                                callback(elements);
                            }
                            return elements;
                        }
                        break;
                    default:
                        {
                            return this.element_create('div');
                        }
                        break;
                }
            },
            /*🟠*/listen_element(action,element,type,callback,option={},other=''){
                const match=/[\r\n\s]/g;
                const id='id_'+this.java_string_hash_code((element!==window&&element!==window.document?element.outerHTML.toString().replace(match,''):'')+callback.toString().replace(match,'')+option.toString().replace(match,'')+other.toString().replace(match,'')).toString().replace(/[^0-9]/g,'');
                switch(type){
                    case'pointer_up':
                        {
                            const remove=()=>{
                                element.removeEventListener('pointerdown',this.listen_element.pointer_up[id]);
                                this.listen_element.pointer_up[id].count-=1;
                                if(this.listen_element.pointer_up[id].count===0){
                                    delete this.listen_element.pointer_up[id];
                                    if(!window.Object.keys(this.listen_element.pointer_up).length){
                                        delete this.listen_element.pointer_up;
                                    }
                                }
                            };
                            switch(action){
                                case'add':
                                    {
                                        if(!this.listen_element.pointer_up){
                                            this.listen_element.pointer_up={};
                                        }
                                        if(!this.listen_element.pointer_up[id]){
                                            this.listen_element.pointer_up[id]=(data)=>{
                                                const once_id='once_'+id;
                                                data.target.parentNode.removeEventListener('pointerup',this.listen_element.pointer_up[once_id]);
                                                delete this.listen_element.pointer_up[once_id];
                                                const run=()=>{
                                                    const left=data.target.getBoundingClientRect().left;
                                                    const right=data.target.getBoundingClientRect().right;
                                                    const top=data.target.getBoundingClientRect().top;
                                                    const bottom=data.target.getBoundingClientRect().bottom;
                                                    this.listen_element.pointer_up[once_id]=(event)=>{
                                                        if((event.target===data.target||event.target===data.target.parentNode)&&(event.clientX>=left&&event.clientX<=right&&event.clientY>=top&&event.clientY<=bottom)){
                                                            if(event.target.children.length){
                                                                let block=false;
                                                                for(const item of event.target.children){
                                                                    if(window.getComputedStyle(item).pointerEvents!=='none'&&window.getComputedStyle(item).visibility!=='hidden'){
                                                                        block=true;
                                                                        let intersect=false;
                                                                        for(const item of event.target.children){
                                                                            if((window.getComputedStyle(item).pointerEvents!=='none'&&window.getComputedStyle(item).visibility!=='hidden')&&(event.clientX>=item.getBoundingClientRect().left&&event.clientX<=item.getBoundingClientRect().right&&event.clientY>=item.getBoundingClientRect().top&&event.clientY<=item.getBoundingClientRect().bottom)){
                                                                                intersect=true;
                                                                                break;
                                                                            }
                                                                        }
                                                                        if(!intersect){
                                                                            callback(data);
                                                                            if(option.once){
                                                                                remove();
                                                                            }
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                                if(!block){
                                                                    callback(data);
                                                                    if(option.once){
                                                                        remove();
                                                                    }
                                                                }
                                                            }else{
                                                                callback(data);
                                                                if(option.once){
                                                                    remove();
                                                                }
                                                            }
                                                        }
                                                    };
                                                    data.target.parentNode.addEventListener('pointerup',this.listen_element.pointer_up[once_id],{once:true});
                                                    data.target.parentNode.addEventListener('touchend',()=>{
                                                        data.target.parentNode.removeEventListener(this.listen_element.pointer_up[once_id]);
                                                    },{once:true});
                                                    data.target.parentNode.addEventListener('dragend',()=>{
                                                        data.target.parentNode.removeEventListener(this.listen_element.pointer_up[once_id]);
                                                    },{once:true});
                                                };
                                                if(typeof other==='number'){
                                                    if(data.button===other){
                                                        run();
                                                    }
                                                }else{
                                                    run();
                                                }
                                                machine_tool.local_test(()=>{
                                                    window.console.log('#### listen_element pointer_up length',window.Object.keys(this.listen_element.pointer_up).length);
                                                });
                                            };
                                            this.listen_element.pointer_up[id].count=0;
                                        }
                                        if(option.once){
                                            element.addEventListener('pointerdown',this.listen_element.pointer_up[id]);
                                        }else{
                                            element.addEventListener('pointerdown',this.listen_element.pointer_up[id],option);
                                        }
                                        this.listen_element.pointer_up[id].count+=1;
                                    }
                                    break;
                                case'remove':
                                    {
                                        remove();
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case'pointer_track':
                        {
                            switch(action){
                                case'add':
                                    {}
                                    break;
                                case'remove':
                                    {}
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case'observe_mutation':
                        {
                            switch(action){
                                case'add':
                                    {
                                        if(!this.listen_element.observe_mutation){
                                            this.listen_element.observe_mutation={};
                                        }
                                        if(!this.listen_element.observe_mutation[id]){
                                            this.listen_element.observe_mutation[id]=new window.MutationObserver((mutation_list)=>{
                                                // window.console.log('listen_element().observe_mutation mutation_list',mutation_list);
                                                mutation_list.forEach((mutation)=>{
                                                    // window.console.log('listen_element().observe_mutation mutation',mutation);
                                                    switch(mutation.type){
                                                        case'childList':
                                                            {
                                                                // window.console.log('listen_element().observe_mutation childList');
                                                                callback(mutation);
                                                            }
                                                            break;
                                                        case'attributes':
                                                            {
                                                                // window.console.log('listen_element().observe_mutation attributes');
                                                                callback(mutation);
                                                            }
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                });
                                            });
                                            this.listen_element.observe_mutation[id].count=0;
                                        }
                                        this.listen_element.observe_mutation[id].observe(element,option);
                                        this.listen_element.observe_mutation[id].count+=1;
                                    }
                                    break;
                                case'remove':
                                    {
                                        this.listen_element.observe_mutation[id].count-=1;
                                        if(this.listen_element.observe_mutation[id].count===0){
                                            this.listen_element.observe_mutation[id].disconnect();
                                            delete this.listen_element.observe_mutation[id];
                                            if(!window.Object.keys(this.listen_element.observe_mutation).length){
                                                delete this.listen_element.observe_mutation;
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case'observe_intersection':
                        {
                            switch(action){
                                case'add':
                                    {
                                        element.machine_tool_listen_element_observe_intersection=new window.IntersectionObserver((entries)=>{
                                            // window.console.log('listen_element().observe_intersection entries',entries);
                                            entries.forEach((entry)=>{
                                                // window.console.log('listen_element().observe_intersection entry',entry);
                                                callback(entry);
                                            });
                                        },option);
                                        element.machine_tool_listen_element_observe_intersection.observe(element);
                                    }
                                    break;
                                case'remove':
                                    {
                                        element.machine_tool_listen_element_observe_intersection.disconnect();
                                        delete element.machine_tool_listen_element_observe_intersection;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case'observe_resize':
                        {
                            switch(action){
                                case'add':
                                    {
                                        element.machine_tool_listen_element_observe_resize=new window.ResizeObserver((entries)=>{
                                            // window.console.log('listen_element().observe_resize entries',entries);
                                            entries.forEach((entry)=>{
                                                // window.console.log('listen_element().observe_resize entry',entry);
                                                callback(entry);
                                            });
                                        });
                                        element.machine_tool_listen_element_observe_resize.observe(element);
                                    }
                                    break;
                                case'remove':
                                    {
                                        element.machine_tool_listen_element_observe_resize.disconnect();
                                        delete element.machine_tool_listen_element_observe_resize;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    default:
                        {
                            switch(action){
                                case'add':
                                    {
                                        element.addEventListener(type,callback,option);
                                    }
                                    break;
                                case'remove':
                                    {
                                        element.removeEventListener(type,callback);
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                }
            },
            /*🟢*/element_state(...argument){
                if(argument[0]instanceof window.HTMLElement){
                    // base mode
                    //     element<element>,
                    //     one<string/'class class2...'/,undefined=''>,
                    //     two<string/'class class2...'/,undefined=''>,
                    //     set_one<boolean,undefined=false>,
                    //     next_wait<number,undefined=0>,
                    //     callback<function(element,/one,two,''/),undefined=()=>{}>
                    // flash mode
                    //     (element<>,'',two<>,true,wait<>,callback<>)
                    const element=argument[0];
                    let one=argument[1];
                    let two=argument[2];
                    let set_one=argument[3];
                    let next_wait=argument[4];
                    let callback=argument[5];
                    if(!one){
                        one='';
                    }
                    if(!two){
                        two='';
                    }
                    if(set_one!==true){
                        set_one=false;
                    }
                    if(!next_wait){
                        next_wait=0;
                    }
                    if(!callback){
                        callback=()=>{};
                    }
                    const contains=(data)=>{
                        for(const item of data.split(' ')){
                            if(element.classList.contains(item)){
                                return true;
                            }
                        }
                        return false;
                    };
                    const add=(data)=>{
                        for(const item of data.split(' ')){
                            element.classList.add(item);
                        }
                    };
                    const remove=(data)=>{
                        for(const item of data.split(' ')){
                            element.classList.remove(item);
                        }
                    };
                    if(two){
                        if(set_one){
                            if(one){
                                if(!contains(one)){
                                    window.setTimeout(()=>{
                                        remove(two);
                                    },0);
                                    window.setTimeout(()=>{
                                        add(one);
                                        callback(element,one);
                                    },next_wait);
                                }
                            }else{
                                window.setTimeout(()=>{
                                    add(two);
                                },0);
                                window.setTimeout(()=>{
                                    remove(two);
                                    callback(element,'');
                                },next_wait);
                            }
                        }else{
                            if(contains(one)){
                                window.setTimeout(()=>{
                                    remove(one);
                                },0);
                                window.setTimeout(()=>{
                                    add(two);
                                    callback(element,two);
                                },next_wait);
                            }else{
                                if(contains(two)){
                                    window.setTimeout(()=>{
                                        remove(two);
                                    },0);
                                    window.setTimeout(()=>{
                                        add(one);
                                        callback(element,one);
                                    },next_wait);
                                }else{
                                    window.setTimeout(()=>{
                                        add(one);
                                        callback(element,one);
                                    },0);
                                }
                            }
                        }
                    }else{
                        if(set_one){
                            if(!contains(one)){
                                window.setTimeout(()=>{
                                    add(one);
                                    callback(element,one);
                                },0);
                            }
                        }else{
                            if(contains(one)){
                                window.setTimeout(()=>{
                                    remove(one);
                                    callback(element,'');
                                },0);
                            }else{
                                window.setTimeout(()=>{
                                    add(one);
                                    callback(element,one);
                                },0);
                            }
                        }
                    }
                }else{
                    if(window.Array.isArray(argument[0])){
                        switch(argument[0][0]){
                            case'target':
                                {
                                    // target mode
                                    //     [
                                    //         'target',
                                    //         [
                                    //             open_state<string/'class class2...'/,undefined='_'>,
                                    //             close_state<string/'class class2...'/,undefined='_'>,
                                    //             [
                                    //                 target_element<element>...
                                    //             ],
                                    //             [
                                    //                 [
                                    //                     start<boolean>,
                                    //                     switch_type<'auto','open','close'>,
                                    //                     [
                                    //                         button_element<element>...
                                    //                     ],
                                    //                     listen_type<string>,
                                    //                     callback<function(event_data),undefined=()=>{}>,
                                    //                     option<object,undefined>,
                                    //                     other<any,undefined>
                                    //                 ]...
                                    //             ]
                                    //         ]
                                    //     ]
                                    const data=argument[0][1];
                                    const open_state=data[0]?data[0]:'_';
                                    const close_state=data[1]?data[1]:'_';
                                    const target_element_array=data[2];
                                    const button_array=data[3];
                                    for(const button of button_array){
                                        const start=button[0];
                                        const switch_type=button[1];
                                        const button_element_array=button[2];
                                        const listen_type=button[3];
                                        const callback=button[4];
                                        const option=button[5];
                                        const other=button[6];
                                        if(!callback){
                                            callback=()=>{};
                                        }
                                        const event_function=()=>{
                                            const set_button_element=(_,current)=>{
                                                for(const button of button_array){
                                                    const button_element_array=button[2];
                                                    for(const button_element of button_element_array){
                                                        this.element_state(button_element,current,`${open_state} ${close_state}`,true);
                                                    }
                                                }
                                            };
                                            switch(switch_type){
                                                case'auto':
                                                    {
                                                        for(const target_element of target_element_array){
                                                            this.element_state(target_element,open_state,close_state,undefined,undefined,set_button_element);
                                                        }
                                                    }
                                                    break;
                                                case'open':
                                                    {
                                                        for(const target_element of target_element_array){
                                                            this.element_state(target_element,open_state,close_state,true,undefined,set_button_element);
                                                        }
                                                    }
                                                    break;
                                                case'close':
                                                    {
                                                        for(const target_element of target_element_array){
                                                            this.element_state(target_element,close_state,open_state,true,undefined,set_button_element);
                                                        }
                                                    }
                                                    break;
                                                default:
                                                    break;
                                            }
                                        };
                                        if(start){
                                            event_function();
                                            callback();
                                        }
                                        for(const button_element of button_element_array){
                                            this.listen_element('add',button_element,listen_type,event_function,option,other);
                                            this.listen_element('add',button_element,listen_type,callback,option,other);
                                        }
                                    }
                                }
                                break;
                            case'tab':
                                {
                                    // tab mode
                                    //     [
                                    //         'tab',
                                    //         [
                                    //             open_state<string/'class class2...'/,undefined='_'>,
                                    //             close_state<string/'class class2...'/,undefined='_'>,
                                    //             [
                                    //                 [
                                    //                     start<boolean>,
                                    //                     [
                                    //                         target_element<element>...
                                    //                     ],
                                    //                     [
                                    //                         button_element<element>...
                                    //                     ],
                                    //                     listen_type<string>,
                                    //                     callback<function(event_data),undefined=()=>{}>,
                                    //                     option<object,undefined>,
                                    //                     other<any,undefined>
                                    //                 ]...
                                    //             ]
                                    //         ]
                                    //     ]
                                    const data=argument[0][1];
                                    const open_state=data[0]?data[0]:'_';
                                    const close_state=data[1]?data[1]:'_';
                                    const content_array=data[2];
                                    for(const content of content_array){
                                        const start=content[0];
                                        const target_element_array=content[1];
                                        const button_element_array=content[2];
                                        const listen_type=content[3];
                                        const callback=content[4];
                                        const option=content[5];
                                        const other=content[6];
                                        if(!callback){
                                            callback=()=>{};
                                        }
                                        const event_function=()=>{
                                            for(const content of content_array){
                                                const target_element_array_=content[1];
                                                const button_element_array_=content[2];
                                                if(target_element_array_!==target_element_array){
                                                    for(const target_element_ of target_element_array_){
                                                        this.element_state(target_element_,close_state,open_state,true);
                                                    }
                                                }
                                                if(button_element_array_!==button_element_array){
                                                    for(const button_element_ of button_element_array_){
                                                        this.element_state(button_element_,close_state,open_state,true);
                                                    }
                                                }
                                            }
                                            for(const target_element of target_element_array){
                                                this.element_state(target_element,open_state,close_state,true);
                                            }
                                            for(const button_element of button_element_array){
                                                this.element_state(button_element,open_state,close_state,true);
                                            }
                                        };
                                        if(start){
                                            event_function();
                                            callback();
                                        }
                                        for(const button_element of button_element_array){
                                            this.listen_element('add',button_element,listen_type,event_function,option,other);
                                            this.listen_element('add',button_element,listen_type,callback,option,other);
                                        }
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            },
            /*🟢*/element_recursion(child,element,group='group',group2){
                if(!this.element_recursion.record){
                    this.element_recursion.record=[];
                }
                class template{
                    constructor(child,element,group,group2){
                        this.child=child;
                        this.element=element;
                        this.group=group;
                        this.group2=group2;
                        this.prev='prev';
                        this.prev2='prev';
                        this.elements=[];
                        if(!child){
                            this.elements.push(element);
                            element.classList.add(`${group}_first`,`${group}_last`);
                            if(group2){
                                element.classList.add(`${group2}_first`,`${group2}_last`);
                            }
                            window.setTimeout(()=>{
                                element.classList.add(`${group}_add`);
                                if(group2){
                                    element.classList.add(`${group2}_add`);
                                }
                            },1000/24);
                        }
                    }
                    add(tag='div',attribute={},content,callback){
                        let insert_element=null;
                        let insert_position=null;
                        if(!this.elements[0]){
                            insert_element=this.element;
                            insert_position='beforeend';
                        }else{
                            insert_element=this.elements[this.elements.length-1];
                            insert_position='afterend';
                            const last_element=(element)=>{
                                if(element.nextElementSibling){
                                    for(let i=0,l=machine_tool.element_recursion.record.length;i<l;i++){
                                        for(let i_=0,l_=machine_tool.element_recursion.record[i].elements.length;i_<l_;i_++){
                                            if(machine_tool.element_recursion.record[i].elements[i_]===element.nextElementSibling&&machine_tool.element_recursion.record.indexOf(this)<machine_tool.element_recursion.record.indexOf(machine_tool.element_recursion.record[i])){
                                                insert_element=element.nextElementSibling;
                                                last_element(insert_element);
                                            }
                                        }
                                    }
                                }
                            };
                            last_element(insert_element);
                        }
                        for(let i=0,l=this.elements.length;i<l;i++){
                            machine_tool.element_state(this.elements[i],`${this.group}_${this.prev}${this.group2?` ${this.group2}_${this.prev2}`:''}`,`${this.group}_last${this.group2?` ${this.group2}_last`:''}`,true);
                        }
                        if(tag instanceof window.HTMLElement){
                            if(!this.elements[0]){
                                tag.classList.add(`${this.group}_first`);
                                if(this.group2){
                                    tag.classList.add(`${this.group2}_first`);
                                }
                            }
                            tag.classList.add(`${this.group}_last`);
                            if(this.group2){
                                tag.classList.add(`${this.group2}_last`);
                            }
                        }else{
                            attribute.class=`${attribute.class?`${attribute.class} `:''}${!this.elements[0]?this.group2?`${this.group}_first ${this.group2}_first `:`${this.group}_first `:''}${this.group}_last${this.group2?` ${this.group2}_last`:''}`;
                        }
                        if(this.group2){
                            for(let i=0,l=machine_tool.element_recursion.record.length;i<l;i++){
                                for(let i_=0,l_=machine_tool.element_recursion.record[i].elements.length;i_<l_;i_++){
                                    if(machine_tool.element_recursion.record[i].elements[i_].classList.contains(`${this.group2}_last`)){
                                        machine_tool.element_state(machine_tool.element_recursion.record[i].elements[i_],`${this.group2}_${this.prev2}`,`${this.group2}_last`,true);
                                    }
                                }
                            }
                        }
                        let new_element=null;
                        if(tag instanceof window.HTMLElement){
                            new_element=tag;
                            insert_element.insertAdjacentElement(insert_position,new_element);
                        }else{
                            new_element=machine_tool.element_create(tag,attribute,insert_element,insert_position,content,callback);
                        }
                        window.setTimeout(()=>{
                            new_element.classList.add(`${this.group}_add`);
                            if(this.group2){
                                new_element.classList.add(`${this.group2}_add`);
                            }
                        },1000/24);
                        this.elements.push(new_element);
                        return new_element;
                    }
                    remove(wait=350){
                        const delete_element=this.elements.pop();
                        delete_element.classList.add(`${this.group}_remove`);
                        if(this.group2){
                            delete_element.classList.add(`${this.group2}_remove`);
                        }
                        window.setTimeout(()=>{
                            delete_element.parentElement.removeChild(delete_element);
                        },wait);
                        window.setTimeout(()=>{
                            if(this.group2){
                                let last_match=null;
                                const skip=[];
                                for(let i=0,l=machine_tool.element_recursion.record.length;i<l;i++){
                                    for(let i_=0,l_=machine_tool.element_recursion.record[i].elements.length;i_<l_;i_++){
                                        if(machine_tool.element_recursion.record[i].elements[i_].classList.contains(`${this.group2}_${this.prev2}`)&&!skip.includes(machine_tool.element_recursion.record[i].elements[i_])){
                                            last_match=machine_tool.element_recursion.record[i].elements[i_];
                                            skip.push(last_match);
                                        }
                                    }
                                }
                                machine_tool.element_state(last_match,`${this.group2}_last`,`${this.group2}_${this.prev2}`,true);
                            }
                            machine_tool.element_state(this.elements[this.elements.length-1],`${this.group}_last`,`${this.group}_${this.prev}`,true);
                        },0);
                        if(!this.elements[0]){
                            machine_tool.element_recursion.record.pop(this);
                            if(!machine_tool.element_recursion.record[0]){
                                delete machine_tool.element_recursion.record;
                            }
                        }
                        return delete_element.previousElementSibling;
                    }
                }
                const result=new template(child,element,group,group2);
                this.element_recursion.record.push(result);
                return result;
            },
            /*🟢*/find_outer(find,start,end=window.document.documentElement,true_callback,false_callback){
                if(find instanceof window.HTMLElement&&start===find){
                    if(true_callback){
                        true_callback(start);
                    }
                    return start;
                }else{
                    if(start.classList.contains(find)){
                        if(true_callback){
                            true_callback(start);
                        }
                        return start;
                    }else{
                        if(start===end){
                            if(false_callback){
                                false_callback();
                            }
                            return false;
                        }
                    }
                }
                return this.find_outer(find,start.parentElement,end,true_callback,false_callback);
            },
            /*🟢*/uri_path(){
                return window.location.href.replace(window.location.origin,'');
            },
            /*🟠*/listen_uri(action,callback){
                const id='id_'+this.java_string_hash_code(callback.toString().replace(/[\r\n\s]/g,'')).toString().replace(/[^0-9]/g,'');
                switch(action){
                    case'add':
                        {
                            if(!this.listen_uri[id]){
                                class template{
                                    constructor(callback){
                                        if(window.history.pushState.name){
                                            window.history.pushState=machine_tool.observe_function(window.history.pushState,'pushState',undefined,window,(...argument)=>{
                                                return argument[2];
                                            });
                                        }
                                        if(window.history.replaceState.name){
                                            window.history.replaceState=machine_tool.observe_function(window.history.replaceState,'replaceState',undefined,window,(...argument)=>{
                                                return argument[2];
                                            });
                                        }
                                        this.callback=callback;
                                    }
                                    _popstate=(data)=>{
                                        this.callback({
                                            type:data.type,
                                            path:machine_tool.uri_path()
                                        });
                                    }
                                    _pushState=(data)=>{
                                        this.callback({
                                            type:data.type,
                                            path:data.pushState.replace()
                                        });
                                    }
                                    _replaceState=(data)=>{
                                        this.callback({
                                            type:data.type,
                                            path:data.replaceState.replace()
                                        });
                                    }
                                    add(){
                                        window.addEventListener('popstate',this._popstate);
                                        window.addEventListener('pushState',this._pushState);
                                        window.addEventListener('replaceState',this._replaceState);
                                    }
                                    remove(){
                                        window.removeEventListener('popstate',this._popstate);
                                        window.removeEventListener('pushState',this._pushState);
                                        window.removeEventListener('replaceState',this._replaceState);
                                    }
                                }
                                this.listen_uri[id]=new template(callback);
                                // this.listen_uri[id].count=0;
                                this.listen_uri[id].add();
                            }
                            // this.listen_uri[id].add();
                            // this.listen_uri[id].count+=1;
                        }
                        break;
                    case'remove':
                        {
                            this.listen_uri[id].remove();
                            // this.listen_uri[id].count-=1;
                            // if(this.listen_uri[id].count===0){
                                delete this.listen_uri[id];
                                // remove observe
                                // if(!window.Object.keys(this.listen_uri).length){}
                            // }
                        }
                        break;
                    default:
                        break;
                }
            },
            /*🟢*/remove_empty(element,...attribute){
                if(attribute[0]){
                    for(let count=0,length=attribute.length;count<length;count++){
                        element.removeAttribute(attribute[count]);
                    }
                }else{
                    if(!element.getAttribute('class')){
                        element.removeAttribute('class');
                    }
                    if(!element.style[0]){
                        element.removeAttribute('style');
                    }
                }
            },
            /*🟢*/full_screen(element=window.document.documentElement,top=false){
                if(top){
                    if(window.top.document.fullscreenElement||window.top.document.webkitIsFullScreen){
                        if('exitFullscreen'in window.top.document){
                            window.top.document.exitFullscreen();
                        }else{
                            if('webkitExitFullscreen'in window.top.document){
                                window.top.document.webkitExitFullscreen();
                            }
                        }
                    }else{
                        if('requestFullscreen'in window.top.document.documentElement){
                            element.requestFullscreen();
                        }else{
                            if('webkitRequestFullScreen'in window.top.document.documentElement){
                                element.webkitRequestFullScreen();
                            }
                        }
                    }
                }else{
                    if(window.document.fullscreenElement||window.document.webkitIsFullScreen){
                        if('exitFullscreen'in window.document){
                            window.document.exitFullscreen();
                        }else{
                            if('webkitExitFullscreen'in window.document){
                                window.document.webkitExitFullscreen();
                            }
                        }
                    }else{
                        if('requestFullscreen'in window.document.documentElement){
                            element.requestFullscreen();
                        }else{
                            if('webkitRequestFullScreen'in window.document.documentElement){
                                element.webkitRequestFullScreen();
                            }
                        }
                    }
                }
            },
            /*🟢*/open_window(uri=window.location.href,width=720,height=450,left,top){
                if(typeof left==='number'){
                    left+=window.screen.availLeft;
                }else{
                    left=(window.screen.availWidth-width)/2+window.screen.availLeft;
                }
                if(typeof top==='number'){
                    top+=window.screen.availTop;
                }else{
                    top=(window.screen.availHeight-height)/2+window.screen.availTop;
                }
                return window.open(uri,'',`width=${width},height=${height},left=${left},top=${top}`);
            },
            /*🟢*/local_test(callback){
                if(window.document?.documentElement&&(window.location.hostname===new window.URL(import.meta.url).hostname||window.document.documentElement.classList.contains('ic_dg')||window.document.documentElement.classList.contains('debug'))){
                    callback();
                }
            },
        // application programming interface
            /*🔴*/listen_port(){},
            /*🔴*/port_receive(uri,method,data,callback,other_data){
                const result={
                    uri:uri,
                    method:method,
                    data:data
                };
                if(other_data){
                    window.Object.assign(result,other_data);
                }
                if(callback){
                    callback(result);
                }
                return result;
            },
            /*🔴*/route(){},
            /*🔴*/extract(){},
            /*🔴*/middleware(){},
            /*🔴*/static_file(){}
    };
// #build
// #debug
    // machine_tool_
    machine_tool.local_test(()=>{
        if(!import.meta.url.match(/_.js$/)){
            machine_tool.import('./machine_tool_.js',(data)=>{
                machine_tool.run_object(data._);
            });
        }
    });
// #after
    // console
    window.console.log('#### end machine_tool.js');