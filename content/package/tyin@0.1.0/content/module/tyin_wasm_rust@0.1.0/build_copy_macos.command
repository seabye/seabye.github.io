# https://rustwasm.github.io/wasm-pack/installer/

# cargo install wasm-pack

cd $(dirname $0)
wasm-pack build --release --target web
# rm pkg/.gitignore
cp -r pkg/tyin_wasm_rust_bg.wasm result
cp -r pkg/tyin_wasm_rust.js result