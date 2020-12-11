'use strict';
// ---- ---- ---- ----
// #import
// #global
    // ##variable
    // ##module
    // ##build
// #content
    // ##variable
    // ##module
    // ##build
// #debug
// ---- ---- ---- ----
// #import
// #global
    // ##variable
    // ##module
        // initial_tool
        export const initial_tool={
            // programming
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
            loop:function(loop,callback,wait){
                if(typeof wait!=='number'){
                    wait=1000/24;
                }
                if(loop()){
                    callback();
                }else{
                    window.setTimeout(()=>{
                        this.loop(loop,callback,wait);
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
            // graphical user interface
            element:function(){
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
                                    if(!data[item].element){
                                        data[item].element=['div'];
                                        if(item.trim()){
                                            data[item].element[1]={class:item.trim()};
                                        }
                                    }else{
                                        if(!data[item].element[0]){
                                            data[item].element[0]='div';
                                        }
                                        if(!data[item].element[1]){
                                            if(item.trim()){
                                                data[item].element[1]={class:item.trim()};
                                            }
                                        }else{
                                            if(!data[item].element[1].class){
                                                if(item.trim()){
                                                    data[item].element[1].class=item.trim();
                                                }
                                            }else{
                                                data[item].element[1].class=window.Array.from(new window.Set(item.trim().split(' ').concat(data[item].element[1].class.trim().split(' ')))).join(' ');
                                            }
                                        }
                                    }
                                    const element_=this.element(data[item].element[0],data[item].element[1]?data[item].element[1]:false,insert_element,false,data[item].element[2]?data[item].element[2]:false);
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
            conversion:function(){
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
                    if(typeof arguments[0]==='string'){
                        let mode=arguments[0];
                        let data=arguments[1];
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
            },
            state:()=>{

            },
            // function
            full_switch:(element,top)=>{
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
            window_open:(uri,width,height,left,top,center)=>{
                if(!uri){
                    uri=window.location.href;
                }
                if(!width){
                    width=640;
                }
                if(!height){
                    height=480;
                }
                if(!left){
                    left=0;
                }
                if(!top){
                    top=0;
                }
                if(center!==false){
                    center=true;
                }
                if(center){
                    left=(window.screen.availWidth-width)/2+window.screen.availLeft;
                    top=(window.screen.availHeight-height)/2+window.screen.availTop;
                }else{
                    left+=window.screen.availLeft;
                    top+=window.screen.availTop;
                }
                return window.open(uri,'',`width=${width},height=${height},left=${left},top=${top}`);
            }
        }
    // ##build
        // ~ background color
        {
            let data={};
            for(const item of window.document.scripts){
                if(item.dataset.initial){
                    data=window.JSON.parse(item.dataset.initial.replace(/'/g,'"'));
                    break;
                }
            }
            window.document.documentElement.style.setProperty('background-color',`var(--ic_ve_color_white,${window.document.documentElement.style.getPropertyValue('background-color')?window.document.documentElement.style.getPropertyValue('background-color'):window.matchMedia('(prefers-color-scheme:dark)').matches?data.dark?data.dark:'#000000':data.light?data.light:'#FFFFFF'})`);
        }
        initial_tool.loop(()=>{
            let result=false;
            for(const item of window.document.documentElement.children){
                if(item.localName==='body'){
                    result=true;
                    break;
                }
            }
            return result;
        },()=>{
            window.document.body.style.setProperty('opacity','0');
        },1000/60);
        window.addEventListener('load',()=>{
            window.document.documentElement.style.removeProperty('background-color');
            if(!window.document.documentElement.style[0]){
                window.document.documentElement.removeAttribute('style');
            }
            initial_tool.loop(()=>{
                if(window.document.body.style.getPropertyValue('opacity')==='0'){
                    return true;
                }else{
                    return false;
                }
            },()=>{
                window.document.body.style.removeProperty('opacity');
                if(!window.document.body.style[0]){
                    window.document.body.removeAttribute('style');
                }
            },1000/60);
        },{once:true});
        // size
        {
            const action=(event)=>{
                if(event.type==='orientationchange'){
                    window.document.body.style.setProperty('display','none');
                }
                const set=(head)=>{
                    window.document.documentElement.style.setProperty(`${head}-width`,`${window.innerWidth}px`);
                    if(!window.navigator.userAgent.match('Mobile')||(window.navigator.userAgent.match('Mobile')&&!window.document.activeElement.localName.match(/input|textarea/))){
                        window.document.documentElement.style.setProperty(`${head}-height`,`${window.innerHeight}px`);
                    }
                };
                set('min');
                if(window.parseInt(window.document.documentElement.style.getPropertyValue('min-height'))<window.parseInt(window.document.documentElement.style.getPropertyValue('min-width'))){
                    set('max');
                    initial_tool.conversion(window.document.documentElement,'ic_nr_orientation_landscape','ic_nr_orientation_portrait',true);
                }else{
                    window.document.documentElement.style.removeProperty('max-width');
                    window.document.documentElement.style.removeProperty('max-height');
                    if(!window.document.documentElement.style[0]){
                        window.document.documentElement.removeAttribute('style');
                    }
                    initial_tool.conversion(window.document.documentElement,'ic_nr_orientation_portrait','ic_nr_orientation_landscape',true);
                }
                if(event.type==='orientationchange'){
                    window.setTimeout(()=>{
                        window.document.body.style.removeProperty('display');
                        if(!window.document.body.style[0]){
                            window.document.body.removeAttribute('style');
                        }
                    },350);
                }
            };
            window.addEventListener('load',action,{once:true});
            window.addEventListener('resize',initial_tool.throttle(action,1000/60));
            window.addEventListener('resize',initial_tool.throttle(action,350*3));
            window.addEventListener('orientationchange',(event)=>{
                window.setTimeout(()=>{
                    action(event);
                },350);
            });
            window.addEventListener('blur',action);
            window.addEventListener('focus',action);
        }
        if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
            const action=()=>{
                window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                if(window.getComputedStyle(window.document.documentElement).transform!=='none'){
                    window.scroll({behavior:'smooth',left:0,top:0});
                }
            }
            window.addEventListener('load',action,{once:true});
            window.addEventListener('orientationchange',()=>{
                window.setTimeout(action,350*3);
            });
        }
        // :hov action
        window.addEventListener('pointerdown',()=>{});
        // context menu
        window.addEventListener('contextmenu',(event)=>{
            event.preventDefault();
        });
        // touchpad zoom
        window.addEventListener('wheel',(event)=>{
            if(event.ctrlKey){
                event.preventDefault();
            }
        },{passive:false});
        // tabindex
        window.document.documentElement.setAttribute('tabindex','-1');
        initial_tool.loop(()=>{
            let result=false;
            for(const item of window.document.documentElement.children){
                if(item.localName==='body'){
                    result=true;
                    break;
                }
            }
            return result;
        },()=>{
            window.document.head.setAttribute('tabindex','-1');
            window.document.body.setAttribute('tabindex','-1');
        },1000/60);
        // form input
        window.addEventListener('pointerdown',(event)=>{
            if(!event.target.localName.match(/input|textarea/)&&window.document.activeElement.localName.match(/input|textarea/)){
                window.document.activeElement.blur();
                window.setTimeout(()=>{
                    window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                    if(window.getComputedStyle(window.document.documentElement).transform!=='none'){
                        window.scroll({behavior:'smooth',left:0,top:0});
                    }
                },350);
            };
        });
        window.addEventListener('orientationchange',()=>{
            if(window.document.activeElement.localName.match(/input|textarea/)){
                window.document.activeElement.blur();
            }
        });
        window.addEventListener('keydown',(event)=>{
            if(event.key==='Enter'){
                window.setTimeout(()=>{
                    window.document.documentElement.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
                    if(window.getComputedStyle(window.document.documentElement).transform!=='none'){
                        window.scroll({behavior:'smooth',left:0,top:0});
                    }
                },350);
            }
        });
        if(!(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg'))){
            window.addEventListener('pointerdown',(event)=>{
                if(event.target.localName.match(/input|textarea/)){
                    window.setTimeout(()=>{
                        event.target.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
                    },350*2);
                }
            });
        }
        // scroll
        if(!window.CSS.supports('overscroll-behavior:contain')){
            const action=()=>{
                for(const item of window.document.all){
                    if(window.getComputedStyle(item).overflowY.match(/auto|scroll/)){
                        if(item.scrollHeight===item.clientHeight){
                            item.style.setProperty('touch-action','pan-x');
                        }else{
                            item.style.removeProperty('touch-action');
                            if(!item.style[0]){
                                item.removeAttribute('style');
                            }
                        }
                    }
                }
            };
            new MutationObserver(action).observe(window.document.documentElement,{attributes:true,childList:true,subtree:true});
            window.addEventListener('load',action,{once:true});
            window.addEventListener('resize',initial_tool.throttle(action,1000/60));
            window.addEventListener('resize',initial_tool.throttle(action,350*3));
            window.addEventListener('orientationchange',()=>{
                window.setTimeout(action,350*2);
            });
        }
        // ic_nr / ic_ navigator
        {
            const user_agent=window.navigator.userAgent;
            const class_=window.document.documentElement.classList;
            if(user_agent.match('Unix')){class_.add('ic_nr_system_unix');}
            if(user_agent.match('Mac OS')&&!user_agent.match('iPhone')&&!user_agent.match('iPad')){class_.add('ic_nr_system_brand_apple','ic_nr_system_macos');}
            if(user_agent.match('Windows')){class_.add('ic_nr_system_brand_microsoft','ic_nr_system_windows');}
            if(user_agent.match('Linux')&&!user_agent.match('Android')){class_.add('ic_nr_system_linux');}
            if(user_agent.match('CrOS')){class_.add('ic_nr_system_brand_google','ic_nr_system_chromeos');}
            if(user_agent.match(/iPhone|iPad/)){class_.add('ic_nr_system_brand_apple','ic_nr_system_ios');}
            if(user_agent.match('Android')){class_.add('ic_nr_system_brand_google','ic_nr_system_android');}
            if(user_agent.match('Firefox')){class_.add('ic_nr_browser_firefox');}
            if(user_agent.match('Safari')&&!user_agent.match('Chrome')&&!user_agent.match('Edg')){class_.add('ic_nr_browser_safari');}
            if(user_agent.match('Chrome')&&!user_agent.match('Edg')){class_.add('ic_nr_browser_chrome');}
            if(user_agent.match('Edg')){class_.add('ic_nr_browser_edge');}
        }
        // initial_option
        export const initial_option=(option)=>{
            // service worker
            if(option.sw){
                if('serviceWorker'in window.navigator){
                    window.navigator.serviceWorker.register(option.sw,{scope:'./'}).then((registration)=>{
                        window.console.log('#### Registration successful, scope is:',registration.scope);
                    }).catch((error)=>{
                        window.console.log('#### Service worker registration failed, error:',error);
                    });
                }
            }
            // head
            if(option.head){
                for(const item in option.head){
                    if(!option.head[item]){
                        option.head[item]='';
                    }
                }
                window.document.head.insertAdjacentHTML('afterbegin',`
                    <meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">
                    <meta name="format-detection" content="address=no,email=no,telephone=no">
                    <title>${option.head.title}</title>
                    <link rel="stylesheet" href="${option.head.style}">
                `);
                window.document.head.insertAdjacentHTML('beforeend',`
                    <link rel="icon" type="image/png" href="${option.head.icon}">
                `);
                if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
                    window.document.head.insertAdjacentHTML('beforeend',`
                        <link rel="apple-touch-icon" href="${option.head.icon_apple}">
                        <meta name="apple-mobile-web-app-capable" content="yes">
                        <meta name="apple-mobile-web-app-status-bar-style" content="white">
                        <meta name="apple-mobile-web-app-title" content="${option.head.title}">
                    `);
                }else{
                    if(!(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg'))&&window.matchMedia('(prefers-color-scheme:dark)').addEventListener){
                        // ~ theme color
                        let theme_color=null;
                        for(const item of window.document.head.children){
                            if(item.getAttribute('name')==='theme-color'){
                                theme_color=item;
                                break;
                            }
                        }
                        if(theme_color){
                            window.document.head.insertAdjacentElement('beforeend',theme_color);
                        }else{
                            const light='#E1E1E1';
                            const dark='#212121';
                            const theme_color=initial_tool.element('meta',{name:'theme-color',content:`${window.matchMedia('(prefers-color-scheme:dark)').matches?dark:light}`},window.document.head);
                            window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
                                theme_color.setAttribute('content',event.matches?dark:light);
                            });
                        }
                    }
                }
                window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${option.head.manifest}">`);
            }
        };
// #content
    // ##variable
    // ##module
    // ##build
// #debug