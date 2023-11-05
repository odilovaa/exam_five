import { PartialType } from '@nestjs/swagger';
import { CreateAuthorDto } from './create-author.dto';
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
    @IsOptional()
    @IsString()
    full_name: string;

    @IsOptional()
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
