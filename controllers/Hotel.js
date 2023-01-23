"use strict";

const axios = require("axios");

function homeHandler(req, res) {
  res.status(200).send("BASE URL");
}

module.exports = {
  homeHandler,
};
