var routesDictionary = new Map();

document.addEventListener("DOMContentLoaded",()=>{
const divs = document.getElementsByTagName("div");
const numberOfDivs = divs.length;

/*Add text file for pasting all urls and retrieve them and add them as the url 
As for size get an array of divs inside containers and thats the size
*/

for (let i = 1; i < numberOfDivs; i++) {
  let url = "";
  routesDictionary.set(divs[i].id, url);
}


})


/*Add text file for pasting all urls and retrieve them and add them as the url 
As for size get an array of divs inside containers and thats the size
*/



function directUserToURL(id_of_div) {
  let url = routesDictionary.get(id_of_div);
  window.open(url);
}
 

async function setWeather() {
  const KELVIN = 273;
  const API_KEY = "";
  let coordinates = getLocation();
  let lat = coordinates.lat;
  let lon = coordinates.lon;
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  let response = await fetch(url);
  let body = await response.json();
  let temperature = Math.floor(body.main.temp - KELVIN);
  document
    .getElementById("box-6")
    .getElementsByTagName("h2")[0].innerHtml = `${temperature}  + &deg`;
}

 function getLocation () {
  let location = {
    lat: 0,
    lon: 0,
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      location = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
    });

    return location;
  }
}
