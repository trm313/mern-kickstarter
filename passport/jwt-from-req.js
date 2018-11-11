const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const config = require("../config");

// Switch to using the Auth header?
// How can i access cookie from client-side to insert to ajax header?

var cookieExtractor = function(req) {
  var token = null;
  if (req && req.cookies) token = req.cookies["jwt"];
  return token;
};

module.exports = new JWTStrategy(
  {
    jwtFromRequest: cookieExtractor,
    secretOrKey: config.secret
  },
  (jwtPayload, done) => {
    if (jwtPayload.expires < Date.now()) {
      return done("jwt expired");
    }
    return done(null, jwtPayload);
  }
);
