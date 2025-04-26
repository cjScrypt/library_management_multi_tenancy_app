import { DataTypes, Sequelize } from "sequelize";

export const defineBook = (sequelize: Sequelize, schemaName: string) => {
    return sequelize.define('Book', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            unique: true
        },
        availableCopies: {
            type: DataTypes.INTEGER
        },
        totalCopies: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        schema: schemaName,
        tableName: 'book'
    });
}