const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const BoxSchema = new Schema({
  name : {
    type : String,
    required : true,
    unique : true
  },
  profile : {
    type : ObjectId,
    ref : 'PlantProfile'
  },
  plant : {
    type : ObjectId,
    ref : 'Plant'
  },
  images : [{
    type : ObjectId,
    ref : 'Image'
  }],
  lastCommand : {
    type : String
  },
  user : [{
    type : ObjectId,
    ref : 'User'
  }]
});

module.exports = mongoose.model('Box', BoxSchema);
