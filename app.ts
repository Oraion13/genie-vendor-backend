import express, { Application, Request, Response } from "express";

const app: Application = express();

// to parse body (inputs)
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World, new")
})


module.exports = app;