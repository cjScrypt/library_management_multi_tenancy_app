import { Model, ModelStatic } from "sequelize";
import { schemasRegistry } from "../sequelize";
import { APIError } from "../../utils";

export const getStudentModel = (schoolId: string) => {
    const schemaName = `school_${schoolId}`;
    const modelName = "Student";

    if (!schemasRegistry[schemaName]) {
        throw new APIError(`Schema ${schemaName} not found`, 400);
    }

    if (!schemasRegistry[schemaName][modelName]) {
        throw new APIError(`Model ${modelName} not found in schema ${schemaName}`, 400);
    }

    return schemasRegistry[schemaName][modelName];
}

export const findMany = async (model: ModelStatic<Model>) => {
    return model.findAll();
}