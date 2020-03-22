
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
      "vt": 37,
      "i": [
        "https://m.media-amazon.com/images/M/MV5BNTM4YThiMzktMDRlNi00NzAyLWI1YmQtNTdkMTNiN2Q0NzU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        960,
        1200
      ],
      "v": [
        {
          "l": "Final Trailer",
          "id": "vi1195032345",
          "s": "1:42",
          "i": [
            "https://m.media-amazon.com/images/M/MV5BYmMwODZkOTctNDE5ZC00OGUwLTk2MTItODExNmI3OThhMzQxXkEyXkFqcGdeQW1hcmNtYW5u._V1_.jpg",
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
          "l": "Season 6 Teaser: San Diego Comic-Con",
          "id": "vi1667480601",
          "s": "2:00",
          "i": [
            "https://m.media-amazon.com/images/M/MV5BYmMzNWFhMWItOTdlNy00Njk2LWE5MGItZTYzNGE3NTA3OTYwXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
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
      "id": "tt0439572",
      "s": "Ezra Miller",
      "y": 2022,
      "q": "feature",
      "i": [
        "https://m.media-amazon.com/images/M/MV5BYjU1NGMxZGEtMTRhYS00MzUyLThkMGQtODIzNzlhOTA4Yjg3XkEyXkFqcGdeQXVyNDU4NjI4ODQ@._V1_.jpg",
        696,
        471
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
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB468460248_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Shree Krishna",
    "actorId": "nm10191142"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB468460248_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda",
    "actorId": "nm10571802"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/M/MV5BMDkwOGNiMDYtZDBhMy00NWY0LWExYmQtZDgyNzViMDI2ZTIxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govindan Aravindan",
    "actorId": "nm0033244"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB468460248_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda Angulo",
    "actorId": "nm5291179"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB468460248_.png@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda Van Maele",
    "actorId": "nm1985352"
  },
  {
    "actorImage": "https://m.media-amazon.com/images/M/MV5BNmRjYWJkODgtYzcwNy00NTUxLWIyNjUtZmU0MzU2YzMxNzA5XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UX1024_CR1024,1024,0,0_AL_.jpg",
    "actorName": "Govinda Lloyd",
    "actorId": "nm8915940"
  }
]
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
      "id": "nm1569276",
      "image": "https://m.media-amazon.com/images/M/MV5BMTk2OTY5MzcwMV5BMl5BanBnXkFtZTgwODM4MDI5MjI@._V1_QL50.jpg",
      "role": "T'Challa/Black Panther"
    },
    {
      "name": "Michael B. Jordan",
      "id": "nm0430107",
      "image": "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_QL50.jpg",
      "role": "Erik Killmonger"
    },
    {
      "name": "Lupita Nyong'o",
      "id": "nm2143282",
      "image": "https://m.media-amazon.com/images/M/MV5BMTY0NTQ4MDY2Nl5BMl5BanBnXkFtZTgwNDk1MTEyMDE@._V1_QL50.jpg",
      "role": "Nakia"
    },
    {
      "name": "Danai Gurira",
      "id": "nm1775091",
      "image": "https://m.media-amazon.com/images/M/MV5BNjYyNjg1OTU1M15BMl5BanBnXkFtZTgwNzYyNTkzMDI@._V1_QL50.jpg",
      "role": "Okoye"
    },
    {
      "name": "Martin Freeman",
      "id": "nm0293509",
      "image": "https://m.media-amazon.com/images/M/MV5BMjE0MjAwOTMzMF5BMl5BanBnXkFtZTcwMDg1MjEyNw@@._V1_QL50.jpg",
      "role": "Everett K. Ross"
    },
    {
      "name": "Daniel Kaluuya",
      "id": "nm2257207",
      "image": "https://m.media-amazon.com/images/M/MV5BOTk1MzgzOTg5OV5BMl5BanBnXkFtZTcwNDQ4NjMxOA@@._V1_QL50.jpg",
      "role": "W'Kabi"
    },
    {
      "name": "Letitia Wright",
      "id": "nm4004793",
      "image": "https://m.media-amazon.com/images/M/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_QL50.jpg",
      "role": "Shuri"
    },
    {
      "name": "Winston Duke",
      "id": "nm6328300",
      "image": "https://m.media-amazon.com/images/M/MV5BODgzMTk5MTEyOV5BMl5BanBnXkFtZTgwOTQyNzE2NzM@._V1_QL50.jpg",
      "role": "M'Baku"
    },
    {
      "name": "Sterling K. Brown",
      "id": "nm1250791",
      "image": "https://m.media-amazon.com/images/M/MV5BZmEzNmExM2ItNzg5Zi00NGRjLWI1NTEtMmQ5MGMwNjFlNWFhL2ltYWdlXkEyXkFqcGdeQXVyMTM0MzI5Nzc@._V1_QL50.jpg",
      "role": "N'Jobu"
    },
    {
      "name": "Angela Bassett",
      "id": "nm0000291",
      "image": "https://m.media-amazon.com/images/M/MV5BMjI4OTQ1NTcxOF5BMl5BanBnXkFtZTcwOTc1NTU0OQ@@._V1_QL50.jpg",
      "role": "Ramonda"
    },
    {
      "name": "Forest Whitaker",
      "id": "nm0001845",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQzMDI3NTg2OV5BMl5BanBnXkFtZTcwNTgwMzg5Mg@@._V1_QL50.jpg",
      "role": "Zuri"
    },
    {
      "name": "Andy Serkis",
      "id": "nm0785227",
      "image": "https://m.media-amazon.com/images/M/MV5BYTgwYmM0ZjgtMWRmZC00YTc1LWIwYWEtYTFjMTZiMDNjNWRkXkEyXkFqcGdeQXVyNjcwMjczMzE@._V1_QL50.jpg",
      "role": "Ulysses Klaue"
    },
    {
      "name": "Florence Kasumba",
      "id": "nm0441042",
      "image": "https://m.media-amazon.com/images/M/MV5BYmQ1MjU0MjEtMzgxOC00ZDdlLWFjNjgtYjJhOTM4OWZiZGM4XkEyXkFqcGdeQXVyNDU5ODk2OTg@._V1_QL50.jpg",
      "role": "Ayo"
    },
    {
      "name": "John Kani",
      "id": "nm0434712",
      "image": "https://m.media-amazon.com/images/M/MV5BMTA0NTg4Mzc1NjZeQTJeQWpwZ15BbWU4MDg5MDQzODQz._V1_UX75_CR0,0,75,109_AL_.jpg@._V1_QL50.jpg",
      "role": "T'Chaka"
    },
    {
      "name": "David S. Lee",
      "id": "nm1605085",
      "image": "https://m.media-amazon.com/images/M/MV5BNzE5NWU2NjAtNGVmZC00MzhmLWExMzYtOTRhY2U4NGYyMTA0XkEyXkFqcGdeQXVyMjQ5ODYxOTI@._V1_QL50.jpg",
      "role": "Limbani"
    },
    {
      "name": "Nabiyah Be",
      "id": "nm8852246",
      "image": "https://m.media-amazon.com/images/M/MV5BYmYwZTUxMzItMWQyMy00NzA3LWJkZDgtMzMxNzY0YjE2MWZlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL50.jpg",
      "role": "Linda"
    },
    {
      "name": "Isaach De Bankolé",
      "id": "nm0207218",
      "image": "https://m.media-amazon.com/images/M/MV5BMTc4MzE3OTgxMV5BMl5BanBnXkFtZTcwMzA4NTAzMQ@@._V1_QL50.jpg",
      "role": "River Tribe Elder"
    },
    {
      "name": "Connie Chiume",
      "id": "nm0158448",
      "image": "https://m.media-amazon.com/images/M/MV5BMjM1MTYyMjMyM15BMl5BanBnXkFtZTgwMDAzMDA3NDM@._V1_QL50.jpg",
      "role": "Mining Tribe Elder"
    },
    {
      "name": "Dorothy Steel",
      "id": "nm7262074",
      "image": "https://m.media-amazon.com/images/M/MV5BZTk4YzIwM2EtNmUwMy00Mzg1LWIxM2MtYWE4Njk1MzBmYTlkXkEyXkFqcGdeQXVyNzgxOTY1MDk@._V1_QL50.jpg",
      "role": "Merchant Tribe Elder"
    },
    {
      "name": "Danny Sapani",
      "id": "nm0764527",
      "image": "https://m.media-amazon.com/images/M/MV5BMTc1MDg2ODE2OV5BMl5BanBnXkFtZTgwNDc1NjE2MTE@._V1_QL50.jpg",
      "role": "Border Tribe Elder"
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
    "actorInfo": "Thomas Grant Gustin, better known as Grant Gustin, is an American actor and singer. He is known for his roles as Barry Allen / Flash on the CW series The Flash and as Sebastian Smythe on the Fox series Glee. Gustin was born on January 14, 1990 in Norfolk, Virginia. He is the son of Dr. Tina Lynne (Sweeney) Haney, a pediatric nurse, and Thomas Avery",
    "actorBirth": "January 14, 1990",
    "actorBorn": "Norfolk, Virginia, USA"
  }
]
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
    

  ## getUpcoming(20)
  ```javascript
  getUpcoming(20).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "upcoming": [
    {
      "name": "Mortal Kombat Legends: Scorpions Revenge",
      "id": "tt9580138"
    },
    {
      "name": "My Spy",
      "id": "tt8242084"
    },
    {
      "name": "Bad Trip",
      "id": "tt9684220"
    },
    {
      "name": "Martin Eden",
      "id": "tt4516162"
    },
    {
      "name": "Radioactive",
      "id": "tt6017756"
    },
    {
      "name": "Judy & Punch",
      "id": "tt7798644"
    },
    {
      "name": "Dream Horse",
      "id": "tt9883996"
    },
    {
      "name": "Legally Blonde 3",
      "id": "tt8509238"
    },
    {
      "name": "The High Note",
      "id": "tt9308382"
    },
    {
      "name": "Run Sweetheart Run",
      "id": "tt8656686"
    },
    {
      "name": "Scoob!",
      "id": "tt3152592"
    },
    {
      "name": "Military Wives",
      "id": "tt8951692"
    },
    {
      "name": "The SpongeBob Movie: Sponge on the Run",
      "id": "tt4823776"
    },
    {
      "name": "La Belle Époque",
      "id": "tt9172422"
    },
    {
      "name": "Artemis Fowl",
      "id": "tt3089630"
    },
    {
      "name": "The Green Knight",
      "id": "tt9243804"
    },
    {
      "name": "Irresistible",
      "id": "tt9076562"
    },
    {
      "name": "A White, White Day",
      "id": "tt9801736"
    },
    {
      "name": "Wonder Woman 1984",
      "id": "tt7126948"
    },
    {
      "name": "Greyhound",
      "id": "tt6048922"
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
      "name": "Spenser Confidential",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50.jpg",
      "id": "tt8629748"
    },
    {
      "name": "The Invisible Man",
      "poster": "https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50.jpg",
      "id": "tt1051906"
    },
    {
      "name": "Black Widow",
      "poster": "https://m.media-amazon.com/images/M/MV5BZGRlNTY3NGYtM2YzZS00N2YyLTg0ZDYtNmY2ZDg2NDM3N2JlXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_QL50.jpg",
      "id": "tt3480822"
    },
    {
      "name": "Contagion",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MDk5MDc3OV5BMl5BanBnXkFtZTcwNzAyNTg0Ng@@._V1_QL50.jpg",
      "id": "tt1598778"
    },
    {
      "name": "Knives Out",
      "poster": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_QL50.jpg",
      "id": "tt8946378"
    },
    {
      "name": "Onward",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_QL50.jpg",
      "id": "tt7146812"
    },
    {
      "name": "Bloodshot",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_QL50.jpg",
      "id": "tt1634106"
    }
  ]
}
  ```
    

  ## scrapper(tt1825683)
  ```javascript
  scrapper(tt1825683).then(val=>console.log(val))
  ```
  ### output
   ```json
   undefined
  ```
    

  ## scrap_rust(tt1825683)
  ```javascript
  scrap_rust(tt1825683).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "title": "Black Panther ",
  "runTime": "2h 14min",
  "year": 2018,
  "plot": "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.",
  "director": [
    "Ryan Coogler"
  ],
  "writer": [
    "Ryan Coogler",
    "Joe Robert Cole"
  ],
  "actor": [
    "Chadwick Boseman",
    "Michael B. Jordan",
    "Lupita Nyong'o"
  ],
  "genre": [
    "Action",
    "Adventure",
    "Sci-Fi"
  ],
  "rating": 7.300000190734863,
  "posterImg": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
  "related": [
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt3501632"
    },
    {
      "name": "Doctor Strange",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt1211837"
    },
    {
      "name": "Captain America: Civil War",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt3498820"
    },
    {
      "name": "Guardians of the Galaxy Vol. 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt3896198"
    },
    {
      "name": "Ant-Man",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt0478970"
    },
    {
      "name": "Avengers: Age of Ultron",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt2395427"
    },
    {
      "name": "Spider-Man: Homecoming",
      "poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX76_CR0,0,76,113_AL_.jpg",
      "id": "tt2250912"
    },
    {
      "name": "Avengers: Infinity War",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt4154756"
    },
    {
      "name": "The Avengers",
      "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt0848228"
    },
    {
      "name": "Guardians of the Galaxy",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY113_CR0,0,76,113_AL_.jpg",
      "id": "tt2015381"
    }
  ]
}
  ```
    

  ## getFull(tt2395427)
  ```javascript
  getFull(tt2395427).then(val=>console.log(val))
  ```
  ### output
   ```json
   {
  "awards": [
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
  ],
  "cast": [
    {
      "name": "Robert Downey Jr.",
      "id": "nm0000375",
      "image": "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_QL50.jpg",
      "role": "Tony Stark/Iron Man"
    },
    {
      "name": "Chris Hemsworth",
      "id": "nm1165110",
      "image": "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_QL50.jpg",
      "role": "Thor"
    },
    {
      "name": "Mark Ruffalo",
      "id": "nm0749263",
      "image": "https://m.media-amazon.com/images/M/MV5BNDQyNzMzZTMtYjlkNS00YzFhLWFhMTctY2M4YmQ1NmRhODBkXkEyXkFqcGdeQXVyNjcyNzgyOTE@._V1_QL50.jpg",
      "role": "Bruce Banner/Hulk"
    },
    {
      "name": "Chris Evans",
      "id": "nm0262635",
      "image": "https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_QL50.jpg",
      "role": "Steve Rogers/Captain America"
    },
    {
      "name": "Scarlett Johansson",
      "id": "nm0424060",
      "image": "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_QL50.jpg",
      "role": "Natasha Romanoff/Black Widow"
    },
    {
      "name": "Jeremy Renner",
      "id": "nm0719637",
      "image": "https://m.media-amazon.com/images/M/MV5BOTk2NDc2ODgzMF5BMl5BanBnXkFtZTcwMTMzOTQ4Nw@@._V1_QL50.jpg",
      "role": "Clint Barton/Hawkeye"
    },
    {
      "name": "James Spader",
      "id": "nm0000652",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQ3MTQ5NjY5Ml5BMl5BanBnXkFtZTgwMTY0NzU5MDE@._V1_QL50.jpg",
      "role": "Ultron"
    },
    {
      "name": "Samuel L. Jackson",
      "id": "nm0000168",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX75_CR0,0,75,109_AL_.jpg@._V1_QL50.jpg",
      "role": "Nick Fury"
    },
    {
      "name": "Don Cheadle",
      "id": "nm0000332",
      "image": "https://m.media-amazon.com/images/M/MV5BNDMxNDM3MzY5N15BMl5BanBnXkFtZTcwMjkzOTY4MQ@@._V1_QL50.jpg",
      "role": "James Rhodes/War Machine"
    },
    {
      "name": "Aaron Taylor-Johnson",
      "id": "nm1093951",
      "image": "https://m.media-amazon.com/images/M/MV5BMzE5MzI0MzY2OF5BMl5BanBnXkFtZTgwODE3MTk4MTE@._V1_QL50.jpg",
      "role": "Pietro Maximoff/Quicksilver"
    },
    {
      "name": "Elizabeth Olsen",
      "id": "nm0647634",
      "image": "https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_QL50.jpg",
      "role": "Wanda Maximoff/Scarlet Witch"
    },
    {
      "name": "Paul Bettany",
      "id": "nm0079273",
      "image": "https://m.media-amazon.com/images/M/MV5BNjUzMDIzNjkxMl5BMl5BanBnXkFtZTgwNjgyNzA0MjI@._V1_QL50.jpg",
      "role": "Jarvis/Vision"
    },
    {
      "name": "Cobie Smulders",
      "id": "nm1130627",
      "image": "https://m.media-amazon.com/images/M/MV5BMTkzNTUyMTczM15BMl5BanBnXkFtZTcwMjMxNTM4Nw@@._V1_QL50.jpg",
      "role": "Maria Hill"
    },
    {
      "name": "Anthony Mackie",
      "id": "nm1107001",
      "image": "https://m.media-amazon.com/images/M/MV5BMTk3NTM1MjE2M15BMl5BanBnXkFtZTcwNzc5OTI2Mg@@._V1_QL50.jpg",
      "role": "Sam Wilson/The Falcon"
    },
    {
      "name": "Hayley Atwell",
      "id": "nm2017943",
      "image": "https://m.media-amazon.com/images/M/MV5BZmRhZWVjZWMtMzUwZi00OTI3LThiMzAtY2VmMjU5YjQ0YjVjXkEyXkFqcGdeQXVyODMzMTM1MDc@._V1_QL50.jpg",
      "role": "Peggy Carter"
    },
    {
      "name": "Idris Elba",
      "id": "nm0252961",
      "image": "https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_QL50.jpg",
      "role": "Heimdall"
    },
    {
      "name": "Linda Cardellini",
      "id": "nm0004802",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQ2MDM4MTM2NF5BMl5BanBnXkFtZTgwMTM4MjYyMDE@._V1_QL50.jpg",
      "role": "Laura Barton"
    },
    {
      "name": "Stellan Skarsgård",
      "id": "nm0001745",
      "image": "https://m.media-amazon.com/images/M/MV5BMzljNGIzYjgtMTQ0MS00OWU1LTk1NWEtOWQ3ZDhmNzQ2ZDAxXkEyXkFqcGdeQXVyMDAzMDk4OQ@@._V1_QL50.jpg",
      "role": "Erik Selvig"
    },
    {
      "name": "Claudia Kim",
      "id": "nm2263791",
      "image": "https://m.media-amazon.com/images/M/MV5BMTcyMzgxNTM4N15BMl5BanBnXkFtZTgwMjY1ODk4MzE@._V1_QL50.jpg",
      "role": "Dr. Helen Cho"
    },
    {
      "name": "Thomas Kretschmann",
      "id": "nm0470981",
      "image": "https://m.media-amazon.com/images/M/MV5BMTY1Njc5MzE1OF5BMl5BanBnXkFtZTcwMTc1NDM4Nw@@._V1_QL50.jpg",
      "role": "Strucker"
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
      "name": "Spenser Confidential",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50.jpg",
      "id": "tt8629748"
    },
    {
      "name": "Knives Out",
      "poster": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_QL50.jpg",
      "id": "tt8946378"
    },
    {
      "name": "Onward",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_QL50.jpg",
      "id": "tt7146812"
    },
    {
      "name": "Gisaengchung",
      "poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL50.jpg",
      "id": "tt6751668"
    },
    {
      "name": "Sonic the Hedgehog",
      "poster": "https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_QL50.jpg",
      "id": "tt3794354"
    },
    {
      "name": "I Am Not Okay with This",
      "poster": "https://m.media-amazon.com/images/M/MV5BMWM5YzhmNGMtZTI4Ny00MGM4LThkYjAtMDIyMTEwNTQyZmQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50.jpg",
      "id": "tt9446688"
    },
    {
      "name": "Emma.",
      "poster": "https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL50.jpg",
      "id": "tt9214832"
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
      "rating": "8.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTA0MzI2NDMyMjJeQTJeQWpwZ15BbWU4MDM3MjA1OTYx._V1_UX224_CR0,0,224,126_AL_.jpg@._V1_QL50.jpg",
      "name": "Flash of Two Worlds",
      "story": "A mysterious man brings warning of an evil speedster intent on destroying The Flash, and a determined officer wants to join Joe's meta-human task force.",
      "airDate": "13 Oct. 2015",
      "rating": "8.7"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY3OTQwMzM2MF5BMl5BanBnXkFtZTgwNzE2NjgwNzE@._V1_QL50.jpg",
      "name": "Family of Rogues",
      "story": "Barry and the team ally with the kidnapped Captain Cold's sister, but Barry feels duped when he learns Snart is working on something with his father; Joe faces a difficult decision.",
      "airDate": "20 Oct. 2015",
      "rating": "8.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA5ODk0Nzc4N15BMl5BanBnXkFtZTgwMTY5MTgxNzE@._V1_QL50.jpg",
      "name": "The Fury of Firestorm",
      "story": "The quest to find the destabilizing Dr. Stein a new merge partner brings about the emergence of a new, hot-tempered, meta-human malcontent.",
      "airDate": "27 Oct. 2015",
      "rating": "8.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNTQ3MzgzNDQxOV5BMl5BanBnXkFtZTgwODEwMjgxNzE@._V1_QL50.jpg",
      "name": "The Darkness and the Light",
      "story": "As an encounter with another Earth-2 meta-human leaves Barry blinded (right before his first date with Patty), Dr. Wells outs Cisco.",
      "airDate": "3 Nov. 2015",
      "rating": "8.8"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNTY4ODU2MjI1Ml5BMl5BanBnXkFtZTgwMzAyMTMyNzE@._V1_QL50.jpg",
      "name": "Enter Zoom",
      "story": "Barry and his team plan to trap Zoom with Linda's help while Joe is against it.",
      "airDate": "10 Nov. 2015",
      "rating": "9.4"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BZjJhYTkyZjAtZTU1Yi00YWJiLWJkNzUtZGJkYmU5MjQwY2YyXkEyXkFqcGdeQXVyNjc3MTA5MDA@._V1_QL50.jpg",
      "name": "Gorilla Warfare",
      "story": "Barry's team races to rescue Caitlin when Grodd abducts her; Cisco plans a date with the new barista at Jitters; Patty knows Barry is hiding something.",
      "airDate": "17 Nov. 2015",
      "rating": "8.3"
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
      "rating": "8.6"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY0ODEwMjYxN15BMl5BanBnXkFtZTgwMTU3NjY3NzE@._V1_QL50.jpg",
      "name": "Potential Energy",
      "story": "Barry and the S.T.A.R. Labs team hunt down The Turtle, who steals kinetic energy. Barry faces a choice on whether or not he should reveal his secret identity to Patty.",
      "airDate": "19 Jan. 2016",
      "rating": "8.2"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTA4MTExNzIxNDheQTJeQWpwZ15BbWU4MDg4NzgxODcx._V1_UX224_CR0,0,224,126_AL_.jpg@._V1_QL50.jpg",
      "name": "The Reverse-Flash Returns",
      "story": "Dr. Wells figures out how to induce Cisco's ability; they hence learn that Eobard Thawne is still alive. Iris says farewell to her mother. Patty realizes there's more to Barry than meets the eye.",
      "airDate": "26 Jan. 2016",
      "rating": "8.9"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTk3MDY3MTMyN15BMl5BanBnXkFtZTgwODczMjk4NzE@._V1_QL50.jpg",
      "name": "Fast Lane",
      "story": "Barry tries to team up with Dr. Harrison but finds out Harrison prefers working alone. The Flash fights a new meta-human. Iris researches her brother's drag racing. Dr. Harrison starts stealing Barry's speed.",
      "airDate": "2 Feb. 2016",
      "rating": "8.2"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1ODg3NDA2M15BMl5BanBnXkFtZTgwMTMyMzc5NzE@._V1_QL50.jpg",
      "name": "Welcome to Earth-2",
      "story": "Harrison, Cisco and Barry travel to Earth-2 to save Harrison's daughter. Barry assumes the role of his doppelganger, who's married to Iris. He then encounters alternate-Caitlin and alternate-Ronnie, who are Zoom's agents.",
      "airDate": "9 Feb. 2016",
      "rating": "9.3"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNzg2YTU2YjItOGIxNy00YTgzLTgwZWItYjU1MWQ0MTM5ZDRlXkEyXkFqcGdeQXVyNjUzOTYxMTM@._V1_QL50.jpg",
      "name": "Escape from Earth-2",
      "story": "On Earth-2, the team asks for help from an unexpected source to find Zoom's lair, while on Earth-1, Caitlin tries to perfect Velocity-9 so Jay can stop the Geomancer.",
      "airDate": "16 Feb. 2016",
      "rating": "9.1"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMmUyNGZiYzMtNmQ0Mi00Y2Y2LWFiOGMtZWU3NDYyMDgxOWExXkEyXkFqcGdeQXVyNDA5ODU0NDg@._V1_QL50.jpg",
      "name": "King Shark",
      "story": "When King Shark escapes from an A.R.G.U.S. holding tank, Lyla and Diggle travel to Central City to warn The Flash. King Shark shows up at the West house and attacks Joe, Iris, Wally and Barry.",
      "airDate": "23 Feb. 2016",
      "rating": "8.5"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTU3OTcwMV5BMl5BanBnXkFtZTgwOTU3NDYzODE@._V1_QL50.jpg",
      "name": "Trajectory",
      "story": "While The Flash gets blamed for a lady speedster's anti-social antics, Jesse becomes appalled at how far Harrison will go to protect her.",
      "airDate": "22 Mar. 2016",
      "rating": "8.2"
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
      "rating": "8.2"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA1ODEzNTMyNF5BMl5BanBnXkFtZTgwNzEzNTg2ODE@._V1_QL50.jpg",
      "name": "Back to Normal",
      "story": "As Barry adjusts to life without superpowers, a super-strong meta-human abducts Harrison, and Wally pesters Joe for a meeting with The Flash.",
      "airDate": "26 Apr. 2016",
      "rating": "7.5"
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BNGVkYjMzMWMtZTY5Mi00Nzc2LWJhZmYtODc5MjA3M2Y1NWU1XkEyXkFqcGdeQXVyNjY2MTM0ODY@._V1_QL50.jpg",
      "name": "Rupture",
      "story": "Just as Wells comes up with a plan to defeat Zoom, Zoom returns hellbent on destroying Central City. Meanwhile, Cisco has a vision of his brother, and Iris comes to terms with her feelings.",
      "airDate": "3 May 2016",
      "rating": "8.9"
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
      "rating": "9.0"
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
