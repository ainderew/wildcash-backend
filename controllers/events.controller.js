const db = require("../src/Database");

const setEventSchedule = (req, res) => {
  const {
    eventName,
    eventMonth,
    eventDay,
    eventYear,
    startTime,
    endTime,
    eventPoints,
    eventDescription,
  } = req.body;

  console.log(req.body);

  const queryString = `INSERT INTO 
          tblEvents (eventName, eventMonth, eventDay, eventYear, startTime, endTime, eventPoints, eventDescription) 
      VALUES (?,?,?,?,?,?,?,?)`;

  db(
    queryString,
    [
      eventName,
      eventMonth,
      eventDay,
      eventYear,
      startTime,
      endTime,
      eventPoints,
      eventDescription,
    ],
    (result) => {
      console.log(result);
      res.json(result.insertId);
    }
  );
};

const getAllEvents = (req, res) => {
  console.log("hit");
  const queryString = `SELECT eventID, eventName, eventMonth, eventDay, startTime, endTime, eventPoints FROM tblEvents`;

  db(queryString, [], (response) => {
    if (response instanceof Error) {
      return res.sendStatus(500);
    }

    res.json(response);
  });
};

module.exports = { setEventSchedule, getAllEvents };
