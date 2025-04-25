import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../../config";
import { School } from "./models";

export const sequelize = new Sequelize(DATABASE_URL);

export const configureDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("====Database connection successfully====");

        School.sync(); // Synchronize public schema
    } catch (error) {
        console.error(`Error connecting to database: ${error}`);
    }
}