const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/fallinlovewith/:dog', (req, res) => {
     var thing = req.params.dog;
    res.render("love.ejs", {puppy: thing});
});

app.get('/posts', (req, res) => {
    var posts = [{title: "Post 1", author: "Dan"},
                {title: "Post 2", author: "Mary"},
                {title: "Posts are getting boring", author: "Casey"}
                ]
   res.render("post.ejs", {posts: posts});
});












app.listen(3000, () => {
    console.log('app listening on 3000');
});

//Run app, then load http://localhos3000n a browser to see the output.