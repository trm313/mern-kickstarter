module.exports = {
  db_uri: process.env.MONGODB_URI || "mongodb://localhost:27017/mern-starter",
  secret: process.env.JWT_SECRET || "yoursecretissafe",
  jwt_expiration_ms: process.env.JWT_EXPIRATION_MS || 604800000
};
