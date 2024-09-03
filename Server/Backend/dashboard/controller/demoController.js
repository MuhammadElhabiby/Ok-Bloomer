const plantData = require('../models/plantData');
const plant = require('../models/plant');

const generate = (req, res, next) => {
  plant.findOne({}, function(err, foundPlant) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error while finding plant (generate demo data)" });
    }
    else {
      for (let index = 1; index < 31; index++) {
        let interval = 15;
        for (let j = 0; j < (24 * 60) / interval; j++) {
          let date = new Date();
          date.setDate(index);
          date.setTime(date.getTime() + j * 1000 * 60 * interval);
          date = date.toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
          let data = new plantData({
            date: date,
            tempAir: Math.random() * (25 - 18) + 18,
            tempWater: Math.random() * (26 - 22) + 22,
            humidity: Math.random() * (100 - 60) + 60,
            light: true,
            tds: Math.random() * (1152 - 640) + 640
          });
          foundPlant.data.push(data);
          data.save();
        }
      }
      foundPlant.save();
      res.status(200).send("Done");
    }
  });
};

module.exports = { generate };
