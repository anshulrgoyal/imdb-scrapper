this is a simple imdb scrapper 


usage :
scrap any tv show like


```javascript

const {scrapper,awardsPage,getFull}=require('imdb-scrapper');


scrapper('tt1825683').then((movieDetails)=>{
    console.log(movieDetails)

})

```
```
{ title: 'Black Panther (2018)',
  runtime: '2h 14min',
  year: '2018',
  story: 'After the events of Captain America: Civil War, King Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his countrys new leader. However, Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.        ',
  director: 'Ryan Coogler',
  writer: 'Ryan Coogler',
  genre: [ ' Action ', ' Adventure ', ' Sci-Fi' ],
  rating: '7.8',
  poster: 'https://ia.media-imdb.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
  cast:
   [ { name: 'Chadwick Boseman',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Michael B. Jordan',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Lupita Nyong\'o',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Danai Gurira',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Martin Freeman',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Daniel Kaluuya',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Letitia Wright',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Winston Duke',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Sterling K. Brown',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Angela Bassett',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Forest Whitaker',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Andy Serkis',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Florence Kasumba',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'John Kani',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'David S. Lee',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' } ] }


```

```javascript

const {scrapper,awardsPage,getFull}=require('imdb-scrapper');

awardsPage('tt5580390').then((movieDetails)=>{
    console.log(movieDetails)

})
```

output:
```
{ Oscar:
   [ { category: 'Best Achievement in Directing',
       wonBy: 'Guillermo del Toro' },
     { category: 'Best Motion Picture of the Year',
       wonBy: 'Guillermo del Toro' },
     { category: 'Best Achievement in Music Written for Motion Pictures (Original Score)',
       wonBy: 'Alexandre Desplat' },
     { category: 'Best Achievement in Production Design',
       wonBy: 'Paul D. Austerberry' } ],
  'Golden Globe':
   [ { category: 'Best Director - Motion Picture',
       wonBy: 'Guillermo del Toro' },
     { category: 'Best Original Score - Motion Picture',
       wonBy: 'Alexandre Desplat' } ],
  'BAFTA Film Award':
   [ { category: 'Best Production Design',
       wonBy: 'Paul D. Austerberry' },
     { category: 'Original Music', wonBy: 'Alexandre Desplat' } ] }

```

```
javascript
const {scrapper,awardsPage,getFull}=require('imdb-scrapper');

getFull('tt2395427').then((movieDetails)=>{
    console.log(movieDetails)

})
```
output:
```
{ title: 'Avengers: Age of Ultron (2015)',
  runtime: '2h 21min',
  year: '2015',
  story: 'ony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, he Avengers go into action to try and defeat a virtually impossible enemy together. Earths mightiest heroes must come together once again to protect the world from global extinction.                Written byapplenatalia9            ',
  director: 'Joss Whedon',
  writer: 'Joss Whedon',
  genre: [ ' Action ', ' Adventure ', ' Sci-Fi' ],
  rating: '7.4',
  poster: 'https://ia.media-imdb.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
  cast:
   [ { name: 'Robert Downey Jr.',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Chris Hemsworth',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Mark Ruffalo',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Chris Evans',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Scarlett Johansson',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Jeremy Renner',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'James Spader',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Samuel L. Jackson',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Don Cheadle',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Aaron Taylor-Johnson',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Elizabeth Olsen',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Paul Bettany',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Cobie Smulders',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Anthony Mackie',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Hayley Atwell',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' } ],
  'Saturn Award':
   [ { category: 'Best Costume Design', wonBy: 'Alexandra Byrne' } ],
  Annie:
   [ { category: 'Outstanding Achievement in Animated Effects in a Live Action Production',
       wonBy: 'Michael Balog' } ],
  'AACTA Award':
   [ { category: 'Best Visual Effects or Animation',
       wonBy: 'Christopher Townsend' } ] }


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

npm install --save imdb-scrapper
```
user are suggested to use child_process.fork(),since scrapping is slow.
