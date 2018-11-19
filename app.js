require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
var logger = require("morgan");
var helmet = require("helmet");
var enforce = require("express-sslify");
var passport = require("passport");
var http = require("http");
var config = require("./config");
const cors = require("cors");
const socketio = require("socket.io");

const passportInit = require("./passport/passport.init");

// Connect to db and load models
require("./models").connect(config.db_uri);

var app = express();
var server = http.createServer(app);

const io = socketio(server);
app.set("io", io);

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
passportInit();

app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

/* FROM TUTORIAL: https://itnext.io/react-authentication-with-twitter-2f6b7b0ee9d2 */
/*

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

const { Strategy: TwitterStrategy } = require("passport-twitter");
// Basic setup with passport and Twitter
const TWITTER_CONFIG = {
  consumerKey: process.env.TWITTER_CLIENT_ID,
  consumerSecret: process.env.TWITTER_CLIENT_SECRET,
  // make sure the callbackUrl matches what was set on Twitter
  // when registering the app
  callbackURL: "http://localhost:3001/v1/auth/twitter/callback"
};

passport.use(
  new TwitterStrategy(
    TWITTER_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
      // save the user right here to a database if you want

      const user = {
        name: profile.username,
        photo: profile.photos[0].value.replace(/_normal/, "")
      };
      console.log("twitterUser: ", user);
      cb(null, user);
    }
  )
);

// Middleware that triggers the PassportJS authentication process
const twitterAuth = passport.authenticate("twitter");

// This custom middleware picks off the socket id (that was put on req.query)
// and stores it in the session so we can send back the right info to the
// right socket
const addSocketIdToSession = (req, res, next) => {
  req.session.socketId = req.query.socketId;
  console.log("session", req.session);
  next();
};

// This is endpoint triggered by the popup on the client which starts the whole
// authentication process
app.get("/v1/auth/twitter", addSocketIdToSession, twitterAuth);

// This is the endpoint that Twitter sends the user information to.
// The twitterAuth middleware attaches the user to req.user and then
// the user info is sent to the client via the socket id that is in the
// session.
app.get("/v1/auth/twitter/callback", twitterAuth, (req, res) => {
  io.in(req.session.socketId).emit("user", req.user);
  console.log("emitting user", req.user);
  res.end();
});
*/

/* END TUTORIAL ADDITIONS */

const localLoginStrategy = require("./passport/local-login");
const jwtStrategy = require("./passport/jwt-from-req");
passport.use("local", localLoginStrategy);
passport.use("jwt", jwtStrategy);

/*
const googleStrategy = require("./passport/google");
passport.use("google", googleStrategy);
*/

app.use(express.static(path.join(__dirname, "client/build")));

const authRoutes = require("./routes/v1/auth");
app.use("/v1/auth", authRoutes);

const userRoutes = require("./routes/v1/user");
app.use("/v1/user", userRoutes);

// module.exports = app;
var port = normalizePort(process.env.PORT || "3001");
app.set("port", port);
server.listen(port, () => {
  console.log("Server running on port " + port + "...");
});
