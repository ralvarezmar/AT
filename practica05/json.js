'use strict'
// Rubén Álvarez 
var myObj = {
  "name": "John",
  "surname": "Smite",
  "age": 30,
  "car": null
};
console.log(myObj);

myObj.car = {
  "car1": "Ford",
  "car2": "BMW",
  "car3": "Fiat"
}

console.log("------------------");

for (var x in myObj) {
  console.log(myObj[x]);
}
myObj.car.car2 = "Mercedes";
console.log("------------------");

for (x in myObj) {
  console.log(myObj[x]);
}
console.log("------------------");

delete myObj.car.car2;
for (x in myObj) {
  console.log(myObj[x]);
}
console.log("------------------");

var string = JSON.stringify(myObj);

console.log("STRING: " + string);


var objeto = JSON.parse(string);

console.log("Objeto: " + objeto);
for (x in objeto) {
  console.log(objeto[x]);
}
