: https://rustwasm.github.io/wasm-pack/installer/

: cargo install wasm-pack

cd %~dp0
wasm-pack build --release --target web
: cd pkg
: del .gitignore
cp -r pkg/machine_tool_wasm_rust_bg.wasm result
cp -r pkg/machine_tool_wasm_rust.js result