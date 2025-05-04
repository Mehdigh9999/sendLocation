const express = require("express");
const path = require("path");
const app = express();

const gpsModel = require('../models/gps');

exports.renderLocatePage = (req, res, next) => {
  res.render(path.join(__dirname, "../views/locate.ejs"));
};

exports.receiveLocation = (req, res, next) => {
  const { latitude, longitude } = req.body;
  const address = req.body.address;
  gpsModel.receiveLocation(latitude, longitude, address);
  res.json({ message: "Location received" });
};
