import { Model, ModelStatic } from "sequelize";

interface SchemaModels {
    [key: string]: ModelStatic<Model>;
}

export interface SchemasRegistry {
    [key: string]: SchemaModels;
}