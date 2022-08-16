import { Request, Response } from "express";
import { get } from "../../prisma/queries/vendor";
const vendorRouter = require("express").Router();

// home - get all vendor list
vendorRouter.get("/", async (request: Request, response: Response) => {
    try {
        const vendors = await get("", 10);

        response.status(200).send(vendors)
    } catch (error) {
        throw new Error("No users can be fetched");
    }
})

module.exports = vendorRouter;