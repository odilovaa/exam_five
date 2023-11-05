import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";


export class CreateAuthorDto {
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsNotEmpty()
    @IsString()
    @IsDate()
    birth_date: Date;

    @IsOptional()
    @IsString()
    @IsDate()
    dearth_date: Date;

    @IsOptional()
    @IsString()
    came_from: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsPhoneNumber("UZ")
    phone_number: string;

    @IsOptional()
    @IsString()
    additional_info: string;

    @IsOptional()
    @IsString()
    photo: string;
}
