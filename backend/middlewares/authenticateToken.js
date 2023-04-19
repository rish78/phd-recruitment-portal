const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === null) return res.status(401).json({ msg: "Not Authorized" });
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err){
        console.log(err);
        return res.status(401).json({ msg: err });
        
      } 
      req.userid = user.userid;
      next();
    });
};

module.exports = { authenticateToken };