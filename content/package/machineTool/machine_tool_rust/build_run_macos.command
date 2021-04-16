# https://www.rust-lang.org/tools/install

# curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

cd $(dirname $0)
cargo build --release
./target/release/machine_tool_rust