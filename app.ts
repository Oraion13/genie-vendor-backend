import express, { Application, Request, Response } from "express";
const mongoose = require("mongoose");
const { MONGO_IP, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD } = require("./config/config");

// create a express app
const app: Application = express();

// conect to db
const mongoURL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
mongoose.connect(mongoURL).then(() => {
    console.log("Connected to DB");
}).catch((error: any) => {
    console.error(error)
})
// to parse body (inputs)
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World, new")
})


module.exports = app;