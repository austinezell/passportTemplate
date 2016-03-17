module.exports = {
  SECRET: (process.env.SECRET || "Secret"),
  MONGO_URL: (process.env.MONGO_URL || process.env.MONGOLAB_URI || "mongodb://localhost/test"),
  PORT: (process.env.PORT || 3000)
}
