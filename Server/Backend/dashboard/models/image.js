const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    date : {
      type : String,
      required : true
    },
    name : {
      type : String,
      required : true
    },
    note : {
      type : String
    }
});

module.exports = mongoose.model('Image', ImageSchema);
