var express = require ("express");
var app = express();

var sounds = {"pig": "hoink", "cow": "Moo", "dog": "Woof Woof" };


// Routes =================================

app.get("/", function (req, res){

    res.send ("Welcome to my assignment")
    
    });

app.get("/speak/:animal", function (req, res){
    var animals = req.params.animal;
    console.log(sounds[animals])
    console.log("Someone visited:" + animals)
    res.send (`The ${animals} says ${sounds[animals]}`); 
    });

app.get("/repeat/:word/:num", function (req, res){
    var count = req.params.num;
    var word = req.params.word + " "; 

    console.log(count);
    console.log(word);
     
    res.send (word.repeat(count)); 
    });




app.get("*", function (req, res){

res.send ("Nothing found. What are you doing with your life?")

});




//=====================================

app.listen(3000,function(){

    console.log("server ready")
});