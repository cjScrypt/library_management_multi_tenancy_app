import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../../config";

export const sequelize = new Sequelize(DATABASE_URL);