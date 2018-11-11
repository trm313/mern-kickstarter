const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require("bcryptjs");

const config = require("../config");

const UserModel = require("../models/user");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  async (email, password, done) => {
    try {
      const userDocument = await UserModel.findOne({
        email: email.trim()
      }).exec();
      const passwordsMatch = await bcrypt.compare(
        password.trim(),
        userDocument.passwordHash
      );

      if (passwordsMatch) {
        return done(null, userDocument);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      done(error);
    }
  }
);
