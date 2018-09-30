

var age = prompt("What is your age?");

console.log(typeof age);

if (!(typeof age == "number")){

    age = prompt("Enter in years you cat");
}

else {

console.log(`Your age is ${age}`);

}