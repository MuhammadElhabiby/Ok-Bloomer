const box = require("../models/box");
const image = require("../models/image");

const getImages = (req, res, next) => {
  box.findOne({}, function (err, foundBox) {
    if(err || foundBox == null) {
      console.log(err);
      res.status(500).json({ error: 'No box found!' });
    } else {
      image.find({ '_id' : { $in : foundBox.images } }, function (err, images) {
        if(err || images == null) {
          console.log(err);
          res.status(500).json({ error: 'No images found!' });
        } else {
          res.send(images);
        }
      });
    }
  });
};

const addImageNote = (req, res, next) => {
  let name = req.body.name;
  let note = req.body.note;
  image.findOneAndUpdate({name: name}, {note: note}, function (err, succ) {
    if(err) {
      console.log(err);
      res.status(404).json({ error: 'Image not found!' });
    } else {
      res.status(200).json({ message: 'Note added!' });
    }
  });
}

module.exports = {getImages,addImageNote};
