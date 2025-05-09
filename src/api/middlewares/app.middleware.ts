import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from "express";
import { RequestDataField } from '../../types';
import { SchoolService } from '../../services';
import { APIValidationError, formatValidationErrors } from '../../utils';

export const validateDto = <T extends object>(
    dtoClass: ClassConstructor<T>,
    field: RequestDataField
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        let data;
        if (field === RequestDataField.BODY) {
            data = req.body;
        } else if (field === RequestDataField.QUERY) {
            data = req.query;
        } else {
            data = req.params;
        }

        if (!data) {
            data = {}
        }

        const dtoInstance = plainToInstance(dtoClass, data);

        const errors = await validate(dtoInstance);
        if (errors.length > 0) {
            const formattedErrors = formatValidationErrors(errors);
            throw new APIValidationError(
                "Validation Error",
                400,
                formattedErrors
            );
        }

        if (field === RequestDataField.BODY) {
            req.body = data;
        } else if (field === RequestDataField.QUERY) {
            req.query = data;
        } else {
            req.params = data;
        }

        next();
    }
}

export const checkSchoolSchema = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schoolId = req.params.id;
        await SchoolService.schoolSchemaExists(schoolId);

        next();
    } catch (error) {
        console.error(`Error checking schema: ${error}`);
        next(error);
    }
}