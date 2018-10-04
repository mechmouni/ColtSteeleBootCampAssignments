const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

app.use(express.static('/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('home');
});

app.get ('/friends', (req,res) => {

var friends = ["Tony", "Bob", "Bing", "Harry"];
res.render("friends", {friends: friends});

});

app.post('/addFriend', (req, res) => {
    
    console.log(req.body);
    res.send ("You reached POST");

});



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.