const passport = require('passport');
const User = require('../models/user');
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  User.findOne({email: req.body.email}, function (err, foundUser) {
    if(err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else if (foundUser === null) {
      User.register(new User({ email: req.body.email }), req.body.password, function(err) {
        if (err) {
          console.log('error while user register!', err);
          res.status(500).json({ error: err });
          return next(err);
        } else {
          console.log('Created user');
          res.status(201).json({ message: 'User created!' });
        }
      });
    } else {
      res.status(403).json({ error: 'User already exists!' });
    }
  });
}

const authenticate = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err)
            console.log(err.message);
            return res.status(400).json(err);
        }
        else if (user) {
            const token = jwt.sign({ email: user.email, userId: user._id },
                "secret_this_should_be_longer", { expiresIn: "1h" });
            return res.status(200).json({ "token": token,
          expiresIn:"3600" });
        }
        else return res.status(404).json(info);
    })(req, res);
}

module.exports = { register, authenticate }
