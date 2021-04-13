'use strict';
// #before
  // console
  self.console.log('#### start: sw.js');
// #import
// #variable
// #block
// #build
  // online priority basic cache
  const version='basic';
  self.addEventListener('install',(event)=>{
    event.waitUntil(self.caches.open(version).then((cache)=>{
      return cache.addAll([]);
    }));
  });
  self.addEventListener('fetch',(event)=>{
    event.respondWith(self.caches.match(event.request).then((resp)=>{
      return self.fetch(event.request).then((response)=>{
        const responseClone=response.clone();
        self.caches.open(version).then((cache)=>{
          cache.put(event.request,responseClone);
        });
        return response;
      }).catch((error)=>{
        return resp;
      });
    }));
  });
  self.addEventListener('activate',(event)=>{
    event.waitUntil(self.caches.keys().then((keyList)=>{
      return self.Promise.all(keyList.map((key)=>{
        if([version].indexOf(key)===-1){
          return self.caches.delete(key);
        }
      }));
    }));
  });
// #debug
// #after
  // console
  self.console.log('#### end: sw.js');