// #before
// #import
  //
  #include"emscripten.h"
  //
  #include"_package/libwebp/src/webp/encode.h"
// #variable
// #block
// tyin
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
  // 💠 w3daze
  // 💠 unknown
// #build
// #debug
// #after