
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 9000;

app.get("/" ,(req,res) =>{
    res.json({
        code: 200,
        status: "connected"
        
    })
})

app.listen(PORT, () =>{
    console.log(`success! connected at port: ${PORT}`);
})