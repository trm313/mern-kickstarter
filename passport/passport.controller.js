const jwt = require("jsonwebtoken");
const config = require("../config");

exports.universal = (req, res) => {
  const io = req.app.get("io");
  const user = req.user;
  console.log("auth user", user);

  // JWT payload
  const payload = {
    _id: user._id,
    email: user.email,
    expires: Date.now() + parseInt(config.jwt_expiration_ms)
  };

  io.in(req.session.socketId).emit("login", user);
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
    res.status(200).send({
      email: user.email,
      _id: user._id,
      profilePhoto: user.profilePhoto
    });
  });

  // res.end();
};

exports.twitter = (req, res) => {
  const io = req.app.get("io");
  const user = req.user;
  console.log("auth user", user);

  // JWT payload
  const payload = {
    _id: user._id,
    email: user.email,
    expires: Date.now() + parseInt(config.jwt_expiration_ms)
  };

  io.in(req.session.socketId).emit("twitter", user);
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
    res.status(200).send({
      email: user.email,
      _id: user._id,
      profilePhoto: user.profilePhoto
    });
  });

  // res.end();
};

exports.google = (req, res) => {
  const io = req.app.get("io");
  const user = req.user;
  console.log("auth user", user);

  // JWT payload
  const payload = {
    _id: user._id,
    email: user.email,
    expires: Date.now() + parseInt(config.jwt_expiration_ms)
  };

  io.in(req.session.socketId).emit("google", user);
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
    res.status(200).send({
      email: user.email,
      _id: user._id,
      profilePhoto: user.profilePhoto
    });
  });

  // res.end();
};

exports.facebook = (req, res) => {
  const io = req.app.get("io");
  const { givenName, familyName } = req.user.name;
  const user = {
    name: `${givenName} ${familyName}`,
    photo: req.user.photos[0].value
  };
  io.in(req.session.socketId).emit("facebook", user);
  res.end();
};

exports.github = (req, res) => {
  const io = req.app.get("io");
  const user = {
    name: req.user.username,
    photo: req.user.photos[0].value
  };
  io.in(req.session.socketId).emit("github", user);
  res.end();
};
