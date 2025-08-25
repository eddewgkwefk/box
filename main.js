import { movies } from "./movies.js";

let cards = document.getElementById("cards");
function newCard(params) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let name = document.createElement("h3");
  let vaqt = document.createElement("p");
  let yil = document.createElement("p");
  let rating = document.createElement("p");
  let categorie = document.createElement("p");

  img.src =
    "https://blog.philo.com/wp-content/uploads/2024/04/Best-movies-shows-family-and-kids.jpg";
  name.innerHTML = params?.Title;
  vaqt.innerHTML = `<b>Time:</b> ${params?.runtime} minutes`;
  yil.innerHTML = `<b>Year:</b> ${params?.movie_year}`;
  rating.innerHTML = ` <b>Rating:</b> ${params?.imdb_rating}⭐`;
  categorie.innerHTML = params?.Categories;
  categorie.style.textAlign = "center";
  categorie.style.overflow = "hidden";

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(rating);
  card.appendChild(vaqt);
  card.appendChild(yil);
  card.appendChild(categorie);
  card.classList.add("card");

  cards.appendChild(card);
}

function renderData(data) {
  cards.innerHTML = "";
  for (const element of data) {
    newCard(element);
  }
}
renderData(movies);

let input = document.querySelector("input");

input.addEventListener("input", () => {
    console.log(input.value);
    
  let searchResult = movies.filter(item => item?.Title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()));
  renderData(searchResult);
});
