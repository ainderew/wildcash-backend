const express = require("express");
const Router = express.Router();
const db = require("../src/Database");
const verifyJWT = require("../middleware/verifyJWT");

Router.post("/acc-info", verifyJWT, (req, res) => {
  console.log("ACC-INFO");
  const userIdNumber = req.userIdNumber;

  const QS = `SELECT 
                accID,userIdNumber,accType,firstName, lastName, yearLevel, course, accPoints  
              FROM 
                tblAccount
              WHERE
                userIdNumber = ? 
              `;

  db(QS, [userIdNumber], (response) => {
    if (response instanceof Error) return res.sendStatus(500);

    console.log("the response it: " + response);
    res.json(response[0]);
  });
});

module.exports = Router;
