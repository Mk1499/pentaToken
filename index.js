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
        "api":"953aa15a-c4e1-4ef7-a8be-806eeaa8435a"
    })

})

let port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number); 
