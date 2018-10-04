const express = require('express');
const app = express();

//marks public directories to use
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/fallinlovewith/:dog', (req, res) => {
     var thing = req.params.dog;
    res.render("love", {puppy: thing});
});

app.get('/posts', (req, res) => {
    var posts = [{title: "Post 1", author: "Dan"},
                {title: "Post 2", author: "Mary"},
                {title: "Posts are getting boring", author: "Casey"}
                ]
   res.render("post", {posts: posts});
});












app.listen(3000, () => {
    console.log('app listening on 3000');
});

//Run app, then load http://localhos3000n a browser to see the output.