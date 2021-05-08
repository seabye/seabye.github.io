#include"emscripten.h"
#include"_package/libwebp/src/webp/encode.h"
EMSCRIPTEN_KEEPALIVE
int version(){
  return WebPGetEncoderVersion();
}