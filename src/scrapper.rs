use nodejs_sys::{
    napi_async_work, napi_callback_info, napi_create_async_work, napi_create_promise,
    napi_deferred, napi_delete_async_work, napi_env, napi_get_cb_info, napi_queue_async_work,
    napi_resolve_deferred, napi_status, napi_value,napi_reject_deferred,napi_create_error
};
use std::ffi::c_void;

use crate::{request, scrap, types};

// pub unsafe extern "C" fn add(env: napi_env, info: napi_callback_info) -> napi_value {
//     let mut buffer: Vec<napi_value> = Vec::with_capacity(2);
//     let p = buffer.as_mut_ptr();
//     let mut argc = 2 as usize;
//     std::mem::forget(buffer);
//     napi_get_cb_info(
//         env,
//         info,
//         &mut argc,
//         p,
//         std::ptr::null_mut(),
//         std::ptr::null_mut(),
//     );
//     let x = types::JsNumber::create(*p);
//     let i = x.get(env);
//     let y = types::JsNumber::create(*p.add(1));
//     let j = y.get(env);
//     types::JsNumber::new(env, i + j).to_raw()
// }

#[derive(Debug, Clone)]
struct Data {
    deferred: napi_deferred,
    work: napi_async_work,
    val: String,
    movie: Option<Result<scrap::MovieMeta,String>>,
}

pub unsafe extern "C" fn scrap(env: napi_env, info: napi_callback_info) -> napi_value {
    let mut buffer: Vec<napi_value> = Vec::with_capacity(1);
    let p = buffer.as_mut_ptr();
    let mut argc = 1 as usize;
    std::mem::forget(buffer);
    napi_get_cb_info(
        env,
        info,
        &mut argc,
        p,
        std::ptr::null_mut(),
        std::ptr::null_mut(),
    );
    let s = types::get_string(env, *p);
    let mut promise: napi_value = std::mem::zeroed();
    let mut deferred: napi_deferred = std::mem::zeroed();
    let mut work_name: napi_value = std::mem::zeroed();
    let mut work: napi_async_work = std::mem::zeroed();
    types::create_string(env, "Scrapper function", &mut work_name);
    napi_create_promise(env, &mut deferred, &mut promise);
    let v = Data {
        deferred,
        work,
        val: s,
        movie: None,
    };
    let data = Box::new(v);
    let raw = Box::into_raw(data);
    napi_create_async_work(
        env,
        std::ptr::null_mut(),
        work_name,
        Some(perform_task),
        Some(complete_task),
        std::mem::transmute(raw),
        &mut work,
    );
    napi_queue_async_work(env, work);
    (*raw).work = work;
    promise
}

pub unsafe extern "C" fn perform_task(_env: napi_env, data: *mut c_void) {
    let mut task: Box<Data> = Box::from_raw(std::mem::transmute(data));
    // let url = format!("https://www.imdb.com/title/{}/", task.val);
    // let s = match request::get_data(url){
    //     Ok(result)=>result,
    //     Err(err)=>{
    //         task.movie = Some(Err(err));
    //         Box::into_raw(task);
    //         return
    //     }
    // };
    // let data = match scrap::parse_movie_metadata(s.as_str()){
    //     Ok(result)=>result,
    //     Err(err)=>{
    //          task.movie = Some(Err(err));
    //         Box::into_raw(task);
    //         return
    //     }
    // };
    // task.movie = Some(Ok(data));
    Box::into_raw(task);
}

pub unsafe extern "C" fn complete_task(env: napi_env, _status: napi_status, data: *mut c_void) {
    let task: Box<Data> = Box::from_raw(std::mem::transmute(data));
    let v = match task.movie {
        Some(d) => match d{
            Ok(result)=>result,
            Err(err)=>{
            let mut js_error:napi_value=std::mem::zeroed();
            let s=napi_create_error(env,types::JsString::new(env,"100").to_raw(),types::JsString::new(env,&err).to_raw(),&mut js_error);
            // println!("{:?}", s);
            let s=napi_reject_deferred(env, task.deferred,js_error);
            // println!("{:?}", s);
            napi_delete_async_work(env, task.work);
            return;}
        },
        None =>{
            let mut js_error:napi_value=std::mem::zeroed();
            napi_create_error(env,types::JsNumber::new(env,100.0).to_raw(),types::JsString::new(env,"Error While performing task").to_raw(),&mut js_error);
            napi_reject_deferred(env, task.deferred,js_error);
            napi_delete_async_work(env, task.work);
            return;
        },
    };
    let obj = types::JsObject::new(env);
    let title = types::JsString::new(env, &v.title);
    let run_time = types::JsString::new(env, v.run_time.as_str());
    let year = types::JsNumber::new(env, v.year as f64);
    let plot = types::JsString::new(env, v.plot.as_str());
    let rating = types::JsNumber::new(env, v.rating as f64);
    let poster_img = types::JsString::new(env, v.poster_img.as_str());
    match v.seasons {
        Some(val) => {
            let js_num = types::JsNumber::new(env, val as f64);
            obj.set(env, "seasons", js_num.to_raw());
        }
        None => (),
    }
    match v.episodes {
        Some(val) => {
            let js_num = types::JsNumber::new(env, val.into());
            obj.set(env, "episodes", js_num.to_raw());
        }
        None => (),
    }

    let director = types::JsArray::new(env);
    for (i, direct) in v.director.iter().enumerate() {
        let js_string = types::JsString::new(env, direct);
        director.set(env, i as u32, js_string.to_raw());
    }

    let writer = types::JsArray::new(env);
    for (i, write) in v.writer.iter().enumerate() {
        let js_string = types::JsString::new(env, write);
        writer.set(env, i as u32, js_string.to_raw());
    }

    let actor = types::JsArray::new(env);
    for (i, act) in v.actor.iter().enumerate() {
        let js_string = types::JsString::new(env, act);
        actor.set(env, i as u32, js_string.to_raw());
    }

    let genre = types::JsArray::new(env);
    for (i, gen) in v.genre.iter().enumerate() {
        let js_string = types::JsString::new(env, gen);
        genre.set(env, i as u32, js_string.to_raw());
    }

    let related = types::JsArray::new(env);
    for (i, rel) in v.related.iter().enumerate() {
        match rel {
            Some(rel) => {
                let js_object = types::JsObject::new(env);
                let name = types::JsString::new(env, &rel.name);
                let poster = types::JsString::new(env, &rel.poster);
                let id = types::JsString::new(env, &rel.id);
                js_object.set(env, "name", name.to_raw());
                js_object.set(env, "poster", poster.to_raw());
                js_object.set(env, "id", id.to_raw());
                related.set(env, i as u32, js_object.to_raw());
            }
            None => (),
        }
    }
    obj.set(env, "title", title.to_raw());
    obj.set(env, "runTime", run_time.to_raw());
    obj.set(env, "year", year.to_raw());
    obj.set(env, "plot", plot.to_raw());
    obj.set(env, "director", director.to_raw());
    obj.set(env, "writer", writer.to_raw());
    obj.set(env, "actor", actor.to_raw());
    obj.set(env, "genre", genre.to_raw());
    obj.set(env, "rating", rating.to_raw());
    obj.set(env, "posterImg", poster_img.to_raw());
    obj.set(env, "related", related.to_raw());
    napi_resolve_deferred(env, task.deferred, obj.to_raw());

    napi_delete_async_work(env, task.work);
}
