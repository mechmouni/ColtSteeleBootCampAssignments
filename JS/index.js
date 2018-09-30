var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var age = prompt("What is your age?");

if (!(typeof age == "number")){

    age = prompt("Enter in years you cat");
}

console.log(`Your name is ${firstName} ${lastName}`);
console.log(`Your age is ${age}`);