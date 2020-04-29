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
    //res.status(200).send({"message":"data received success return from the express server"});
    res.writeHead(200, {"Content-Type": "application/json"});
    
    var sampleArray = ["Array Item 01", "Array Item 02"];
    var sampleObject = { item1: "venkatS", item2: "sriram.venkataramani@trgc.com" };
    var json = JSON.stringify({ 
    
    anObject: sampleObject, 
    anArray: sampleArray, 
    another: "TFS"
  });
  res.end(json);
  })

app.listen(PORT,function(){
    console.log("Server running successfully on port " + PORT);
});