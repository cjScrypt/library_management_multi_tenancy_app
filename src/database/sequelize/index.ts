import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../../config";
import { defineSchool } from "./models";
import { SchemasRegistry } from "../../types";

export const sequelize = new Sequelize(DATABASE_URL);

export const schemasRegistry: SchemasRegistry = {}

export const configureDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("====Database connection successfully====");

        const School = defineSchool(sequelize);
        School.sync(); // Synchronize Public schema
    } catch (error) {
        console.error(`Error connecting to database: ${error}`);
    }
}