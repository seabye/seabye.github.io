--
-- sql/lib.generated.sql
--
-- ./src/lib.rs:37:0
CREATE OR REPLACE FUNCTION "machine_tool_pg_rust_blob_uuid"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'machine_tool_pg_rust_blob_uuid_wrapper';
-- ./src/lib.rs:46:0
CREATE OR REPLACE FUNCTION "machine_tool_pg_rust_json_file"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'machine_tool_pg_rust_json_file_wrapper';
-- ./src/lib.rs:50:0
CREATE OR REPLACE FUNCTION "machine_tool_pg_rust_session_account"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'machine_tool_pg_rust_session_account_wrapper';
-- ./src/lib.rs:75:0
CREATE OR REPLACE FUNCTION "machine_tool_pg_rust_account_permission"("data" text) RETURNS text STRICT LANGUAGE c AS 'MODULE_PATHNAME', 'machine_tool_pg_rust_account_permission_wrapper';



