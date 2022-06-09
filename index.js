const title = [
  "Clara y Romero",
  "Tunap",
  "Rent a camp",
  "Color Scheme Generator",
  "Watchlist",
  "Travel journal",
];
const description = [
  "Website for Clara y Romero, a sustainable clothing brand. Created with Wordpress and Elementor plugin.",
  "Website for Tunap Argentina, car additives brand. Created with Wordpress.",
  "Platform to rent a tent. Airbnb clone created with Ruby on Rails. ",
  "Project created with the color API using HTML, CSS and JS.",
  "Watchlist created using HTML, CSS and JS.",
  "Project created with React",
];

const website = [
  "https://clarayromero.com/",
  "https://tunap.com.ar/",
  "https://rent-acamp.herokuapp.com/",
  "https://cristinaoe.github.io/colorschemegenerator/",
  "https://cristinaoe.github.io/watchlist",
  "https://cristinaoe.github.io/traveljournal/",
];

const cards = document.querySelector(".cards");

for (let i = 0; i < title.length; i++) {
  const cardContent = cards.innerHTML;
  cards.innerHTML =
    ` <div class="card">
        <a href=${website[i]} target="_blank"><img src="images/${title[i]}.png" alt="Avatar" style="width:100%"></a>
        <div class="card-info">
          <h4 class="card-title">${title[i]}</h4>
          <p class="card-desc">${description[i]}</p>
        </div>
      </div>` + cardContent;
}
