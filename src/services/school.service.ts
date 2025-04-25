import { SchoolRepository } from "../database/repositories";
import { CreateSchoolDto } from "../types";

export const registerSchool = async (data: CreateSchoolDto) => {
    let existingSchool = await SchoolRepository.findOne({ email: data.email });
    if (existingSchool) {
        throw new Error("School with this email already exists");
    }

    const school = await SchoolRepository.createSchool(data);
    const success = await SchoolRepository.createSchoolSchema(school.id);
    if (!success) {
        console.error(`Failed to create schema for school: ${school.id}`);
    }

    return school;
}