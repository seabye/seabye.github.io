--
-- sql/lib.generated.sql
--
-- ./src/lib.rs:41:2
CREATE OR REPLACE FUNCTION "tyin_pg_rust_blob_uuid"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'tyin_pg_rust_blob_uuid_wrapper';
-- ./src/lib.rs:50:2
CREATE OR REPLACE FUNCTION "tyin_pg_rust_json_file"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'tyin_pg_rust_json_file_wrapper';
-- ./src/lib.rs:54:2
CREATE OR REPLACE FUNCTION "tyin_pg_rust_session_account"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'tyin_pg_rust_session_account_wrapper';
-- ./src/lib.rs:79:2
CREATE OR REPLACE FUNCTION "tyin_pg_rust_account_permission"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'tyin_pg_rust_account_permission_wrapper';



