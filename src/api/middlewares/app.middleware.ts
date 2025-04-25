import { json, urlencoded } from 'body-parser';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import cors from "cors";
import { NextFunction, Request, Response } from "express";
import { RequestDataField } from '../../types';

export const addCorsHeaderToResponse = cors();
export const addBodyToRequestFromJson = json();
export const addBodyToRequestFromUrl = urlencoded({ extended: false });

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

        const dtoInstance = plainToInstance(dtoClass, data);

        const errors = await validate(dtoInstance);
        if (errors.length > 0) {
            throw errors;
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
