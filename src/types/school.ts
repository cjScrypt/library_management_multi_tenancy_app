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