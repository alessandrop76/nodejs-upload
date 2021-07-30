const express = require('express');
const app = express();
const multer = require('multer');   //é um middleware de upload
const path = require('path');



app.set("view engine", "ejs");

//Static Files - public css
app.use(express.static('public'));


//Recebendo o arquivo com o nome original acrescido de hora atual e milesegundos para não ter duplicidade no nome
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"uploads/");
     },
     filename: function (req, file, cb){
         cb(null, file.originalname + Date.now());
   
     }
})

const upload = multer({storage});
//const upload = multer({dest: "uploads/"});


app.get('/',(req,res)=>{
    res.render("index");
})

app.post('/upload',upload.single("file"),(req,res) =>{
    res.send("arquivo recebido");
})



port = 5000
app.listen(port, () =>{
    console.log("Server listen on: "+ port)
});