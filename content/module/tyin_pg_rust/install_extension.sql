-- install
-- select * from pg_available_extension_versions where name='tyin_pg_rust';
do $$
  begin
    if not exists(select version from pg_available_extension_versions where name='tyin_pg_rust' and version='1.0' and installed='true') then
      create extension tyin_pg_rust schema pg_catalog;
    else
      alter extension tyin_pg_rust update to '1.1';
      alter extension tyin_pg_rust update to '1.0';
    end if;
  end;
$$;