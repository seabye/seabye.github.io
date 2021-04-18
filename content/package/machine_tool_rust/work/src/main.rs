// fn main() {
//     println!("Hello, world!");
// }

// #### start
fn main(){
  println!("Hello, world!");
  let data=json::parse(r#"{"a":"a"}"#).unwrap();
  println!("{}",data["a"]);
}