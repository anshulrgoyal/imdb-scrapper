use nodejs_sys::{
    napi_create_array, napi_create_double, napi_create_object, napi_create_string_utf8,
    napi_delete_element, napi_env, napi_get_element, napi_get_value_double,
    napi_get_value_string_utf8, napi_has_element, napi_set_element, napi_set_named_property,
    napi_status, napi_value,
};
use std::ffi::CString;

pub fn create_string(env: napi_env, s: &str, local: &mut napi_value) -> napi_status {
    let p = CString::new(s).expect("CString::new failed");
    unsafe {
        let status = napi_create_string_utf8(env, p.as_ptr(), s.len(), local);
        return status;
    }
}

pub unsafe fn get_string(env: napi_env, val: napi_value) -> String {
    let mut len = std::mem::MaybeUninit::uninit();
    napi_get_value_string_utf8(env, val, std::ptr::null_mut(), 0, len.as_mut_ptr());
    let size = len.assume_init() as usize;
    let mut ve: Vec<u8> = Vec::with_capacity(size + 1);
    let raw = ve.as_mut_ptr();
    std::mem::forget(ve);
    let mut cap = std::mem::MaybeUninit::uninit();
    let _s = napi_get_value_string_utf8(env, val, raw as *mut i8, size + 1, cap.as_mut_ptr());
    String::from_raw_parts(raw, cap.assume_init(), size)
}

pub struct JsObject(napi_value);

impl JsObject {
    pub fn new(env: napi_env) -> Self {
        unsafe {
            let mut obj: napi_value = std::mem::zeroed();
            napi_create_object(env, &mut obj);
            Self(obj)
        }
    }

    pub fn set(&self, env: napi_env, key: &str, value: napi_value) -> napi_status {
        let p = CString::new(key).expect("CString::new failed");
        unsafe { return napi_set_named_property(env, self.0, p.as_ptr(), value) }
    }

    pub fn create(val: napi_value) -> Self {
        JsObject(val)
    }

    pub fn to_raw(&self) -> napi_value {
        self.0
    }
}

pub struct JsNumber(napi_value);
impl JsNumber {
    pub fn get(&self, env: napi_env) -> f64 {
        let mut val = 0 as f64;
        unsafe { napi_get_value_double(env, self.0, &mut val) };
        val
    }

    pub fn create(val: napi_value) -> Self {
        Self(val)
    }

    pub fn new(env: napi_env, val: f64) -> Self {
        unsafe {
            let mut local: napi_value = std::mem::zeroed();
            napi_create_double(env, val, &mut local);
            Self(local)
        }
    }

    pub fn to_raw(&self) -> napi_value {
        self.0
    }
}

pub struct JsArray(napi_value);

impl JsArray {
    pub fn new(env: napi_env) -> Self {
        unsafe {
            let mut local: napi_value = std::mem::zeroed();
            napi_create_array(env, &mut local);
            Self(local)
        }
    }

    pub fn create(val: napi_value) -> Self {
        Self(val)
    }

    pub fn set(&self, env: napi_env, key: u32, val: napi_value) {
        unsafe {
            napi_set_element(env, self.0, key, val);
        }
    }

    pub fn has(&self, env: napi_env, key: u32) -> bool {
        let mut out = false;
        unsafe {
            napi_has_element(env, self.0, key, &mut out);
        }
        out
    }
    pub fn delete(&self, env: napi_env, key: u32) -> bool {
        let mut out = false;
        unsafe {
            napi_delete_element(env, self.0, key, &mut out);
        }
        out
    }
    pub fn get(&self, env: napi_env, key: u32) -> napi_value {
        unsafe {
            let mut out = std::mem::zeroed();
            napi_get_element(env, self.0, key, &mut out);
            out
        }
    }
    pub fn to_raw(&self) -> napi_value {
        self.0
    }
}

#[derive(Debug)]
pub struct JsString(napi_value);

impl JsString {
    pub fn get(&self, env: napi_env) -> String {
        let size = self.len(env);
        let mut ve: Vec<u8> = Vec::with_capacity(size + 1);
        let raw = ve.as_mut_ptr();
        std::mem::forget(ve);
        let mut cap = std::mem::MaybeUninit::uninit();
        unsafe {
            napi_get_value_string_utf8(env, self.0, raw as *mut i8, size + 1, cap.as_mut_ptr());
            String::from_raw_parts(raw, cap.assume_init(), size)
        }
    }

    pub fn len(&self, env: napi_env) -> usize {
        let mut len = std::mem::MaybeUninit::uninit();
        unsafe {
            napi_get_value_string_utf8(env, self.0, std::ptr::null_mut(), 0, len.as_mut_ptr());
            len.assume_init() as usize
        }
    }

    pub fn new(env: napi_env, s: &str) -> Self {
        let p = CString::new(s).expect("CString::new failed");
        unsafe {
            let mut local: napi_value = std::mem::zeroed();
            let _status = napi_create_string_utf8(env, p.as_ptr(), s.len(), &mut local);
            Self(local)
        }
    }
    pub fn to_raw(&self) -> napi_value {
        self.0
    }
}
