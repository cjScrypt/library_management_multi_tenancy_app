import { DataTypes, Sequelize } from "sequelize";

export const defineReservation = (sequelize: Sequelize, schemaName: string) => {
    return sequelize.define('Reservation', {
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
    }, {
        schema: schemaName,
        tableName: 'reservation'
    });
}