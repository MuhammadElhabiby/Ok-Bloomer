const box = require('../models/box');
const plant = require('../models/plant');
const Plant = require('../models/plant');
const plantData = require('../models/plantData');

const getData = (req, res, next) => {
  box.findOne({}, function (err, foundBox) {
    if(err || foundBox == null) {
      console.log(err);
      res.status(404).json({ error: 'Box not found!' });
    } else {
      plant.findOne({'_id': foundBox.plant}, function (err, foundPlant) {
        if(err || foundPlant == null) {
          console.log(err);
          res.status(404).json({ error: 'Plant not found!' });
        } else {
          plantData.find({ '_id' : { $in : foundPlant.data } }, function (err, foundPlantData) {
            if(err || foundPlantData == null) {
              console.log(err);
              res.status(404).json({ error: 'Plant Data not found!' });
            } else {
              res.send(foundPlantData);
            }
          });
        }
      });
    }
  });
}

module.exports = { getData };
