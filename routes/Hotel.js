'use strict';

const express = require('express');
const HGRouter = express.Router();
const HGHandlers = require('../controllers/Hotel');

HGRouter.get("/", HGHandlers.homeHandler);
HGRouter.get("/weather", HGHandlers.getWeatherHandler);
HGRouter.get("/room", HGHandlers.getRoomsHandler);
// HGRouter.get("/productbybrand", HGHandlers.prodByBrandHandler);
// HGRouter.post("/product", HGHandlers.addProdHandler);
// HGRouter.delete("/product/:id", HGHandlers.delProdHandler);
// HGRouter.put("/product/:id", HGHandlers.updProdHandler);

module.exports = HGRouter; 