this is a simple imdb scrapper 


usage :
scrap any tv show like

`code()`

```javascript

const {scrapper}=require('imdb-scrapper');


scrapper('tt4154756').then((movieDetails)=>{
  console.log(movieDetails)

})
```


# it also provide a api for getting trending based on genre and global trending;

eg :
```javascript
const {getTrendingGenre,getTrending}=require('imdb-scrapper');

getTrendingGenre('action').then((list)=>{
 console.log(list) //gives trending based on genre

})
getTrending().then((list)=>{
 console.log(list) // give global trending

})

```
# new

search feature added:
eg:


```javascript

const {search}=require('imdb-scrapper');

search('flash',6).then((result)=>{
 console.log(result) // give 6 result related to word flash
})
```

to install :
```
npm

npm install --save imdb-scrapper
```
user are suggested to use child_process.fork(),since scrapping is slow.
