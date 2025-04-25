import { CreateSchoolDto } from "../../types";
import { sequelize } from "../sequelize";
import { schemasRegistry } from "../sequelize";
import {
    defineBook,
    defineBorrowRecord,
    defineReservation,
    defineStudent,
    School
} from "../sequelize/models";

export const createSchool = async (data: CreateSchoolDto) => {
    return School.create(data);
}

export const findOne = async (filter: {}) => {
    return School.findOne({ where: filter });
}

export const createSchoolSchema = async (schoolId: string) => {
    try {
        const schemaName = `school_${schoolId.toLowerCase()}`;

        await sequelize.query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}";`);

        defineModels(schemaName);

        return true;
    } catch (error) {
        return false;
    }
}

const defineModels = (schemaName: string) => {
    if (!schemasRegistry[schemaName]) {
        schemasRegistry[schemaName] = {};
    }

    const Book = defineBook(sequelize, schemaName);
    const BorrowRecord = defineBorrowRecord(sequelize, schemaName);
    const Reservation = defineReservation(sequelize, schemaName);
    const User = defineStudent(sequelize, schemaName);

    Book.hasMany(BorrowRecord);
    BorrowRecord.belongsTo(Book);

    Book.hasMany(Reservation);
    Reservation.belongsTo(Book);

    User.hasMany(BorrowRecord);
    BorrowRecord.belongsTo(User);

    User.hasMany(Reservation);
    Reservation.belongsTo(User);

    Object.assign(schemasRegistry[schemaName], {
        Book,
        BorrowRecord,
        Reservation,
        User
    });
}