: https://www.rust-lang.org/tools/install

: https://forge.rust-lang.org/infra/other-installation-methods.html#other-ways-to-install-rustup

cd %~dp0
cargo build --release
.\target\debug\machine_tool_rust.exe