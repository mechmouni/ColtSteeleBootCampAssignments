var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var winColor = document.getElementById("winColor");
var cellsAll = document.querySelectorAll("td");
var newGame = document.getElementById("newGame");
var block = document.getElementsByClassName("cell"); 

function randomColor(cell){

var colors = [];
for (let x = 0; x < cell.length; x++) {
    cell[x].style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";  
    
    colors.push(cell[x].style.backgroundColor);
    console.log(colors);

    cell[x].addEventListener("click", function(){

        if (winningColor != this.style.backgroundColor){
        this.style.backgroundColor = "blanchedalmond";}
        else {alert("YOU GUESSED IT");}
    });
    }
var winningColor =  colors[Math.floor(Math.random() * 6)]; 
winColor.innerText = winningColor; 
return colors
    }

randomColor(cellsAll);


newGame.addEventListener("click", function(){

    location.reload();
});