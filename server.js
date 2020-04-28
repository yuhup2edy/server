const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

// start the server
const app = express();

//allow for parsing the HTML request
app.use(bodyParser.json());

//allow for server to start and listen at specific PORT
app.use(cors());

//simple get request 
app.get('/',function(req,res)
{
    res.send('Hello from the server');
})

//post request from the application
app.post('/submitRar',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"data received success"});
    //res.send("Thank you for your submission");
    //res.sendFile()
})

app.listen(PORT,function(){
    console.log("Server running successfully on port " + PORT);
});