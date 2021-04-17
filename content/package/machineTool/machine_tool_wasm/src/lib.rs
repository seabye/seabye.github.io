// #[cfg(test)]
// mod tests {
//     #[test]
//     fn it_works() {
//         assert_eq!(2 + 2, 4);
//     }
// }

// #### start
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn machine_tool_wasm_test(a:u32,b:u32)->u32{
  a+b
}