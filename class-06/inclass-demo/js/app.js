'use strict';

console.log(document);

var bob = {
  name: 'Bob',
  description: `${this.name} is a huge fan of people.  Other alpacas, not so much.`,
  imgSrc: 'images/alpaca2.jpg'
};

// DOM manipulation

// Step 1: Find the target where your HTML/markup will go
var section = document.getElementById('alpaca-list');
console.log(section);
// Step 2: Create the new markup
var divEl = document.createElement('div');
console.log(divEl);
// Step 3: Append the new markup up to the DOM
section.append(divEl);

// Step 1: Find the target where your HTML/markup will go
// We already have our target in our Javascript, called "divEl"

// Step 2: Create the new markup
var pEl = document.createElement('p');
pEl.textContent = bob.description;

var h2El = document.createElement('h2');
h2El.textContent = bob.name;

var imgEl = document.createElement('img');
imgEl.src = bob.imgSrc;

// Step 3: Append the new markup up to the DOM
divEl.append(pEl);
divEl.append(h2El);
divEl.append(imgEl);



