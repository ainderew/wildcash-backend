const express = require("express");
const Router = express.Router();

const db = require("../src/Database");
const { getDate } = require("../components/dateHelper");

Router.post("/send", (req, res) => {
  const { senderID, receiverID, points } = req.body;
  console.log(req.body);
  const dateNow = getDate();
  console.log(dateNow);

  const QS = `INSERT INTO tblTransactionRecords (transactionDate, senderID, receiverID, sentAmount) values (?,?,?,?)`;
  db(QS, [dateNow, senderID, receiverID, points], (response) => {
    if (response instanceof Error) {
      console.error("Error at transaction Records " + response);
    }

    // const QS = `UPDATE tblAccount SET accPoints = (accPoints + ?) WHERE userIdNumber = ?;
    //             UPDATE tblAccount SET accPoints = (accPoints - ?) WHERE userIdNumber = ?;

    //     `;

    //     db(QS, [points, receiverID, points, senderID], (response) => {
    //         if (response instanceof Error) {
    //           console.error("Error at account points deduction and addition "+response);
    //           res.sendStatus(401);
    //         }

    //         res.json(response);
    //       });

    const QS_receiver = `UPDATE tblAccount SET accPoints = (accPoints + ?) WHERE userIdNumber = ?`;

    db(QS_receiver, [points, receiverID], (response) => {
      console.log(response);
      if (response instanceof Error) {
        console.error(
          "Error at account points deduction and addition " + response
        );
        res.sendStatus(401);
      }
    });

    const QS_sender = ` UPDATE tblAccount SET accPoints = (accPoints - ?) WHERE userIdNumber = ?`;
    db(QS_sender, [points, senderID], (response) => {
      if (response instanceof Error) {
        console.error(
          "Error at account points deduction and addition " + response
        );
        res.sendStatus(401);
      }
    });

    res.json({ status: "success" });
    // res.sendStatus(200,{
    //     status: "success"
    // })
    return;
  });
});

module.exports = Router;
