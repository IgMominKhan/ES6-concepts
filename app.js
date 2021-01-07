"use strict";
console.log("Hello World!");

// // use of "use strict" module

// function useOfStrict() {
//   name = "momin khan"; // use strict module will show an error while the function is called;
// }

// useOfStrict();

// use of spread operator

let poorCountriesOfAsia = ["Bangladesh", "Srilanka"];
let richCountriesOfAsia = ["China", "Saudi Arab", "USA"];
let countriesOfAsia = [...poorCountriesOfAsia, ...richCountriesOfAsia]; // spread operator (...) will add all the content of the array.
console.log(countriesOfAsia);

// use of rest parameter

function restParameter(...elem) {
  for (var i of elem) {
    i += i;
  }
  console.log(i);
}

restParameter(1, 2, 3);
