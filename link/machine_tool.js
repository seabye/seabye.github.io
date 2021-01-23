'use strict';
// <<<< <<<< <<<< <<<<
// Machine Tool
// for Browser and Deno
// ==== ==== ==== ====
// import{machine_tool}from'machine_tool.js';
// ~~~~ ~~~~ ~~~~ ~~~~
// base
//     🧩machine_tool.throttle()
//         machine_tool.throttle(
//             callback<function>,
//             wait<number,/false,'',undefined/=1000/24>,
//             first<true,/false,'',undefined/=false>
//         )
//     🧩machine_tool.debounce()
//         machine_tool.debounce(
//             callback<function>,
//             wait<number,/false,'',undefined/=1000/24>,
//             first<true,/false,'',undefined/=false>
//         )
//     🧿machine_tool.loop()
//         <\result\,undefined><=machine_tool.loop(
//             <boolean><=condition_function<function>,
//             callback<function>,
//             wait<number,/false,'',undefined/=1000/24>,
//             count<number,/false,'',undefined/=false>,
//             count_callback<function,/false,'',undefined/=false>
//         )
//     🧩machine_tool.uuid_36_to_uuid_22()
//         <string><=machine_tool.uuid_36_to_uuid_22(uuid_36<string>)
// interface
//     🧩machine_tool.parent()
//         <boolean><=machine_tool.parent(
//             find<element>,
//             start<element>,
//             end<element,/false,'',undefined/=window.document.documentElement>,
//             true_callback<function,/false,'',undefined/=()=>{}>,
//             false_callback<function,/false,'',undefined/=()=>{}>
//         )
//     🧩machine_tool.create()
//         \<string,> single mode\<element><=machine_tool.create(
//             tag<string,/false,'',undefined/='div'>,
//             attribute<{key:'value'...},/false,'',undefined/=false>,
//             insert_element<element,/false,'',undefined/=false>,
//             insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
//             content<string,element,/false,'',undefined/=false>,
//             callback<function(<element>),/false,'',undefined/=false>
//         )
//         \<elements,> tree mode\<elements><=machine_tool.create(
//             data<{
//                 name_class<name_class,'name_class class2','',' class class2'>:{
//                     <element:[
//                         tag<string,/false,'',undefined/='div'>,
//                         attribute<{key:'value'...},/false,'',undefined/=false>,
//                         content<string,element,/false,'',undefined/=false>
//                     ],/false,'',undefined/=false>,
//                     <function:function(<elements>)\this.element===elements.name_class\,/false,'',undefined/=false>
//                 }
//             },/false,'',undefined/='div'\single mode\>,
//             insert_element<element,/false,'',undefined/=false>,
//             insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
//             elements<elements,/false,'',undefined/=elements>,
//             callback<function(<elements>),/false,'',undefined/=false>
//         )
//     🧿machine_tool.bind()
//         machine_tool.bind(
//             action<'add','remove'>,
//             element<element>,
//             change<'pointer_up','pointer_track','observer_mutation','observer_intersection','observer_resize'>,
//             callback<function(<event>)>,
//             option<object,/false,'',undefined/=false>
//         )
//     🧿machine_tool.switch()
//         \<element,> base mode\machine_tool.switch(
//             element<element>,
//             one<string,/false,'',undefined/=''>,
//             two<string,/false,'',undefined/=''>,
//             set_one<true,/false,'',undefined/=false>,
//             two_wait<number,/false,'',undefined/=0>,
//             callback<function,/false,'',undefined/=()=>{}>
//         )
//         \<element,> flash mode\machine_tool.switch(element,!<''>,two,!<true>,two_wait,callback)
//     🧩machine_tool.full_screen()
//         machine_tool.full_screen(
//             element<element,/false,'',undefined/=window.document.documentElement>,
//             top<true,/false,'',undefined/=false>
//         )
//     🧩machine_tool.open_window()
//         <window><=machine_tool.open_window(
//             uri<string,/false,'',undefined/=window.location.href>,
//             width<+number,/false,'',undefined/=640>>,
//             height<+number,/false,'',undefined/=480>,
//             left<+number,/false,'',undefined/=\center\>,
//             top<+number,/false,'',undefined/=\center\>
//         )
// storage
//     💭machine_tool.local_storage()
//     💭machine_tool.session_storage()
//     💭machine_tool.indexeddb()
//     💭machine_tool.web_sql()
//     💭machine_tool.cookie()
//     💭machine_tool.sql()
// service
//     💭machine_tool.request()
//         <object><=machine_tool.request(
//             uri<string,/false,'',undefined/=window.location.origin>,
//             method<'GET','HEAD','POST','PUT','DELETE','CONNECT','OPTIONS','TRACE','PATCH'>,
//             data<object,/false,'',undefined/=false>
//         )
//     💭machine_tool.response()
// >>>> >>>> >>>> >>>>
// #before
    // console
    window.console.log('#### start machine_tool.js');
