'use strict';

var students = ['Kyle', 'Kat', 'Brian', 'Doug'];

for (var i = 0; i < students.length;  i++){
  console.log(`${students[i]} would like to greet everyone!`)
  for (var j = 0; j < students.length; j++){
    if (i !== j){
    console.log(`${students[i]} says hello to ${students[j]}`)

    }
  }
}

var letters = [
  ['C', 'D', 'O'],
  ['A', 'O', 'W'],
  ['T', 'G', 'L'],
]

for (var slowArr = 0; slowArr < letters.length; slowArr++){
  var animal = '';
  console.log('slowArr');
  for (var fasterArr = 0; fasterArr < letters.length; fasterArr++){
    animal += letters[fasterArr][slowArr];
    console.log('slowArr:', slowArr,'---','fastArr:', fasterArr);
  }
  console.log(animal);
}