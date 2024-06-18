const url =
  "https://superhero-api.p.rapidapi.com/?numerics=power%3E10&sort=heroId&alignment=good&gender=Male&page=1&limit=40";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c2e4b10293msh6dd4ba9b424bb4ep1a0fbfjsn300daf6c811a",
    "X-RapidAPI-Host": "superhero-api.p.rapidapi.com",
  },
};

// const myDiv = document.getElementById("hero");
// const myButton = myDiv.querySelector("button");

// myButton.addEventListener("click", getHero);

// function getHero() {
//   fetch(url, options)
//     .then(data => data.json())
//     // to check jason data
//     // .then(d => console.log(d))
//     .then(d => populateHero(d))
//     .catch(err => console.log(err.message));
// }

// function populateHero(heroObj) {
//   const newParagraph = document.createElement("p");
//   newParagraph.innerText = heroObj.appearance;
//   myDiv.appendChild(newParagraph);
// }

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    let myHeroes = data.heros[0];
    let aliases = myHeroes.biography;
    console.log(myHeroes);
  });
