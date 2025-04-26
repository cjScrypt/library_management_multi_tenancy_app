import { NextFunction, Request, Response } from "express";
import { APIError, APIValidationError } from "../../utils";

export const appErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!err) {
        return next();
    }

    let body: { error: { code: number, message: string, fields?: {} } };

    if (err instanceof APIError) {
        body = {
            error: {
                code: err.statusCode,
                message: err.message
            }
        }
        if (err instanceof APIValidationError) {
            body.error['fields'] = err.fields;
        }
    } else {
        body = {
            error: {
                code: 500,
                message: "Internal Server Error"
            }
        }
        console.error(`===${err}===`);
    }

    res.status(body.error.code).json(body);
}