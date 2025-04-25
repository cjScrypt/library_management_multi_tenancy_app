import { Express } from "express";
import { configureDB } from "./database/sequelize";

export const configureApp = async (app: Express) => {
    await configureDB(); // Configure database
}