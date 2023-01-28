'use strict';

const mongoose = require("./index");

const roomSchema = new mongoose.Schema({
    number: Number,
    description: String,
    price: Number,
    dates: Array,
});

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;