// #import
// #variable
// #method
    // machine_tool
    export const machine_tool={
        throttle:(callback,wait,first)=>{
            if(typeof wait!=='number'){
                wait=1000/24;
            }
            if(first!==true){
                first=false;
            }
            let timeout=null;
            return function(){
                const set=()=>{
                    timeout=window.setTimeout(()=>{
                        timeout=null;
                        callback.apply(this,arguments);
                    },wait);
                };
                if(first){
                    first=false;
                    callback.apply(this,arguments);
                    set();
                }else{
                    if(!timeout){
                        set();
                    }
                }
            };
        },
        debounce:(callback,wait,first)=>{
            if(typeof wait!=='number'){
                wait=1000/24;
            }
            if(first!==true){
                first=false;
            }
            let timeout=null;
            return function(){
                const set=()=>{
                    timeout=window.setTimeout(()=>{
                        callback.apply(this,arguments);
                    },wait);
                };
                if(first){
                    first=false;
                    callback.apply(this,arguments);
                    set();
                }else{
                    window.clearTimeout(timeout);
                    set();
                }
            };
        },
        loop:function(condition_function,callback,wait,count,count_callback){
            if(typeof wait!=='number'){
                wait=1000/24;
            }
            if(condition_function()){
                return callback();
            }else{
                window.setTimeout(()=>{
                    this.loop(condition_function,callback,wait);
                },wait);
            }
        },
        uuid_36_to_uuid_22:(uuid_36)=>{
            if(uuid_36.length===36){
                const char='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';
                const uuid32='0'+uuid_36.replace(/-/g,'');
                if(uuid32.length===33){
                    let result='';
                    for(let index=0;index<11;index++){
                        const start=index*3;
                        const str=window.parseInt(uuid32[start]+uuid32[start+1]+uuid32[start+2],16);
                        result+=char[window.Math.floor(str/64)]+char[str%64];
                    }
                    return result;
                }
            }
        },
        parent:function(find,start,end,true_callback,false_callback){
            if(!(end instanceof window.HTMLElement)){
                end=window.document.documentElement;
            }
            if(typeof true_callback!=='function'){
                true_callback=()=>{};
            }
            if(typeof false_callback!=='function'){
                false_callback=()=>{};
            }
            if(start===find){
                true_callback();
                return true;
            }else{
                if(start===end){
                    false_callback();
                    return false;
                }
            }
            return this.parent(find,start.parentElement,end,true_callback,false_callback);
        },
        create:function(){
            switch(typeof arguments[0]){
                case'string':
                    {
                        let tag=arguments[0];
                        const attribute=arguments[1];
                        const insert_element=arguments[2];
                        let insert_position=arguments[3];
                        const content=arguments[4];
                        const callback=arguments[5];
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
                        const data=arguments[0];
                        const insert_element=arguments[1];
                        let insert_position=arguments[2];
                        let elements=arguments[3];
                        const callback=arguments[4];
                        if(!insert_position){
                            insert_position='beforeend';
                        }
                        if(!elements){
                            elements={};
                        }
                        const build_element=(data,insert_element,insert_position)=>{
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
                                const element=this.create(data[item].element[0],data[item].element[1]?data[item].element[1]:false,insert_element,insert_position,data[item].element[2]?data[item].element[2]:false);
                                if(item.split(' ')[0]){
                                    elements[item.split(' ')[0]]=data[item].element=element;
                                }else{
                                    data[item].element=element;
                                }
                                for(const item_ in data[item]){
                                    if(!item_.match(/element|function/)){
                                        const data_={};
                                        data_[item_]=data[item][item_];
                                        build_element(data_,data[item].element,'beforeend');
                                    }
                                }
                            }
                        };
                        build_element(data,insert_element,insert_position);
                        const run_function=(data)=>{
                            for(const item in data){
                                if(data[item].function){
                                    data[item].function(elements);
                                }
                                for(const item_ in data[item]){
                                    if(!item_.match(/element|function/)){
                                        const data_={};
                                        data_[item_]=data[item][item_];
                                        run_function({data_:data[item][item_]});
                                    }
                                }
                            }
                        };
                        run_function(data);
                        if(callback){
                            callback(elements);
                        }
                        return elements;
                    }
                    break;
                default:
                    {
                        return this.create('div');
                    }
                    break;
            }
        },
        bind:(action,element,change,callback,option)=>{
            if(!window.Object.prototype.toString.call(option).match('Object')){
                option={};
            }
            switch(change){
                case'pointer_up':
                    {
                        switch(action){
                            case'add':
                                {
                                    element.machine_tool_bind_pointer_up=(event)=>{
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
                                    element.addEventListener('pointerdown',element.machine_tool_bind_pointer_up,option);
                                }
                                break;
                            case'remove':
                                {
                                    element.removeEventListener('pointerdown',element.machine_tool_bind_pointer_up);
                                    delete element.machine_tool_bind_pointer_up;
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
                                    element.machine_tool_bind_observer_resize=new window.ResizeObserver((entries)=>{
                                        window.console.log(entries);
                                        entries.forEach((entry)=>{
                                            window.console.log(entry);
                                        });
                                    });
                                    element.machine_tool_bind_observer_resize.observe(element);
                                }
                                break;
                            case'remove':
                                {
                                    element.machine_tool_bind_observer_resize.disconnect();
                                    delete element.machine_tool_bind_observer_resize;
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
                                    element.addEventListener(change,callback,option);
                                }
                                break;
                            case'remove':
                                {
                                    element.removeEventListener(change,callback);
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    break;
            }
        },
        switch:function(){
            if(arguments[0]instanceof window.HTMLElement){
                const element=arguments[0];
                const one=arguments[1];
                let two=arguments[2];
                let set_one=arguments[3];
                let two_wait=arguments[4];
                let callback=arguments[5];
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
                // \<array\[<'target','tab'>,]\,> group mode\machine_tool.switch(
                //     [
                //         'target',[
                //             [string<'open'>,string<'close'>,action<'open','close','auto'>,<boolean><=condition_function<function>\open\,<boolean><=condition_function<function>\close\,element...]...,
                //             [string<'open'>,string<'close'>,element...]
                //         ],
                //         'tab',[
                //             [,element...]
                //             [<>,element...]
                //         ]
                //     ]
                // )
                if(window.Array.isArray(arguments[0])){
                    let data=arguments[0];
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
        full_screen:(element,top)=>{
            if(!element){
                element=window.document.documentElement;
            }
            if(top!==true){
                top=false;
            }
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
        open_window:(uri,width,height,left,top)=>{
            if(!uri){
                uri=window.location.href;
            }
            if(!width){
                width=640;
            }
            if(!height){
                height=480;
            }
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
        local_storage:()=>{},
        session_storage:()=>{},
        indexeddb:()=>{},
        web_sql:()=>{},
        cookie:()=>{},
        sql:()=>{},
        request:async(uri,method,data,callback)=>{
            if(!uri){
                uri=window.location.origin;
            }
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
        response:()=>{}
    };
// #build
// #debug
    // machine_tool
    if(window.document?.documentElement){
        machine_tool.bind('add',window.document.documentElement,'observer_intersection',()=>{
            window.console.log('???');
        },{});
        machine_tool.bind('add',window.document.documentElement,'observer_resize',()=>{
            window.console.log('???');
        });
        machine_tool.switch(['target',[]]);
        machine_tool.switch(['tab',[]]);
    }
// #after
    // console
    window.console.log('#### end machine_tool.js');