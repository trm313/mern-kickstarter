const providers = ["twitter", "google", "facebook", "github"];

const callbacks = providers.map(provider => {
  return `${process.env.API_URL}/v1/auth/${provider}/callback`;
});

const [twitterURL, googleURL, facebookURL, githubURL] = callbacks;

exports.CLIENT_ORIGIN = process.env.CLIENT_URL;

exports.TWITTER_CONFIG = {
  consumerKey: process.env.TWITTER_CLIENT_ID,
  consumerSecret: process.env.TWITTER_CLIENT_SECRET,
  callbackURL: twitterURL,
  includeEmail: true,
  passReqToCallback: true
};

exports.GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: googleURL
};

exports.FACEBOOK_CONFIG = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  profileFields: ["id", "emails", "name", "picture.width(250)"],
  callbackURL: facebookURL
};

exports.GITHUB_CONFIG = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: githubURL
};
