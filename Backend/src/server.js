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

app.get('/notes',async function(req,res){
    const notes=await note.find();
    res.json(notes);
 });

app.get('/notes/:userid',async function(req,res){
    const notes=await note.find({userid:req.params.userid});
    res.json(notes);
 });


app.post('/note/add',async function(req,res){
  const newNote=new Note(

        {
            id:req.body.id,
            userid:req.body.userid,
            title:req.body.title,
            content:req.body.content
        }
    );

    await newNote.save();

const response={message:"New note created !!!"+`id:${req.body.id}`}
    res.json(response);

   

    
});




app.post('/note/delete',async function(req,res){
    
      await note.deleteOne({id:req.body.id});
  
  const response={message:"Note Deleted !!!"+`id:${req.body.id}`}
      res.json(response);
  
     
  
      
  });



  app.post('/note/delete',async function(req,res){
    
    await note.de

const response={message:"Note Deleted !!!"+`id:${req.body.id}`}
    res.json(response);

   

    
});

 
});

//Starting the server on port 5000
app.listen(5000,function(){
    console.log('Starting the server on port 5000');

});
 
