: https://www.rust-lang.org/tools/install

: https://forge.rust-lang.org/infra/other-installation-methods.html#other-ways-to-install-rustup

cd %~dp0
cargo build --release
: ..\target\release\work.exe
cp -r ..\target\release\work.exe result
result\work.exe