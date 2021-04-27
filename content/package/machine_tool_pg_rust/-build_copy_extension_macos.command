cd $(dirname $0)
cargo pgx package
cp -r target/release/machine_tool_pg_rust-pg13/usr/local/lib/postgresql/machine_tool_pg_rust.so result
cp -r target/release/machine_tool_pg_rust-pg13/usr/local/share/postgresql/extension/machine_tool_pg_rust.control result
cp -r target/release/machine_tool_pg_rust-pg13/usr/local/share/postgresql/extension/machine_tool_pg_rust--1.0.sql result