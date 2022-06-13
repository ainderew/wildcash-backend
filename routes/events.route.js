const { response } = require("express");
const express = require("express");
const Router = express.Router();

const {
  setEventSchedule,
  getAllEvents,
} = require("../controllers/events.controller");
const db = require("../src/Database");

Router.post("/set-schedule", setEventSchedule);

Router.get("/get-events", getAllEvents);

Router.post("/attendance", (req,res) =>{
  const {studentIdNumber, eventID} = req.body
  console.log(req.body)

  const QS = `INSERT INTO tblAttendance (studentIdNumber, eventID) VALUES (?,?);`

  db(QS,[studentIdNumber,eventID],(response) =>{
    if(response instanceof Error) return res.sendStatus(500)
    console.log("inserted into attendance ")
    const QS_event = `SELECT eventPoints FROM tblEvents WHERE eventID = ?`

    db(QS_event, [eventID], (response) =>{
      if(response instanceof Error) return res.sendStatus(500)
      console.log("queried event points")
      
      const QS_update = `UPDATE tblAccount SET accPoints = (accPoints + ?) WHERE userIdNumber = ?`
      db(QS_update, [response[0].eventPoints, studentIdNumber], (response) =>{
        if(response instanceof Error) return res.sendStatus(500)

        res.json({"status": "ok"})
      })
    })
  })
})

module.exports = Router;
