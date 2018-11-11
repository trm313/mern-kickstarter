require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var helmet = require("helmet");
var enforce = require("express-sslify");
var passport = require("passport");

var config = require("./config");

// Connect to db and load models
require("./models").connect(config.db_uri);

var app = express();

if (process.env.NODE_ENV === "production") {
  console.log("Production env, enforcing SSL connections");
  // app.use(enforce.HTTPS({ trustedProtoHeader: true }));
} else {
  console.log("Environment: ", process.env.NODE_ENV);
}

app.use(helmet());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());

const localLoginStrategy = require("./passport/local-login");
const jwtStrategy = require("./passport/jwt-from-req");
passport.use("local", localLoginStrategy);
passport.use("jwt", jwtStrategy);

app.use(express.static(path.join(__dirname, "client/build")));

const authRoutes = require("./routes/v1/auth");
app.use("/v1/auth", authRoutes);

const userRoutes = require("./routes/v1/user");
app.use("/v1/user", userRoutes);

module.exports = app;
