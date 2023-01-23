'use strict';

const express = require('express');
const HGRouter = express.Router();
const HGHandlers = require('../controllers/Hotel');

HGRouter.get("/", HGHandlers.homeHandler);
HGRouter.get("/weather", HGHandlers.getWeatherHandler);
HGRouter.get("/room", HGHandlers.getRoomsHandler);
HGRouter.post("/room", HGHandlers.addRoomHandler);
HGRouter.delete("/room/:id", HGHandlers.delRoomHandler);
HGRouter.put("/room/:id", HGHandlers.updRoomHandler);

module.exports = HGRouter; 