var routesDictionary = new Map();

 document.addEventListener("DOMContentLoaded", () => {
  const divs = document.getElementsByTagName("div");
  const numberOfDivs = divs.length;

  for (let i = 1; i < numberOfDivs; i++) {
    let url = "";
    routesDictionary.set(divs[i].id, url);
  }

});

function directUserToURL(id_of_div) {
  let url = routesDictionary.get(id_of_div);
  window.open(url);
}






