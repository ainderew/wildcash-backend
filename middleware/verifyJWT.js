const jwt = require("jsonwebtoken")
require("dotenv").config();


const verifyJWT = (req,res,next) =>{
    console.log("VERIFYING JWT...")
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.sendStatus(401);


    const token = authHeader.split(" ")[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) =>{
            
            if (err) return res.json(err);
            // if (err) return res.sendStatus(403);
            req.userIdNumber = decoded.userIdNumber
            next();
        }
    )
}

module.exports = verifyJWT;