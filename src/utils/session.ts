const RedisStore = require("./session/store");
const redisClient = require("./session/client");
const { SESSION_SECRET } = require("./config");

module.exports = require("express-session")({
    store: new RedisStore({client: redisClient}),
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false, 
    cookie: {
        secure: false, // if true: only transmit cookie over https
        httpOnly: true, // if true: prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 30, // session max age in milliseconds
        sameSite: 'lax' // make sure sameSite is not none
    }
})