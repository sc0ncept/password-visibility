// Variables
const passInput = document.querySelector('#password');
const checkbox = document.querySelector('#show-password');

// Method
const showPassword = function () {
  if (checkbox.checked) {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
}

// Event Listener
checkbox.addEventListener('click', showPassword);