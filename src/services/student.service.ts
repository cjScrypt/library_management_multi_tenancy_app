import { StudentRespository } from "../database/repositories";

export const getStudentsBySchoolId = async (schoolId: string) => {
    const model = StudentRespository.getStudentModel(schoolId);

    return StudentRespository.findMany(model);
}