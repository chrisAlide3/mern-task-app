// this file has to be required in server.js and added as a middleware
const express = require("express");
const Task = require("../model/taskModel");

const router = express.Router();

// Routes
// -----------------------------------
router.get("/", (req, res) => {
  res.send("Home Page");
});

// Create Task (the first argument after the route is a middleware (optional)). The middleware has access to the req, res and next Object
router.post("/api/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Get/Read all tasks
router.get("/api/tasks", async (req, res) => {
  try {
    // find function with no arguments will return all datas
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
