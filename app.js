"use strict";
console.log("Hello World!");

// // use of "use strict" module

// function useOfStrict() {
//   name = "momin khan"; // use strict module will show an error while the function is called;
// }

// useOfStrict();

// use of spread operator

let poorContriesOfAsia = ["Bangladesh", "Srilanka"];

let richCountriesOfAsia = ["China", "Saudi Arab", "USA"];

let countriesOfAsia = [...poorContriesOfAsia, ...richCountriesOfAsia]; // spread operator (...) will add all the content of the array.

console.log(countriesOfAsia);
