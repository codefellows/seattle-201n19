'use strict';
//local storage - first exposure persistance

var myContainer = document.getElementById('container');
console.log(myContainer);

var siteVisitCount = 0;
siteVisitCount = localStorage.getItem('visitCount');
siteVisitCount++;

var paragraph = document.createElement('p');
paragraph.textContent = `this site has been visited ${siteVisitCount} times!`
myContainer.appendChild(paragraph);

// setting item to lpocal storage takes TWO parameters key and value
// 1. key - a string
// 2. value = THE DATA
localStorage.setItem('visitCount', siteVisitCount);

// JSON === JavaScript Object Notation
