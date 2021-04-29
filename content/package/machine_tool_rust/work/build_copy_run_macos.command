cd $(dirname $0)
cargo build --release
# ../target/release/work
cp -r ../target/release/work result
result/work