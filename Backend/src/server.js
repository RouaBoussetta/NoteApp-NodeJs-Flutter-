//Initialization

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Note = require('./models/Note');
const note=require('./models/Note');
const bodyParser=require('body-parser');
 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://rouaboussetta:rouaboussetta@cluster0.gf7dh4m.mongodb.net/notesdb').then(function(){
//App Routes
app.get('/',function(req,res){
    const response={message:"API Works !!"};
    res.json(response);
});

const noteRouter=require('./routes/note');
app.use("/notes",noteRouter)
 
});

//Starting the server on port 5000
app.listen(5000,function(){
    console.log('Starting the server on port 5000');

});
 
