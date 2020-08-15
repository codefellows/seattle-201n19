'use strict';

// get the element
var myContainer = document.getElementById('container');
var parentEl = document.getElementById('results');
var myTable = document.getElementById('table');


// event handler:
// takes one parameter:  event or e
function handleClick(event){
  console.log('the event', event);
  console.log('the event.target is ', event.target);
  console.log('the event.target.textContent ', event.target.textContent);
  console.log('the event.target.id is ', event.target.id)

  if (event.target.id === 'box-one'){
    var pEl = document.createElement('p');
    pEl.textContent = "Box 1 was clicked!";
    parentEl.append(pEl);
  }

  if (event.target.id === 'box-two'){
    var pEl = document.createElement('p');
    pEl.textContent = "clicked:  Box 2!";
    parentEl.append(pEl);
  }

  if (event.target.id === 'box-three'){
    var pEl = document.createElement('p');
    pEl.textContent = "Box 3 done got clicked!";
    parentEl.append(pEl);
  }

  if (event.target.id === 'container'){
    var pEl = document.createElement('p');
    pEl.textContent = "FOLLOW INSTRUCTIONS";
    parentEl.append(pEl);
  }
  
}

// addEventListner
//requires TWO paramaters
  //1. the event entered as a string
  //2. callback function --in this the name of the function -- could also be the ACTUAL function
// myContainer.addEventListener('click', handleClick);

//gets the element from the dom
var mySecondContainer = document.getElementById('container-two');
var allStudents = [];

function Student(name, hair, eye, rating){
  this.name = name;
  this.hairColor = hair;
  this.eyeColor = eye;
  this.rating = rating;
  allStudents.push(this);
}

Student.prototype.render = function (){
  for (var i = 0; i < allStudents.length; i++){
    var trElement = document.createElement('tr');
    
    var tdElement = document.createElement('td');
    tdElement.textContent = allStudents[i].name;
    trElement.appendChild(tdElement);
    
    tdElement = document.createElement('td');
    tdElement.textContent = allStudents[i].hairColor;
    trElement.appendChild(tdElement);
    
    tdElement = document.createElement('td');
    tdElement.textContent = allStudents[i].eyeColor;
    trElement.appendChild(tdElement);
    
    tdElement = document.createElement('td');
    tdElement.textContent = allStudents[i].rating;
    trElement.appendChild(tdElement);
    
    myTable.appendChild(trElement);
  }  

}

//define event HANDLER
//takes one parameter  best practice - event OR e
function handleSubmit(event){
  event.preventDefault();

  console.log(event.target);

  var name = event.target.username.value;
  console.log('name: ', name);

  var hairColor = event.target.haircolor.value;
  console.log('hair color: ', hairColor);

  var eyeColor = event.target.eyecolor.value;
  console.log('eye color: ', eyeColor);

  var rating = event.target.rating.value;
  console.log('rating: ', rating);

  //maybe clear the form boxes of content????


  //create an instance of Student from user input
  new Student(name, hairColor, eyeColor, rating);

  //clear the content from the table first????  maybe?

  //renders all students to the dom
  for (var i = 0; i < allStudents.length; i++){
    allStudents[i].render();
  }


}


//add eventListener
//needs 2 parameters
mySecondContainer.addEventListener('submit', handleSubmit);
