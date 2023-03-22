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

// Drop-down menu //





// Cart Page //
var removeCartItemButtons = document.getElementsByClassName('remove-btn');

for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  })
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('product')[0]
  cartItemContainer.getElementsByClassName('product-details')

}






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



