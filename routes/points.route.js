const express = require("express")
const Router = express.Router();

const { db } = require("../src/Database")
const { getDate } = require("../components/dateHelper")

Router.post("/send", (req, res) => {
    const { senderID, recieverID, points } = req.body
    const dateNow = getDate();


    const QS = `INSERT INTO tblTransactionRe-ords (transactionDate, senderID, receiverID, sentAmount) values (?,?,?,?)`
        ;
    db(QS, [dateNow, senderID, recieverID, points], (response) => {
        if (response instanceof error) {
            console.error(response)
        }


        const QS = `UPDATE tblAccount SET accPoints = (accPoints + ?) WHERE accID = ?;
                    UPDATE tblAccount SET accPoints = (accPoints - ?) WHERE accID = ?;  
        
        `

        db(QS, [points, recieverID, points, senderID], (response) => {
            if (response instanceof error) {
                console.error(response)
            }

            res.json(response)
        })
        return;
    })






})



module.exports = Router;