import { CreateSchoolDto } from "../../types";
import { School } from "../sequelize/models";

export const createSchool = async (data: CreateSchoolDto) => {
    return School.create(data);
}

export const findOne = async (filter: {}) => {
    return School.findOne({ where: filter });
}