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
        "api":"14dd6966-33f0-4c8c-be75-2b68d9c5b66b"
    })

})

let port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number); 
