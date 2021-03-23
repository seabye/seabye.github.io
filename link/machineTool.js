'use strict';
// <<<< <<<< <<<< <<<<
// Machine Tool
// for Browser and Deno
// machineTool.js
// ==== ==== ==== ====
// script.js
// import{machineTool}from'machineTool.js';
// >>>> >>>> >>>> >>>>
// #before
    // console
    window.console.log('#### start: machineTool.js');
// #import
// #variable
// #block
    // machineTool
    export const machineTool={
        // base
            /*🟢*/throttle(callback,wait=1000/24,first=false){
                let timeout=null;
                return function(...arg){
                    const set=()=>{
                        timeout=window.setTimeout(()=>{
                            timeout=null;
                            callback.apply(this,arg);
                        },wait);
                    };
                    if(first){
                        first=false;
                        callback.apply(this,arg);
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
                return function(...arg){
                    const set=()=>{
                        timeout=window.setTimeout(()=>{
                            callback.apply(this,arg);
                        },wait);
                    };
                    if(first){
                        first=false;
                        callback.apply(this,arg);
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
            /*🟢*/asyncLoop(condition,callback,wait=1000/24,count,count_callback){
                return(async()=>{
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
                                    resolve(this.asyncLoop(condition,callback,wait,count,count_callback));
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
                })();
            },
            /*🟢*/timeOut(callback,wait=1000/24){
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
            /*🟡*/observeFunction(origin_function,event_type,event_option={},who_listen,data_plus=()=>{}){
                const insert_event=new window.CustomEvent(event_type,event_option);
                return function(...arg){
                    insert_event.function_arg=arg;
                    insert_event[event_type]=data_plus.apply(this,arg);
                    who_listen.dispatchEvent(insert_event);
                    return origin_function.apply(this,arg);
                };
                // remove observe
            },
            /*🟢*/for(data,callback,condition_depth,type){
                switch(typeof type){
                    case'undefined':
                        {
                            const run=(data,depth)=>{
                                let next=[];
                                switch(window.Object.prototype.toString.call(data)){
                                    case'[object Array]':
                                        {
                                            for(let key=0,length=data.length;key<length;key++){
                                                if(typeof condition_depth==='number'){
                                                    if(condition_depth===depth){
                                                        callback(key,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Array]'?'array':window.Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                                                    }
                                                }else{
                                                    callback(key,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Array]'?'array':window.Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                                                }
                                                if(window.Object.prototype.toString.call(data[key])==='[object Array]'||window.Object.prototype.toString.call(data[key])==='[object Object]'){
                                                    next.push(data[key]);
                                                };
                                            }
                                        }
                                        break;
                                    case'[object Object]':
                                        {
                                            let count=0;
                                            for(const key in data){
                                                if(typeof condition_depth==='number'){
                                                    if(condition_depth===depth){
                                                        callback(count,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Object]'?'object':window.Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                                                        count+=1;
                                                    }
                                                }else{
                                                    callback(count,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Object]'?'object':window.Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                                                    count+=1;
                                                }
                                                if(window.Object.prototype.toString.call(data[key])==='[object Object]'||window.Object.prototype.toString.call(data[key])==='[object Array]'){
                                                    next.push(data[key]);
                                                };
                                            }
                                        }
                                        break;
                                    default:
                                        break;
                                }
                                if(next.length){
                                    for(let key=0,length=next.length;key<length;key++){
                                        run(next[key],depth+1);
                                    }
                                }
                            };
                            run(data,0);
                        }
                        break;
                    default:
                        {
                            switch(window.Object.prototype.toString.call(data)){
                                case'[object Array]':
                                    {
                                        const run=(data,depth)=>{
                                            let next=[];
                                            for(let key=0,length=data.length;key<length;key++){
                                                if(typeof condition_depth==='number'){
                                                    if(condition_depth===depth){
                                                        callback(key,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                                                    }
                                                }else{
                                                    callback(key,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Array]'?'array':depth);
                                                }
                                                if(window.Object.prototype.toString.call(data[key])==='[object Array]'){
                                                    next.push(data[key]);
                                                };
                                            }
                                            if(next.length){
                                                for(let key=0,length=next.length;key<length;key++){
                                                    run(next[key],depth+1);
                                                }
                                            }
                                        };
                                        run(data,0);
                                    }
                                    break;
                                case'[object Object]':
                                    {
                                        const run=(data,depth)=>{
                                            let next=[];
                                            let count=0;
                                            for(const key in data){
                                                if(typeof condition_depth==='number'){
                                                    if(condition_depth===depth){
                                                        callback(count,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                                                        count+=1;
                                                    }
                                                }else{
                                                    callback(count,key,data[key],depth,window.Object.prototype.toString.call(data[key])==='[object Object]'?'object':depth);
                                                    count+=1;
                                                }
                                                if(window.Object.prototype.toString.call(data[key])==='[object Object]'){
                                                    next.push(data[key]);
                                                };
                                            }
                                            if(next.length){
                                                for(let key=0,length=next.length;key<length;key++){
                                                    run(next[key],depth+1);
                                                }
                                            }
                                        };
                                        run(data,0);
                                    }
                                    break;
                                default:
                                    // {
                                    //     if(data instanceof window.HTMLElement){}
                                    // }
                                    break;
                            }
                        }
                        break;
                }
            },
            /*🟢*/import(src,callback){
                return import(src).then((data)=>{
                    if(callback){
                        callback(data);
                    }
                    return data;
                }).catch((data)=>{
                    window.console.log('==== import catch:',data);
                });
            },
            /*🔴*/webAssembly(){},
            /*🟢*/UUID36ToUUID22(uuid_36){
                if(uuid_36.length===36){
                    const uuid_32='0'+uuid_36.replace(/-/g,'');
                    if(uuid_32.length===33){
                        const char='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';
                        let result='';
                        for(let key=0;key<11;key++){
                            const start=key*3;
                            const str=window.parseInt(uuid_32[start]+uuid_32[start+1]+uuid_32[start+2],16);
                            result+=char[window.Math.floor(str/64)]+char[str%64];
                        }
                        return result;
                    }
                }
            },
            /*🟢*/UUID22ToUUID36(uuid_22){
                if(uuid_22.length===22){
                    const get_char_index=()=>{
                        const char='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';
                        let result={};
                        for(let key=0,length=char.length;key<length;key++){
                            const char0=char[key];
                            result[char0]=key;
                        }
                        return result;
                    };
                    let char_index=get_char_index();
                    let result='';
                    for(let key=0;key<22;key+=2){
                        let u=(char_index[uuid_22[key]]*64+char_index[uuid_22[key+1]]).toString(16).padStart(3,'0');
                        if(key===0&&u[0]==='0'){
                            u=u.substr(1);
                        }
                        result+=u;
                    }
                    return`${result.substr(0,8)}-${result.substr(8,4)}-${result.substr(12,4)}-${result.substr(16,4)}-${result.substr(20)}`;
                }
            },
            /*🔴*/stringToBase64URISafeNoPad(){},
            /*🔴*/base64URISafeNoPadToString(){},
            /*🟢*/hashCode(string){
                let result;
                for(let key=0,length=string.length;key<length;key++){
                    result=window.Math.imul(31,result)+string.charCodeAt(key)|0;
                }
                return result;
            },
            /*🟢*/random(){
                return window.Math.random().toString().replace(/0\./,'');
            },
            /*🟢*/isPortrait(width,height,true_callback,false_callback){
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
            /*🟢*/runObject(object){
                for(const key in object){
                    object[key]();
                }
            },
            /*🔴*/isBot(type='user-agent',data=window.navigator.userAgent){
                switch(type){
                    case'user-agent':
                        {
                            if(data.match(/bot|spider/i)){
                                return true;
                            }
                            return false;
                        }
                        break;
                    case'location':
                        {}
                        break;
                    case'ip':
                        {}
                        break;
                    default:
                        break;
                }
            },
            /*🟢*/searchObject(data=window.location.search){
                const result={};
                this.for(data.replace(/\?/,'').split('&'),(...data)=>{
                    const right=data[2].split('=')[1];
                    result[data[2].split('=')[0]]=right?right:'';
                },0);
                return result;
            },
            /*🟢*/humanTime(millisecond,leading_zero=[false,true,true],unit=[':',':','']){
                const zero=(number)=>{
                    return `${number<10?0:''}${number}`;
                };
                const hour=window.Math.floor(millisecond/(3600*1000));
                const minute=window.Math.floor(millisecond%(3600*1000)/(60*1000));
                const second=window.Math.floor(millisecond%(60*1000)/1000);
                return `${leading_zero[0]?zero(hour):hour}${unit[0]}${leading_zero[1]?zero(minute):minute}${unit[1]}${leading_zero[2]?zero(second):second}${unit[2]}`;
            },
            /*🟢*/percent(total,current,integer=true,unit='%'){
                if(integer){
                    return `${(current/total*100).toFixed()}${unit}`;
                }
                return `${current/total*100}${unit}`;
            },
        // local data
            /*🔴*/file(){},
            /*🔴*/localStorage(){},
            /*🔴*/sessionStorage(){},
            /*🔴*/indexedDB(){},
            /*🔴*/webSQL(){},
            /*🔴*/cookie(){},
            /*🔴*/database(){},
            /*🔴*/cache(){},
        // network data
            /*🟢*/fetch(URI,method,data_info,data,content_type,callback,option_add,headers_add){
                const option={};
                option.method=method;
                if(data_info!==undefined){
                    option.body=window.JSON.stringify({info:data_info,data:data});
                }else{
                    switch(typeof body){
                        case'object':
                            {
                                option.body=window.JSON.stringify(body);
                            }
                            break;
                        case'string':
                            {
                                option.body=body;
                            }
                            break;
                        default:
                            break;
                    }
                }
                if(option_add){
                    this.for(option_add,(...data)=>{
                        option[data[1]]=data[2];
                    },0);
                }
                switch(content_type){
                    case'json':
                        {
                            if(!option.headers){
                                option.headers={};
                            }
                            option.headers['Content-Type']='application/json; charset=utf-8';
                        }
                        break;
                    case'text':
                        {
                            if(!option.headers){
                                option.headers={};
                            }
                            option.headers['Content-Type']='text/html; charset=utf-8';
                        }
                        break;
                    default:
                        break;
                }
                if(headers_add){
                    if(!option.headers){
                        option.headers={};
                    }
                    this.for(headers_add,(...data)=>{
                        option.headers[data[1]]=data[2];
                    },0);
                }
                const result={};
                return window.fetch(URI,option).then((data)=>{
                    result.status=data.status;
                    return data[content_type]();
                }).then(async(data)=>{
                    result.result=data;
                    this.debug(()=>{
                        window.console.log('==== fetch result:',result);
                    });
                    if(callback){
                        return await callback(result);
                    }
                    return result;
                }).catch(async(data)=>{
                    result.status=0;
                    result.result=data;
                    window.console.log('==== fetch catch:',result);
                    if(callback){
                        return await callback(result);
                    }
                    return result;
                });
            },
        // command line interface
            /*🔴*/cli(){},
        // graphical user interface
            /*🔴*/cliEmulator(){},
            /*🟡*/doubleKeyContentCount(){
                if(!this.doubleKeyContentCount.template){
                    this.doubleKeyContentCount.template=class template{
                        constructor(){
                            this.data=[];
                        }
                        create(keyOne,keyTwo,content,count){
                            this.data.push({
                                keyOne:typeof keyOne==='string'?machineTool.hashCode(keyOne):keyOne,
                                keyTwo:typeof keyTwo==='string'?machineTool.hashCode(keyTwo):keyTwo,
                                content:content,
                                count:count?count:0
                            });
                        }
                        delete(keyOne,keyTwo){}
                        read(keyOne,keyTwo){}
                        update(keyOne,keyTwo){}
                    }
                }
                return new this.doubleKeyContentCount.template();
            },
            /*🟡*/listenTarget(action,target,type,callback,option={},other='',other2=''){
                const match=/[\r\n\s]/g;
                switch(type){
                    case'pointer_down':
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
                    case'pointer_move':
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
                    case'pointer_up':
                        {
                            // const id=`id_${this.hashCode(`${(target!==window&&target!==window.document?this.elementPath(target):'')}${callback.toString().replace(match,'')}`).toString().replace(/[^0-9]/g,'')}`;
                            const id=`id_${this.random()}`;
                            // const id=[target,this.hashCode(`${type}${callback.toString().replace(/[\r\n\s]/g,'')}`).toString().replace(/[^0-9]/g,''),0];
                            const remove=()=>{
                                target.removeEventListener('pointerdown',this.listenTarget.pointer_up[id]);
                                this.listenTarget.pointer_up[id].count-=1;
                                if(this.listenTarget.pointer_up[id].count===0){
                                    delete this.listenTarget.pointer_up[id];
                                    if(!window.Object.keys(this.listenTarget.pointer_up).length){
                                        delete this.listenTarget.pointer_up;
                                    }
                                }
                            };
                            switch(action){
                                case'add':
                                    {
                                        if(!this.listenTarget.pointer_up){
                                            this.listenTarget.pointer_up={};
                                        }
                                        if(!this.listenTarget.pointer_up[id]){
                                            this.listenTarget.pointer_up[id]=(data)=>{
                                                const once_id=`once_${id}`;
                                                data.target.parentNode.removeEventListener('pointerup',this.listenTarget.pointer_up[once_id]);
                                                delete this.listenTarget.pointer_up[once_id];
                                                const run=()=>{
                                                    const left=data.target.getBoundingClientRect().left;
                                                    const right=data.target.getBoundingClientRect().right;
                                                    const top=data.target.getBoundingClientRect().top;
                                                    const bottom=data.target.getBoundingClientRect().bottom;
                                                    this.listenTarget.pointer_up[once_id]=(event)=>{
                                                        if((event.target===data.target||event.target===data.target.parentNode)&&(event.clientX>=left&&event.clientX<=right&&event.clientY>=top&&event.clientY<=bottom)){
                                                            if(event.target.childElementCount){
                                                                let block=false;
                                                                for(const value of event.target.children){
                                                                    if(window.getComputedStyle(value).pointerEvents!=='none'&&window.getComputedStyle(value).visibility!=='hidden'){
                                                                        block=true;
                                                                        let intersect=false;
                                                                        for(const value of event.target.children){
                                                                            if((window.getComputedStyle(value).pointerEvents!=='none'&&window.getComputedStyle(value).visibility!=='hidden')&&(event.clientX>=value.getBoundingClientRect().left&&event.clientX<=value.getBoundingClientRect().right&&event.clientY>=value.getBoundingClientRect().top&&event.clientY<=value.getBoundingClientRect().bottom)){
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
                                                    data.target.parentNode.addEventListener('pointerup',this.listenTarget.pointer_up[once_id],{once:true});
                                                    const remove_event=()=>{
                                                        window.removeEventListener('pointerup',remove_event);
                                                        window.removeEventListener('touchend',remove_event);
                                                        window.removeEventListener('dragend',remove_event);
                                                        if(data.target.parentNode){
                                                            data.target.parentNode.removeEventListener('pointerup',this.listenTarget.pointer_up[once_id]);
                                                        }
                                                    };
                                                    if(other2){
                                                        const move=(event)=>{
                                                            if(event.y>=data.y+6||event.y<=data.y-6){
                                                                window.removeEventListener('pointermove',move);
                                                                window.removeEventListener('touchmove',move);
                                                                remove_event();
                                                            }
                                                        };
                                                        window.addEventListener('pointermove',move);
                                                        window.addEventListener('touchmove',move);
                                                    }
                                                    window.addEventListener('pointerup',remove_event,{once:true});
                                                    window.addEventListener('touchend',remove_event,{once:true});
                                                    window.addEventListener('dragend',remove_event,{once:true});
                                                };
                                                if(typeof other==='number'){
                                                    if(data.button===other){
                                                        run();
                                                    }
                                                }else{
                                                    run();
                                                }
                                                this.debug(()=>{
                                                    window.console.log('==== listenTarget.pointer_up length:',window.Object.keys(this.listenTarget.pointer_up).length);
                                                });
                                            };
                                            this.listenTarget.pointer_up[id].count=0;
                                        }
                                        if(option.once){
                                            target.addEventListener('pointerdown',this.listenTarget.pointer_up[id]);
                                        }else{
                                            target.addEventListener('pointerdown',this.listenTarget.pointer_up[id],option);
                                        }
                                        this.listenTarget.pointer_up[id].count+=1;
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
                    case'observe_mutation':
                        {
                            switch(action){
                                case'add':
                                    {
                                        target.machineTool_listenTarget_observe_mutation=new window.MutationObserver((mutation_list)=>{
                                            this.debug(()=>{
                                                window.console.log('==== listenTarget.observe_mutation mutation_list:',mutation_list);
                                            });
                                            mutation_list.forEach((mutation)=>{
                                                switch(mutation.type){
                                                    case'childList':
                                                        {
                                                            callback(mutation);
                                                        }
                                                        break;
                                                    case'attributes':
                                                        {
                                                            callback(mutation);
                                                        }
                                                        break;
                                                    default:
                                                        break;
                                                }
                                            });
                                        });
                                        target.machineTool_listenTarget_observe_mutation.observe(target,option);
                                    }
                                    break;
                                case'remove':
                                    {
                                        target.machineTool_listenTarget_observe_mutation.disconnect();
                                        delete target.machineTool_listenTarget_observe_mutation;
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
                                        target.machineTool_listenTarget_observe_intersection=new window.IntersectionObserver((entries)=>{
                                            this.debug(()=>{
                                                window.console.log('==== listenTarget.observe_intersection entries:',entries);
                                            });
                                            entries.forEach((entry)=>{
                                                callback(entry);
                                            });
                                        },option);
                                        target.machineTool_listenTarget_observe_intersection.observe(target);
                                    }
                                    break;
                                case'remove':
                                    {
                                        target.machineTool_listenTarget_observe_intersection.disconnect();
                                        delete target.machineTool_listenTarget_observe_intersection;
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
                                        target.machineTool_listenTarget_observe_resize=new window.ResizeObserver((entries)=>{
                                            this.debug(()=>{
                                                window.console.log('==== listenTarget.observe_resize entries:',entries);
                                            });
                                            entries.forEach((entry)=>{
                                                callback(entry);
                                            });
                                        });
                                        target.machineTool_listenTarget_observe_resize.observe(target);
                                    }
                                    break;
                                case'remove':
                                    {
                                        target.machineTool_listenTarget_observe_resize.disconnect();
                                        delete target.machineTool_listenTarget_observe_resize;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case'URI':
                        {
                            const id=`id_${this.hashCode(target.toString().replace(/[\r\n\s]/g,'')).toString().replace(/[^0-9]/g,'')}`;
                            if(!this.listenTarget.URI){
                                this.listenTarget.URI={};
                            }
                            if(!this.listenTarget.URI_template){
                                this.listenTarget.URI_template=class template{
                                    constructor(callback){
                                        if(window.history.pushState.name){
                                            window.history.pushState=machineTool.observeFunction(window.history.pushState,'pushState',undefined,window,(...arg)=>{
                                                return arg[2];
                                            });
                                        }
                                        if(window.history.replaceState.name){
                                            window.history.replaceState=machineTool.observeFunction(window.history.replaceState,'replaceState',undefined,window,(...arg)=>{
                                                return arg[2];
                                            });
                                        }
                                        this.callback=callback;
                                    }
                                    _popstate=(data)=>{
                                        this.callback({
                                            type:data.type,
                                            path:machineTool.URIPath()
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
                            }
                            switch(action){
                                case'add':
                                    {
                                        if(!this.listenTarget.URI[id]){
                                            this.listenTarget.URI[id]=new this.listenTarget.URI_template(target);
                                            // this.listenTarget.URI[id].count=0;
                                            this.listenTarget.URI[id].add();
                                        }
                                        // this.listenTarget.URI[id].add();
                                        // this.listenTarget.URI[id].count+=1;
                                    }
                                    break;
                                case'remove':
                                    {
                                        this.listenTarget.URI[id].remove();
                                        // this.listenTarget.URI[id].count-=1;
                                        // if(this.listenTarget.URI[id].count===0){
                                            delete this.listenTarget.URI[id];
                                            // remove observe
                                            // if(!window.Object.keys(this.listenTarget.URI).length){}
                                        // }
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
                                        target.addEventListener(type,callback,option);
                                    }
                                    break;
                                case'remove':
                                    {
                                        target.removeEventListener(type,callback);
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                }
            },
            /*🟢*/elementCreate(...arg){
                switch(typeof arg[0]){
                    case'string':
                        {
                            // single mode
                            //     tag<string,undefined='div'>,
                            //     attribute<object/{key:'value'...}/,undefined=false>,
                            //     insert_element<element,undefined=false>,
                            //     insert_position<'beforebegin','afterbegin','beforeend','afterend',undefined='beforeend'>,
                            //     content<string,element,undefined=false>,
                            //     callback<function(element),undefined=false>
                            let tag=arg[0];
                            const attribute=arg[1];
                            const insert_element=arg[2];
                            let insert_position=arg[3];
                            const content=arg[4];
                            const callback=arg[5];
                            if(!tag){
                                tag='div';
                            }
                            if(!insert_position){
                                insert_position='beforeend';
                            }
                            const element=window.document.createElement(tag);
                            if(attribute){
                                for(const key in attribute){
                                    element.setAttribute(key,attribute[key]);
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
                            //             <function:function(elements,element)/this.element===elements.key&class===element/,undefined=false>,
                            //             key&class:<{},[]>...
                            //         },
                            //         key&class:<{},[]>...
                            //     },[
                            //         function(){},
                            //         key&class:<{},[]>...
                            //     ]>,
                            //     insert_element<element,undefined=false>,
                            //     insert_position<'beforebegin','afterbegin','beforeend','afterend',undefined='beforeend'>,
                            //     elements<elements,undefined=elements>,
                            //     callback<function(elements),undefined=false>
                            //     /machineTool.elementCreate()===machineTool.elementCreate({key&class<...>:{}})._first_===machineTool.elementCreate([{}])._first_===machineTool.elementCreate([[]])._first_/
                            const object=arg[0];
                            const insert_element=arg[1];
                            let insert_position=arg[2];
                            let elements=arg[3];
                            const callback=arg[4];
                            if(!insert_position){
                                insert_position='beforeend';
                            }
                            if(!elements){
                                elements={};
                            }
                            let element_build_start=true;
                            let first=false;
                            const element_build=(data,insert_element,insert_position,key='')=>{
                                if(element_build_start){
                                    element_build_start=false;
                                    for(const key in data){
                                        if(typeof data[key]!=='function'&&key!=='element'){
                                            element_build(data[key],insert_element,insert_position,key);
                                        }
                                    }
                                }else{
                                    const class_=key.trim().split(' ').filter((item)=>{
                                        return window.isNaN(window.parseInt(item));
                                    }).join(' ');
                                    if(data.element){
                                        if(!data.element[0]){
                                            data.element[0]='div';
                                        }
                                        if(data.element[1]){
                                            if(data.element[1].class){
                                                data.element[1].class=[...new window.Set(key.trim().split(' ').filter((item)=>{
                                                    return window.isNaN(window.parseInt(item));
                                                }).concat(data.element[1].class.trim().split(' ')))].join(' ');
                                            }else{
                                                if(class_){
                                                    data.element[1].class=class_;
                                                }
                                            }
                                        }else{
                                            if(class_){
                                                data.element[1]={class:class_};
                                            }
                                        }
                                    }else{
                                        data.element=['div'];
                                        if(class_){
                                            data.element[1]={class:class_};
                                        }
                                    }
                                    const element=this.elementCreate(data.element[0],data.element[1]?data.element[1]:undefined,insert_element,insert_position,data.element[2]?data.element[2]:undefined,data.element[3]?data.element[3]:undefined);
                                    if(!first){
                                        first=element;
                                        elements._first_=element;
                                    }
                                    if(window.isNaN(key.split(' ')[0])||key.split(' ')[0]===''){
                                        elements[key.split(' ')[0]]=element;
                                    }
                                    for(const key in data){
                                        if(typeof data[key]==='function'){
                                            switch(window.Object.prototype.toString.call(data)){
                                                case'[object Array]':
                                                    {
                                                        if(!data[key].name){
                                                            data[key].element=element;
                                                        }
                                                    }
                                                    break;
                                                case'[object Object]':
                                                    {
                                                        if(key==='function'&&data[key].name==='function'){
                                                            data[key].element=element;
                                                        }
                                                    }
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }else{
                                            if(key!=='element'){
                                                element_build(data[key],element,'beforeend',key);
                                            }
                                        }
                                    }
                                }
                            };
                            element_build(object,insert_element,insert_position);
                            let function_run_start=true;
                            const function_run=(data)=>{
                                if(function_run_start){
                                    function_run_start=false;
                                    for(const key in data){
                                        if(typeof data[key]!=='function'&&key!=='element'){
                                            function_run(data[key]);
                                        }
                                    }
                                }else{
                                    for(const key in data){
                                        if(typeof data[key]==='function'){
                                            switch(window.Object.prototype.toString.call(data)){
                                                case'[object Array]':
                                                    {
                                                        if(!data[key].name){
                                                            data[key].call(data[key],elements,data[key].element);
                                                        }
                                                    }
                                                    break;
                                                case'[object Object]':
                                                    {
                                                        if(key==='function'&&data[key].name==='function'){
                                                            data[key].call(data[key],elements,data[key].element);
                                                        }
                                                    }
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }else{
                                            if(key!=='element'){
                                                function_run(data[key]);
                                            }
                                        }
                                    }
                                }
                            };
                            function_run(object);
                            if(callback){
                                callback(elements);
                            }
                            return elements;
                        }
                        break;
                    default:
                        {
                            return this.elementCreate('div',arg[1],arg[2],arg[3],arg[4],arg[5]);
                        }
                        break;
                }
            },
            /*🟢*/elementState(...arg){
                if(arg[0]instanceof window.HTMLElement){
                    // base mode
                    //     element<element>,
                    //     one<string/'class class2...'/,null,undefined=''>,
                    //     two<string/'class class2...'/,undefined=''>,
                    //     set_one<boolean,undefined=false>,
                    //     next_wait<number,undefined=0>,
                    //     callback<function(element,/one,two,''/),undefined=()=>{}>
                    // flash mode
                    //     (element<>,null,two<>,true,wait<>,callback<>)
                    const element=arg[0];
                    let one=arg[1];
                    let two=arg[2];
                    let set_one=arg[3];
                    let next_wait=arg[4];
                    let callback=arg[5];
                    if(!one&&one!==null){
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
                        for(const value of data.split(' ')){
                            if(element.classList.contains(value)){
                                return true;
                            }
                        }
                        return false;
                    };
                    const add=(data)=>{
                        for(const value of data.split(' ')){
                            element.classList.add(value);
                        }
                    };
                    const remove=(data)=>{
                        for(const value of data.split(' ')){
                            element.classList.remove(value);
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
                                if(one===null){
                                    window.setTimeout(()=>{
                                        add(two);
                                    },0);
                                    window.setTimeout(()=>{
                                        remove(two);
                                        callback(element,'');
                                    },next_wait);
                                }else{
                                    window.setTimeout(()=>{
                                        remove(two);
                                    },0);
                                    window.setTimeout(()=>{
                                        callback(element,'');
                                    },next_wait);
                                }
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
                                    },0);
                                    window.setTimeout(()=>{
                                        callback(element,one);
                                    },next_wait);
                                }
                            }
                        }
                    }else{
                        if(set_one){
                            if(!contains(one)){
                                window.setTimeout(()=>{
                                    add(one);
                                },0);
                                window.setTimeout(()=>{
                                    callback(element,one);
                                },next_wait);
                            }
                        }else{
                            if(contains(one)){
                                window.setTimeout(()=>{
                                    remove(one);
                                },0);
                                window.setTimeout(()=>{
                                    callback(element,'');
                                },next_wait);
                            }else{
                                window.setTimeout(()=>{
                                    add(one);
                                },0);
                                window.setTimeout(()=>{
                                    callback(element,one);
                                },next_wait);
                            }
                        }
                    }
                }else{
                    if(window.Array.isArray(arg[0])){
                        switch(arg[0][0]){
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
                                    //                     listen_type<string/'item,item2...'/>,
                                    //                     callback<function(event_data),undefined=()=>{}>,
                                    //                     option<object,undefined>,
                                    //                     other<any,undefined>,
                                    //                     other2<any,undefined>
                                    //                 ]...
                                    //             ]
                                    //         ]
                                    //     ]
                                    const data=arg[0][1];
                                    const open_state=data[0]?data[0]:'_';
                                    const close_state=data[1]?data[1]:'_';
                                    const target_element_array=data[2];
                                    const button_array=data[3];
                                    for(const button of button_array){
                                        const start=button[0];
                                        const switch_type=button[1];
                                        const button_element_array=button[2];
                                        const listen_type=button[3];
                                        let callback=button[4];
                                        const option=button[5];
                                        const other=button[6];
                                        const other2=button[7];
                                        if(!callback){
                                            callback=()=>{};
                                        }
                                        const event_function=()=>{
                                            const set_button_element=(_,current)=>{
                                                for(const button of button_array){
                                                    const button_element_array=button[2];
                                                    for(const button_element of button_element_array){
                                                        this.elementState(button_element,current,`${open_state} ${close_state}`,true);
                                                    }
                                                }
                                            };
                                            switch(switch_type){
                                                case'auto':
                                                    {
                                                        for(const target_element of target_element_array){
                                                            this.elementState(target_element,open_state,close_state,undefined,undefined,set_button_element);
                                                        }
                                                    }
                                                    break;
                                                case'open':
                                                    {
                                                        for(const target_element of target_element_array){
                                                            this.elementState(target_element,open_state,close_state,true,undefined,set_button_element);
                                                        }
                                                    }
                                                    break;
                                                case'close':
                                                    {
                                                        for(const target_element of target_element_array){
                                                            this.elementState(target_element,close_state,open_state,true,undefined,set_button_element);
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
                                            for(const value of listen_type.split(',')){
                                                this.listenTarget('add',button_element,value,event_function,option,other,other2);
                                                this.listenTarget('add',button_element,value,callback,option,other,other2);
                                            }
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
                                    //                     listen_type<string/'item,item2...'/>,
                                    //                     callback<function(event_data),undefined=()=>{}>,
                                    //                     option<object,undefined>,
                                    //                     other<any,undefined>,
                                    //                     other2<any,undefined>
                                    //                 ]...
                                    //             ]
                                    //         ]
                                    //     ]
                                    const data=arg[0][1];
                                    const open_state=data[0]?data[0]:'_';
                                    const close_state=data[1]?data[1]:'_';
                                    const content_array=data[2];
                                    for(const content of content_array){
                                        const start=content[0];
                                        const target_element_array=content[1];
                                        const button_element_array=content[2];
                                        const listen_type=content[3];
                                        let callback=content[4];
                                        const option=content[5];
                                        const other=content[6];
                                        const other2=content[7];
                                        if(!callback){
                                            callback=()=>{};
                                        }
                                        const event_function=()=>{
                                            for(const content of content_array){
                                                const target_element_array_=content[1];
                                                const button_element_array_=content[2];
                                                if(target_element_array_!==target_element_array){
                                                    for(const target_element_ of target_element_array_){
                                                        this.elementState(target_element_,close_state,open_state,true);
                                                    }
                                                }
                                                if(button_element_array_!==button_element_array){
                                                    for(const button_element_ of button_element_array_){
                                                        this.elementState(button_element_,close_state,open_state,true);
                                                    }
                                                }
                                            }
                                            for(const target_element of target_element_array){
                                                this.elementState(target_element,open_state,close_state,true);
                                            }
                                            for(const button_element of button_element_array){
                                                this.elementState(button_element,open_state,close_state,true);
                                            }
                                        };
                                        if(start){
                                            event_function();
                                            callback();
                                        }
                                        for(const button_element of button_element_array){
                                            for(const value of listen_type.split(',')){
                                                this.listenTarget('add',button_element,value,event_function,option,other,other2);
                                                this.listenTarget('add',button_element,value,callback,option,other,other2);
                                            }
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
            /*🟢*/elementBlock(element,group='group',insert_position='beforeend',wait=350){
                if(!this.elementBlock.template){
                    this.elementBlock.template=class template{
                        constructor(element,group,insert_position,wait){
                            this.element=element;
                            this.group=group;
                            this.insert_position=insert_position;
                            this.wait=wait;
                            this.elements=[];
                            this.lock=false;
                            this.style='html * { pointer-events: none !important; }';
                        }
                        add(element,record,wait=this.wait){
                            if(!this.lock){
                                this.lock=true;
                                const style=machineTool.insertStyle(this.style);
                                if(wait>1000/12){
                                    wait=wait-1000/12;
                                }else{
                                    wait=0;
                                }
                                let record_state=false;
                                if(record){
                                    machineTool.for(this.elements,(...data)=>{
                                        if(data[2].machineTool_elementBlock_add_record===record){
                                            record_state=true;
                                            element=data[2];
                                        }
                                    },0);
                                }
                                if(record&&!record_state){
                                    element.machineTool_elementBlock_add_record=record;
                                }
                                if(!record_state){
                                    this.elements.push(element);
                                }
                                machineTool.for(this.elements,(...data)=>{
                                    if(data[2]!==element&&data[2].classList.contains(`${this.group}_last`)){
                                        window.setTimeout(()=>{
                                            machineTool.elementState(data[2],`${this.group}_prev`,`${this.group}_last`,true);
                                        },1000/12);
                                    }
                                },0);
                                machineTool.elementState(element,`${this.group}_last ${this.group}_ready`,`${this.group}_hide`,true);
                                element.style.setProperty('opacity','0');
                                window.setTimeout(()=>{
                                    if(!record_state){
                                        this.element.insertAdjacentElement(this.insert_position,element);
                                    }
                                    window.setTimeout(()=>{
                                        element.style.removeProperty('opacity');
                                        machineTool.removeEmpty(element);
                                        machineTool.elementState(element,`${this.group}_go`,'',true);
                                        window.setTimeout(()=>{
                                            machineTool.elementState(element,'',`${this.group}_ready`,true);
                                            machineTool.removeElement(style);
                                            this.lock=false;
                                        },wait);
                                    },1000/24);
                                },1000/24);
                                return element;
                            }
                        }
                        back(wait=this.wait){
                            if(!this.lock){
                                this.lock=true;
                                let element=null;
                                machineTool.for(this.elements,(...data)=>{
                                    if(!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)&&data[2].classList.contains(`${this.group}_last`)){
                                        element=data[2];
                                    }
                                },0);
                                // if(element?.machineTool_elementBlock_add_record){
                                if(element&&element.machineTool_elementBlock_add_record){
                                    this.lock=false;
                                    return this.hide(wait);
                                }else{
                                    this.lock=false;
                                    return this.remove(wait);
                                }
                            }
                        }
                        hide(wait=this.wait){
                            if(!this.lock){
                                this.lock=true;
                                const style=machineTool.insertStyle(this.style);
                                let element=null;
                                machineTool.for(this.elements,(...data)=>{
                                    if(!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)&&data[2].classList.contains(`${this.group}_last`)){
                                        element=data[2];
                                    }
                                },0);
                                machineTool.elementState(element,`${this.group}_remove`,'',true);
                                window.setTimeout(()=>{
                                    machineTool.elementState(element,`${this.group}_hide`,`${this.group}_ready ${this.group}_go ${this.group}_last ${this.group}_prev ${this.group}_remove`,true);
                                    machineTool.removeElement(style);
                                    this.lock=false;
                                },wait);
                                let last=null;
                                machineTool.for(this.elements,(...data)=>{
                                    if(data[2]!==element&&!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)){
                                        last=data[2];
                                    }
                                },0);
                                if(last){
                                    machineTool.elementState(last,`${this.group}_last`,`${this.group}_prev`,true);
                                    return last;
                                }else{
                                    return 'null';
                                }
                            }
                        }
                        remove(wait=350){
                            if(!this.lock){
                                this.lock=true;
                                const style=machineTool.insertStyle(this.style);
                                let element=null;
                                machineTool.for(this.elements,(...data)=>{
                                    if(!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)&&data[2].classList.contains(`${this.group}_last`)){
                                        element=data[2];
                                    }
                                },0);
                                this.elements.splice(this.elements.indexOf(element),1);
                                machineTool.elementState(element,`${this.group}_remove`,'',true);
                                window.setTimeout(()=>{
                                    machineTool.elementState(element,'',`${this.group}_ready ${this.group}_go ${this.group}_last ${this.group}_prev ${this.group}_hide ${this.group}_remove`,true);
                                    if(element){
                                        machineTool.removeElement(element);
                                    }
                                    machineTool.removeElement(style);
                                    this.lock=false;
                                },wait);
                                let last=null;
                                machineTool.for(this.elements,(...data)=>{
                                    if(data[2]!==element&&!data[2].classList.contains(`${this.group}_hide`)&&!data[2].classList.contains(`${this.group}_remove`)){
                                        last=data[2];
                                    }
                                },0);
                                if(last){
                                    machineTool.elementState(last,`${this.group}_last`,`${this.group}_prev`,true);
                                    return last;
                                }else{
                                    return 'null';
                                }
                            }
                        }
                    }
                }
                return new this.elementBlock.template(element,group,insert_position,wait);
            },
            /*🟢*/removeElement(element){
                element.parentElement.removeChild(element);
            },
            /*🟢*/findOuter(find,start,end=window.document.documentElement,true_callback,false_callback){
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
                return this.findOuter(find,start.parentElement,end,true_callback,false_callback);
            },
            /*🟢*/elementPath(element){
                let result='';
                const run=(element)=>{
                    if(element.parentElement){
                        for(let key=0,length=element.parentElement.childElementCount;key<length;key++){
                            if(element.parentElement.children[key]===element){
                                result=`${key},${result}`;
                                break;
                            }
                        }
                        run(element.parentElement);
                    };
                };
                run(element);
                return result.replace(/,$/,'');
            },
            /*🟢*/URIPath(hash=true){
                switch(hash){
                    case true:
                        {
                            return window.location.href.replace(window.location.origin,'');
                        }
                        break;
                    case false:
                        {
                            return window.location.href.replace(window.location.origin,'').replace(window.location.hash,'');
                        }
                        break;
                    default:
                        break;
                }
            },
            /*🟢*/removeEmpty(element,...attribute){
                if(attribute[0]){
                    for(let key=0,length=attribute.length;key<length;key++){
                        element.removeAttribute(attribute[key]);
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
            /*🟢*/fullScreen(element=window.document.documentElement,top=false){
                const root=top?window.top:window;
                if(window.navigator.userAgent.match(/iPhone|iPad/i)&&element.webkitSupportsFullscreen){
                    if(element.webkitDisplayingFullscreen){
                        element.webkitExitFullScreen();
                    }else{
                        element.webkitEnterFullScreen();
                    }
                }else{
                    if(root.document.fullscreenElement||root.document.webkitIsFullScreen){
                        if('exitFullscreen'in root.document){
                            root.document.exitFullscreen();
                        }else{
                            if('webkitExitFullscreen'in root.document){
                                root.document.webkitExitFullscreen();
                            }
                        }
                    }else{
                        if('requestFullscreen'in root.document.documentElement){
                            element.requestFullscreen();
                        }else{
                            if('webkitRequestFullScreen'in root.document.documentElement){
                                element.webkitRequestFullScreen();
                            }
                        }
                    }
                }
            },
            /*🟢*/openTab(URI=window.location.href,name=''){
                return window.open(URI,name);
            },
            /*🟢*/openWindow(URI=window.location.href,name='',width=720,height=450,left,top){
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
                return window.open(URI,name,`width=${width},height=${height},left=${left},top=${top}`);
            },
            /*🟢*/debug(callback){
                // if(window.document?.documentElement&&window.document.documentElement.classList.contains('debug')){
                if(window.document&&window.document.documentElement&&window.document.documentElement.classList.contains('debug')){
                    callback();
                }
            },
            /*🔴*/startLoad(type,callback){
                window.document.addEventListener('readystatechange',(event)=>{
                    switch(event.target.readyState){
                        case'loading':
                            {}
                            break;
                        case'interactive':
                            {}
                            break;
                        case'complete':
                            {}
                            break;
                        default:
                            break;
                    }
                });
            },
            /*🟢*/insertStyle(style,wait){
                const element=this.elementCreate('style',undefined,window.document.head,undefined,style);
                if(wait){
                    window.setTimeout(()=>{
                        this.removeElement(element);
                    },wait);
                }
                return element;
            },
            /*🟢*/plugin_hls_load(mode='auto',video,src,poster='',config={
                autoStartLoad:video.getAttribute('preload')==='auto'?true:false,
                maxBufferLength:4,
                maxBufferSize:4*1000*1000
            }){
                video.pause();
                if(!this.plugin_hls_load.play){
                    this.plugin_hls_load.play=()=>{
                        video._hls_.startLoad();
                    };
                }
                if(!this.plugin_hls_load.pause){
                    this.plugin_hls_load.pause=()=>{
                        video._hls_.stopLoad();
                    };
                }
                video.setAttribute('src',src);
                video.setAttribute('poster',poster);
                if(src.match(/\.m3u8/i)){
                    const hls_go=()=>{
                        if(video._hls_){
                            video._hls_.destroy();
                            delete video._hls_;
                            video.removeEventListener('play',this.plugin_hls_load.play);
                            video.removeEventListener('pause',this.plugin_hls_load.pause);
                        }
                        const hls=new window.Hls(config);
                        hls.loadSource(src);
                        hls.attachMedia(video);
                        video.addEventListener('play',this.plugin_hls_load.play);
                        video.addEventListener('pause',this.plugin_hls_load.pause);
                        video._hls_=hls;
                        return hls;
                    };
                    return this.loop(()=>{
                        switch(mode){
                            case'auto':
                                {
                                    if(video.canPlayType('application/vnd.apple.mpegurl')){
                                        return true;
                                    }else{
                                        if('Hls'in window&&window.Hls.isSupported()){
                                            return hls_go();
                                        }
                                    }
                                }
                                break;
                            case'hls':
                                {
                                    if('Hls'in window&&window.Hls.isSupported()){
                                        return hls_go();
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                        return false;
                    });
                }
            },
            /*🟢*/plugin_hls_observeLoad(){
                if(!window.document.createElement('video').canPlayType('application/vnd.apple.mpegurl')){
                    const script=window.document.createElement('script');
                    script.setAttribute('src','https://cdn.jsdelivr.net/npm/hls.js@latest');
                    window.document.head.insertAdjacentElement('beforeend',script);
                    const load=(video)=>{
                        if(video._hls_){
                            video._hls_.destroy();
                            delete video._hls_;
                        }
                        if(video.hasAttribute('src')&&video.getAttribute('src').match(/\.m3u8/i)){
                            if('Hls'in window&&window.Hls.isSupported()){
                                const hls=new window.Hls();
                                hls.loadSource(video.getAttribute('src'));
                                hls.attachMedia(video);
                                video._hls_=hls;
                            }
                        }
                    };
                    const query=()=>{
                        window.document.querySelectorAll('body *').forEach((target)=>{
                            if(target.localName==='video'){
                                load(target);
                            }
                        });
                    };
                    const observe=()=>{
                        new window.MutationObserver((mutation_list)=>{
                            mutation_list.forEach((mutation)=>{
                                if(mutation.type==='attributes'&&mutation.target.localName==='video'){
                                    load(mutation.target);
                                }
                            });
                        }).observe(window.document.body,{attributes:true,attributeFilter:['src'],childList:true,subtree:true});
                    };
                    if(window.document.readyState==='complete'){
                        query();
                        observe();
                    }else{
                        window.document.addEventListener('load',query,{once:true});
                        window.document.addEventListener('load',observe,{once:true});
                    }
                }
            },
        // graphics
            /*🔴*/plugin_openCV_removeWatermark(){},
        // application programming interface
            /*🔴*/listenPort(){},
            /*🔴*/portReceive(URI,method,data,callback,other_data){
                const result={
                    URI:URI,
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
            /*🔴*/portReturn(){},
            /*🔴*/route(){},
            /*🔴*/extract(){},
            /*🔴*/middleware(){},
            /*🔴*/staticFile(){},
            /*🔴*/siteMapGenerator(){},
            /*🔴*/siteMapFileGenerator(){}
    };
// #build
// #debug
    // debug
    // if(window.document?.documentElement){
    if(window.document&&window.document.documentElement){
        let over=false;
        const run=()=>{
            if(!over&&window.document.documentElement.classList.contains('debug')){
                machineTool.debug(()=>{
                    // window.machineTool
                    window.machineTool=machineTool;
                    // machineTool_test
                    machineTool.import('./machineTool_test.js',(data)=>{
                        data.machineTool_test(machineTool);
                    });
                });
                over=true;
                machineTool.listenTarget('remove',window.document.documentElement,'observe_mutation',run);
            }
        };
        machineTool.listenTarget('add',window.document.documentElement,'observe_mutation',run,{attributes:true,attributeFilter:['class'],childList:false,subtree:false});
    }
// #after
    // console
    window.console.log('#### end: machineTool.js');