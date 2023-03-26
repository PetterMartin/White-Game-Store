function validateForm() {
    const email = document.getElementById("email").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;
  
    let valid = true;
    if (!validateEmail(email)) {
      valid = false;
      alert("Please enter a valid email address.");
    }
    if (topic.length < 5) {
      valid = false;
      alert("Topic must be at least 10 characters long.");
    }
    if (message.length < 10) {
      valid = false;
      alert("Message must be at least 25 characters long.");
    }
  
    return valid;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  const form = document.getElementById("form");
const message = document.querySelector(".contact-box h2");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (validateForm()) {
    message.textContent = "Thank You For Your Submission! We Will Reply To You Within 14 Days";
    message.classList.add("success-message");
    form.reset();
  }
});