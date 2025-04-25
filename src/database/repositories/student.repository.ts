import { Model, ModelStatic } from "sequelize";
import { schemasRegistry } from "../sequelize";

export const getStudentModel = (schoolId: string) => {
    const schemaName = `school_${schoolId}`;
    const modelName = "Student";

    if (!schemasRegistry[schemaName]) {
        throw new Error(`Schema ${schemaName} not found`);
    }

    if (!schemasRegistry[schemaName][modelName]) {
        throw new Error(`Model ${modelName} not found in schema ${schemaName}`);
    }

    return schemasRegistry[schemaName][modelName];
}

export const findMany = async (model: ModelStatic<Model>) => {
    return model.findAll();
}