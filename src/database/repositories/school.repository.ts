import { CreateSchoolDto } from "../../types";
import { sequelize } from "../sequelize";
import { defineSchool } from "../sequelize/models";
// import { School } from "../sequelize/models";

const School = defineSchool(sequelize);

export const createSchool = async (data: CreateSchoolDto) => {
    return School.create(data);
}

export const findOne = async (filter: {}) => {
    return School.findOne({ where: filter });
}