const {getFull} = require('./index')

function test () {
  getFull('tt2395427').then((movieDetails) => {
    const output = {
      title: 'Avengers: Age of Ultron (2015)',
      runtime: '2h 21min',
      year: '2015',
      story: 'ony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, he Avengers go into action to try and defeat a virtually impossible enemy together. Earths mightiest heroes must come together once again to protect the world from global extinction.                Written byapplenatalia9            ',
      director: 'Joss Whedon',
      writer: 'Joss Whedon',
      genre: [' Action ', ' Adventure ', ' Sci-Fi'],
      rating: '7.4'

    }
    console.log(movieDetails);
    return movieDetails.title === output.title
  }).then((data) => { data ? console.log('evrything is working fine') : console.error('something is wrong') })
}

test()
