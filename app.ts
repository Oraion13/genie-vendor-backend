import express, { Application, Request, Response } from "express";
const mongoose = require("mongoose");
const { MONGO_IP, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD } = require("./utils/config");
const logger = require("./utils/logger");
const { requestLogger } = require("./utils/middleware")
const session = require("./utils/session");

// create a express app
const app: Application = express();

// conect to db
logger.info("connecting to DB...");

const mongoURL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
mongoose.connect(mongoURL).then(() => {
    logger.info("Connected to DB");
}).catch((error: any) => {
    logger.error(error)
})
// to parse body (inputs)
app.use(express.json());

// logger middleware
app.use(requestLogger);

// session middleware
app.use(session)


// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World, new")
})


module.exports = app;