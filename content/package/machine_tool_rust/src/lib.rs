// #[cfg(test)]
// mod tests {
//     #[test]
//     fn it_works() {
//         assert_eq!(2 + 2, 4);
//     }
// }

// #before
// #import
// #variable
// #block
// #build
// #debug
  // test
  #[cfg(test)]
  mod tests{
    #[test]
    fn it_works(){
      assert_eq!(2+2,4);
      assert_eq!(json::parse(r#"{"a":"a"}"#).unwrap()["a"],"a");
    }
  }
// #after