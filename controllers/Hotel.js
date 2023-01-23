"use strict";

const axios = require("axios");
// const roomModel = require("../models/Hotel");
const API_KEY = process.env.API_KEY;

function homeHandler(req, res) {
  res.status(200).send("BASE URL");
}

async function getWeatherHandler(req, res) {
  const weatherRes = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=York,units=metric&uk&APPID=${API_KEY}`
  );
  res.status(200).send(weatherRes.data);
}

module.exports = {
  homeHandler,
  getWeatherHandler,
};
