cd $(dirname $0)
cp -r target/release/machine_tool_pg_rust-pg13/usr/local/lib/postgresql/machine_tool_pg_rust.so $(echo $(pg_config --libdir)/postgresql)
cp -r target/release/machine_tool_pg_rust-pg13/usr/local/share/postgresql/extension/machine_tool_pg_rust.control $(echo $(pg_config --sharedir)/extension)
cp -r target/release/machine_tool_pg_rust-pg13/usr/local/share/postgresql/extension/machine_tool_pg_rust--1.0.sql $(echo $(pg_config --sharedir)/extension)