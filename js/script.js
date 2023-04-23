const houseIcon = document.getElementById("house");
const socialIcon = document.getElementById("social");
const bookIcon = document.getElementById("book");
const downloadIcon = document.getElementById("download");
const cogIcon = document.getElementById("cog");
const toggle = document.getElementById("toggle");
const body = document.getElementById("body");
const header = document.querySelector("header");


// Light/Dark Mode //
/* toggle.addEventListener("click", function() {
  toggle.classList.toggle("active");
  document.body.classList.toggle("active");
  header.classList.toggle("active");
}); */


// Nav Bar //
if (window.location.pathname === "/index.html") {
  houseIcon.style.color = "#00B4FB";
  houseIcon.classList.add("active");
} else if (window.location.pathname === "/social.html") {
  socialIcon.style.color = "#00B4FB";
  socialIcon.classList.add("active");
} else if (window.location.pathname === "/library.html") {
  bookIcon.style.color = "#00B4FB";
  bookIcon.classList.add("active");
} else if (window.location.pathname === "/downloads.html") {
  downloadIcon.style.color = "#00B4FB";
  downloadIcon.classList.add("active");
} else if (window.location.pathname === "/settings.html") {
  cogIcon.style.color = "#00B4FB";
  cogIcon.classList.add("active");
}





// Cart Page //
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('remove-cart-button');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-input')
  for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('add-to-cart-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }

  var checkoutButton = document.querySelector('.cart-btn');
  checkoutButton.addEventListener('click', checkoutClicked);
}

function checkoutClicked() {
  clearCart();
  document.querySelector('.game-cart').innerHTML = '<p>Your new games have been added to your library</p>';
}

function clearCart() {
  var cartItems = document.querySelector('.game-cart');
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('game-title')[0].innerText
  var price = shopItem.getElementsByClassName('game-price')[0].innerText
  addItemToCart(title, price)
  updateCartTotal()
}


function addItemToCart(title, price) {
  var cartRow = document.createElement('div')
  var cartItems = document.getElementsByClassName('game-cart')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-title')
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('This item is already added to the cart')
      return   
    }
  }
  var cartRowContents = `
                <div class="game-cart-details">
                  <h1 class="cart-title">${title}</h1>
                  <p class="cart-price">${price}</p>
                  <input class="cart-input" type="number" value="1">
                  <div class="cart-button-container">
                  <a href="#"><button class="remove-cart-button">X</button></a>
                </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  
  
  cartRow.getElementsByClassName('remove-cart-button')[0].addEventListener('click',
  removeCartItem)
  cartRow.getElementsByClassName('cart-input')[0].addEventListener('change', quantityChanged)

   // show the checkout box
   var checkoutBox = document.getElementsByClassName('dropdown-content')[0]
   checkoutBox.classList.add('show')
   updateCartTotal()
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('game-cart')[0]
  var cartRows = cartItemContainer.getElementsByClassName('game-cart-details')
  var total = 0

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  document.getElementsByClassName('total-price')[0].innerText = '$' + total
}

var iconContainer = document.getElementsByClassName("icon-container")[1];
var dropdownContent = document.getElementById("dropdown");

iconContainer.addEventListener("click", function(event) {
  event.stopPropagation();
  dropdownContent.classList.toggle("show");
});

dropdownContent.addEventListener("click", function(event) {
  event.stopPropagation();
});



// Swiper //
var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Wordpress //
const gameContainer = document.querySelector(".image-grid");

async function getGames() {
  const url = "https://gamehub.flywheelsites.com/wp-json/wp/v2/posts?_embed";

  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    gameContainer.innerHTML = ""; // clear existing content

    results.forEach(function (result) {
      const images = result._embedded["wp:featuredmedia"];

      images.forEach(function (image) {
        const imageUrl = image.source_url;

        // Create a new image-square div for each image
        const imageDiv = document.createElement("div");
        imageDiv.className = "image-square";
        imageDiv.innerHTML = `
          <a href="blog.html?id=${result.id}">
            <img src="${imageUrl}" alt="">
          </a>
        `;

        // Append the new image-square div to gameContainer
        gameContainer.appendChild(imageDiv);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

getGames()

/*
gameContainer.innerHTML = `
  <div class="square swiper-slide fortnite" data-game-id="6">
    <div class="content">
      <h1 class="game-title">Fortnite</h1>
      <div class="button-container">
        <a href="blog.html"><button class="product-button">Get it now</button></a>
        <a href="blog.html?id=${id}" class="add-to-cart-button">+</a>
      </div>
    </div>
    <div class="free-to-play">Free to Play</div>
  </div>

  <div class="square swiper-slide counterstrike" data-game-id="14">
    <div class="content">
      <h1 class="game-title">Counterstrike 2</h1>
      <div class="button-container">
        <a href="blog.html"><button class="product-button">Get it now</button></a>
        <a href="#" class="add-to-cart-button">+</a>
      </div>
    </div>
    <div class="free-to-play">Free to Play</div>
  </div>

  <div class="square swiper-slide apex-legends" data-game-id="11">
    <div class="content">
      <h1 class="game-title">Apex Legends</h1>
      <div class="button-container">
        <a href="blog.html"><button class="product-button">Get it now</button></a>
        <a href="#" class="add-to-cart-button">+</a>
      </div>
    </div>
    <div class="free-to-play">Free to Play</div>
  </div>
`; */
