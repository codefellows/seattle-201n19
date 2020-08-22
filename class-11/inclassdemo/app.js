'use strict';

var imgArray = [];

var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');

// constructor for our image objects
function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;
  
  imgArray.push(this);
}

// lets create our "images"
new Picture('alice', './img/a1.jpg');
new Picture('alan', './img/a2.jpg' );
new Picture('anna', './img/a3.jpeg');
new Picture('annabelle', './img/a4.jpg' );
new Picture('ashley', './img/a5.jpg');
new Picture('alex', './img/a6.jpg' );
new Picture('andromedon', './img/a7.jpg' );

function renderImages() {
  // DOM manipulation  fill element with content
  var imgOne = imgArray[randomNumber(imgArray.length)];
  var imgTwo = imgArray[randomNumber(imgArray.length)];

  while(imgOne === imgTwo) {
    imgTwo = imgArray[randomNumber(imgArray.length)];
  }

  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;

  imgElOne.alt = imgOne.name;
  imgElTwo.alt = imgTwo.name;

  imgOne.viewed++;
  imgTwo.viewed++;

  console.log(imgArray);

}

function randomNumber(max) {
  return Math.floor(Math.random() * max); // excludes 7
}


imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);

function eventHandler(e) {
  // TODO:  Increase our 'viewed' property based on clicking an image
  // console.log(e);
  console.log(e.target.alt);
  for(var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicked++;
      renderImages();
    }
  }
}

renderImages();
