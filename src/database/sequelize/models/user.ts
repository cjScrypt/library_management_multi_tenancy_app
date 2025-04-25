import { DataTypes, Sequelize } from "sequelize";

export const defineUser = (sequelize: Sequelize, schemaName: string) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
    }, {
        schema: schemaName,
        tableName: 'user'
    });
}