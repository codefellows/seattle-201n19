// var car = {
//    make: 'vw',
//    model: 'gti',
//    year: '2016',
//    carMethod: function (){
//      return 'This is a car, vroom vroom';
//    }
//  }

//  console.log(car);

//  console.log(car.carMethod());


var deannaLiteral = {
  isStudent: true,
  name: 'Deanna',
  hairColor: 'brown',
  eyeColor: 'brown',
  rating:  '5 star',
  greeting: function(){
    return `Hello all! I'm rated ${this.rating}`;
  }
}

var nick = {
  student: true,
  hairColor: 'brown',
  eyeColor: 'blue',
  rating: '5 star',
  greeting: function(){
    return `Hello all! I'm rated ${this.rating}`;
  }
}

var example = nick.greeting();

//  console.log(example);

function Student (name, hair, eye, rating){
 this.isStudent = true;
 this.name = name;
 this.hairColor = hair;
 this.eyeColor = eye;
 this.rating = rating;
}

Student.prototype.greeting = function(){
  return `Hello all, my name is ${this.name}! I'm rated ${this.rating}`;
}

Student.prototype.render = function(){
  //logic here
}


var deanna = new Student('Deanna', 'brown', 'brown', '5 star');
var brandon = new Student('Brandon', 'brown', 'brown', '5 star');
var henry = new Student('Henry', 'blond', 'blue', '5 star');

// console.log(deannaLiteral);
// console.log(deanna);
// console.log(brandon);
// console.log(henry);


deanna.rating = '6 star';
console.log('deanna\'s rating: ', deanna.rating);
var anotherExample = deanna.greeting();

console.log(anotherExample);
console.log('----------------------------')

deannaLiteral.isStudent = false;
deannaLiteral.hasGraduate = true;
console.log('deannaLiteral below:' );
console.log(deannaLiteral);
console.log('----------------------------')


// Wednesday - Deanna Graduates
deanna.isFabulous = true;
deanna.isStudent = false;
console.log(deanna);

var parentEl = document.getElementById('students');

//create new element (row)
var trElement = document.createElement('tr');

//give row its content
var thElement = document.createElement('th');
thElement.textContent = 'Name';
trElement.appendChild(thElement);

thElement = document.createElement('th');
thElement.textContent = 'Hair Color';
trElement.appendChild(thElement);

thElement = document.createElement('th');
thElement.textContent = 'Eye Color';
trElement.appendChild(thElement);

thElement = document.createElement('th');
thElement.textContent = 'Rating';
trElement.appendChild(thElement);

//append row to parent
parentEl.appendChild(trElement);


var allStudents = [deanna, brandon, henry];

for (var i = 0; i < allStudents.length; i++){
  trElement = document.createElement('tr');
  
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
  
  parentEl.appendChild(trElement);
}  


