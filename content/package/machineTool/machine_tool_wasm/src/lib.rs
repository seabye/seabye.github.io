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
// pub fn add(a:u32,b:u32)->u32{
//   a+b
// }
// uuid
// #[derive(Debug)]
// pub enum ConvertError{
//   UuidError(uuid::Error),
//   FromBase64Error(base64::DecodeError)
// }
// pub fn uuid_get_uuid()->uuid::Uuid{
//   uuid::Uuid::new_v4()
// }
// pub fn uuid_get_blob()->String{
//   let uuid=uuid::Uuid::new_v4();
//   uuid_to_blob(&uuid)
// }
// pub fn uuid_to_blob(uuid:&uuid::Uuid)->String{
//   base64::encode_config(uuid.as_bytes(),base64::URL_SAFE_NO_PAD)
// }
pub fn uuid_to_blob(uuid:&str)->String{
  base64::encode_config(uuid.to_string().as_bytes(),base64::URL_SAFE_NO_PAD)
}
// pub fn blob_to_uuid(blob:&str)->Result<uuid::Uuid,ConvertError>{
//   match base64::decode_config(blob,base64::URL_SAFE_NO_PAD){
//     Ok(bytes)=>match uuid::Uuid::from_slice(&bytes){
//       Ok(uuid)=>Ok(uuid),
//       Err(error)=>Err(ConvertError::UuidError(error))
//     },
//     Err(error)=>Err(ConvertError::FromBase64Error(error))
//   }
// }
// pub fn blob_to_uuid(blob:&str)->Result<x:u8,base64::DecodeError>{
//   // base64::decode_config(blob,base64::URL_SAFE_NO_PAD)
//   match base64::decode_config(blob,base64::URL_SAFE_NO_PAD){
//     Ok(bytes)=>match uuid::Uuid::from_slice(&bytes){
//       Ok(uuid)=>Ok(uuid),
//       Err(error)=>Err(base64::DecodeError::UuidError(error))
//     },
//     Err(error)=>Err(base64::DecodeError(error))
//   }
// }