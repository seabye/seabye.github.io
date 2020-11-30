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
            element:(tag,attribute=false,insert_element=false,insert_position=false,content=false)=>{
                const element=window.document.createElement(tag);
                if(attribute){
                    if(!window.Array.isArray(attribute)){
                        for(const item in attribute){
                            element.setAttribute(item,attribute[item]);
                        }
                    }else{
                        for(const[key,value]of attribute){
                            element.setAttribute(key,value);
                        }
                    }
                }
                if(insert_element){
                    if(insert_position){
                        insert_element.insertAdjacentElement(insert_position,element);
                    }else{
                        insert_element.appendChild(element);
                    }
                }
                if(content){
                    if(typeof content==='function'){
                        content(element);
                    }else{
                        element.innerHTML=content;
                    }
                }
                return element;
            },
            element_machine:function(data,position=window.document.body,element={}){
                if(!position){
                    position=window.document.body;
                }
                const build_element=(data,position)=>{
                    for(const item in data){
                        window.console.log('1',item,data[item]);
                        const element_=this.element(data[item].element[0],data[item].element[1]?data[item].element[1]:false,position,'beforeend',data[item].element[2]?data[item].element[2]:false);
                        if(item){
                            element[item]=data[item].element=element_;
                        }else{
                            data[item].element=element_;
                        }
                        for(const item_ in data[item]){
                            // window.console.log('2',item_,data[item_]);
                            if(!window.JSON.stringify(item_).match(/element|function/)){
                                window.console.log('3',item_,data[item_]);
                                build_element(data[item][item_],data[item].element);
                            }
                        }
                    }
                };
                build_element(data,position);
                const run_function=(data)=>{
                    for(const item in data){
                        if(data[item].function){
                            data[item].function(element);
                        }
                        for(const item_ in data[item]){
                            if(!window.JSON.stringify(item_).match(/element|function/)){
                                run_function(data[item][item_]);
                            }
                        }
                    }
                };
                run_function(data);
                return element;
            },
            toggle_cls:(element,cls,cls2='',replace=false,wait=0,callback=()=>{})=>{
                if(cls2){
                    if(replace){
                        if(cls){
                            element.classList.remove(cls2);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls);
                                callback();
                            }
                        }else{
                            element.classList.add(cls2);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.remove(cls2);
                                    callback();
                                },wait);
                            }else{
                                element.classList.remove(cls2);
                                callback();
                            }
                        }
                    }else{
                        if(element.classList.contains(cls)){
                            element.classList.remove(cls);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls2);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls2);
                                callback();
                            }
                        }else if(element.classList.contains(cls2)){
                            element.classList.remove(cls2);
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls);
                                callback();
                            }
                        }else{
                            if(wait){
                                window.setTimeout(()=>{
                                    element.classList.add(cls);
                                    callback();
                                },wait);
                            }else{
                                element.classList.add(cls);
                                callback();
                            }
                        }
                    }
                }else{
                    if(element.classList.contains(cls)){
                        element.classList.remove(cls);
                    }else{
                        if(wait){
                            window.setTimeout(()=>{
                                element.classList.add(cls);
                                callback();
                            },wait);
                        }else{
                            element.classList.add(cls);
                            callback();
                        }
                    }
                }
            },
            find_parent:function(target,start,end=window.document.documentElement){
                if(start===target){
                    return true;
                }else if(start===end){
                    return false;
                }
                return this.find_parent(target,start.parentElement,end);
            },
            loop:function(premise,callback,wait=1000/24){
                if(premise()){
                    callback();
                }else{
                    window.setTimeout(()=>{
                        this.loop(premise,callback,wait);
                    },wait);
                }
            },
            debounce:(callback,wait=1000/24)=>{
                let timeout=null;
                return function(){
                    window.clearTimeout(timeout);
                    timeout=window.setTimeout(()=>{
                        callback.apply(this,arguments);
                    },wait);
                };
            },
            toggle_full:(element=window.document.documentElement,top_window=false)=>{
                if(top_window){
                    if(window.top.document.fullscreen||window.top.document.webkitIsFullScreen){
                        if('exitFullscreen'in window.top.document){
                            window.top.document.exitFullscreen();
                        }else if('webkitExitFullscreen'in window.top.document){
                            window.top.document.webkitExitFullscreen();
                        }
                    }else{
                        if('requestFullscreen'in window.top.document.documentElement){
                            element.requestFullscreen();
                        }else if('webkitRequestFullScreen'in window.top.document.documentElement){
                            element.webkitRequestFullScreen();
                        }
                    }
                }else{
                    if(window.document.fullscreen||window.document.webkitIsFullScreen){
                        if('exitFullscreen'in window.document){
                            window.document.exitFullscreen();
                        }else if('webkitExitFullscreen'in window.document){
                            window.document.webkitExitFullscreen();
                        }
                    }else{
                        if('requestFullscreen'in window.document.documentElement){
                            element.requestFullscreen();
                        }else if('webkitRequestFullScreen'in window.document.documentElement){
                            element.webkitRequestFullScreen();
                        }
                    }
                }
            },
            window_open:(uri=window.location.href,width=640,height=480,left=0,top=0,center=true)=>{
                if(center){
                    left=(window.screen.availWidth-width)/2+window.screen.availLeft;
                    top=(window.screen.availHeight-height)/2+window.screen.availTop;
                }else{
                    left+=window.screen.availLeft;
                    top+=window.screen.availTop;
                }
                window.open(uri,'',`width=${width},height=${height},left=${left},top=${top}`);
            }
        }
    // ##build
        // ~background color
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
        // orientation
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
                    initial_tool.toggle_cls(window.document.documentElement,'ic_nr_orientation_landscape','ic_nr_orientation_portrait',true);
                }else{
                    window.document.documentElement.style.removeProperty('max-width');
                    window.document.documentElement.style.removeProperty('max-height');
                    if(!window.document.documentElement.style[0]){
                        window.document.documentElement.removeAttribute('style');
                    }
                    initial_tool.toggle_cls(window.document.documentElement,'ic_nr_orientation_portrait','ic_nr_orientation_landscape',true);
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
            window.addEventListener('resize',action);
            window.addEventListener('resize',initial_tool.debounce(action,350*3));
            window.addEventListener('orientationchange',(event)=>{
                window.setTimeout(()=>{
                    action(event);
                },350);
            });
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
        // form
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
            window.addEventListener('resize',action);
            window.addEventListener('resize',initial_tool.debounce(action,350*3));
            window.addEventListener('orientationchange',()=>{
                window.setTimeout(action,350*2);
            });
        }
        // ic_nr / initial container_navigator
        {
            const ua=window.navigator.userAgent;
            const cls=window.document.documentElement.classList;
            if(ua.match('Unix')){cls.add('ic_nr_system_unix');}
            if(ua.match('Mac OS')&&!ua.match('iPhone')&&!ua.match('iPad')){cls.add('ic_nr_system_brand_apple','ic_nr_system_macos');}
            if(ua.match('Windows')){cls.add('ic_nr_system_brand_microsoft','ic_nr_system_windows');}
            if(ua.match('Linux')&&!ua.match('Android')){cls.add('ic_nr_system_linux');}
            if(ua.match('CrOS')){cls.add('ic_nr_system_brand_google','ic_nr_system_chromeos');}
            if(ua.match(/iPhone|iPad/)){cls.add('ic_nr_system_brand_apple','ic_nr_system_ios');}
            if(ua.match('Android')){cls.add('ic_nr_system_brand_google','ic_nr_system_android');}
            if(ua.match('Firefox')){cls.add('ic_nr_browser_firefox');}
            if(ua.match('Safari')&&!ua.match('Chrome')&&!ua.match('Edg')){cls.add('ic_nr_browser_safari');}
            if(ua.match('Chrome')&&!ua.match('Edg')){cls.add('ic_nr_browser_chrome');}
            if(ua.match('Edg')){cls.add('ic_nr_browser_edge');}
        }
        // initial_option
        export const initial_option=(option)=>{
            // sw
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
                window.document.head.insertAdjacentHTML('afterbegin',`
                    <meta name="viewport" content="width=device-width,user-scalable=no,viewport-fit=cover">
                    <meta name="format-detection" content="address=no,email=no,telephone=no">
                    <title>${option.head.title?option.head.title:''}</title>
                    <link rel="stylesheet" href="${option.head.style?option.head.style:''}">
                `);
                window.document.head.insertAdjacentHTML('beforeend',`
                    <link rel="icon" type="image/png" href="${option.head.icon?option.head.icon:''}">
                `);
                if(window.navigator.userAgent.match('Safari')&&!window.navigator.userAgent.match('Chrome')&&!window.navigator.userAgent.match('Edg')){
                    window.document.head.insertAdjacentHTML('beforeend',`
                        <link rel="apple-touch-icon" href="${option.head.icon_apple?option.head.icon_apple:''}">
                        <meta name="apple-mobile-web-app-capable" content="yes">
                        <meta name="apple-mobile-web-app-status-bar-style" content="white">
                        <meta name="apple-mobile-web-app-title" content="${option.head.title?option.head.title:''}">
                    `);
                }else if(window.matchMedia('(prefers-color-scheme:dark)').addEventListener){
                    // ~theme color
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
                        const theme_color=initial_tool.element('meta',{name:'theme-color',content:`${window.matchMedia('(prefers-color-scheme:dark)').matches?dark:light}`},window.document.head,'beforeend');
                        window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',(event)=>{
                            theme_color.setAttribute('content',event.matches?dark:light);
                        });
                    }
                }
                window.document.head.insertAdjacentHTML('beforeend',`<link rel="manifest" href="${option.head.manifest?option.head.manifest:''}">`);
            }
        };
// #content
    // ##variable
    // ##module
    // ##build
// #debug