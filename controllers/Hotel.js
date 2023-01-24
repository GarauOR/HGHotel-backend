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
  const { number, description, price, dates } = req.body;
  await makeupModel.findByIdAndUpdate(id, {
    number,
    description,
    price,
    dates,
  });

  let allRooms = await roomModel.find({});
  res.status(200).send(allRooms);
}

async function addRoomHandler(req, res) {
  let dates = [];

  const startDate = new Date("2023-02-01");
  const endDate = new Date("2023-02-28");

  const loadDates = (start,end)=> {
    let dateLoader = new Date(start);

    while (dateLoader <= end) {
      let sliceDate = new Date(dateLoader).toISOString().slice(0,10);
      dates.push({date:sliceDate, isBooked:false});
      dateLoader.setDate(dateLoader.getDate()+1);
    }
  };

  loadDates(startDate,endDate);

  let { number, description, price } = req.body;
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
