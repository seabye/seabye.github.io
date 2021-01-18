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
    // </\callback result\,undefined/><=guim.loop(
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
    // <element><=guim.create(
    //     tag<string,/false,'',undefined/='div'>,
    //     attribute<{
    //         key:'value',
    //         key:'value'
    //     },/false,'',undefined/>,
    //     insert_element<element,/false,'',undefined/>,
    //     insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
    //     content<string,element,/false,'',undefined/>,
    //     callback<function(element),/false,'',undefined/>
    // )
    // <element><=guim.create(
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
    //             function:function(element){<this.element\=\element.name_class>}
    //         }
    //     },/false,'',undefined/='div'>,
    //     insert_element<element,/false,'',undefined/>,
    //     insert_position<'beforebegin','afterbegin','beforeend','afterend',/false,'',undefined/='beforeend'>,
    //     element<object,/false,'',undefined/={}>\element.\
    // )
// guim.bind()
// guim.switch()
// guim.get()
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
                // element<element>,
                // change<string>,
                // callback<>
            // )
            bind:(element,change,callback)=>{
                switch(change){
                    case'pointer_up':
                        {
                            element.addEventListener('pointerdown',(event)=>{
                                window.console.log('event',event);
                                event.target.addEventListener('event_',(event_)=>{
                                    window.console.log('event_.clientX',event_.clientX);
                                    window.console.log('event_.clientY',event_.clientY);
                                    window.console.log('event.target.getBoundingClientRect().left',event.target.getBoundingClientRect().left);
                                    window.console.log('event.target.getBoundingClientRect().right',event.target.getBoundingClientRect().right);
                                    window.console.log('event.target.getBoundingClientRect().top',event.target.getBoundingClientRect().top);
                                    window.console.log('event.target.getBoundingClientRect().bottom',event.target.getBoundingClientRect().bottom);
                                    if(event_.clientX>=event.target.getBoundingClientRect().left&&event_.clientX<=event.target.getBoundingClientRect().right&&
                                        event_.clientY>=event.target.getBoundingClientRect().top&&event_.clientY<=event.target.getBoundingClientRect().bottom){
                                        callback(event,event_);
                                    }
                                },{once:true});
                            });
                        }
                        break;
                    case'element_attribute':
                        {

                        }
                        break;
                    case'element_content':
                        {

                        }
                        break;
                    case'element_size':
                        {

                        }
                        break;
                    case'element_position':
                        {

                        }
                        break;
                    default:
                        {
                            element.addEventListener(change,callback(event_));
                        }
                        break;
                }
            },
            // guim.switch(
                // element<element>,
                // class_<string,/false,'',undefined/>,
                // class__<string,/false,'',undefined/=''>,
                // set_class_<true,/false,'',undefined/=false>,
                // wait<number,/false,'',undefined/=0>,
                // callback<function,/false,'',undefined/=()=>{}>
            // )
            switch:function(){
                if(arguments[0]instanceof window.HTMLElement){
                    const element=arguments[0];
                    const class_=arguments[1];
                    let class__=arguments[2];
                    let set_class_=arguments[3];
                    let wait=arguments[4];
                    let callback=arguments[5];
                    if(typeof class__!=='string'){
                        class__='';
                    }
                    if(set_class_!==true){
                        set_class_=false;
                    }
                    if(typeof wait!=='number'){
                        wait=0;
                    }
                    if(typeof callback!=='function'){
                        callback=()=>{};
                    }
                    if(class__){
                        if(set_class_){
                            if(class_){
                                element.classList.remove(class__);
                                window.setTimeout(()=>{
                                    element.classList.add(class_);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(class__);
                                window.setTimeout(()=>{
                                    element.classList.remove(class__);
                                    callback();
                                },wait);
                            }
                        }else{
                            if(element.classList.contains(class_)){
                                element.classList.remove(class_);
                                window.setTimeout(()=>{
                                    element.classList.add(class__);
                                    callback();
                                },wait);
                            }else{
                                if(element.classList.contains(class__)){
                                    element.classList.remove(class__);
                                    window.setTimeout(()=>{
                                        element.classList.add(class_);
                                        callback();
                                    },wait);
                                }else{
                                    window.setTimeout(()=>{
                                        element.classList.add(class_);
                                        callback();
                                    },wait);
                                }
                            }
                        }
                    }else{
                        if(element.classList.contains(class_)){
                            element.classList.remove(class_);
                        }else{
                            window.setTimeout(()=>{
                                element.classList.add(class_);
                                callback();
                            },wait);
                        }
                    }
                }else{
                    if(window.Array.isArray(arguments[0])){
                        const data=arguments[0];
                        for(const item of data){
                            let mode=item[0];
                            if(mode===undefined){
                                mode='single';
                            }
                            switch(mode){
                                case'single':
                                    {}
                                    break;
                                case'multiple':
                                    {}
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
            },
            // <object><=guim.get(
                // uri<string,/false,'',/=window.location.origin>,
                // method<>,
                // object<object>
            // )
            get:async(uri,method,object)=>{
                if(!uri){
                    uri=window.location.origin;
                }
                switch(method){
                    case'GET':
                        {}
                        break;
                    case'POST':
                        {
                            let status=null;
                            return await window.fetch(uri,{
                                method:'POST',
                                headers:{'Content-Type':'application/json; charset=utf-8'},
                                body:window.JSON.stringify(object),
                            }).then((response)=>{
                                status=response.status;
                                return response.json();
                            }).then((result)=>{
                                result.status=status;
                                return result;
                            });
                        }
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
                    if(window.top.document.fullscreen||window.top.document.webkitIsFullScreen){
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
                    if(window.document.fullscreen||window.document.webkitIsFullScreen){
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