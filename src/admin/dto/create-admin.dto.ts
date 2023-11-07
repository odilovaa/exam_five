import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, IsUppercase, MinLength } from "class-validator";

export class CreateAdminDto {
    @ApiProperty({example: "John Doe",  description: "Admin's full name"})
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @ApiProperty({example: "johndoe@gmail.com", description: "Admin's email address"})
    @IsEmail()
    email: string;

    @ApiProperty({example: "+99891234567",  description: "Admin's phone number"})
    @IsPhoneNumber("UZ")
    phone_number: string;

    @ApiProperty({example: "+99891234567",  description: "Admin's additional phone number"})
    @IsOptional()
    @IsPhoneNumber("UZ")
    phone_number2: string;

    @ApiProperty({example: "1", description: "Admin's Role or status"})
    @IsNotEmpty()
    @IsString()
    role: string;

    @ApiProperty({example: "asdfjiogj7845",  description: "Admin's photo"})
    @IsNotEmpty()
    @IsString()
    photo: string;

    @ApiProperty({example: "2222-22-22", description: "Admin's birth date"})
    @IsNotEmpty()
    @IsDate()
    birth_date: Date;

    @ApiProperty({example: "Pas$wor7",  description: "Admin's Strong password"})
    @MinLength(8)
    @IsStrongPassword()
    password: string;
}
