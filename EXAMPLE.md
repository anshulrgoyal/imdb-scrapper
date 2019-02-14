
  ## simpleSearch(flash)
  ```javascript
  simpleSearch(flash).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "v": 1,
  "q": "flash",
  "d": [
    {
      "l": "The Flash",
      "id": "tt3107288",
      "s": "Grant Gustin, Candice Patton",
      "y": 2014,
      "yr": "2014-",
      "q": "TV series",
      "vt": 30,
      "i": [
        "https://m.media-amazon.com/images/M/MV5BMjI1MDAwNDM4OV5BMl5BanBnXkFtZTgwNjUwNDIxNjM@._V1_.jpg",
        960,
        1200
      ],
      "v": [
        {
          "l": "Official Promo",
          "id": "vi2312747545",
          "s": "0:31",
          "i": [
            "https://m.media-amazon.com/images/M/MV5BNmM2YWRmOTctZWZjOC00ZTIxLWI1YWMtZTgzNmI5NzNmMDg0XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
            1920,
            1080
          ]
        },
        {
          "l": "\"Elseworlds\" | Batwoman Teaser",
          "id": "vi198883865",
          "s": "0:21",
          "i": [
            "https://m.media-amazon.com/images/M/MV5BZTI1OWJhNzQtZGM3NC00MDVmLTljNWMtNzkxZDk0ZmRkM2VkXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg",
            1920,
            1080
          ]
        },
        {
          "l": "Comic-Con 2018 Trailer",
          "id": "vi701348633",
          "s": "2:42",
          "i": [
            "https://m.media-amazon.com/images/M/MV5BMWM3NTQ2NjMtOGQ2OS00YWE1LWFhZGQtNDgwN2RmYzQ0YWQ5XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
            1920,
            1080
          ]
        }
      ]
    },
    {
      "l": "Flash Gordon",
      "id": "tt0080745",
      "s": "Sam J. Jones, Melody Anderson",
      "y": 1980,
      "q": "feature",
      "vt": 1,
      "i": [
        "https://m.media-amazon.com/images/M/MV5BN2Y4ZDBjMjEtZWQ0OS00NzYyLTg0M2ItMmUzYTEwN2RmMGVlXkEyXkFqcGdeQXVyMjgyOTI1ODY@._V1_.jpg",
        1944,
        2988
      ]
    },
    {
      "l": "The Flash",
      "id": "tt0098798",
      "s": "John Wesley Shipp, Amanda Pays",
      "y": 1990,
      "yr": "1990-1991",
      "q": "TV series",
      "i": [
        "https://m.media-amazon.com/images/M/MV5BMTQ2MTc0MTAtN2VlYi00N2ZkLTlhNmUtMjcyZDg0YzNiYjEyXkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_.jpg",
        680,
        1000
      ]
    },
    {
      "l": "Flash",
      "id": "tt0136199",
      "s": "Lucas Black, Brian Kerwin",
      "y": 1997,
      "q": "TV episode",
      "i": [
        "https://m.media-amazon.com/images/M/MV5BMTkwNzY4Mzg5N15BMl5BanBnXkFtZTcwNzE4MzEyMQ@@._V1_.jpg",
        286,
        475
      ]
    },
    {
      "l": "Jumpin' Jack Flash",
      "id": "tt0091306",
      "s": "Whoopi Goldberg, Stephen Collins",
      "y": 1986,
      "q": "feature",
      "i": [
        "https://m.media-amazon.com/images/M/MV5BMDJmYjMxODgtZjgwMi00N2E0LWE0N2UtMzhjMmJkNGZiNDNhXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
        500,
        766
      ]
    },
    {
      "l": "Ricki and the Flash",
      "id": "tt3623726",
      "s": "Meryl Streep, Kevin Kline",
      "y": 2015,
      "q": "feature",
      "i": [
        "https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg",
        1382,
        2048
      ]
    },
    {
      "l": "Flash Gordon",
      "id": "tt0959086",
      "s": "Eric Johnson, Gina Holden",
      "y": 2007,
      "yr": "2007-2008",
      "q": "TV series",
      "i": [
        "https://m.media-amazon.com/images/M/MV5BMTY2Njc1MTgyNV5BMl5BanBnXkFtZTcwODYwNTI1MQ@@._V1_.jpg",
        429,
        600
      ]
    },
    {
      "l": "Flash Forward",
      "id": "tt0115173",
      "s": "Ben Foster, Jewel Staite",
      "y": 1995,
      "yr": "1995-1997",
      "q": "TV series",
      "i": [
        "https://m.media-amazon.com/images/M/MV5BYjM4YWE5ZmEtY2VkNC00ODYwLWIxOTgtNmI5ZmVkOTIzOWFiXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg",
        947,
        1000
      ]
    }
  ]
}
  ```
    

  ## search('new world')
  ```javascript
  search('new world').then(val=>console.log(val))
  ```
  ### output
   ```json
   []
  ```
    

  ## awardsPage(tt5580390)
  ```javascript
  awardsPage(tt5580390).then(val=>console.log(val))
  ```
  ### output
   ```json
   [
  {
    "name": "Saturn Award",
    "winner": [
      {
        "category": "Best Costume Design",
        "wonBy": "Alexandra Byrne"
      }
    ]
  },
  {
    "name": "Annie",
    "winner": [
      {
        "category": "Outstanding Achievement in Animated Effects in a Live Action Production",
        "wonBy": "Michael Balog"
      }
    ]
  },
  {
    "name": "AACTA Award",
    "winner": [
      {
        "category": "Best Visual Effects or Animation",
        "wonBy": "Christopher Townsend"
      }
    ]
  }
]
  ```
    

  ## searchActor(govinda)
  ```javascript
  searchActor(govinda).then(val=>console.log(val))
  ```
  ### output
   ```json
   [
  {
    "searchQuery": "govinda"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/M/MV5BNzEwNDgwMTk3Nl5BMl5BanBnXkFtZTgwNjMwOTU4MDI@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda",
    "actorId": "nm0332871"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB470041625_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Shree Krishna",
    "actorId": "nm10191142"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB470041625_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda",
    "actorId": "nm7678583"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB470041625_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda Angulo",
    "actorId": "nm5291179"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/M/MV5BMDkwOGNiMDYtZDBhMy00NWY0LWExYmQtZDgyNzViMDI2ZTIxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govindan Aravindan",
    "actorId": "nm0033244"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB470041625_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda Van Maele",
    "actorId": "nm1985352"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB470041625_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "R. Govindaraj",
    "actorId": "nm5407632"
  }
]
  ```
    

  ## getUpcoming(20)
  ```javascript
  getUpcoming(20).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "upcoming": [
    {
      "name": "Fighting with My Family",
      "id": "tt6513120"
    },
    {
      "name": "The Divorce Party",
      "id": "tt3699702"
    },
    {
      "name": "Donnybrook",
      "id": "tt7087210"
    },
    {
      "name": "How to Train Your Dragon: The Hidden World",
      "id": "tt2386490"
    },
    {
      "name": "Trading Paint",
      "id": "tt7052494"
    },
    {
      "name": "Total Dhamaal",
      "id": "tt7639372"
    },
    {
      "name": "Run the Race",
      "id": "tt3201736"
    },
    {
      "name": "O.G.",
      "id": "tt7897102"
    },
    {
      "name": "Climax",
      "id": "tt8359848"
    },
    {
      "name": "Greta",
      "id": "tt2639336"
    },
    {
      "name": "A Madea Family Funeral",
      "id": "tt7054636"
    },
    {
      "name": "We Die Young",
      "id": "tt7903530"
    },
    {
      "name": "The Wedding Guest",
      "id": "tt7645780"
    },
    {
      "name": "The Boy Who Harnessed the Wind",
      "id": "tt7533152"
    },
    {
      "name": "Apollo 11",
      "id": "tt8760684"
    },
    {
      "name": "Transit",
      "id": "tt6675244"
    },
    {
      "name": "Giant Little Ones",
      "id": "tt4481066"
    },
    {
      "name": "Among the Shadows",
      "id": "tt5206770"
    },
    {
      "name": "Captain Marvel",
      "id": "tt4154664"
    },
    {
      "name": "I'm Not Here",
      "id": "tt5657712"
    }
  ]
}
  ```
    

  ## getTrending(comedy,7)
  ```javascript
  getTrending(comedy,7).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "trending": [
    {
      "name": "Russian Doll",
      "poster": "https://m.media-amazon.com/images/M/MV5BYmViMjdhZmQtODIyZi00Mzc4LWFhNTItOTk4NGM1NGU0ZDZjXkEyXkFqcGdeQXVyNjc2NTQzMjU@._V1_QL50.jpg",
      "id": "tt7520794"
    },
    {
      "name": "Sex Education",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_QL50.jpg",
      "id": "tt7767422"
    },
    {
      "name": "Green Book",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNzExNzQ5OV5BMl5BanBnXkFtZTgwNjM2MjIxNjM@._V1_QL50.jpg",
      "id": "tt6966692"
    },
    {
      "name": "The Favourite",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTg1NzQwMDQxNV5BMl5BanBnXkFtZTgwNDg2NDYyNjM@._V1_QL50.jpg",
      "id": "tt5083738"
    },
    {
      "name": "Incredibles 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_UX67_CR0,0,67,98_AL_.jpg@._V1_QL50.jpg",
      "id": "tt3606756"
    },
    {
      "name": "The Lego Movie 2: The Second Part",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTkyOTkwNDc1N15BMl5BanBnXkFtZTgwNzkyMzk3NjM@._V1_QL50.jpg",
      "id": "tt3513498"
    },
    {
      "name": "How to Train Your Dragon: The Hidden World",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_QL50.jpg",
      "id": "tt2386490"
    }
  ]
}
  ```
    

  ## getActor(nm2652716)
  ```javascript
  getActor(nm2652716).then(val=>console.log(val))
  ```
  ### output
   ```json
   [
  {
    "actorName": "Grant Gustin",
    "actorImage": "https://m.media-amazon.com/images/M/MV5BMjE3NDUyMTg1MF5BMl5BanBnXkFtZTgwMTQzMjY1NjM@._V1_UY317_CR11,0,214,317_AL__QL50.jpg",
    "actorInfo": "Thomas Grant Gustin was born on January 14, 1990 in Norfolk, Virginia, to Tina Lynne (Sweeney), a pediatric nurse, and Thomas Avery Gustin. In 2008, he graduated from Granby High School and went on to attend the BFA Music Theatre Program at Elon University in North Carolina for two years. He left school to take the role of Baby John in the",
    "actorBirth": "January 14, 1990",
    "actorBorn": "Norfolk, Virginia, USA"
  }
]
  ```
    

  ## scrapper(tt1825683)
  ```javascript
  scrapper(tt1825683).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "title": "Black Panther (2018)",
  "runtime": "2h 14min",
  "year": "2018",
  "story": "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.",
  "director": [
    "Ryan Coogler"
  ],
  "writers": [
    "Ryan Coogler",
    "Joe Robert Cole"
  ],
  "stars": [
    "Chadwick Boseman",
    "Michael B. Jordan",
    "Lupita Nyong'o"
  ],
  "genre": [
    "Action",
    "Adventure",
    "Sci-Fi"
  ],
  "rating": "7.4",
  "poster": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL50.jpg",
  "related": [
    {
      "id": "tt4154756",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Avengers: Infinity War"
    },
    {
      "id": "tt3501632",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Thor: Ragnarok"
    },
    {
      "id": "tt2250912",
      "poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX128_CR0,0,128,190_AL_.jpg",
      "name": "Spider-Man: Homecoming"
    },
    {
      "id": "tt3896198",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Guardians of the Galaxy Vol. 2"
    },
    {
      "id": "tt5463162",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_UY190_CR31,0,128,190_AL_.jpg",
      "name": "Deadpool 2"
    },
    {
      "id": "tt1211837",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Doctor Strange"
    },
    {
      "id": "tt3498820",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Captain America: Civil War"
    },
    {
      "id": "tt1431045",
      "poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,0,128,190_AL_.jpg",
      "name": "Deadpool"
    },
    {
      "id": "tt2015381",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Guardians of the Galaxy"
    },
    {
      "id": "tt2395427",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Avengers: Age of Ultron"
    },
    {
      "id": "tt0848228",
      "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "The Avengers"
    },
    {
      "id": "tt1843866",
      "poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY190_CR1,0,128,190_AL_.jpg",
      "name": "Captain America: The Winter Soldier"
    }
  ]
}
  ```
    

  ## getCast(tt1825683)
  ```javascript
  getCast(tt1825683).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "cast": [
    {
      "name": "Chadwick Boseman",
      "image": "https://m.media-amazon.com/images/M/MV5BMTk2OTY5MzcwMV5BMl5BanBnXkFtZTgwODM4MDI5MjI@._V1_QL50.jpg",
      "role": "T'Challa/Black Panther"
    },
    {
      "name": "Michael B. Jordan",
      "image": "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_QL50.jpg",
      "role": "Erik Killmonger"
    },
    {
      "name": "Lupita Nyong'o",
      "image": "https://m.media-amazon.com/images/M/MV5BMTY0NTQ4MDY2Nl5BMl5BanBnXkFtZTgwNDk1MTEyMDE@._V1_QL50.jpg",
      "role": "Nakia"
    },
    {
      "name": "Danai Gurira",
      "image": "https://m.media-amazon.com/images/M/MV5BNjYyNjg1OTU1M15BMl5BanBnXkFtZTgwNzYyNTkzMDI@._V1_QL50.jpg",
      "role": "Okoye"
    },
    {
      "name": "Martin Freeman",
      "image": "https://m.media-amazon.com/images/M/MV5BMjE0MjAwOTMzMF5BMl5BanBnXkFtZTcwMDg1MjEyNw@@._V1_QL50.jpg",
      "role": "Everett K. Ross"
    },
    {
      "name": "Daniel Kaluuya",
      "image": "https://m.media-amazon.com/images/M/MV5BOTk1MzgzOTg5OV5BMl5BanBnXkFtZTcwNDQ4NjMxOA@@._V1_QL50.jpg",
      "role": "W'Kabi"
    },
    {
      "name": "Letitia Wright",
      "image": "https://m.media-amazon.com/images/M/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_QL50.jpg",
      "role": "Shuri"
    },
    {
      "name": "Winston Duke",
      "image": "https://m.media-amazon.com/images/M/MV5BMzc5ZjRhNTItMTM5MS00ZDIxLTk4MzYtYzZkZDBhMjE1ZjMwXkEyXkFqcGdeQXVyNTEwNTA1Njg@._V1_QL50.jpg",
      "role": "M'Baku"
    },
    {
      "name": "Sterling K. Brown",
      "image": "https://m.media-amazon.com/images/M/MV5BZmEzNmExM2ItNzg5Zi00NGRjLWI1NTEtMmQ5MGMwNjFlNWFhL2ltYWdlXkEyXkFqcGdeQXVyMTM0MzI5Nzc@._V1_QL50.jpg",
      "role": "N'Jobu"
    },
    {
      "name": "Angela Bassett",
      "image": "https://m.media-amazon.com/images/M/MV5BMjI4OTQ1NTcxOF5BMl5BanBnXkFtZTcwOTc1NTU0OQ@@._V1_QL50.jpg",
      "role": "Ramonda"
    },
    {
      "name": "Forest Whitaker",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQzMDI3NTg2OV5BMl5BanBnXkFtZTcwNTgwMzg5Mg@@._V1_QL50.jpg",
      "role": "Zuri"
    },
    {
      "name": "Andy Serkis",
      "image": "https://m.media-amazon.com/images/M/MV5BYTgwYmM0ZjgtMWRmZC00YTc1LWIwYWEtYTFjMTZiMDNjNWRkXkEyXkFqcGdeQXVyNjcwMjczMzE@._V1_QL50.jpg",
      "role": "Ulysses Klaue"
    },
    {
      "name": "Florence Kasumba",
      "image": "https://m.media-amazon.com/images/M/MV5BYmQ1MjU0MjEtMzgxOC00ZDdlLWFjNjgtYjJhOTM4OWZiZGM4XkEyXkFqcGdeQXVyNDU5ODk2OTg@._V1_QL50.jpg",
      "role": "Ayo"
    },
    {
      "name": "John Kani",
      "image": "https://m.media-amazon.com/images/M/MV5BMTA0NTg4Mzc1NjZeQTJeQWpwZ15BbWU4MDg5MDQzODQz._V1_UX75_CR0,0,75,109_AL_.jpg@._V1_QL50.jpg",
      "role": "T'Chaka"
    },
    {
      "name": "David S. Lee",
      "image": "https://m.media-amazon.com/images/M/MV5BNzE5NWU2NjAtNGVmZC00MzhmLWExMzYtOTRhY2U4NGYyMTA0XkEyXkFqcGdeQXVyMjQ5ODYxOTI@._V1_QL50.jpg",
      "role": "Limbani"
    },
    {
      "name": "Nabiyah Be",
      "image": "https://m.media-amazon.com/images/M/MV5BNmZmMGEyNDgtZmUwOC00MTQwLTkwMjItNzM4Mjc0OWQ1NjhmXkEyXkFqcGdeQXVyNzQwMTM5MTE@._V1_QL50.jpg",
      "role": "Linda"
    },
    {
      "name": "Isaach De Bankolé",
      "image": "https://m.media-amazon.com/images/M/MV5BMTc4MzE3OTgxMV5BMl5BanBnXkFtZTcwMzA4NTAzMQ@@._V1_QL50.jpg",
      "role": "River Tribe Elder"
    },
    {
      "name": "Connie Chiume",
      "image": "https://m.media-amazon.com/images/M/MV5BMjM1MTYyMjMyM15BMl5BanBnXkFtZTgwMDAzMDA3NDM@._V1_QL50.jpg",
      "role": "Mining Tribe Elder"
    },
    {
      "name": "Dorothy Steel",
      "image": "https://m.media-amazon.com/images/M/MV5BZTk4YzIwM2EtNmUwMy00Mzg1LWIxM2MtYWE4Njk1MzBmYTlkXkEyXkFqcGdeQXVyNzgxOTY1MDk@._V1_QL50.jpg",
      "role": "Merchant Tribe Elder"
    },
    {
      "name": "Danny Sapani",
      "image": "https://m.media-amazon.com/images/M/MV5BMTc1MDg2ODE2OV5BMl5BanBnXkFtZTgwNDc1NjE2MTE@._V1_QL50.jpg",
      "role": "Border Tribe Elder"
    }
  ]
}
  ```
    

  ## getTrending(7)
  ```javascript
  getTrending(7).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "trending": [
    {
      "name": "Velvet Buzzsaw",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjExMDQ1NjMzOV5BMl5BanBnXkFtZTgwMjkxMzMyNzM@._V1_QL50.jpg",
      "id": "tt7043012"
    },
    {
      "name": "Alita: Battle Angel",
      "poster": "https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_QL50.jpg",
      "id": "tt0437086"
    },
    {
      "name": "Avengers: Endgame",
      "poster": "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_QL50.jpg",
      "id": "tt4154796"
    },
    {
      "name": "Polar",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjAzNDkzODU3Ml5BMl5BanBnXkFtZTgwNDI4OTExNzM@._V1_QL50.jpg",
      "id": "tt4139588"
    },
    {
      "name": "Bohemian Rhapsody",
      "poster": "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_QL50.jpg",
      "id": "tt1727824"
    },
    {
      "name": "Overlord",
      "poster": "https://m.media-amazon.com/images/M/MV5BYTUzYmJlNDgtMzM2ZS00N2ZkLWJjY2ItNzM0ZmVjMWU5OTA3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL50.jpg",
      "id": "tt4530422"
    },
    {
      "name": "Glass",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_QL50.jpg",
      "id": "tt6823368"
    }
  ]
}
  ```
    

  ## episodesPage(tt3107288,2)
  ```javascript
  episodesPage(tt3107288,2).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "episodes": [
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTU2MDcyNDkyNl5BMl5BanBnXkFtZTgwNjIyMTM5NjE@._V1_QL50.jpg",
      "name": "The Man Who Saved Central City",
      "story": "Still feeling responsible for Eddie's death, Barry pushes his friends away and tries to protect the city on his own; Cisco assists Joe with the Meta Task Force.",
      "airDate": "6 Oct. 2015",
      "rating": "8.5"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTA0MzI2NDMyMjJeQTJeQWpwZ15BbWU4MDM3MjA1OTYx._V1_UX224_CR0,0,224,126_AL_.jpg@._V1_QL50.jpg",
      "name": "Flash of Two Worlds",
      "story": "A mysterious man brings warning of an evil speedster intent on destroying The Flash, and a determined officer wants to join Joe's meta-human task force.",
      "airDate": "13 Oct. 2015",
      "rating": "8.8"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY3OTQwMzM2MF5BMl5BanBnXkFtZTgwNzE2NjgwNzE@._V1_QL50.jpg",
      "name": "Family of Rogues",
      "story": "Barry and the team ally with the kidnapped Captain Cold's sister, but Barry feels duped when he learns Snart is working on something with his father; Joe faces a difficult decision.",
      "airDate": "20 Oct. 2015",
      "rating": "8.5"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA5ODk0Nzc4N15BMl5BanBnXkFtZTgwMTY5MTgxNzE@._V1_QL50.jpg",
      "name": "The Fury of Firestorm",
      "story": "The quest to find the destabilizing Dr. Stein a new merge partner brings about the emergence of a new, hot-tempered, meta-human malcontent.",
      "airDate": "27 Oct. 2015",
      "rating": "8.5"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNTQ3MzgzNDQxOV5BMl5BanBnXkFtZTgwODEwMjgxNzE@._V1_QL50.jpg",
      "name": "The Darkness and the Light",
      "story": "As an encounter with another Earth-2 meta-human leaves Barry blinded (right before his first date with Patty), Dr. Wells outs Cisco.",
      "airDate": "3 Nov. 2015",
      "rating": "8.9"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNTY4ODU2MjI1Ml5BMl5BanBnXkFtZTgwMzAyMTMyNzE@._V1_QL50.jpg",
      "name": "Enter Zoom",
      "story": "Barry and his team plan to trap Zoom with Linda's help while Joe is against it.",
      "airDate": "10 Nov. 2015",
      "rating": "9.5"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BZjJhYTkyZjAtZTU1Yi00YWJiLWJkNzUtZGJkYmU5MjQwY2YyXkEyXkFqcGdeQXVyNjc3MTA5MDA@._V1_QL50.jpg",
      "name": "Gorilla Warfare",
      "story": "Barry's team races to rescue Caitlin when Grodd abducts her; Cisco plans a date with the new barista at Jitters; Patty knows Barry is hiding something.",
      "airDate": "17 Nov. 2015",
      "rating": "8.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTcwMDUxMzgxM15BMl5BanBnXkFtZTgwODMyOTMzNzE@._V1_QL50.jpg",
      "name": "Legends of Today",
      "story": "When Vandal Savage attacks Kendra Saunders, Barry takes Kendra to Star City, seeking Oliver's protection; Harrison asks Jay to test a new serum to make Barry run faster.",
      "airDate": "1 Dec. 2015",
      "rating": "9.1"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMzY0OTY0OTg3OF5BMl5BanBnXkFtZTgwOTMyNjQ0NzE@._V1_QL50.jpg",
      "name": "Running to Stand Still",
      "story": "Believing Flash to be weakened, Weather Wizard returns to break Captain Cold and The Trickster out of Iron Heights Prison to form a triumvirate against him at Christmastime.",
      "airDate": "8 Dec. 2015",
      "rating": "8.7"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY0ODEwMjYxN15BMl5BanBnXkFtZTgwMTU3NjY3NzE@._V1_QL50.jpg",
      "name": "Potential Energy",
      "story": "Barry and the S.T.A.R. Labs team hunt down The Turtle, who steals kinetic energy. Barry faces a choice on whether or not he should reveal his secret identity to Patty.",
      "airDate": "19 Jan. 2016",
      "rating": "8.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTA4MTExNzIxNDheQTJeQWpwZ15BbWU4MDg4NzgxODcx._V1_UX224_CR0,0,224,126_AL_.jpg@._V1_QL50.jpg",
      "name": "The Reverse-Flash Returns",
      "story": "Dr. Harrison figures out how to induce Cisco's ability; they hence learn that Eobard Thawne is still alive. Iris says farewell to her mother. Patty realizes there's more to Barry than meets the eye.",
      "airDate": "26 Jan. 2016",
      "rating": "8.9"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTk3MDY3MTMyN15BMl5BanBnXkFtZTgwODczMjk4NzE@._V1_QL50.jpg",
      "name": "Fast Lane",
      "story": "Barry tries to team up with Dr. Harrison but finds out Harrison prefers working alone. The Flash fights a new meta-human. Iris researches her brother's drag racing. Dr. Harrison starts stealing Barry's speed.",
      "airDate": "2 Feb. 2016",
      "rating": "8.3"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1ODg3NDA2M15BMl5BanBnXkFtZTgwMTMyMzc5NzE@._V1_QL50.jpg",
      "name": "Welcome to Earth-2",
      "story": "Harrison, Cisco and Barry travel to Earth-2 to save Harrison's daughter. Barry assumes the role of his doppelganger, who's married to Iris. He then encounters alternate-Caitlin and alternate-Ronnie, who are Zoom's agents.",
      "airDate": "9 Feb. 2016",
      "rating": "9.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNzg2YTU2YjItOGIxNy00YTgzLTgwZWItYjU1MWQ0MTM5ZDRlXkEyXkFqcGdeQXVyNjUzOTYxMTM@._V1_QL50.jpg",
      "name": "Escape from Earth-2",
      "story": "On Earth-2, the team asks for help from an unexpected source to find Zoom's lair, while on Earth-1, Caitlin tries to perfect Velocity-9 so Jay can stop the Geomancer.",
      "airDate": "16 Feb. 2016",
      "rating": "9.2"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMmUyNGZiYzMtNmQ0Mi00Y2Y2LWFiOGMtZWU3NDYyMDgxOWExXkEyXkFqcGdeQXVyNDA5ODU0NDg@._V1_QL50.jpg",
      "name": "King Shark",
      "story": "When King Shark escapes from an A.R.G.U.S. holding tank, Lyla and Diggle travel to Central City to warn The Flash. King Shark shows up at the West house and attacks Joe, Iris, Wally and Barry.",
      "airDate": "23 Feb. 2016",
      "rating": "8.6"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTU3OTcwMV5BMl5BanBnXkFtZTgwOTU3NDYzODE@._V1_QL50.jpg",
      "name": "Trajectory",
      "story": "While The Flash gets blamed for a lady speedster's anti-social antics, Jesse becomes appalled at how far Harrison will go to protect her.",
      "airDate": "22 Mar. 2016",
      "rating": "8.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BZWJkY2Q0NjYtOTAzMC00ZTI4LWEwNGUtZjMxOThiYzAzYWY0XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_QL50.jpg",
      "name": "Flash Back",
      "story": "To become fast enough to beat Zoom, Barry travels back in time to consult with Dr. Wells/Eobard Thawne but incurs the wrath of a Time Wraith.",
      "airDate": "29 Mar. 2016",
      "rating": "9.1"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMWU4NDEzZmMtZjlmZC00N2E2LWIzMGEtNzUwYTU2MWJiOTAxXkEyXkFqcGdeQXVyNDg5MDU5Njc@._V1_QL50.jpg",
      "name": "Versus Zoom",
      "story": "Barry, having now learned how to travel between the different Earths, decides to take the fight to Zoom.",
      "airDate": "19 Apr. 2016",
      "rating": "8.3"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA1ODEzNTMyNF5BMl5BanBnXkFtZTgwNzEzNTg2ODE@._V1_QL50.jpg",
      "name": "Back to Normal",
      "story": "As Barry adjusts to life without superpowers, a super-strong meta-human abducts Harrison, and Wally pesters Joe for a meeting with The Flash.",
      "airDate": "26 Apr. 2016",
      "rating": "7.7"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNGVkYjMzMWMtZTY5Mi00Nzc2LWJhZmYtODc5MjA3M2Y1NWU1XkEyXkFqcGdeQXVyNjY2MTM0ODY@._V1_QL50.jpg",
      "name": "Rupture",
      "story": "Just as Wells comes up with a plan to defeat Zoom, Zoom returns hellbent on destroying Central City. Meanwhile, Cisco has a vision of his brother, and Iris comes to terms with her feelings.",
      "airDate": "3 May 2016",
      "rating": "9.0"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMjM5MzA4Mzc5Ml5BMl5BanBnXkFtZTgwOTM2ODU4ODE@._V1_QL50.jpg",
      "name": "The Runaway Dinosaur",
      "story": "Iris volunteers to act as the bait in a plan to trap Girder in S.T.A.R. Labs; Barry struggles to go back to his old life.",
      "airDate": "10 May 2016",
      "rating": "8.8"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTAyNjM2OTI4NzBeQTJeQWpwZ15BbWU4MDkyMjUyOTgx._V1_UX224_CR0,0,224,126_AL_.jpg@._V1_QL50.jpg",
      "name": "Invincible",
      "story": "Zoom unleashes an army of Earth-2 meta-humans, the leader of which is Black Canary's doppelganger, Black Siren; Joe worries when Wally goes out to help The Flash.",
      "airDate": "17 May 2016",
      "rating": "9.1"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY5MTE5NDMzOF5BMl5BanBnXkFtZTgwNjk2NTY5ODE@._V1_QL50.jpg",
      "name": "The Race of His Life",
      "story": "With Zoom's true plan revealed, Team Flash fears Barry's resolve to do whatever it takes to stop him.",
      "airDate": "24 May 2016",
      "rating": "9.1"
    }
  ]
}
  ```
    

  ## getFull(tt2193021)
  ```javascript
  getFull(tt2193021).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "title": "Arrow",
  "runtime": "42min",
  "year": "2012",
  "story": "Oliver Queen and his father are lost at sea when their luxury yacht sinks, apparently in a storm. His father dies, but Oliver survives for five years on an uncharted island and eventually returns home. But he wasn't alone on the island where he learned not only how to fight and survive but also of his father's corruption and unscrupulous business dealings. He returns to civilization a changed man, determined to put things right. He disguises himself with the hood of one of his mysterious island mentors, arms himself with a bow and sets about hunting down the men and women who have corrupted his city.",
  "creators": [
    "Greg Berlanti",
    "Marc Guggenheim",
    "Andrew Kreisberg"
  ],
  "stars": [
    "Stephen Amell",
    "Katie Cassidy",
    "David Ramsey"
  ],
  "genre": [
    "Action",
    "Adventure",
    "Crime",
    "Drama",
    "Mystery",
    "Sci-Fi"
  ],
  "rating": "7.7",
  "poster": "https://m.media-amazon.com/images/M/MV5BMTU5MjU5NjUyOV5BMl5BanBnXkFtZTgwMDY1ODIyNjM@._V1_QL50.jpg",
  "episodes": "184 episodes",
  "seasons": "8",
  "related": [
    {
      "id": "tt3107288",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjI1MDAwNDM4OV5BMl5BanBnXkFtZTgwNjUwNDIxNjM@._V1_UY190_CR12,0,128,190_AL_.jpg",
      "name": "The Flash"
    },
    {
      "id": "tt4532368",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJlMWFhZjEtN2VjZC00MTdmLTljYjMtNDk2ZjA2YWIwYjUyXkEyXkFqcGdeQXVyNDY2NDU1MzA@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Legends of Tomorrow"
    },
    {
      "id": "tt4016454",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjE0MzgxNjYzOV5BMl5BanBnXkFtZTgwMzk3NDUyNTM@._V1_UY190_CR4,0,128,190_AL_.jpg",
      "name": "Supergirl"
    },
    {
      "id": "tt3749900",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTU5NjQ2MTU4NV5BMl5BanBnXkFtZTgwOTYyNTAwNzM@._V1_UY190_CR12,0,128,190_AL_.jpg",
      "name": "Gotham"
    },
    {
      "id": "tt4052886",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjI4MTU0NzE1OF5BMl5BanBnXkFtZTgwODI3NDc0OTE@._V1_UX128_CR0,0,128,190_AL_.jpg",
      "name": "Lucifer"
    },
    {
      "id": "tt0460681",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjAyNzkxOTU5MF5BMl5BanBnXkFtZTgwMTk1OTYzNjM@._V1_UY190_CR12,0,128,190_AL_.jpg",
      "name": "Supernatural"
    },
    {
      "id": "tt1632701",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTk1MjYzOTU2Nl5BMl5BanBnXkFtZTgwMzAxMTg5MTE@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Suits"
    },
    {
      "id": "tt0898266",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX128_CR0,0,128,190_AL_.jpg",
      "name": "The Big Bang Theory"
    },
    {
      "id": "tt2364582",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NzEzMzA2MF5BMl5BanBnXkFtZTgwNDkyNzgyNDM@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "Agents of S.H.I.E.L.D."
    },
    {
      "id": "tt2741602",
      "poster": "https://m.media-amazon.com/images/M/MV5BMGYyZDFjOGMtNDE2Zi00ODg3LWJiZjktMWFiYjUwOTVmNjBkXkEyXkFqcGdeQXVyNjMxNzcwOTI@._V1_UY190_CR0,0,128,190_AL_.jpg",
      "name": "The Blacklist"
    },
    {
      "id": "tt4574334",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTk3NTc2NTI0N15BMl5BanBnXkFtZTgwMDA4MjcwNzM@._V1_UY190_CR3,0,128,190_AL_.jpg",
      "name": "Stranger Things"
    },
    {
      "id": "tt1520211",
      "poster": "https://m.media-amazon.com/images/M/MV5BNDM2OTA1NzIzMV5BMl5BanBnXkFtZTgwOTkxMTk5NjM@._V1_UX128_CR0,0,128,190_AL_.jpg",
      "name": "The Walking Dead"
    }
  ],
  "awards": [
    {
      "name": "Saturn Award",
      "winner": [
        {
          "category": "Best Superhero Adaptation Television Series",
          "wonBy": ""
        }
      ]
    },
    {
      "name": "Saturn Award",
      "winner": [
        {
          "category": "Best Superhero Adaptation Television Series",
          "wonBy": ""
        }
      ]
    },
    {
      "name": "Saturn Award",
      "winner": [
        {
          "category": "Best Superhero Adaptation Television Series",
          "wonBy": ""
        }
      ]
    }
  ],
  "cast": [
    {
      "name": "Stephen Amell",
      "image": "https://m.media-amazon.com/images/M/MV5BMTc3MTg0MDMyMV5BMl5BanBnXkFtZTcwMjc2MzQxOA@@._V1_QL50.jpg",
      "role": "Oliver Queen/Green Arrow/The Arrow/The Hood/Black Arrow/Elseworlds Flash(161 episodes, 2012-2019)"
    },
    {
      "name": "David Ramsey",
      "image": "https://m.media-amazon.com/images/M/MV5BMTc1NDI3MDk2M15BMl5BanBnXkFtZTcwNjk4NDg4Mg@@._V1_QL50.jpg",
      "role": "John Diggle/Spartan/Green Arrow/The Hood(160 episodes, 2012-2019)"
    },
    {
      "name": "Emily Bett Rickards",
      "image": "https://m.media-amazon.com/images/M/MV5BZTdkZjlmYTQtMGMwNS00Yzk3LTg4YWItMzVlNTY0MmNiMzM3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL50.jpg",
      "role": "Felicity Smoak/Overwatch(154 episodes, 2012-2019)"
    },
    {
      "name": "Katie Cassidy",
      "image": "https://m.media-amazon.com/images/M/MV5BMjMyMzA1MTY2MV5BMl5BanBnXkFtZTgwMzIyNzQ3MDE@._V1_QL50.jpg",
      "role": "Laurel Lance/Black Canary/Black Siren(143 episodes, 2012-2019)"
    },
    {
      "name": "Paul Blackthorne",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQ1NjcyODAxMF5BMl5BanBnXkFtZTgwMjc5MDMwNzE@._V1_QL50.jpg",
      "role": "Quentin Lance(139 episodes, 2012-2019)"
    },
    {
      "name": "Willa Holland",
      "image": "https://m.media-amazon.com/images/M/MV5BNzgwMDk1NTUxMF5BMl5BanBnXkFtZTcwMTQxODY4Mg@@._V1_QL50.jpg",
      "role": "Thea Queen/Speedy(132 episodes, 2012-2019)"
    },
    {
      "name": "Echo Kellum",
      "image": "https://m.media-amazon.com/images/M/MV5BMTg5MTQwMzk2OV5BMl5BanBnXkFtZTgwMzEwNjI0NjE@._V1_QL50.jpg",
      "role": "Curtis Holt/Mr. Terrific(79 episodes, 2015-2019)"
    },
    {
      "name": "Colton Haynes",
      "image": "https://m.media-amazon.com/images/M/MV5BMjc1NDMwYmItM2NiNy00OWE5LTljYWYtNmFjZWFlMjdiNWFmXkEyXkFqcGdeQXVyMTYwMDA3MDg@._V1_QL50.jpg",
      "role": "Roy Harper/Arsenal(77 episodes, 2013-2019)"
    },
    {
      "name": "John Barrowman",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQ4Mjc1MzQzM15BMl5BanBnXkFtZTcwMDc0MDYzMw@@._V1_QL50.jpg",
      "role": "Malcolm Merlyn/Dark Archer(67 episodes, 2012-2018)"
    },
    {
      "name": "Rick Gonzalez",
      "image": "https://m.media-amazon.com/images/M/MV5BM2FhOTU1MDktM2E4MC00MTY0LWE4NzYtMWY2MjU4YTAyYTViXkEyXkFqcGdeQXVyNTgwNDMyMDQ@._V1_QL50.jpg",
      "role": "Rene Ramirez/Wild Dog(66 episodes, 2016-2019)"
    },
    {
      "name": "Juliana Harkavy",
      "image": "https://m.media-amazon.com/images/M/MV5BNTJjMjc2ODItYmMyNC00ZGMyLWExZGUtZTg5MThjMWRmOGY1XkEyXkFqcGdeQXVyMTkzMDk1Mzk@._V1_QL50.jpg",
      "role": "Dinah Drake/Black Canary/Tina Boland(57 episodes, 2017-2019)"
    },
    {
      "name": "Susanna Thompson",
      "image": "https://m.media-amazon.com/images/M/MV5BMTI1MTEzMjI5M15BMl5BanBnXkFtZTYwMDMzNzY2._V1_UX75_CR0,0,75,109_AL_.jpg@._V1_QL50.jpg",
      "role": "Moira Queen(48 episodes, 2012-2017)"
    },
    {
      "name": "Keri Adams",
      "image": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB470041852_.png@._V1_QL50.jpg",
      "role": "Bethany Snow(42 episodes, 2013-2019)"
    },
    {
      "name": "Manu Bennett",
      "image": "https://m.media-amazon.com/images/M/MV5BMTAzMTY2ODY0ODVeQTJeQWpwZ15BbWU4MDM3MjY5MzAx._V1_UY109_CR2,0,75,109_AL_.jpg@._V1_QL50.jpg",
      "role": "Slade Wilson/Deathstroke(40 episodes, 2013-2017)"
    },
    {
      "name": "Kirk Acevedo",
      "image": "https://m.media-amazon.com/images/M/MV5BOTM0MDMwMjE1OF5BMl5BanBnXkFtZTYwNjc2NDM0._V1_UX75_CR0,0,75,109_AL_.jpg@._V1_QL50.jpg",
      "role": "Ricardo Diaz(35 episodes, 2017-2019)"
    },
    {
      "name": "Caity Lotz",
      "image": "https://m.media-amazon.com/images/M/MV5BMjAyNjc2MjIxNV5BMl5BanBnXkFtZTgwNzU3MjExMzI@._V1_QL50.jpg",
      "role": "Sara Lance/The Canary/White Canary(35 episodes, 2013-2019)"
    },
    {
      "name": "David Nykl",
      "image": "https://m.media-amazon.com/images/M/MV5BMjI1OTY4Mzk0NF5BMl5BanBnXkFtZTgwNzk3NzYxMDE@._V1_QL50.jpg",
      "role": "Anatoly Knyazev(34 episodes, 2013-2018)"
    },
    {
      "name": "Audrey Marie Anderson",
      "image": "https://m.media-amazon.com/images/M/MV5BMjQ3NDQ3ODQ5NV5BMl5BanBnXkFtZTgwNDk5NTc2ODE@._V1_QL50.jpg",
      "role": "Lyla Michaels(33 episodes, 2013-2019)"
    },
    {
      "name": "Colin Donnell",
      "image": "https://m.media-amazon.com/images/M/MV5BZjkwOTczZTMtOGViNy00ODA4LTlmMmMtNmM3NzgyMzIxMmY5XkEyXkFqcGdeQXVyNDYzODA2NjI@._V1_QL50.jpg",
      "role": "Tommy Merlyn/Green Arrow/Prometheus(30 episodes, 2012-2018)"
    },
    {
      "name": "Jack Moore",
      "image": "https://m.media-amazon.com/images/M/MV5BZGZmNzI5ZDctYmYwYS00MWJiLThkMDItNGYwOTVlOGQ1NTZkXkEyXkFqcGdeQXVyNjMzMzQ5Njc@._V1_QL50.jpg",
      "role": "William Clayton(26 episodes, 2015-2019)"
    }
  ]
}
  ```
    

  ## changeQuality(n)
  ### n can be 0,1,2,3,4,5
  
## 0
![quality-0](https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_QL50.jpg)


## 1
![quality-1](https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg)


## 2
![quality-2](https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_UX148_CR0,0,148,216_AL__QL50.jpg)


## 3
![quality-3](https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_UX86_CR0,0,86,86_AL_.jpg)


## 4
![quality-4](https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_UY99_CR43,0,99,99_AL_.jpg)


## 5
![quality-5](https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_UX32_CR0,0,32,44_AL_.jpg)
