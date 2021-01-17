'use strict';
// <<<< <<<< <<<< <<<<
// Graphical User Interface Machine
// ==== ==== ==== ====
// import{guim}from'guim.js';
// ---- ---- ---- ----
// guim.throttle()
// guim.debounce()
// guim.loop()
// guim.parent()
// ---- ---- ---- ----
// guim.create()
    // guim.create(
    //     tag<string,false,''>,
    //     attribute<{
    //         key:'value',
    //         key:'value'
    //     },false,''>,
    //     insert_element<element,false,''>,
    //     insert_position<string,false,''>,
    //     content<element,string,false,''>,
    //     callback<function,false,''>
    // )
    // ---- ---- ---- ----
    // guim.create(
    //     {
    //         name_class<name_class,'name_class class2',''>:{
    //             element:[
    //                 tag<string,false,'',>,
    //                 attribute<{
    //                     key:'value',
    //                     key:'value'
    //                 },false,'',>,
    //                 content<element,string,false,'',>
    //             ],
    //             function:function(element){<this.element,element.name_class>}
    //         }
    //     },
    //     insert_element<element,false,''>,
    //     element<{},false>
    // )
// guim.bind()
// guim.switch()
// guim.get()
// ---- ---- ---- ----
// guim.full_screen()
// guim.open_window()
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
                    callback();
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
            // ---- ---- ---- ----
            create:function(){
                switch(typeof arguments[0]){
                    case'string':
                        {
                            let tag=arguments[0];
                            let attribute=arguments[1];
                            let insert_element=arguments[2];
                            let insert_position=arguments[3];
                            let content=arguments[4];
                            let callback=arguments[5];
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
                            let data=arguments[0];
                            let insert_element=arguments[1];
                            let element=arguments[2];
                            if(!data){
                                data={'':{}};
                            }
                            if(!insert_element){
                                insert_element=window.document.body;
                            }
                            if(!element){
                                element={};
                            }
                            const build_element=(data,insert_element)=>{
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
                                    const element_=this.create(data[item].element[0],data[item].element[1]?data[item].element[1]:false,insert_element,false,data[item].element[2]?data[item].element[2]:false);
                                    if(item.split(' ')[0]){
                                        element[item.split(' ')[0]]=data[item].element=element_;
                                    }else{
                                        data[item].element=element_;
                                    }
                                    for(const item_ in data[item]){
                                        if(!item_.match(/element|function/)){
                                            const data_={};
                                            data_[item_]=data[item][item_];
                                            build_element(data_,data[item].element);
                                        }
                                    }
                                }
                            };
                            build_element(data,insert_element);
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
                        break;
                }
            },
            bind:()=>{

            },
            switch:function(){
                if(arguments[0]instanceof window.HTMLElement){
                    let element=arguments[0];
                    let class_=arguments[1];
                    let class__=arguments[2];
                    let replace=arguments[3];
                    let wait=arguments[4];
                    let callback=arguments[5];
                    if(class__===undefined){
                        class__='';
                    }
                    if(replace===undefined){
                        replace=false;
                    }
                    if(wait===undefined){
                        wait=0;
                    }
                    if(callback===undefined){
                        callback=()=>{};
                    }
                    if(class__){
                        if(replace){
                            if(class_){
                                element.classList.remove(class__);
                                if(wait){
                                    window.setTimeout(()=>{
                                        element.classList.add(class_);
                                        callback();
                                    },wait);
                                }else{
                                    element.classList.add(class_);
                                    callback();
                                }
                            }else{
                                element.classList.add(class__);
                                if(wait){
                                    window.setTimeout(()=>{
                                        element.classList.remove(class__);
                                        callback();
                                    },wait);
                                }else{
                                    element.classList.remove(class__);
                                    callback();
                                }
                            }
                        }else{
                            if(element.classList.contains(class_)){
                                element.classList.remove(class_);
                                if(wait){
                                    window.setTimeout(()=>{
                                        element.classList.add(class__);
                                        callback();
                                    },wait);
                                }else{
                                    element.classList.add(class__);
                                    callback();
                                }
                            }else{
                                if(element.classList.contains(class__)){
                                    element.classList.remove(class__);
                                    if(wait){
                                        window.setTimeout(()=>{
                                            element.classList.add(class_);
                                            callback();
                                        },wait);
                                    }else{
                                        element.classList.add(class_);
                                        callback();
                                    }
                                }else{
                                    if(wait){
                                        window.setTimeout(()=>{
                                            element.classList.add(class_);
                                            callback();
                                        },wait);
                                    }else{
                                        element.classList.add(class_);
                                        callback();
                                    }
                                }
                            }
                        }
                    }else{
                        if(element.classList.contains(class_)){
                            element.classList.remove(class_);
                        }else{
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(class_);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(class_);
                                callback();
                            }
                        }
                    }
                }else{
                    if(window.Array.isArray(arguments[0])){
                        let data=arguments[0];
                        for(const item of data){
                            let mode=item[0];
                            if(mode===undefined){
                                mode='single';
                            }
                            switch(mode){
                                case'single':

                                    break;
                                case'multiple':

                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
            },
            get:()=>{

            },
            // ---- ---- ---- ----
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