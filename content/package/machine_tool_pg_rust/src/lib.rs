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
// build
#[pg_extern]
fn machinetool_pg_rust_uuid_blob(data:&str)->String{
  loop{
    let blob:std::string::String=blob_uuid::random_blob();
    if !blob.contains("_")&!blob.contains("-"){
      break blob;
    }
  }
}
#[pg_extern]
fn machinetool_pg_rust_table_data(data:&str)->String{
  std::fs::read_to_string(json::parse(data).unwrap()["path"].to_string()).expect("error")
}
#[pg_extern]
fn machinetool_pg_rust_router_post(data:&str)->String{
  // let data_:json::JsonValue=json::parse(data).unwrap();
  // let account:std::string::String=data_["account"].to_string();
  // let permission:std::string::String=data_["permission"].to_string();
  // let query:std::string::String=data_["query"].to_string();
  data.to_string()
}
#[pg_extern]
fn machinetool_pg_rust_router_delete(data:&str)->String{
  // let data:json::JsonValue=json::parse(data).unwrap();
  data.to_string()
}
#[pg_extern]
fn machinetool_pg_rust_router_get(data:&str)->String{
  // let data:json::JsonValue=json::parse(data).unwrap();
  data.to_string()
}
#[pg_extern]
fn machinetool_pg_rust_router_put(data:&str)->String{
  // let data:json::JsonValue=json::parse(data).unwrap();
  data.to_string()
}
#[pg_extern]
fn machinetool_pg_rust_router_patch(data:&str)->String{
  // let data:json::JsonValue=json::parse(data).unwrap();
  data.to_string()
}