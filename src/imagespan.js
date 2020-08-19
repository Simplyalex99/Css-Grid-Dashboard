var routesDictionary = new Map();
const numberOfDivs = document
  .getElementById("container")
  .getElementsByTagName("div").length;
/*Add text file for pasting all urls and retrieve them and add them as the url 
As for size get an array of divs inside containers and thats the size
*/

for (let i = 1; i < numberOfDivs; i++) {
  let url = "";
  routesDictionary.set(`box${i}`, url);
}

function directUserToURL(id_of_div) {
  let url = routesDictionary.get(id_of_div);
  window.open(url);
}

async function setWeather() {
  const KELVIN = 273;
  const API_KEY = "";
let coordinates = getLocation();
let latitutde = coordinates.lat;
let longitude = coordinates.lon;
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  let response = await fetch(url);
  let body = await response.json();
  let temperature = Math.floor(body.main.temp - KELVIN);
  document.getElementById('box-6').getElementsByTagName('h2').innerHtml = temperature;

}

 function getLocation() {
    
  try {
    if (checkGeolocationIsSupported()) {
      let coordinates = getPosition();
      return coordinates;
    }
  } catch (err) {

  }
  
}
