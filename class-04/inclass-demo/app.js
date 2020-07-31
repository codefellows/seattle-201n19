'use strict';
//demo begins

// var firstName = 'Cody';
// var lastName = 'Carpenter';

// object reference given in class (Console).  
// chaining method also referenced. (.log())
// console.log('Welcome to my site ' + firstName + ' ' + lastName);

//function set up to accept parameters
// function userGreeting(firstName, lastName){
  
//   var greeting = `Welcome to my site ${firstName} ${lastName}`;
//   return greeting;
// }
var userName = prompt('Greetings Earthling, what is your name?');

//paramaters are unique to the function.  think of them as special functional variables // in order to use must use same parameter inside function
function userGreeting(this_word_can_be_anything){
  // var response = prompt('Greetings Earthling, what is your name?');
  var greeting = `Welcome to my site ${this_word_can_be_anything}`;
  return greeting;
}

// cannot access local variable - (it's inside function)
console.log(greeting)

//CAN access global variables (it's outside of function)
console.log(userName);

// the functions return is being assigned to userOne
// var userOne = userGreeting('Cody', 'Carpenter');
var userTwo = userGreeting(userName);
console.log(userTwo);
// console.log('userOne:', userOne)
// we can pass two specific arguements
// with return instead of console.log, we are not saving to a variable so cannot reference the value - see line 17 
// userGreeting('Cody', 'Carpenter');
// userGreeting('Lucky', 'Dog');