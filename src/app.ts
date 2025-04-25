import { Express } from "express";
import { configureDB } from "./database/sequelize";
import { AppMiddleware } from "./api/middlewares";
import { schoolRouter } from "./api/routers";

export const configureApp = async (app: Express) => {
    // Configure database
    await configureDB();

    // Configure app middlewares
    app.use(AppMiddleware.addCorsHeaderToResponse);
    app.use(AppMiddleware.addBodyToRequestFromJson);
    app.use(AppMiddleware.addBodyToRequestFromJson);

    // Configure app routes
    app.use("/school", schoolRouter);
}