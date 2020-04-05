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
        "api":"76524d19-105b-4e34-a63e-58bd245f72be"
    })

})

let port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number); 
