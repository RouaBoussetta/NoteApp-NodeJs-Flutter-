//Initialization

const express=require('express');
const app=express();
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://rouaboussetta:rouaboussetta@cluster0.gf7dh4m.mongodb.net/notesdb').then(function(){
//App Routes
app.get('/',function(req,res){
    res.send("This is the home page");
});

app.get('/notes',function(req,res){
    res.send("This is the notes page");
});

 
});

//Starting the server on port 5000
app.listen(5000,function(){
    console.log('Starting the server on port 5000');

});
 
