use nodejs_sys::{napi_create_function, napi_env, napi_value};
use std::ffi::CString;

mod episode;
mod request;
mod scrap;
mod scrapper;
mod types;

#[no_mangle]
pub unsafe extern "C" fn napi_register_module_v1(
    env: napi_env,
    m: napi_value,
) -> nodejs_sys::napi_value {
    let js = types::JsObject::create(m);
    let p = CString::new("scrap").expect("CString::new failed");
    let mut local: napi_value = std::mem::zeroed();
    napi_create_function(
        env,
        p.as_ptr(),
        5,
        Some(scrapper::scrap),
        std::ptr::null_mut(),
        &mut local,
    );
    js.set(env, "scrap", local);
    m
}
