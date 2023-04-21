const jwt = require("express-jwt");
const { secret } = require("../config");

function authenticateJwt(req, res, next) {
  // Verify JWT and add user to req.user
  jwt({
    secret,
    algorithms: ["HS256"],
  })(req, res, next);
}

module.exports = authenticateJwt;
