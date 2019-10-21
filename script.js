// Browser Message code

alert("Written & Coded By Julio Pochet Edmead");

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/emojis/hi-emoji.gif') {
    myImage.setAttribute ('src','images/emojis/stop-emoji.gif');
    alert('Ouch! Stop poking me!');
  }
  else {
    myImage.setAttribute ('src','images/emojis/hi-emoji.gif');
    alert('Come on...STOP!!!!');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('.changename');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my website ' + myName + ' !';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + ' Welcome Back!';
}

myButton.onclick = function() {
  setUserName();
}

//Get the button:
mybutton = document.getElementById("scroll-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 33 || document.documentElement.scrollTop > 33) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
