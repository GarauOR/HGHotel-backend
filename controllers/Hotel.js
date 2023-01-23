"use strict";

const axios = require("axios");
const roomModel = require("../models/Hotel");
const API_KEY = process.env.API_KEY;

function homeHandler(req, res) {
  res.status(200).send("BASE URL");
}

async function getRoomsHandler(req, res) {
  let allRoomsData = await roomModel.find({});
  res.status(200).send(allRoomsData);
}

async function getWeatherHandler(req, res) {
  const weatherRes = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=York,units=metric&uk&APPID=${API_KEY}`
  );
  res.status(200).send(weatherRes.data);
}

async function delRoomHandler(req, res) {
  const { id } = req.params;
  await roomModel.findByIdAndDelete(id);

  let allRooms = await makeupModel.find({});
  res.status(200).send(allRooms);
}

async function updRoomHandler(req, res) {
  const { id } = req.params;
  const { name, brand, price, imageUrl, description } = req.body;
  await makeupModel.findByIdAndUpdate(id, {
    number,
    description,
    price,
    dates,
  });

  let allRooms = await roomModel.find({});
  res.status(200).send(allRooms);
}

// Date input yyyy-mm-dd
async function addRoomHandler(req, res) {
  let { number, description, price, dates } = req.body;
  await roomModel.create({
    number,
    description,
    price,
    dates,
  });

  let allRooms = await roomModel.find({});
  res.status(200).send(allRooms);
}

module.exports = {
  homeHandler,
  getWeatherHandler,
  getRoomsHandler,
  delRoomHandler,
  updRoomHandler,
  addRoomHandler,
};
