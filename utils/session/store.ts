const session = require("express-session");
const connectRedis = require("connect-redis");

module.exports = connectRedis(session);