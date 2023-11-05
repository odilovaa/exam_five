import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateClientDto {
    @ApiProperty({example: "Company", description: "Company or coorparetion name"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: "John Doe",  description: "Client's full name"})
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @ApiProperty({example: "johndoe@gmail.com", description: "Client's email address"})
    @IsEmail()
    email: string;

    @ApiProperty({example: "+99891234567",  description: "Client's phone number"})
    @IsPhoneNumber("UZ")
    phone_number: string;

    @ApiProperty({example: "3", description: "Id of Client type"})
    @IsNotEmpty()
    @IsString()
    client_type_id: string;

    @ApiProperty({example: ";laiwifhjvn", description: "location of the company"})
    @IsNotEmpty()
    @IsString()
    location: string;
}
