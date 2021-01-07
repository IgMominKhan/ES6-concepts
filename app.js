"use strict";
console.log("Hello World!");

// // use of "use strict" module

// function useOfStrict() {
//   name = "Momin khan"; // use strict module will show an error while the function is called;
// }

// useOfStrict();

// use of spread operator

let poorCountriesOfAsia = ["Bangladesh", "Srilanka"];
let richCountriesOfAsia = ["China", "Saudi Arab", "USA"];
let countriesOfAsia = [...poorCountriesOfAsia, ...richCountriesOfAsia]; // spread operator (...) will add all the content of the array.
console.log(countriesOfAsia);

// use of dynamic Function & rest parameter

// function restParameter(...elem) {                        // rest parameter
//   for (var i of elem) {
//     i += i;
//   }
//   console.log(i);
// }

// rest parameter in dynamic function

let restParameter = function (...numbers) {
  for (var number of numbers) {
    number += number;
  }
  console.log(number);
};
restParameter(1, 2, 3);
