: https://rustwasm.github.io/wasm-pack/installer/

: cargo install wasm-pack

cd %~dp0
wasm-pack build --release --target web
cd pkg
del .gitignore