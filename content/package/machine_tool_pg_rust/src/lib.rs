// use pgx::*;

// pg_module_magic!();

// #[pg_extern]
// fn hello_machine_tool_pg_rust() -> &'static str {
//     "Hello, machine_tool_pg_rust"
// }

// #[cfg(any(test, feature = "pg_test"))]
// mod tests {
//     use pgx::*;

//     #[pg_test]
//     fn test_hello_machine_tool_pg_rust() {
//         assert_eq!("Hello, machine_tool_pg_rust", crate::hello_machine_tool_pg_rust());
//     }

// }

// #[cfg(test)]
// pub mod pg_test {
//     pub fn setup(_options: Vec<&str>) {
//         // perform one-off initialization when the pg_test framework starts
//     }

//     pub fn postgresql_conf_options() -> Vec<&'static str> {
//         // return any postgresql.conf settings that are required for your tests
//         vec![]
//     }
// }

// #### start
use pgx::*;
pg_module_magic!();
#[pg_extern]
fn machinetool_pg_rust_uuid_blob()->String{
  loop{
    let blob=blob_uuid::random_blob();
    if !blob.contains("_")&!blob.contains("-"){
      break blob;
    }
  }
}
#[pg_extern]
fn machinetool_pg_rust_table_data()->String{
  r#"{"a":"a","b":"b","c":"c"}"#.to_string()
}