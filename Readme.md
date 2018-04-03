this is a simple imdb scrapper 


usage :
scrap any tv show like


```javascript

const {scrapper,awardsPage,getFull}=require('imdb-scrapper');


scrapper('tt4154756').then((movieDetails)=>{
  console.log(movieDetails)

})
```
```
output:
{ title: 'Avengers: Infinity War (2018)            ',
  story: '\nAs the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.                Written by\nMarvel Studios            ',
  director: 'Anthony Russo',
  writer: 'Christopher Markus',
  genre: [ ' Action ', ' Adventure ', ' Fantasy ', ' Sci-Fi' ],
  rating: '',
  poster: 'https://ia.media-imdb.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
  cast:
   [ { name: 'Karen Gillan',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Elizabeth Olsen',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Josh Brolin',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Scarlett Johansson',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Zoe Saldana',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Chris Evans',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Chris Hemsworth',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Sebastian Stan',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Robert Downey Jr.',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Linda Cardellini',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Chadwick Boseman',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Pom Klementieff',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Letitia Wright',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Tom Holland',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Tom Hiddleston',
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

getFull('tt5013056').then((movieDetails)=>{
    console.log(movieDetails)

})
```
output:
```
{ title: 'Dunkirk (2017)            ',
  story: '\nEvacuation of Allied soldiers from the British Empire, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II.                Written by\nHarvey            ',
  director: 'Christopher Nolan',
  writer: 'Christopher Nolan',
  genre: [ ' Action ', ' Drama ', ' History ', ' Thriller ', ' War' ],
  rating: '8.0',
  poster: 'https://ia.media-imdb.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
  cast:
   [ { name: 'Fionn Whitehead',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Damien Bonnard',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Aneurin Barnard',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Lee Armstrong',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'James Bloor',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Barry Keoghan',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Mark Rylance',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Tom Glynn-Carney',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Tom Hardy',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Jack Lowden',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Luke Thompson',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Michel Biel',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Constantin Balsan',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Billy Howle',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' },
     { name: 'Mikey Collins',
       image: 'https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB499603809_.png' } ],
  Oscar:
   [ { category: 'Best Achievement in Film Editing',
       wonBy: 'Lee Smith' },
     { category: 'Best Achievement in Sound Editing',
       wonBy: 'Richard King' },
     { category: 'Best Achievement in Sound Mixing',
       wonBy: 'Gregg Landaker' } ],
  'Golden Globe':
   [ { category: 'Best Motion Picture - Drama', wonBy: '' },
     { category: 'Best Director - Motion Picture',
       wonBy: 'Christopher Nolan' },
     { category: 'Best Original Score - Motion Picture',
       wonBy: 'Hans Zimmer' } ],
  'BAFTA Film Award': [ { category: 'Best Sound', wonBy: 'Richard King' } ] }

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
