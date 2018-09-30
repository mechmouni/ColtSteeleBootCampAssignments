var guess = prompt ("Make a guess");
var number = Math.round(Math.random(2) * 100)
console.log(number);

while (number != guess)
{ if (guess > number ){
    console.log("Guess lower");
    guess = prompt ("Guess Lower");
    }

else {
        console.log("Guess higher");
        guess = prompt ("Guess higher");

        }
    }

if (number == guess){
alert("BINGO " + guess + " it is");
}

