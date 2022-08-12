const redis = require("redis");
const { REDIS_IP, REDIS_PORT } = require("../config");

module.exports = redis.createClient({
    port: REDIS_PORT,
    host: REDIS_IP
})