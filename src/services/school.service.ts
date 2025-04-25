import { SchoolRepository, SchoolSchemaRepository } from "../database/repositories";
import { CreateSchoolDto } from "../types";
import { APIError } from "../utils";

export const registerSchool = async (data: CreateSchoolDto) => {
    let existingSchool = await SchoolRepository.findOne({ email: data.email });
    if (existingSchool) {
        throw new APIError("School with this email already exists", 400);
    }

    const school = await SchoolRepository.createSchool(data);
    const success = await SchoolSchemaRepository.createSchoolSchema(school.id);
    if (!success) {
        console.error(`Failed to create schema for school: ${school.id}`);
    }

    return school;
}

export const getSchoolById = async (id: string) => {
    const school = await SchoolRepository.findOne({ id });
    if (!school) {
        throw new APIError("School not found", 404);
    }

    return school;
}

export const schoolSchemaExists = async (schoolId: string) => {
    const schema = await SchoolSchemaRepository.getSchoolSchema(schoolId);
    if (schema.length == 0) {
        throw new APIError(`Schema for school ${schoolId} does not exist`, 400);
    }

    return true;
}