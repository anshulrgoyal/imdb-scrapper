const { native_scrap,native_episode}=require("../native");

/**
 * Scrap Basic information about the movie using `id`
 * @param id {String} movie id
 * @returns {Promise<Object>}
 */
function scrap(id){
	return new Promise((resolve,reject)=>{
		native_scrap(id,(error,data)=>{
			if(error) reject(error);
			else resolve(data);
		})
	})
}

/**
 * Scrap the episodes from the imdb
 * @param id {String} title of tv show
 * @param season {Number} [default=1] the season number
 * @returns {Promise<Object>}
 */
function episode(id,season=1){
	const t=Date.now();
	return new Promise((resolve,reject)=>{
		native_episode(id,season,(error,data)=>{
			if (error) reject(error);
			else  resolve(data);
			console.log(Date.now()-t);
		})
	})
}

module.exports = {
	scrap,
	episode,
};