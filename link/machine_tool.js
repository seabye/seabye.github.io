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
            /*🟢*/loop(condition,callback,wait=1000/24){
                if(condition()){
                    return callback();
                }else{
                    window.setTimeout(()=>{
                        this.loop(condition,callback,wait);
                    },wait);
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
            /*🔴*/string_to_base64_url_safe_no_pad(){},
            /*🔴*/base64_url_safe_no_pad_to_string(){},
            /*🟢*/java_string_hash_code(string){
                let result;
                for(let i=0;i<string.length;i++){
                    result=window.Math.imul(31,result)+string.charCodeAt(i)|0;
                }
                return result;
            },
            /*🟢*/run_object(object){
                if(object){
                    for(const item in object){
                        object[item]();
                    }
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
            /*🟢*/create_element(...argument){
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
                            //                 content<string,element,undefined=false>
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
                                    const element=this.create_element(data[item].element[0],data[item].element[1]?data[item].element[1]:undefined,insert_element,insert_position,data[item].element[2]?data[item].element[2]:undefined);
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
                            return this.create_element('div');
                        }
                        break;
                }
            },
            /*🟠*/listen_element(action,element,type,callback,option={}){
                switch(type){
                    case'pointer_up':
                        {
                            switch(action){
                                case'add':
                                    {
                                        element.machine_tool_listen_element_pointer_up=(event)=>{
                                            const left=event.target.getBoundingClientRect().left;
                                            const right=event.target.getBoundingClientRect().right;
                                            const top=event.target.getBoundingClientRect().top;
                                            const bottom=event.target.getBoundingClientRect().bottom;
                                            event.target.parentNode.addEventListener('pointerup',(event_)=>{
                                                if((event_.target===event.target||event_.target===event.target.parentNode)&&(event_.clientX>=left&&event_.clientX<=right&&event_.clientY>=top&&event_.clientY<=bottom)){
                                                    if(event_.target.children.length){
                                                        let block=false;
                                                        for(const item of event_.target.children){
                                                            if(window.getComputedStyle(item).pointerEvents!=='none'&&window.getComputedStyle(item).visibility!=='hidden'){
                                                                block=true;
                                                                let intersect=false;
                                                                for(const item of event_.target.children){
                                                                    if((window.getComputedStyle(item).pointerEvents!=='none'&&window.getComputedStyle(item).visibility!=='hidden')&&(event_.clientX>=item.getBoundingClientRect().left&&event_.clientX<=item.getBoundingClientRect().right&&event_.clientY>=item.getBoundingClientRect().top&&event_.clientY<=item.getBoundingClientRect().bottom)){
                                                                        intersect=true;
                                                                        break;
                                                                    }
                                                                }
                                                                if(!intersect){
                                                                    callback(event);
                                                                }
                                                                break;
                                                            }
                                                        }
                                                        if(!block){
                                                            callback(event);
                                                        }
                                                    }else{
                                                        callback(event);
                                                    }
                                                }
                                            },{once:true});
                                        };
                                        element.addEventListener('pointerdown',element.machine_tool_listen_element_pointer_up,option);
                                    }
                                    break;
                                case'remove':
                                    {
                                        element.removeEventListener('pointerdown',element.machine_tool_listen_element_pointer_up);
                                        delete element.machine_tool_listen_element_pointer_up;
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
                    case'observe_intersection':
                        {
                            switch(action){
                                case'add':
                                    {
                                        element.machine_tool_listen_element_observe_intersection=new window.IntersectionObserver((entries)=>{
                                            window.console.log(entries);
                                            entries.forEach((entry)=>{
                                                window.console.log(entry);
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
                                            window.console.log(entries);
                                            entries.forEach((entry)=>{
                                                window.console.log(entry);
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
            /*🟠*/switch_state(...argument){
                if(argument[0]instanceof window.HTMLElement){
                    // base mode
                    //     element<element>,
                    //     one<string/'class class2...'/,undefined=''>,
                    //     two<string/'class class2...'/,undefined=''>,
                    //     set_one<boolean,undefined=false>,
                    //     two_wait<number,undefined=0>,
                    //     callback<function(element,/one,two,''/),undefined=()=>{}>
                    // flash mode
                    //     (element<>,'',two<>,true,two_wait<>,callback<>)
                    const element=argument[0];
                    let one=argument[1];
                    let two=argument[2];
                    let set_one=argument[3];
                    let two_wait=argument[4];
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
                    if(!two_wait){
                        two_wait=0;
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
                                    remove(two);
                                    window.setTimeout(()=>{
                                        add(one);
                                        callback(element,one);
                                    },two_wait);
                                }
                            }else{
                                add(two);
                                window.setTimeout(()=>{
                                    remove(two);
                                    callback(element,'');
                                },two_wait);
                            }
                        }else{
                            if(contains(one)){
                                remove(one);
                                window.setTimeout(()=>{
                                    add(two);
                                    callback(element,two);
                                },two_wait);
                            }else{
                                if(contains(two)){
                                    remove(two);
                                    window.setTimeout(()=>{
                                        add(one);
                                        callback(element,one);
                                    },two_wait);
                                }else{
                                    window.setTimeout(()=>{
                                        add(one);
                                        callback(element,one);
                                    },two_wait);
                                }
                            }
                        }
                    }else{
                        if(contains(one)){
                            remove(one);
                        }else{
                            window.setTimeout(()=>{
                                add(one);
                                callback(element,one);
                            },two_wait);
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
                                    //             open_state<string/'class class2...'/>,
                                    //             close_state<string/'class class2...'/>,
                                    //             [
                                    //                 target_element<element>...
                                    //             ],
                                    //             [
                                    //                 [
                                    //                     start<boolean>,
                                    //                     switch_type<'auto','open','close'>,
                                    //                     button_element<element>,
                                    //                     listen_type<string>,
                                    //                     callback<function(event_data),undefined=()=>{}>
                                    //                 ]...
                                    //             ]
                                    //         ]
                                    //     ]
                                    const data=argument[0][1];
                                    const open_state=data[0];
                                    const close_state=data[1];
                                    for(const item of data[3]){
                                        const start=item[0];
                                        const switch_type=item[1];
                                        const button_element=item[2];
                                        const listen_type=item[3];
                                        const callback=item[4];
                                        if(!callback){
                                            callback=()=>{};
                                        }
                                        const event_function=()=>{
                                            const set_button_state=(_,current)=>{
                                                for(const item of data[3]){
                                                    const button_element=item[2];
                                                    this.switch_state(button_element,current,`${open_state} ${close_state}`,true);
                                                }
                                            };
                                            switch(switch_type){
                                                case'auto':
                                                    {
                                                        for(const target_element of data[2]){
                                                            this.switch_state(target_element,open_state,close_state,undefined,undefined,set_button_state);
                                                        }
                                                    }
                                                    break;
                                                case'open':
                                                    {
                                                        for(const target_element of data[2]){
                                                            this.switch_state(target_element,open_state,close_state,true,undefined,set_button_state);
                                                        }
                                                    }
                                                    break;
                                                case'close':
                                                    {
                                                        for(const target_element of data[2]){
                                                            this.switch_state(target_element,close_state,open_state,true,undefined,set_button_state);
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
                                        this.listen_element('add',button_element,listen_type,event_function);
                                        this.listen_element('add',button_element,listen_type,callback);
                                    }
                                }
                                break;
                            case'tab':
                                {
                                    // tab mode
                                    //     [
                                    //         'tab',
                                    //         []
                                    //     ]
                                    const data=argument[0][1];
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            },
            /*🟢*/find_outer(find,start,end=window.document.documentElement,true_callback,false_callback){
                if(start===find){
                    if(true_callback){
                        true_callback();
                    }
                    return true;
                }else{
                    if(start===end){
                        if(false_callback){
                            false_callback();
                        }
                        return false;
                    }
                }
                return this.find_outer(find,start.parentElement,end,true_callback,false_callback);
            },
            /*🟢*/url_path(){
                return window.location.href.replace(window.location.origin,'');
            },
            /*🟠*/listen_url(action,callback){
                const id='id_'+this.java_string_hash_code(callback.toString()).toString().replace(/[^0-9]/ig,'');
                switch(action){
                    case'add':
                        {
                            if(!this.listen_url[id]){
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
                                            path:machine_tool.url_path()
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
                                this.listen_url[id]=new template(callback);
                                this.listen_url[id].add();
                            }
                        }
                        break;
                    case'remove':
                        {
                            this.listen_url[id].remove();
                            delete this.listen_url[id];
                            if(!window.Object.keys(this.listen_url).length){
                                // remove observe
                            }
                        }
                        break;
                    default:
                        break;
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
            /*🟢*/open_window(uri=window.location.href,width=640,height=480,left,top){
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
            /*🟢*/local_test(callback,match_hostname=/localhost|0.0.0.0|127.0.0.1/){
                if(window.document?.documentElement&&window.location.hostname.match(match_hostname)){
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
    // machine_tool
    machine_tool.local_test(async()=>{
        // window.console.log(await machine_tool.aw_loop(
        //     ()=>{
        //         return false;
        //     },
        //     ()=>{
        //         window.console.log('1');
        //         return 11;
        //     },
        //     1000,
        //     2,
        //     ()=>{
        //         window.console.log('2');
        //         return 22;
        //     }
        // ));
        // window.console.log('2000_');
        // await machine_tool.time_out(()=>{
        //     window.console.log('2000');
        // },2000);
        // window.console.log(machine_tool.uuid_36_to_uuid_22('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
        // window.console.log(machine_tool.uuid_22_to_uuid_36('jvZe6aA5S_Kks2h_zB88ww'));
        // window.console.log(machine_tool.string_to_base64_url_safe_no_pad('8ef65ee9-a039-4bf2-a4b3-687fcc1f3cc3'));
        // window.console.log(machine_tool.base64_url_safe_no_pad_to_string('jvZe6aA5S_Kks2h_zB88ww'));
        // const _func=()=>{
        //     window.console.log('pointerup');
        // };
        // machine_tool.listen_element('add',window.document.documentElement,'pointerup',_func);
        // machine_tool.listen_element('remove',window.document.documentElement,'pointerup',_func);
        // machine_tool.listen_element('add',window.document.documentElement,'observe_intersection',()=>{
        //     window.console.log('observe_intersection');
        // },{});
        // machine_tool.listen_element('add',window.document.documentElement,'observe_resize',()=>{
        //     window.console.log('observe_resize');
        // });
        machine_tool.create_element({
            test:{
                element:[,{style:'z-index: 1; position: fixed; left: 0; top: 0; width: 128px; height: 192px; background-color: gray; display: flex; justify-content: center; align-items: center; flex-direction: column;'}],
                function(elements){
                    window.console.log(elements);
                    machine_tool.switch_state([
                        'target',
                        [
                            'test_open',
                            'test_close',
                            [
                                elements.target,
                                elements.target2,
                            ],
                            [
                                [
                                    false,
                                    'auto',
                                    elements.button,
                                    'pointer_up',
                                    ()=>{}
                                ],
                                [
                                    false,
                                    'open',
                                    elements.button2,
                                    'pointer_up',
                                    ()=>{}
                                ],
                                [
                                    true,
                                    'close',
                                    elements.button3,
                                    'pointer_up',
                                    ()=>{}
                                ]
                            ]
                        ]
                    ]);
                },
                target:{
                    element:[,{style:'width: 100%; height: 48px; background-color: darkgray;'}]
                },
                target2:{
                    element:[,{style:'width: 100%; height: 48px; background-color: darkgray;'}]
                },
                button:{
                    element:[,{style:'width: 50%; height: 48px; background-color: lightgray;'}]
                },
                button2:{
                    element:[,{style:'width: 50%; height: 48px; background-color: white;'}]
                },
                button3:{
                    element:[,{style:'width: 50%; height: 48px; background-color: black;'}]
                }
            },
        },window.document.body);
        machine_tool.create_element({
            test:{
                element:[,{style:'z-index: 1; position: fixed; left: 128px; top: 0; width: 128px; height: 192px; background-color: gray; display: flex; justify-content: center; align-items: center; flex-direction: column;'}],
                function(elements){
                    window.console.log(elements);
                    machine_tool.switch_state([
                        'tab',
                        []
                    ]);
                },
                red_target:{
                    element:[,{style:'width: 100%; height: 16px; background-color: white;'}]
                },
                red_target2:{
                    element:[,{style:'width: 95%; height: 16px; background-color: white;'}]
                },
                red_button:{
                    element:[,{style:'width: 90%; height: 16px; background-color: red;'}]
                },
                red_button2:{
                    element:[,{style:'width: 85%; height: 16px; background-color: red;'}]
                },
                green_target:{
                    element:[,{style:'width: 80%; height: 16px; background-color: white;'}]
                },
                green_target2:{
                    element:[,{style:'width: 75%; height: 16px; background-color: white;'}]
                },
                green_button:{
                    element:[,{style:'width: 60%; height: 16px; background-color: green;'}]
                },
                green_button2:{
                    element:[,{style:'width: 55%; height: 16px; background-color: green;'}]
                },
                blue_target:{
                    element:[,{style:'width: 50%; height: 16px; background-color: white;'}]
                },
                blue_target2:{
                    element:[,{style:'width: 45%; height: 16px; background-color: white;'}]
                },
                blue_button:{
                    element:[,{style:'width: 40%; height: 16px; background-color: blue;'}]
                },
                blue_button2:{
                    element:[,{style:'width: 35%; height: 16px; background-color: blue;'}]
                }
            },
        },window.document.body);
        // machine_tool.listen_url('add',(data)=>{
        //     window.console.log(data);
        // });
        // window.history.pushState(null,null,'/x/');
        // window.history.pushState(null,null,'/');
        // window.history.replaceState(null,null,window.location.pathname);
    });
// #after
    // console
    window.console.log('#### end machine_tool.js');