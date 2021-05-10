// #[cfg(test)]
// mod tests {
//     #[test]
//     fn it_works() {
//         assert_eq!(2 + 2, 4);
//     }
// }

// #before
// #import
  // base
  use wasm_bindgen::prelude::*;
  // use image::GenericImageView;
  #[wasm_bindgen]
// #variable
// #block
  // tyin
    // 💠 base
      /*🟢*/
      pub fn test()->String{
        "test echo".to_string()
      }
    // 💠 local data
    // 💠 network data
    // 💠 application programming interface
    // 💠 graphics
      // /*🟢*/
      // pub fn image_data_url_to_webp_data_url(image_data_url:String)->String{
      //   let re:regex::Regex=regex::Regex::new(r"^data:image/.+;base64,(.+)").unwrap();
      //   let mut base64_="".to_string();
      //   for cap in re.captures_iter(&image_data_url){
      //     base64_=cap[1].to_string();
      //   }
      //   // println!("{}",base64_);
      //   // let image=image::open(image_data_url).unwrap();
      //   let image=image::load_from_memory(&base64::decode(&base64_).unwrap()[..]).unwrap();
      //   // println!("{:?}",image.dimensions());
      //   // println!("{:?}",image.color());
      //   let result=webp::Encoder::from_image(&image).encode_lossless().to_vec();
      //   // println!("{}",base64::encode(&result));
      //   format!("{}{}","data:image/webp;base64,".to_string(),base64::encode(&result))
      // }
    // 💠 command line interface
    // 💠 graphical user interface
    // 💠 w3daze
    // 💠 unknown
// #build
// #debug
  // test
  #[cfg(test)]
  mod tests{
    #[test]
    fn it_works(){
      assert_eq!(2+2,4);
    }
  }
// #after