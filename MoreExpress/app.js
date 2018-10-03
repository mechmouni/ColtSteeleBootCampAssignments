const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/fallinlovewith/:dog', (req, res) => {
     var thing = req.params.dog;
    res.render("love.ejs", {puppy: thing});
});

app.listen(3000, () => {
    console.log('app listening on 3000');
});

//Run app, then load http://localhos3000n a browser to see the output.