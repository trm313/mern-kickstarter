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
    return UserModel.findOne({ email: email.trim() }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        const error = new Error("Incorrect email or password");
        error.name = "IncorrectCredentialsError";

        return done(error);
      }
      if (!user.passwordHash) {
        const error = new Error(
          "No password stored, login via social provider"
        );
        error.name = "NoPasswordStored";
        return done(error);
      }

      return user.comparePassword(password, (passwordErr, isMatch) => {
        if (err) {
          return done(err);
        }

        if (!isMatch) {
          const error = new Error("Incorrect email or password");
          error.name = "IncorrectCredentialsError";
          return done(error);
        }

        return done(null, user);
      });
    });
  }
);
