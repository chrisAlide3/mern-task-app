const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

// initialise express
const app = express();
// Set the port from .env when deploying to heroku or other hosters
const PORT = process.env.PORT || 5000;

// mongoose call is asynchronous so no need of an async function
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Routes

app.get("/", (req, res) => {
  res.send("Home Page");
});
