const {scrapper,getTrendingGenre,getTrending,search,getFull,awardsPage}=require('./index');

function test() {
    getFull('tt2395427').then((movieDetails)=>{
        const output={ title: 'Avengers: Age of Ultron (2015)',
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
                [ { category: 'Best Visual Effects or Animation',wonBy: 'Christopher Townsend' } ] }

                   return movieDetails.title===output.title;

    }).then((data)=>{data?console.log("evrything is working fine"):console.error( "something is wrong")})
}
test();