# https://rustwasm.github.io/wasm-pack/installer/

# cargo install wasm-pack

cd $(dirname $0)
wasm-pack build --release --target web
rm pkg/.gitignore