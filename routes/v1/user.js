const express = require("express");
const passport = require("passport");

const User = require("../../models/user");

var router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { user } = req;

    if (!user) res.status(401).send({ error: 404, message: "User not found" });

    User.findById(user._id, (err, user) => {
      if (err) res.status(401).send({ error: 404, message: "User not found" });

      res.status(200).send({ user });
    });
  }
);

module.exports = router;
