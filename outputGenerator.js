const {scrapper, getTrendingGenre, getTrending, search, getFull,
  getStarsByBornDay, getStarsBornToday, awardsPage, episodesPage, getCast,getActor,searchActor, simpleSearch}=require('./index');

const fs=require('fs');

if(!fs.existsSync(__dirname+'/output')){
  fs.mkdirSync(__dirname+'/output')
}
else{
  console.log("Please remove output file");
}
 function generateFile(name,value){
   fs.writeFileSync(__dirname+'/output/'+name+'.json',JSON.stringify(value,null,4))
 }

  getFull('tt2395427').then((movieDetails)=>{
      generateFile('getFull-tt2395427',movieDetails);
  })

  simpleSearch('flash').then((data)=>{
      generateFile('simpleSearch-flash',data);
  })

  getTrending(7).then((data)=>{
     generateFile('getTrending-7',data);
  })

  getTrendingGenre('comedy',7).then((data)=>{
    generateFile('getTrending-comedy-7',data);
  })

  awardsPage('tt2395427').then((movieDetails)=>{
      generateFile('awardsPage-tt5580390',movieDetails);

  })

  scrapper('tt1825683').then((movieDetails)=>{
    generateFile('scrapper-tt1825683',movieDetails);
  })

  search('new').then((result)=>{
    generateFile("search-'new world'",result)
  })

  getStarsByBornDay(new Date()).then((stars)=>{
    generateFile('getStarsByBornDay-'+new Date(),stars);
  })

  episodesPage('tt3107288',2).then((episodes)=>{
    generateFile('episodesPage',episodes);
  })
  getCast('tt1825683').then((movieDetails)=>{
    generateFile('getCast-tt1825683',movieDetails)
  })

  getActor('nm2652716').then((actorDetails)=>{
    generateFile('getActor-nm2652716',actorDetails)
  })

  searchActor('govinda').then((val)=>{
    generateFile('searchActor-govinda',val)
  })
