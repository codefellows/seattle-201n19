'use strict';

//globals
var allGoats = [];
var renderQueue = [];
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var myContainer = document.getElementById('container');
var myList = document.getElementById('list');
var maxClicks = 10;
var clicks = 0;

//constructor
function Goat(name) {
  this.name = name;
  this.src = `./img/${name}.jpg`;
  this.clicked = 0;
  this.viewed = 0;
  allGoats.push(this);
}


// JSON.parse????  what does it do? JSON.parse method turns JSON back into JavaScript
var retrievedGoats = localStorage.getItem('savedGoats');
// console.log('saved non-parsed', retrievedGoats);

// if local storage exists, use local storage...
// else instantiate goats!
if (retrievedGoats) {// evaluates to false if it doesn't exist
  //if false this doesn't run
  allGoats = JSON.parse(retrievedGoats);
} else {
  // instatiate goats
  new Goat('cruisin-goat');
  new Goat('float-your-goat');
  new Goat('goat-away');
  new Goat('goat-out-of-hand');
  new Goat('kissing-goat');
  new Goat('sassy-goat');
  new Goat('smiling-goat');
  new Goat('sweater-goat');
}

// we did this before for loop - didn't quite work
// var parsedRetrievedGoats = JSON.parse(retrievedGoats);
// console.log('parsed', parsedRetrievedGoats);
// if this is run AND goats are instantiated, we have to many "goats" at the party!
// allGoats = JSON.parse(retrievedGoats);
// console.log('parsed', allGoats);


// global functions
// helper function to get random indexs
function getRandomGoat() {
  var num = Math.floor(Math.random() * allGoats.length);
  return num;
}
// get the three images
function createRenderQueue() {
  while (renderQueue.length > 2) {
    renderQueue.pop();
  }
  while (renderQueue.length < 4) {
    var i = getRandomGoat();
    while (renderQueue.includes(i)) {
      i = getRandomGoat();
    }
    renderQueue.unshift(i);
  }
  console.log(renderQueue);
}
// render images
function renderImages() {
  createRenderQueue();

  imgOneEl.src = allGoats[renderQueue[0]].src;
  imgOneEl.alt = allGoats[renderQueue[0]].name;
  allGoats[renderQueue[0]].viewed++;

  imgTwoEl.src = allGoats[renderQueue[1]].src;
  imgTwoEl.alt = allGoats[renderQueue[1]].name;
  allGoats[renderQueue[1]].viewed++;
}

function renderChart() {
  var clicksArray = [];
  var viewedArray = [];
  var pictureNameArray = [];

  for (var i = 0; i < allGoats.length; i++) {
    clicksArray.push(allGoats[i].clicked);
    viewedArray.push(allGoats[i].viewed);
    pictureNameArray.push(allGoats[i].name);
  }

  var chartObject = {
    type: 'bar',
    data: {
      labels: pictureNameArray,
      datasets: [{
        label: '# of Votes',
        data: clicksArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        hoverBackgroundColor: 'teal',
        borderWidth: 1
      }, {
        label: '# of Views',
        data: viewedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        hoverBackgroundColor: 'yellow',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: false,
      animation: {
        duration: 3000,
        easing: 'easeOutBounce'
      }
    }
  };

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, chartObject); //eslint-disable-line
}

// render list
function renderList() {
  for (var i = 0; i < allGoats.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allGoats[i].name} product had ${allGoats[i].clicked} votes and was shown ${allGoats[i].viewed} times`;
    myList.appendChild(liEl);
  }
}

// eventhandler
function handleClick(event) {
  var imgClicked = event.target.alt;
  var theThingClicked = event.target;
  clicks++;

  if (theThingClicked === myContainer) {
    alert('click the image if you want your vote to count');
  }

  for (var i = 0; i < allGoats.length; i++) {
    if (imgClicked === allGoats[i].name) {
      allGoats[i].clicked++;
    }
  }
  renderImages();
  if (clicks === maxClicks) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
    renderList();
    // need to "parse data here FIRST"
    // localStorage.setItem('goats', allGoats);
    // line 200 doesn't work, it returns something like this example:
    // 42 + {name: 'ryan', age: 'none of your business'}
    // "42[object Object]"

    // in JavaScript I can Stringify things.
    var stringifiedGoats = JSON.stringify(allGoats);
    // console.log(stringifiedGoats);
    // set into local storage with a KEY VALUE pair
    localStorage.setItem('savedGoats', stringifiedGoats);
  }
}



// executable code

// render images to DOM
renderImages();

// eventlistener
myContainer.addEventListener('click', handleClick);
