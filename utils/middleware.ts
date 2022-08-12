import { Request, Response, NextFunction } from "express";

const logger = require("./logger");

// prints all the req and res
const requestLogger = (request: Request, response: Response, next: NextFunction) => {
    logger.info("Method:", request.method);
    logger.info("Path:  ", request.path);
    logger.info("Body:  ", request.body);
    logger.info("---");
    next();
  };

module.exports = {
    requestLogger
}