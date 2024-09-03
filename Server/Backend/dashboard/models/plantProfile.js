const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantProfileSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  minWaterTemp : {
    type: Number
  },
  maxWaterTemp: {
    type: Number
  },
  minAirTemp: {
    type: Number
  },
  maxAirTemp: {
    type: Number
  },
  minHumidity: {
    type: Number
  },
  maxHumidity: {
    type: Number
  },
  lightNeededPerDay: {
    type: Number
  },
  minTdsWert: {
    type: Number
  },
  maxTdsWert: {
    type: Number
  }
});

module.exports = mongoose.model('PlantProfile', PlantProfileSchema);
