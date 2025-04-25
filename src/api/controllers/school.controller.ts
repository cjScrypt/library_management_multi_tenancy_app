import { NextFunction, Request, Response } from "express";
import { CreateSchoolDto } from "../../types";
import { SchoolService } from "../../services";

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