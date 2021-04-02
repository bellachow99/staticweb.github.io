// let myImage = document.querySelector('img');
// myImage.setAttribute('width','500px')
// myImage.setAttribute('height','500px')
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute('src');
//   if(mySrc === 'images/firefox1.png'){
//     myImage.setAttribute('src','images/firefox2.png');
//   } else{
//     myImage.setAttribute('src','images/firefox1.png');
//   }
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function(){
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName){
    setUserName();
  }
  else if(myName===null){
    setUserName();
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName
}

if(!localStorage.getItem('name')){
  setUserName();
} else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}