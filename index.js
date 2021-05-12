//constans(setup)
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('.form');
const nameInput = document.querySelector('#enterName');
const submitBtn = document.querySelector('#submitName');
const forgetBtn = document.querySelector('#forgetName');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
//stop the form from submitting when button pressed
if (form) {
form.addEventListener('submit', function(e) {
  e.preventDefault();
});
}
//adding event listener to the button and store name value to local storage then calling function nmeDsplyChk. forget button function is added too
if (submitBtn) {
submitBtn.addEventListener('click', function() {
  localStorage.setItem('name', nameInput.value);
  nameDisplayCheck();
});
}
if (forgetBtn) {
forgetBtn.addEventListener('click', function() {
  localStorage.removeItem('name');
  nameDisplayCheck();
});
};
//nameDisplayCheck function declaration

function nameDisplayCheck() {
  if (localStorage.getItem('name')) {
    let myName = localStorage.getItem('name');
    h1.textContent = 'Welcome' + myName;
    personalGreeting.textContent = 'Welcome to our website ' + myName +  ' We hope you have fun while you are here.';
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';

  } else {
    h1.textContent = 'Welcome to our website ';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
};
document.body.onload = nameDisplayCheck();





