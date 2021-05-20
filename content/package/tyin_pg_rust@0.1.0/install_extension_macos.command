cd $(dirname $0)
cp -r result/tyin_pg_rust.so $(echo $(pg_config --libdir)/postgresql)
cp -r result/tyin_pg_rust.control $(echo $(pg_config --sharedir)/extension)
cp -r result/tyin_pg_rust--1.0.sql $(echo $(pg_config --sharedir)/extension)
cp -r result/tyin_pg_rust--1.0.sql $(echo $(pg_config --sharedir)/extension)/tyin_pg_rust--1.0--1.1.sql
cp -r result/tyin_pg_rust--1.0.sql $(echo $(pg_config --sharedir)/extension)/tyin_pg_rust--1.1--1.0.sql