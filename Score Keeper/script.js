var p1btn = document.getElementById("p1btn");
var p2btn = document.getElementById("p2btn");

var reset = document.getElementById("reset");
var p1Display = document.getElementById("player1");
var p2Display = document.getElementById("player2");
var limitBox = document.getElementById("limitBox");
console.log(limitBox);



var p1score = 0;
var p2score = 0;
//Limit Box
limitBox.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
	
	console.log("Registered Enter");
	var limit = parseInt(limitBox.value);
	alert("new limit set to " + limit);

	resetFunc();

	
  }
});

while ((p1score || p2score) < limit){

//Button 1
p1btn.addEventListener("click", function(){
console.log("Increasing player 1 score");
p1score++; 
p1Display.textContent = p1score; 
});
//Button 2
p2btn.addEventListener("click", function(){
console.log("Increasing player 2 score");
p2score++; 
p2Display.textContent = p2score; 
});

break;

alert ("game over");

}


var resetFunc = () => {p1score = 0;
p1Display.textContent = p1score; 
p2score =0;
p2Display.textContent = p2score; }


//onReset
reset.addEventListener("click", function(){

resetFunc();
console.log("Reset Called"); 

});

