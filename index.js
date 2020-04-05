const express = require('express'); 
const app = express();
const server = require("http").Server(app);
const cors = require("cors"); 
const bodyParser = require("body-parser"); 

app.use(bodyParser.json()); 
app.use(cors()); 


app.get("/", (req,res)=>{

    res.send("Hello From the other world")
})

app.get("/apiToken", (req,res)=>{

    res.send({
        "api":"kdmdksmf"
    })

})

server.listen(process.env.port || 3000 , ()=>{
    console.log("App Started Successfully");
    
})