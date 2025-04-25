import { Router } from "express";
import { SchoolController } from "../controllers";
import { AppMiddleware } from "../middlewares";
import { CreateSchoolDto, IdParamDto, RequestDataField } from "../../types";

export const schoolRouter = Router();

schoolRouter.post(
    "/register",
    AppMiddleware.validateDto(CreateSchoolDto, RequestDataField.BODY),
    SchoolController.registerSchool
);

schoolRouter.get(
    "/:id",
    AppMiddleware.validateDto(IdParamDto, RequestDataField.PARAM),
    SchoolController.getSchoolById
);
