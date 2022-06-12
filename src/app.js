
const cors = require("cors")
const express = require("express");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000;
const db = require("./Database")

// ROUTE IMPORTS
const route_Events = require("../routes/events.route");
const route_Points = require("../routes/points.route");

app.get("/" ,(req,res) =>{
    db("SELECT * from tblAccount",[],(result)=>{
        console.log(result);
        res.json(result)
    });
    
})

app.listen(PORT, () =>{
    console.log(`success! connected at port: ${PORT}`);
})

// ROUTES
app.use("/event", route_Events);
app.use("/points", route_Points)
