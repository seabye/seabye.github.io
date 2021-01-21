'use strict';
// <<<< <<<< <<<< <<<<
// Graphical User Interface Machine
// ==== ==== ==== ====
// import{guim}from'guim.js';
// ~~~~ ~~~~ ~~~~ ~~~~
// guim.throttle()
    // guim.throttle(
    //     callback<function>,
    //     wait<number,/false,'',undefined/=1000/24>,
    //     first<true,/false,'',undefined/=false>
    // )
// guim.debounce()
    // guim.debounce(
    //     callback<function>,
    //     wait<number,/false,'',undefined/=1000/24>,
    //     first<true,/false,'',undefined/=false>
    // )
// guim.loop()
    // <result,/undefined/><=guim.loop(
    //     <boolean><=condition<function>,
    //     callback<function>,
    //     wait<number,/false,'',undefined/=1000/24>
    // )
// guim.parent()
    // <boolean><=guim.parent(
    //     find<element>,
    //     start<element>,
    //     end<element,/false,'',undefined/=window.document.documentElement>
    // )
// guim.create()
    // \<string,> single mode\<element><=guim.create(
    //     tag<string,/false,'',undefined/='div'>,
    //     attribute<{
    //         key:'value',
    //         key:'value'
    //     },/false,'',undefined/>,
    //     insert_element<element,/false,'',undefined/>,
    //     insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
    //     content<string,element,/false,'',undefined/>,
    //     <element>=>callback<function,/false,'',undefined/>
    // )
    // \<object,> tree mode\<object><=guim.create(
    //     data<{
    //         name_class<name_class,'name_class class2',''>undefined:{
    //             element:[
    //                 tag<string,/false,'',undefined/='div'>,
    //                 attribute<{
    //                     key:'value',
    //                     key:'value'
    //                 },/false,'',undefined/>,
    //                 content<string,element,/false,'',undefined/>
    //             ],
    //             <object>=>function:function{\this.element===object.name_class\}
    //         }
    //     },/false,'',undefined/='div'>,
    //     insert_element<element,/false,'',undefined/>,
    //     insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
    //     object<object,/false,'',undefined/={}>
    // )
// guim.bind()
// guim.switch()
    // \<element,> basic mode\guim.switch(
        // element<element>,
        // one<string,/false,'',undefined/>,
        // two<string,/false,'',undefined/=''>,
        // set_one<true,/false,'',undefined/=false>,
        // two_wait<number,/false,'',undefined/=0>,
        // callback<function,/false,'',undefined/=()=>{}>
    // )
    // \<element,> flash mode\guim.switch(element,!<''>,two,!<true>,two_wait,callback)
// guim.request()
// guim.full_screen()
    // guim.full_screen(
    //     element<element,/false,'',undefined/=window.document.documentElement>,
    //     top<true,/false,'',undefined/=false>
    // )
// guim.open_window()
    // <window><=guim.open_window(
    //     uri<string,/false,'',undefined/=window.location.href>,
    //     width<+number,/false,'',undefined/=640>>,
    //     height<+number,/false,'',undefined/=480>,
    //     left<+number,/false,'',undefined/=\center\>,
    //     top<+number,/false,'',undefined/=\center\>
    // )
// >>>> >>>> >>>> >>>>
// #import
// #global
    // ##variable
    // ##module
        // guim
        export const guim={
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
            loop:function(condition,callback,wait){
                if(typeof wait!=='number'){
                    wait=1000/24;
                }
                if(condition()){
                    return callback();
                }else{
                    window.setTimeout(()=>{
                        this.loop(condition,callback,wait);
                    },wait);
                }
            },
            parent:function(find,start,end=window.document.documentElement){
                if(start===find){
                    return true;
                }else{
                    if(start===end){
                        return false;
                    }
                }
                return this.parent(find,start.parentElement,end);
            },
            create:function(){
                switch(typeof arguments[0]){
                    case'string':
                        {
                            const tag=arguments[0];
                            const attribute=arguments[1];
                            const insert_element=arguments[2];
                            let insert_position=arguments[3];
                            const content=arguments[4];
                            const callback=arguments[5];
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
                            let element=arguments[3];
                            if(!insert_position){
                                insert_position='beforeend';
                            }
                            if(!element){
                                element={};
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
                                    const element_=this.create(data[item].element[0],data[item].element[1]?data[item].element[1]:false,insert_element,insert_position,data[item].element[2]?data[item].element[2]:false);
                                    if(item.split(' ')[0]){
                                        element[item.split(' ')[0]]=data[item].element=element_;
                                    }else{
                                        data[item].element=element_;
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
                                        data[item].function(element);
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
                            return element;
                        }
                        break;
                    default:
                        {
                            return this.create('div');
                        }
                        break;
                }
            },
            // guim.bind(
                // action<'add','remove'>,
                // element<element>,
                // change<'pointer_up','pointer_track','element_mutation','element_intersection','element_resize'>,
                // <event>=>callback<function>,
                // option<object,/false,'',undefined/={}>
            // )
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
                                        element.guim_bind_pointer_up=(event)=>{
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
                                        element.addEventListener('pointerdown',element.guim_bind_pointer_up,option);
                                    }
                                    break;
                                case'remove':
                                    {
                                        element.removeEventListener('pointerdown',element.guim_bind_pointer_up);
                                        delete element.guim_bind_pointer_up;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case'pointer_track':
                        {
                            switch(action) {
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
                    case'element_mutation':
                        {
                            switch(action) {
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
                    case'element_intersection':
                        {
                            switch(action) {
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
                    case'element_resize':
                        {
                            switch(action) {
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
            // \<array\['target',]\,> target mode\guim.switch()
            // \<array\['tab',]\,> tab mode\guim.switch()
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
                    if(window.Array.isArray(arguments[0])){
                        const data=arguments[0];
                        switch(data[0]){
                            case'target':
                                {}
                                break;
                            case'tab':
                                {}
                                break;
                            default:
                                break;
                        }
                    }
                }
            },
            // <object><=guim.request(
                // uri<string,/false,'',/=window.location.origin>,
                // method<'GET','HEAD','POST','PUT','DELETE','CONNECT','OPTIONS','TRACE','PATCH'>,
                // object<object>
            // )
            request:async(uri,method,object)=>{
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
            }
        }
    // ##build
// #content
    // ##variable
    // ##module
    // ##build
// #debug