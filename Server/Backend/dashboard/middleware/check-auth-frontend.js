require('dotenv').config();

module.exports = (req, res, next) =>{
  if(process.env.CHECK_AUTH !== 'true') {
    next();
  } else {
    const auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [username, password] = Buffer.from(auth, 'base64').toString().split(':');
    if(username && password && username === process.env.SERVER_USERNAME && password === process.env.SERVER_PASSWORD) {
      return next();
    }
    res.setHeader('www-authenticate', 'Basic');
    res.sendStatus(401);
  }
};
