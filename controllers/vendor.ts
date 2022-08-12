import { Request, Response } from "express";
const vendorRouter = require("express").Router();
const Vendor = require("../models/vendor");
const User = require("../models/user");
const Product = require("../models/product");

// home - get all vendor list
vendorRouter.get("/",async (request: Request, response: Response) => {
    const vendors = await Vendor.g
})