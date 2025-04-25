import { DataTypes, Sequelize } from "sequelize";

export const defineBorrowRecord = (sequelize: Sequelize, schemaName: string) => {
    return sequelize.define('BorrowRecord', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        borrowDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        returnDate: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('borrowed', 'returned', 'overdue'),
            defaultValue: 'borrowed'
        }
    }, {
        schema: schemaName,
        tableName: 'borrow_records'
    });
}