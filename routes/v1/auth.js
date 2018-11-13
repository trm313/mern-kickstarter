const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/user");
const config = require("../../config");
const passportController = require("../../passport/passport.controller");
var router = express.Router();

/* GET auth  */
router.get("/", async (req, res) => {
  // let user = await UserModel.
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashCost = 3;

  try {
    const passwordHash = await bcrypt.hash(password, hashCost);
    const userDocument = new UserModel({ email, passwordHash });
    await userDocument.save();

    res.status(200).send({ email });
  } catch (error) {
    res.status(400).send({
      error: error
    });
  }
});

router.post("/login", (req, res) => {
  passport.authenticate("local", { session: false }, (error, user) => {
    if (error) {
      res.status(400).json({ error });
    }
    if (!user) {
      res.status(404).json({ error });
    }

    // JWT payload
    const payload = {
      _id: user._id,
      email: user.email,
      expires: Date.now() + parseInt(config.jwt_expiration_ms)
    };
    console.log("expires: ", payload.expires);
    // Assign payload to req.user
    req.logIn(payload, { session: false }, error => {
      if (error) {
        res.status(500).send({ error });
      }

      // Generate a signed jwt and return it in the response
      const token = jwt.sign(JSON.stringify(payload), config.secret);

      // Determine environment status to set security requirements
      let isSecureEnv = false;
      process.env.NODE_ENV === "production"
        ? (isSecureEnv = true)
        : (isSecureEnv = false);

      // Assign the jwt to the cookie
      res.cookie("jwt", token, {
        httpOnly: isSecureEnv,
        secure: isSecureEnv
      });
      res.status(200).send({ email: user.email, _id: user._id });
    });
  })(req, res);
});

router.post("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.status(200).send({ message: "Logged out successfully" });
});

// Setting up the passport middleware for each of the OAuth providers
const twitterAuth = passport.authenticate("twitter");
const googleAuth = passport.authenticate("google", { scope: ["profile"] });
const facebookAuth = passport.authenticate("facebook");
const githubAuth = passport.authenticate("github");

// Routes that are triggered by the callbacks from each OAuth provider once
// the user has authenticated successfully
router.get("/twitter/callback", twitterAuth, passportController.twitter);
router.get("/google/callback", googleAuth, passportController.google);
router.get("/facebook/callback", facebookAuth, passportController.facebook);
router.get("/github/callback", githubAuth, passportController.github);

// This custom middleware allows us to attach the socket id to the session
// With that socket id we can send back the right user info to the right
// socket
router.use((req, res, next) => {
  req.session.socketId = req.query.socketId;
  next();
});

// Routes that are triggered on the client
router.get("/twitter", twitterAuth);
router.get("/google", googleAuth);
router.get("/facebook", facebookAuth);
router.get("/github", githubAuth);

module.exports = router;
