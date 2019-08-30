// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
const personOne = {
  id: 1,
  name: "Mitzi",
  email: "mmelloy0@psu.edu",
  gender: "F",
}
const personTwo = {
  id: 2,
  name: "Kennan",
  email: "kdiben1@tinypic.com",
  gender: "M",
}
const personThree = {
  id: 3,
  name: "Keven",
  email: "kmummery2@wikimedia.org",
  gender: "M",
}
const personFour = {
  id: 4,
  name: "Gannie",
  email: "gmartinson3@illinois.edu",
  gender: "M",
}
const personFive = {
  id: 5,
  name: 'Antonietta',
  email: "adaine5@samsung.com",
  gender: "F",
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(personOne.name);
// Kennan's ID
console.log(personTwo.email);
// Keven's email
console.log(personThree.email)
// Gannie's name
console.log(personFour.name);
// Antonietta's Gender
console.log(personFive.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
personTwo.speak = function() {
  return `Hello, my name is ${this.name}!`;
}
console.log(personTwo.speak());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
personFive.multiplyNumbers = (a,b) => a * b;

console.log(personFive.multiplyNumbers(2,5));
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
const parentOne = {
  name: 'Susan',
  age: 70,
}

// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
const parentTwo = {
  name: 'Susan',
  age: 70,
  child: {
    name: 'George',
    age: 50,
  }
}
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
const parentThree = {
  name: 'Susan',
  age: 70,
  child: {
    name: 'George',
    age: 50,
    grandChild: {
      name: 'Sam',
      age: 30,
    }
  }
}
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parentFour = {
  name: 'Susan',
  age: 70,
  speak: function() {
    return `${this.name}`;
  },
  child: {
    name: 'George',
    age: 50,
    speak: function() {
      return `${this.name}`;
    },
    grandChild: {
      name: 'sam',
      age: 50,
      speak: function() {
        return `${this.name}`;
      },
  }
}
}

// Log the parent object's name
console.log(parentFour.name);
// Log the child's age
console.log(parentFour.child.name);
// Log the name and age of the grandchild
console.log(parentFour.child.grandChild.name);
console.log(parentFour.child.grandChild.age);
// Have the parent speak
console.log(parentFour.speak());
// Have the child speak
console.log(parentFour.child.speak());
// Have the grandchild speak
console.log(parentFour.child.grandChild.speak());