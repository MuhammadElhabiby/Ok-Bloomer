const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const PlantSchema = new Schema({
    name : {
      type : String,
      required : true
    },
    data : [{
      type : ObjectId,
      ref : 'PlantData'
    }]
});

module.exports = mongoose.model('Plant', PlantSchema);
