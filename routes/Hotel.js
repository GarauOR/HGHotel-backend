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
HGRouter.put("/adminroom/:id", HGHandlers.adminUpdRoomHandler);
HGRouter.get("/booking", HGHandlers.getBookingHandler);
HGRouter.post("/booking", HGHandlers.addBookingHandler);
HGRouter.delete("/booking/:id", HGHandlers.delBookingHandler);
module.exports = HGRouter; 