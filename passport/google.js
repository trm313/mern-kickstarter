/*
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const config = require("../config");

module.exports = new GoogleStrategy(
  {
    clientID: config.authenticationServices.google.clientID,
    clientSecret: config.authenticationServices.google.clientSecret,
    callbackURL: config.authenticationServices.google.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    var userData = {
      email: profile.emails[0].value,
      name: profile.displayName,
      token: accessToken
    };
    // Save user here

    console.log("userData", userData);
    done(null, userData);
  }
);
*/
