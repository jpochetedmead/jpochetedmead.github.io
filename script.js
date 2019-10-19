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
