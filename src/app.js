
const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./Database")

const PORT = process.env.PORT || 9000;

app.get("/" ,(req,res) =>{
    db((result)=>{
        console.log(result);
        res.json(result)
    });
    
})

app.listen(PORT, () =>{
    console.log(`success! connected at port: ${PORT}`);
})