const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantDataSchema = new Schema({
  date : {
    type : String,
    required : true
  },
  tempAir : {
    type : Number
  },
  tempWater : {
    type : Number
  },
  humidity : {
    type : Number
  },
  light : {
    type : Boolean
  },
  tds : {
    type : Number
  }
});

module.exports = mongoose.model('PlantData', PlantDataSchema);
