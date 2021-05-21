'use strict';
// #before
// #import
// #variable
// #block
// #build
  // basic cache
  const version='basic';
  addEventListener('install',(event)=>{
    event.waitUntil(caches.open(version).then((cache)=>{
      return cache.addAll([]);
    }));
  });
  addEventListener('fetch',(event)=>{
    event.respondWith(caches.match(event.request).then((resp)=>{
      return fetch(event.request).then((response)=>{
        const responseClone=response.clone();
        caches.open(version).then((cache)=>{
          cache.put(event.request,responseClone);
        });
        return response;
      }).catch((error)=>{
        return resp;
      });
    }));
  });
  addEventListener('activate',(event)=>{
    event.waitUntil(caches.keys().then((keyList)=>{
      return Promise.all(keyList.map((key)=>{
        if([version].indexOf(key)===-1){
          return caches.delete(key);
        }
      }));
    }));
  });
// #debug
// #after