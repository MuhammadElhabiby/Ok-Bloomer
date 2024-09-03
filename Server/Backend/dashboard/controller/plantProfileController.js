const box = require("../models/box");
const plantProfile = require("../models/plantProfile");
const mqttHandler = require('../mqtt/mqttHandler');

const updatePreset = async (req, res, next) => {
  try {
    const filter = req.body.name;
    const update = req.body;
    let p = await plantProfile.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true
    });
    res.status(200).json({ message: 'Preset updated!' });
    mqttHandler.sendPlantProfile(p);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getPresets = async (req, res, next) => {
  await plantProfile.find({}, function (err, profile) {
    if (err || profile == null) {
      console.log('error while getting presets!', err);
      res.status(500).json({ error: err });
      return next(err);
    } else {
      res.send(profile);
    }
  }).clone().catch(function (err) { console.log(err) });;
};

module.exports = { getPresets, updatePreset };
