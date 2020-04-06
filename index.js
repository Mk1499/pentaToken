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
        "api":"04393172-f7cd-4adc-9048-7a18a9f47d20"
    })

})

let port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number); 
