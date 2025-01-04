const validUsername = "anjal";
const validPassword = "12345";

// Login Form
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const validMessage = document.getElementById('valid-message');
const login = document.getElementById('b1');


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

login.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = "index.html";
});
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const Email = emailInput.value;
  const password = passwordInput.value;
  if (!emailRegex.test(Email)) {
    errorMessage.textContent = "Invalid email format.";
    validMessage.textContent = "";
    return;
}
else if (!passwordRegex.test(password)) {
    errorMessage.textContent = "Password must be at least 8 characters, include letters, numbers, and one special character.";
    validMessage.textContent = "";
    return;
}
  else if (username === validUsername) {
    validMessage.textContent = "Username Exists";
  } else {
    errorMessage.textContent = " ";
    validMessage.textContent = "SignUp Sucessfull.";
  }
});