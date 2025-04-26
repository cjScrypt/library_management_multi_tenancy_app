import { schemasRegistry, sequelize } from "../sequelize";
import {
    defineBook,
    defineBorrowRecord,
    defineReservation,
    defineStudent
} from "../sequelize/models";

export const getSchoolSchema = async (schoolId: string): Promise<any[]> => {
    const schemaName = `school_${schoolId.toLowerCase()}`;

    const result = await sequelize.query(`
        SELECT schema_name 
        FROM information_schema.schemata 
        WHERE schema_name = '${schemaName}'
    `);

    return result[0];
}

export const createSchoolSchema = async (schoolId: string) => {
    try {
        const schemaName = `school_${schoolId.toLowerCase()}`;

        await sequelize.query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}";`);

        defineModels(schemaName);

        await syncSchemas(schemaName);

        return true;
    } catch (error) {
        throw error;
        // return false;
    }
}

const defineModels = (schemaName: string) => {
    if (!schemasRegistry[schemaName]) {
        schemasRegistry[schemaName] = {};
    }

    const Book = defineBook(sequelize, schemaName);
    const BorrowRecord = defineBorrowRecord(sequelize, schemaName);
    const Reservation = defineReservation(sequelize, schemaName);
    const Student = defineStudent(sequelize, schemaName);

    Book.hasMany(BorrowRecord);
    BorrowRecord.belongsTo(Book);

    Book.hasMany(Reservation);
    Reservation.belongsTo(Book);

    Student.hasMany(BorrowRecord);
    BorrowRecord.belongsTo(Student);

    Student.hasMany(Reservation);
    Reservation.belongsTo(Student);

    Object.assign(schemasRegistry[schemaName], {
        Student,
        Book,
        BorrowRecord,
        Reservation
    });
}

const syncSchemas = async (schemaName: string) => {
    const models = schemasRegistry[schemaName];

    for (const model of Object.values(models)) {
        await model.sync({ });
    }
}