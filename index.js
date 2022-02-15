const title = ["Clara y Romero", "Tunap", "Rent a camp"];
const description = [
  "Website for Clara y Romero, a sustainable clothing brand. Created with Wordpress and Elementor plugin.",
  "Website for Tunap Argentina, car additives brand. Created with Wordpress.",
  "Platform to rent a tent. Airbnb clone created with Ruby on Rails. ",
];

const website = [
  "https://clarayromero.com/",
  "https://tunap.com.ar/",
  "https://rent-acamp.herokuapp.com/",
];

const cards = document.querySelector(".cards");

for (let i = 0; i < title.length; i++) {
  const cardContent = cards.innerHTML;
  cards.innerHTML =
    ` <div class="card">
        <a href=${website[i]} target="_blank"><img src="images/${title[i]}.png" alt="Avatar" style="width:100%"></a>
        <div class="container">
          <h4>${title[i]}</h4>
          <p>${description[i]}</p>
        </div>
      </div>` + cardContent;
}
