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

// for of loop & rest parameter in dynamic function

const restParameter = function (...numbers) {
  for (var number of numbers) {
    number += number;
  }
  console.log(number);
};
restParameter(1, 2, 3);

// Nested object

const me = {
  name: "Momin khan",
  contacts: {
    mobileNumber: "01756158991",
    Email: "mominkhan8991@gmail.com",
  },
  address: {
    village: "Borbariya",
    thana: "Sarishabari",
    subdistrict: "Sarishabari",
    district: "Jamalpur",
  },
  skills: [
    "HTML5",
    "CSS3",
    "Javascript",
    "Jquery",
    "Bootstrap3&4",
    "Nodejs",
    "ExpressJs",
    "Reactjs",
    "Mongodb",
    "git&github"
  ],
};

console.log(me["contacts"]["mobileNumber"]); // Can be used me.contacts.mobileNumber

// use of for in loop
for (let pro in me) {
  console.log(pro + ": " + me[pro]);
}

// De-structuring array
var countries = ["BAN", "IND", "PAK", "US"];
var [a, b, , d] = countries;
console.log(d);

// Use of map method

var mymap = new Map();
mymap.set("key1", "BAN");
mymap.set("key2", "IND");
mymap.set("key3", "PAK");

console.log(mymap.keys());
mymap.delete("key2");
console.log(mymap.has("key1"));
console.log(mymap.get("key3"));
mymap.clear();

// Use of set
let mySet = new Set();
mySet.add("BAN");
mySet.add("IND");
mySet.add("PAK");
mySet.add("WIN");
for (const props of mySet) {
  if (mySet.has("PAK")) {
    mySet.delete("PAK");
  }
}
console.log(mySet.values());

// object oriented-Programming (inheritance)

class Parents {
  parentsFun() {
    console.log("I am from Parents");
  }
}

class Child extends Parents {
  childFun() {
    super.parentsFun();
    console.log("I am from child");
  }
}

let obj = new Child();
obj.childFun();
