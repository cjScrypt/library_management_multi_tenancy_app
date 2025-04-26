import { NextFunction, Request, Response } from "express";
import { CreateSchoolDto } from "../../types";
import { SchoolService, StudentService } from "../../services";

export const registerSchool = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body as CreateSchoolDto;

        const school = await SchoolService.registerSchool(data);

        res.status(200).json({ data: school });
    } catch (error) {
        next(error);
    }
}

export const getSchoolById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const school = await SchoolService.getSchoolById(id);

        res.status(200).json({ data: school });
    } catch (error) {
        next(error);
    }
}

export const getStudentsBySchoolId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        const students = await StudentService.getStudentsBySchoolId(id);

        res.status(200).json({ data: students });
    } catch (error) {
        next(error);
    }
}