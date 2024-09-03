require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{
  if(process.env.CHECK_AUTH === 'true') {
    try{
      let token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, "secret_this_should_be_longer");
      next();
    } catch (error){
      res.status(401).json({ message: "Auth failed!"});
    }
  } else {
    next();
  }
};
