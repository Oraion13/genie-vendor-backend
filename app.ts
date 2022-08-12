import express, { Application, Request, Response } from "express";
const logger = require("./utils/logger");
const { requestLogger } = require("./utils/middleware")
const session = require("./utils/session");

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const prismaClient = require("./prisma/prismaClient");

// create a express app
const app: Application = express();

// conect to db
logger.info("connecting to DB...");

prismaClient()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e: any) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
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