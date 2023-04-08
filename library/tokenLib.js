const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function verifyToken(req, res, next) {
  var token = req?.headers?.token?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "you are not authorize access this page",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      err = {
        name: "TokenExpiredError",
        message: JSON.stringify(err),
      };

      res.status(404).json({
        err,
      });
    } else {
      req.session.profile = decoded;
      console.log(" LOGIN ==> ", decoded, req.session.profile);
      next();
    }
  });
}

module.exports = {
  verifyToken,
};
