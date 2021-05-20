// use pgx::*;

// pg_module_magic!();

// #[pg_extern]
// fn hello_tyin_pg_rust() -> &'static str {
//     "Hello, tyin_pg_rust"
// }

// #[cfg(any(test, feature = "pg_test"))]
// mod tests {
//     use pgx::*;

//     #[pg_test]
//     fn test_hello_tyin_pg_rust() {
//         assert_eq!("Hello, tyin_pg_rust", crate::hello_tyin_pg_rust());
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

// #before
// #import
  // pgx
  use pgx::*;
  pg_module_magic!();
// #variable
// #block
  // block
  #[pg_extern]
  fn tyin_pg_rust_blob_uuid(data:&str)->String{
    loop{
      let blob=blob_uuid::random_blob();
      if !blob.contains("_")&!blob.contains("-"){
        break blob;
      }
    }
  }
  #[pg_extern]
  fn tyin_pg_rust_json_file(data:&str)->String{
    std::fs::read_to_string(json::parse(data).unwrap()["path"].to_string()).unwrap()
  }
  #[pg_extern]
  fn tyin_pg_rust_session_account(data:&str)->String{
    let data=json::parse(data).unwrap();
    let session_account=Spi::get_one::<&str>(format!(
      r#"select coalesce((select {} from {}.{} where {}='{}' and {}@>'{{"delete":null}}'),'no');"#,
      data["session_account_column"],
      data["session_schema"],
      data["session_table"],
      data["session_column"],
      data["session"],
      data["session_json_column"]
    ).as_str()).unwrap().to_string();
    if session_account=="no"{
      return session_account;
    }
    Spi::get_one::<&str>(format!(
      r#"select coalesce((select {} from {}.{} where {}='{}' and {}@>'{{"delete":null}}'),'no');"#,
      data["account_column"],
      data["account_schema"],
      data["account_table"],
      data["account_column"],
      session_account,
      data["account_json_column"]
    ).as_str()).unwrap().to_string()
  }
  #[pg_extern]
  fn tyin_pg_rust_account_permission(data:&str)->String{
    // let data=json::parse(data).unwrap();
    data.to_string()
  }
// #build
// #debug
// #after