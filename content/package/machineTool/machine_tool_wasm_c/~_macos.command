# https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm
# https://emscripten.org

cd $(dirname $0)
mkdir _package
cd _package
git clone https://github.com/webmproject/libwebp
cd ..