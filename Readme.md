<a href="https://codeclimate.com/github/anshulgoyal15/imdb-scrapper/maintainability"><img src="https://api.codeclimate.com/v1/badges/bc6194d22404dbf244c3/maintainability" /></a>
#this is a simple imdb scrapper


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
  'Saturn Award':
   [ { category: 'Best Costume Design', wonBy: 'Alexandra Byrne' } ],
  Annie:
   [ { category: 'Outstanding Achievement in Animated Effects in a Live Action Production',
       wonBy: 'Michael Balog' } ],
  'AACTA Award':
   [ { category: 'Best Visual Effects or Animation',
       wonBy: 'Christopher Townsend' } ],
  cast:
   [ { name: 'Robert Downey Jr.',
       image: 'https://ia.media-imdb.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Tony Stark/Iron Man' },
     { name: 'Chris Hemsworth',
       image: 'https://ia.media-imdb.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Thor' },
     { name: 'Mark Ruffalo',
       image: 'https://ia.media-imdb.com/images/M/MV5BNDQyNzMzZTMtYjlkNS00YzFhLWFhMTctY2M4YmQ1NmRhODBkXkEyXkFqcGdeQXVyNjcyNzgyOTE@._V1_UY109_CR6,0,75,109_AL_.jpg',
       role: 'Bruce Banner/Hulk' },
     { name: 'Chris Evans',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY109_CR1,0,75,109_AL_.jpg',
       role: 'Steve Rogers/Captain America' },
     { name: 'Scarlett Johansson',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY109_CR7,0,75,109_AL_.jpg',
       role: 'Natasha Romanoff/Black Widow' },
     { name: 'Jeremy Renner',
       image: 'https://ia.media-imdb.com/images/M/MV5BOTk2NDc2ODgzMF5BMl5BanBnXkFtZTcwMTMzOTQ4Nw@@._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Clint Barton/Hawkeye' },
     { name: 'James Spader',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTQ3MTQ5NjY5Ml5BMl5BanBnXkFtZTgwMTY0NzU5MDE@._V1_UY109_CR4,0,75,109_AL_.jpg',
       role: 'Ultron' },
     { name: 'Samuel L. Jackson',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Nick Fury' },
     { name: 'Don Cheadle',
       image: 'https://ia.media-imdb.com/images/M/MV5BNDMxNDM3MzY5N15BMl5BanBnXkFtZTcwMjkzOTY4MQ@@._V1_UY109_CR5,0,75,109_AL_.jpg',
       role: 'James Rhodes/War Machine' },
     { name: 'Aaron Taylor-Johnson',
       image: 'https://ia.media-imdb.com/images/M/MV5BMzE5MzI0MzY2OF5BMl5BanBnXkFtZTgwODE3MTk4MTE@._V1_UY109_CR4,0,75,109_AL_.jpg',
       role: 'Pietro Maximoff/Quicksilver' },
     { name: 'Elizabeth Olsen',
       image: 'https://ia.media-imdb.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY109_CR1,0,75,109_AL_.jpg',
       role: 'Wanda Maximoff/Scarlet Witch' },
     { name: 'Paul Bettany',
       image: 'https://ia.media-imdb.com/images/M/MV5BMjEwODg1MTA5Ml5BMl5BanBnXkFtZTcwNDQwMTQxMw@@._V1_UY109_CR3,0,75,109_AL_.jpg',
       role: 'Jarvis/Vision' },
     { name: 'Cobie Smulders',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTkzNTUyMTczM15BMl5BanBnXkFtZTcwMjMxNTM4Nw@@._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Maria Hill' },
     { name: 'Anthony Mackie',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTk3NTM1MjE2M15BMl5BanBnXkFtZTcwNzc5OTI2Mg@@._V1_UY109_CR5,0,75,109_AL_.jpg',
       role: 'Sam Wilson/Falcon' },
     { name: 'Hayley Atwell',
       image: 'https://ia.media-imdb.com/images/M/MV5BMjQ1OTkyOTA3MV5BMl5BanBnXkFtZTgwNzQ4MzE5ODE@._V1_UY109_CR3,0,75,109_AL_.jpg',
       role: 'Peggy Carter' },
     { name: 'Idris Elba',
       image: 'https://ia.media-imdb.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Heimdall' },
     { name: 'Linda Cardellini',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTQ2MDM4MTM2NF5BMl5BanBnXkFtZTgwMTM4MjYyMDE@._V1_UY109_CR2,0,75,109_AL_.jpg',
       role: 'Laura Barton' },
     { name: 'Stellan Skarsgård',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTg4NDUzOTY0N15BMl5BanBnXkFtZTYwNjYxODE0._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Erik Selvig' },
     { name: 'Claudia Kim',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTcyMzgxNTM4N15BMl5BanBnXkFtZTgwMjY1ODk4MzE@._V1_UX75_CR0,0,75,109_AL_.jpg',
       role: 'Dr. Helen Cho' },
     { name: 'Thomas Kretschmann',
       image: 'https://ia.media-imdb.com/images/M/MV5BMTY1Njc5MzE1OF5BMl5BanBnXkFtZTcwMTc1NDM4Nw@@._V1_UY109_CR0,0,75,109_AL_.jpg',
       role: 'Strucker' } ] }

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
