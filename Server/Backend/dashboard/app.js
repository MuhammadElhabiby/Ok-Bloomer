require('dotenv').config();
const express = require('express');
const apiRouter = require('./router/apiRouter');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const User = require('./models/user');
const mqttHandler = require('./mqtt/mqttHandler');
const cors = require("cors");
const box = require('./models/box');
var bodyParser = require('body-parser');
const plant = require('./models/plant');
const checkauth = require('./middleware/check-auth');
const plantData = require('./models/plantData');
const plantProfile = require('./models/plantProfile');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URI);

box.findOne({}, function (err, foundBox) {
  if (foundBox == null) {
    let testPlant = new plant({ name: 'Test Plant', data: [] });
    testPlant.save();
    let testPlantProfile = new plantProfile({
      name: 'Test Profile',
      minWaterTemp: 22,
      maxWaterTemp: 26,
      minAirTemp: 18,
      maxAirTemp: 25,
      minHumidity: 60,
      maxHumidity: 100,
      lightNeededPerDay: 16,
      minTdsWert: 640,
      maxTdsWert: 1152
    });
    testPlantProfile.save();
    let testBox = new box({ name: 'Test Box', plant: testPlant, profile: testPlantProfile });
    testBox.save();
  }
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "GET , POST, PATCH ,PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/images', checkauth, express.static('public-images'));
app.use('/images', checkauth, express.static('public-images-frontend'));
app.use('/api', apiRouter);

app.use(session({
  secret: 'Bloomer',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', express.static('public'));

app.listen(process.env.SERVER_PORT);

module.exports = app;
