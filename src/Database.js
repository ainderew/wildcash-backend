const mysql = require("mysql2");
require("dotenv").config();

console.log(process.env.PASSWORD)

const options = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    ssl:{}
}

const connection = mysql.createConnection(options);

connection.connect((err)=>{
    if(err){
        console.error('error connecting: ' + err.stack)
        return;
    }

    console.log("connected as id: " + connection.threadId);
});


