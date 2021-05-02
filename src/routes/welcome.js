
const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome to My Foods",
    status: 200,
    createdBy: "Fatimatuzzahro"
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;