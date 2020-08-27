
var routesDictionary = new Map();

 document.addEventListener("DOMContentLoaded", () => {
  const divs = document.getElementsByTagName("div");
  let urls = [
    "https://www.apple.com/ca/fr/",
    "https://twitter.com/LOGIN",
    "https://www.linkedin.com/feed/",
    "https://www.theweathernetwork.com/ca/weather/ontario/toronto",
    "https://www.facebook.com/",
    "https://www.instagram.com/?hl=fr-ca",
    "https://github.com/",
    "https://www.pinterest.ca/",
    "https://www.spotify.com/ca-en/",
    "https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ",
    "https://www.lifetime.life/?gclid=CjwKCAjwkJj6BRA-EiwA0ZVPVluMyqVj-S8DoWrUkerrsRgUOO1a1RDPQ8VOQ4rxiQ_nBKoP757I3RoCj7MQAvD_BwE&utm_source=google&utm_medium=paid_search&utm_campaign=toronto-brand&utm_audience=brand-life_time_fitness&utm_term=life%20time&market=canadaarea&utm_content=general&ef_id=CjwKCAjwkJj6BRA-EiwA0ZVPVluMyqVj-S8DoWrUkerrsRgUOO1a1RDPQ8VOQ4rxiQ_nBKoP757I3RoCj7MQAvD_BwE:G:s&s_kwcid=AL!3651!3!456251435411!p!!g!!life%20time",
    "https://www.reddit.com/",
  ];

  const numberOfDivs = divs.length;

  for (let i = 1; i < numberOfDivs; i++) {
    let url = urls[i-1];
 routesDictionary.set(divs[i].id,url);   
 
  }

});

function directUserToURL(id_of_div) {
  let url = routesDictionary.get(id_of_div);
  window.open(url);
}






