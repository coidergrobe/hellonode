const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 6969;

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get("/register",function(req,res){
    res.render("register");
});
app.get("/welcome",function(req,res){
    res.send("Hello Hieu Ngu");
});

app.get("/welcome1",function(req,res){
    res.send("Hello Hieu Ngu");
});

app.get("/welcome2",function(req,res){
    res.send("Hello Hieu Ngu");
});

app.get("/welcome3",function(req,res){
    res.send("Hello Hieu Ngu");
});

app.post("/welcome4",function(req,res){
    res.send("Name " +req.body.name + '<br/>' + "Username " +req.body.username + '<br/>' + "Password " +req.body.password);
});

app.post("/register",function(req,res){
    res.send("Name " +req.body.name);
});

app.listen(port, function(){
    console.log(`Hello World`);
});