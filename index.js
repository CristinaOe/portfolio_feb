const title = ["Clara y Romero", "Tunap", "Rent a camp"];
const description = [
  "Website for Clara y Romero, a sustainable clothing brand. Created with Wordpress and Elementor plugin.",
  "Website for Tunap Argentina, car additives brand. Created with Wordpress.",
  "Platform to rent a tent. Airbnb clone created with Ruby on Rails. ",
];

// for (let i = 0; i < title.length; i++) {
//   const fetch = document.querySelector(".container").innerHTML;
//   dynamic.innerHTML =
//     `<div id="cards${i}" class="boxes">
//           <div class="box-content">
//             <h4>${title[i]}</h4>
//             <p>${description[i]}</p>
//             <a href="#">more</a>
//           </div>
//         </div>` + fetch;
//   const bgimg = document.getElementById(`cards${i}`);
//   bgimg.style.backgroundImage = `url("images/${title[i]}.png")`;
// }

const cards = document.querySelector(".cards");

for (let i = 0; i < title.length; i++) {
  const cardContent = cards.innerHTML;
  cards.innerHTML =
    ` <div class="card">
        <img src="images/${title[i]}.png" alt="Avatar" style="width:100%">
        <div class="container">
          <h4>${title[i]}</h4>
          <p>${description[i]}</p>
        </div>
      </div>` + cardContent;
}
