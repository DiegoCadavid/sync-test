const express = require("express");
const syncRouter = express.Router();

syncRouter.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("ok");
});

module.exports = syncRouter;
