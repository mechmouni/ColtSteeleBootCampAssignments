var express = require("express");

var app = express();

app.get("/r/:subreddit/comments/:id/:title", function(req,res){
    
    res.send("Welcome to comments");
});

app.get("/r/:subreddit/", function(req,res){
    

    res.send(`Welcome to ${req.params.subreddit}`);
});

app.get("*", function(req,res){
    
   res.send("Catch All") 
});


app.listen(3000, function(){
    
    console.log("Server started");
});