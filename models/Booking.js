'use strict';

const mongoose = require("./index");

const bookingSchema = new mongoose.Schema({
    description: String,
    checkin: String,
    checkout: String,
    username: String,
});

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;