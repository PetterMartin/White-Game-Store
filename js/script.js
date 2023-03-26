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
  houseIcon.style.color = "#7AEB86";
  houseIcon.classList.add("active");
} else if (window.location.pathname === "/social.html") {
  socialIcon.style.color = "#7AEB86";
  socialIcon.classList.add("active");
} else if (window.location.pathname === "/library.html") {
  bookIcon.style.color = "#7AEB86";
  bookIcon.classList.add("active");
} else if (window.location.pathname === "/downloads.html") {
  downloadIcon.style.color = "#7AEB86";
  downloadIcon.classList.add("active");
} else if (window.location.pathname === "/settings.html") {
  cogIcon.style.color = "#7AEB86";
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
