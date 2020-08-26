

var lon = 0;
var lat = 0;


navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  const KELVIN = 273;
 const API_KEY = "";

  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  
  try {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          console.log(res);
        }
        return res.json();
      })
      .then((body) => {
        console.log(body);
        let temperature = Math.floor(body.list[0].main.temp - KELVIN);
        document
          .getElementById("wrapper-4")
          .getElementsByTagName("h2")[0].innerText = `${temperature}\xB0`; 
      });
  } catch (err) {}
}
function error(err) {}
