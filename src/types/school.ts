import { IsString } from "class-validator";

export class CreateSchoolDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    zip: string;

    @IsString()
    phone: string;

    @IsString()
    email: string;
}

export interface SchoolAttributes {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
}

export interface SchoolOmitAttributes extends Omit<SchoolAttributes, 'id'> {
    id?: string;
}