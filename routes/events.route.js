const express = require("express");
const Router = express.Router();

const {
  setEventSchedule,
  getAllEvents,
} = require("../controllers/events.controller");

Router.post("/set-schedule", setEventSchedule);

Router.get("/get-events", getAllEvents);

module.exports = Router;
