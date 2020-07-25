'use strict';

// Create an app that will take a users name, respond if the username is correctly formatted or not, and respond if the username is a specific user from a list of specific usernames.

var username = prompt('Hello!  What is your name?');

var vipArray = ['dawit', 'kat', 'anthony', 'cody', 'chase', 'deanna'];

// string concatentation
console.log('username is: ' + username + ' welcome to the app!');

// template literals
console.log(`username is: ${username} welcome to the app, using string literals!`);

if (username === username.toLowerCase()) {
  console.log('all lowercase!  nice.');
}

// looping


for (var i = 0; i < vipArray.length; i++) {
  if (vipArray[i] === username){
    console.log(`welcome to the VIP club, ${username}`);
  }
}

var i = 0;

while (i < vipArray.length){
  if (vipArray[i] === username) {
    console.log(`welcome to the VIP clip, ${username}`);
  }
  i++;
}

// Truthy/Falsey
var compareValue =;
var otherValue = null;

console.log(compareValue);

if (compareValue) {
  console.log(true);
} else {
  console.log(false);
}


// Control Flow

var a = 'hello world';
var b = 'hello world';
var c = '1';
var d = 1;

// strictly equals "===" means it's comparing both the value and the type
console.log((a === b)); // true
console.log((c === d)); // false

// loosely equals "==" means it's comparing the value, but doesn't care about the type
console.log((c == d)); // true

// comparison operators
  // a === b
  // a == b
  // a > b
  // a >= b
  // a < b
  // a <= b
  // a != b
  // a !== b
