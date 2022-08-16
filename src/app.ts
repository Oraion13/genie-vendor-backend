import express, { Application, Request, Response } from "express";
const logger = require("./utils/logger");
const { requestLogger } = require("./utils/middleware")
const session = require("./utils/session");

// Routers
const vendorRouter = require("./controllers/vendor");

// create a express app
const app: Application = express();

// conect to db


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
app.use("/api/vendor", vendorRouter);

module.exports = app;