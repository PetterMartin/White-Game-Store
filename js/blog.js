const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsContainer = document.querySelector(".details-container");
const detailsSection = document.querySelector(".details");

console.log(id);

const url = `https://gamehub.flywheelsites.com/wp-json/wp/v2/posts?id=${id}&_embed`

async function getDetails() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
    const game = result.find(obj => obj.id == id)
    console.log(game)

    let image = game._embedded["wp:featuredmedia"][0].source_url;

    detailsContainer.innerHTML = `
    <div class="game-card">
      <h1 class="game-title">${game.title.rendered}</h1>
    <div class="game-content">
      <div class="game-excerpt">${game.excerpt.rendered}</div>
      <div class="game-image-container">
        <img src="${image}" alt="" class="gamer-image">
      </div>
    </div>
    </div>
      `;
  } catch (error) {
    detailsContainer.innerHTML = `error; ${error}`;
  }
}

if (id) {
  getDetails();
}
