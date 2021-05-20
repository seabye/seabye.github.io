// #before
// #import
  //
  #include"emscripten.h"
  //
  #include"_package/libwebp/src/webp/encode.h"
// #variable
// #block
  // tyin webAssembly c 💠 🔴 🟡 🟢
    // 💠 base
        /*🔴*/
        EMSCRIPTEN_KEEPALIVE
        int version(){
          return WebPGetEncoderVersion();
        }
    // 💠 local data
    // 💠 network data
    // 💠 application programming interface
    // 💠 graphics
    // 💠 command line interface
    // 💠 graphical user interface
    // 💠 other
// #build
// #debug
// #after