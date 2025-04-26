import { json, urlencoded } from 'body-parser';
import cors from "cors";
import { Express } from "express";
import { configureDB } from "./database/sequelize";
import { schoolRouter } from "./api/routers";
import { appErrorHandler } from "./api/middlewares/errorHandler";

export const configureApp = async (app: Express) => {
    // Configure database
    await configureDB();

    // Configure app middlewares

    app.use(json({ limit: "1mb" }));
    app.use(cors());
    app.use(urlencoded({ extended: false }));

    // Configure app routes
    app.use("/school", schoolRouter);

    // Error Handler
    app.use(appErrorHandler);
}