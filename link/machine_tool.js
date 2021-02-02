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
            /*🟢*/simple_loop(condition_function,callback,wait=1000/24){
                if(condition_function()){
                    return callback();
                }else{
                    window.setTimeout(()=>{
                        this.simple_loop(condition_function,callback,wait);
                    },wait);
                }
            },
            /*🟠*/async loop(condition,callback=null,wait=null,count=null,count_callback=null){
                // machine_tool.loop(
                //     <\!!result\><=condition<function>,
                //     <\result\,undefined><=callback(<\!!result\>)<function,/false,'',undefined/=undefined>,
                //     wait<number,/false,'',undefined/=1000/24>,
                //     count<number,/false,'',undefined/=undefined>,
                //     <\result\,undefined>!async<=count_callback<function,/false,'',undefined/=undefined>
                // )=>result
                if(wait===null){
                    wait=1000/24;
                }
                const run=async()=>{
                    const condition_result=await condition();
                    if(condition_result){
                        if(callback==='function'){
                            return callback(condition_result);
                        }else{
                            return condition_result;
                        }
                    }else{
                        return new window.Promise((resolve)=>{
                            window.setTimeout(()=>{
                                resolve(this.loop(condition,callback,wait,count,count_callback));
                            },wait);
                        });
                    }
                };
                if(typeof count==='number'){
                    count=window.parseInt(window.Math.abs(count));
                    if(count!==0){
                        count-=1;
                        return await run();
                    }else{
                        if(typeof count_callback==='function'){
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
                        if(callback==='function'){
                            resolve(callback());
                        }else{
                            resolve(callback);
                        }
                    },wait);
                });
            },
            /*🟢*/observe_function(origin_function,event_type,event_option={},who_listen,data_plus=()=>{}){
                const insert_event=new window.CustomEvent(event_type,event_option);
                return function(...argument){
                    insert_event.arguments=argument;
                    insert_event[event_type]=data_plus.apply(this,argument);
                    who_listen.dispatchEvent(insert_event);
                    return origin_function.apply(this,argument);
                };
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
            /*🔴*/async fetch(uri=window.location.href,method,data,callback){
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
            /*🟠*/create_element(...argument){
                // \<string,> single mode\<element><=machine_tool.create_element(
                //     tag<string,/false,'',undefined/='div'>,
                //     attribute<{key:'value'...},/false,'',undefined/=false>,
                //     insert_element<element,/false,'',undefined/=false>,
                //     insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
                //     content<string,element,/false,'',undefined/=false>,
                //     callback<function(<element>),/false,'',undefined/=false>
                // )
                // \<elements,> tree mode\<elements><=machine_tool.create_element(
                //     data<{
                //         name_class<name_class,'name_class class2','',' class class2'>:{
                //             <element:[
                //                 tag<string,/false,'',undefined/='div'>,
                //                 attribute<{key:'value'...},/false,'',undefined/=false>,
                //                 content<string,element,/false,'',undefined/=false>
                //             ],/false,'',undefined/=false>,
                //             <function:function(<elements>)\this.element===elements.name_class\,/false,'',undefined/=false>
                //         }
                //     },/false,'',undefined/='div'\single mode\>,
                //     insert_element<element,/false,'',undefined/=false>,
                //     insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
                //     elements<elements,/false,'',undefined/=elements>,
                //     callback<function(<elements>),/false,'',undefined/=false>
                // )
                switch(typeof argument[0]){
                    case'string':
                        {
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
                                    const element=this.create_element(data[item].element[0],data[item].element[1]?data[item].element[1]:false,insert_element,insert_position,data[item].element[2]?data[item].element[2]:false);
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
            /*🟠*/listen_element(action,element,type,callback,option){
                if(!window.Object.prototype.toString.call(option).match('Object')){
                    option={};
                }
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
                    case'observer_mutation':
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
                    case'observer_intersection':
                        {
                            switch(action){
                                case'add':
                                    {
                                        element.observer_intersection=new window.IntersectionObserver((entries)=>{
                                            window.console.log(entries);
                                            entries.forEach((entry)=>{
                                                window.console.log(entry);
                                            });
                                        },option);
                                        element.observer_intersection.observe(element);
                                    }
                                    break;
                                case'remove':
                                    {
                                        element.observer_intersection.disconnect();
                                        delete element.observer_intersection;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case'observer_resize':
                        {
                            switch(action){
                                case'add':
                                    {
                                        element.machine_tool_listen_element_observer_resize=new window.ResizeObserver((entries)=>{
                                            window.console.log(entries);
                                            entries.forEach((entry)=>{
                                                window.console.log(entry);
                                            });
                                        });
                                        element.machine_tool_listen_element_observer_resize.observe(element);
                                    }
                                    break;
                                case'remove':
                                    {
                                        element.machine_tool_listen_element_observer_resize.disconnect();
                                        delete element.machine_tool_listen_element_observer_resize;
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
                // \<element,> base mode\machine_tool.switch_state(
                //     element<element>,
                //     one<string,/false,'',undefined/=''>,
                //     two<string,/false,'',undefined/=''>,
                //     set_one<true,/false,'',undefined/=false>,
                //     two_wait<number,/false,'',undefined/=0>,
                //     callback<function,/false,'',undefined/=()=>{}>
                // )
                // \<element,> flash mode\machine_tool.switch_state(element,<<''>>,two,<<true>>,two_wait,callback)
                // \<array\[<'target','tab'>,]\,> group mode\machine_tool.switch_state(
                //     [
                //         'target',[
                //             [string<'open'>,string<'close'>,action<'open','close','auto'>,<boolean><=condition<function>\open\,<boolean><=condition<function>\close\,element...]...,
                //             [string<'open'>,string<'close'>,element...]
                //         ],
                //         'tab',[
                //             [,element...]
                //             [<>,element...]
                //         ]
                //     ]
                // )
                if(argument[0]instanceof window.HTMLElement){
                    const element=argument[0];
                    const one=argument[1];
                    let two=argument[2];
                    let set_one=argument[3];
                    let two_wait=argument[4];
                    let callback=argument[5];
                    if(typeof two!=='string'){
                        two='';
                    }
                    if(set_one!==true){
                        set_one=false;
                    }
                    if(typeof two_wait!=='number'){
                        two_wait=0;
                    }
                    if(typeof callback!=='function'){
                        callback=()=>{};
                    }
                    if(two){
                        if(set_one){
                            if(one){
                                element.classList.remove(two);
                                window.setTimeout(()=>{
                                    element.classList.add(one);
                                    callback();
                                },two_wait);
                            }else{
                                element.classList.add(two);
                                window.setTimeout(()=>{
                                    element.classList.remove(two);
                                    callback();
                                },two_wait);
                            }
                        }else{
                            if(element.classList.contains(one)){
                                element.classList.remove(one);
                                window.setTimeout(()=>{
                                    element.classList.add(two);
                                    callback();
                                },two_wait);
                            }else{
                                if(element.classList.contains(two)){
                                    element.classList.remove(two);
                                    window.setTimeout(()=>{
                                        element.classList.add(one);
                                        callback();
                                    },two_wait);
                                }else{
                                    window.setTimeout(()=>{
                                        element.classList.add(one);
                                        callback();
                                    },two_wait);
                                }
                            }
                        }
                    }else{
                        if(element.classList.contains(one)){
                            element.classList.remove(one);
                        }else{
                            window.setTimeout(()=>{
                                element.classList.add(one);
                                callback();
                            },two_wait);
                        }
                    }
                }else{
                    if(window.Array.isArray(argument[0])){
                        let data=argument[0];
                        switch(data[0]){
                            case'target':
                                {
                                    data=data[1];
                                }
                                break;
                            case'tab':
                                {
                                    data=data[1];
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
            /*🟢*/listen_url(action,callback){
                const id='id_'+this.java_string_hash_code(callback.toString()).toString().replace(/[^0-9]/ig,'');
                switch(action){
                    case'add':
                        {
                            if(!this.listen_url[id]){
                                class template{
                                    constructor(callback){
                                        if(window.history.pushState.name){
                                            window.history.pushState=machine_tool.observe_function(window.history.pushState,'pushState',{detail:'detail'},window,(...argument)=>{
                                                return argument[2];
                                            });
                                        }
                                        if(window.history.replaceState.name){
                                            window.history.replaceState=machine_tool.observe_function(window.history.replaceState,'replaceState',{detail:'detail'},window,(...argument)=>{
                                                return argument[2];
                                            });
                                        }
                                        this.callback=callback;
                                    }
                                    #popstate=()=>{
                                        this.callback(machine_tool.url_path());
                                    }
                                    #pushState=(data)=>{
                                        this.callback(data.pushState.replace());
                                    }
                                    #replaceState=(data)=>{
                                        this.callback(data.replaceState.replace());
                                    }
                                    add(){
                                        window.addEventListener('popstate',this.#popstate);
                                        window.addEventListener('pushState',this.#pushState);
                                        window.addEventListener('replaceState',this.#replaceState);
                                    }
                                    remove(){
                                        window.removeEventListener('popstate',this.#popstate);
                                        window.removeEventListener('pushState',this.#pushState);
                                        window.removeEventListener('replaceState',this.#replaceState);
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
                        if('network_storageFullscreen'in window.top.document.documentElement){
                            element.network_storageFullscreen();
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
                        if('network_storageFullscreen'in window.document.documentElement){
                            element.network_storageFullscreen();
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
        // application programming interface
            /*🔴*/listen_port(){},
            /*🔴*/route(){},
            /*🔴*/middleware(){},
            /*🔴*/static_file(){}
    };
// #build
// #debug
    // machine_tool
    if(window.document?.documentElement){
        (async()=>{
            // window.console.log(await machine_tool.loop(
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
            // machine_tool.listen_element('add',window.document.documentElement,'observer_intersection',()=>{
            //     window.console.log('???');
            // },{});
            // machine_tool.listen_element('add',window.document.documentElement,'observer_resize',()=>{
            //     window.console.log('???');
            // });
            // machine_tool.switch_state(['target',[]]);
            // machine_tool.switch_state(['tab',[]]);
            // window.console.log(await machine_tool.network_storage());
            // window.console.log(machine_tool.uuid_22_to_uuid_36('VXyAGF4hS3SLsJBA4ujq0Q'));
            // machine_tool.listen_url('add',(data)=>{
            //     window.console.log(data);
            // });
            // window.history.pushState(null,null,'/x/');
            // window.history.pushState(null,null,'/');
            // window.history.replaceState(null,null,window.location.pathname);
            // ???
        })();
    }
// #after
    // console
    window.console.log('#### end machine_tool.js');