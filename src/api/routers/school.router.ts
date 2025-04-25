import { Router } from "express";
import { SchoolController } from "../controllers";
import { AppMiddleware } from "../middlewares";
import { CreateSchoolDto, RequestDataField } from "../../types";

export const schoolRouter = Router();

schoolRouter.post(
    "/register",
    AppMiddleware.validateDto(CreateSchoolDto, RequestDataField.BODY),
    SchoolController.registerSchool
);
