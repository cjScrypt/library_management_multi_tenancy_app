import { IsUUID } from "class-validator";

export enum RequestDataField {
    BODY = "body",
    QUERY = "query",
    PARAM = "param"
}

export class IdParamDto {
    @IsUUID()
    id: string;
}