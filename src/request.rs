use curl::easy::Easy;

pub fn get_data(url: String) -> Result<String, String> {
    let mut easy = Easy::new();
    match easy.url(url.as_str()) {
        Err(err) => return Err(err.to_string()),
        Ok(_) => (),
    };
    let mut v = vec![];
    {
        let mut tran = easy.transfer();
        match tran.write_function(|data| {
            v.extend_from_slice(data);
            Ok(data.len())
        }) {
            Err(err) => return Err(err.to_string()),
            Ok(_) => (),
        };
        match tran.perform() {
            Err(err) => return Err(err.to_string()),
            Ok(_) => (),
        };
    }
    let s = match std::str::from_utf8(v.as_slice()) {
        Ok(s) => s,
        Err(err) => return Err(err.to_string()),
    };
    Ok(s.to_owned())
}
