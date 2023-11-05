import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsDate, IsEmail, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, IsUppercase, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
    @ApiProperty({example: "John Doe",  description: "Admin's full name"})
    @IsOptional()
    @IsString()
    full_name: string;

    @ApiProperty({example: "johndoe@gmail.com", description: "Admin's email address"})
    @IsOptional()
    @IsEmail()
    email: string;

    @ApiProperty({example: "+99891234567",  description: "Admin's phone number"})
    @IsOptional()
    @IsPhoneNumber("UZ")
    phone_number: string;

    @ApiProperty({example: "+99891234567",  description: "Admin's additional phone number"})
    @IsOptional()
    @IsPhoneNumber("UZ")
    phone_number2: string;

    @ApiProperty({example: "1", description: "Admin's Role or status"})
    @IsOptional()
    @IsString()
    roleId: string;

    @ApiProperty({example: "asdfjiogj7845",  description: "Admin's photo"})
    @IsOptional()
    @IsString()
    photo: string;

    @ApiProperty({example: "2222-22-22", description: "Admin's birth date"})
    @IsOptional()
    @IsDate()
    birth_date: Date;

    @ApiProperty({example: "Pas$wor7",  description: "Admin's Strong password"})
    @IsOptional()
    @MinLength(8)
    @IsStrongPassword()
    password: string;
}
