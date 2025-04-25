import { SchoolRepository, SchoolSchemaRepository } from "../database/repositories";
import { CreateSchoolDto } from "../types";

export const registerSchool = async (data: CreateSchoolDto) => {
    let existingSchool = await SchoolRepository.findOne({ email: data.email });
    if (existingSchool) {
        throw new Error("School with this email already exists");
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
        throw new Error("School not found");
    }

    return school;
}

export const schoolSchemaExists = async (schoolId: string) => {
    const schema = await SchoolSchemaRepository.getSchoolSchema(schoolId);
    if (schema.length == 0) {
        throw new Error(`Schema for school ${schoolId} does not exist`);
    }

    return true;
}