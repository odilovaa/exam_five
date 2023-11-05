import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @ApiProperty({example: "Company", description: "Company or coorparetion name"})
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty({example: "John Doe",  description: "Client's full name"})
    @IsOptional()
    @IsString()
    full_name: string;

    @ApiProperty({example: "johndoe@gmail.com", description: "Client's email address"})
    @IsOptional()
    @IsEmail()
    email: string;

    @ApiProperty({example: "+99891234567",  description: "Client's phone number"})
    @IsOptional()
    @IsPhoneNumber("UZ")
    phone_number: string;

    @ApiProperty({example: "3", description: "Id of Client type"})
    @IsOptional()
    @IsString()
    client_type_id: string;

    @ApiProperty({example: ";laiwifhjvn", description: "location of the company"})
    @IsOptional()
    @IsString()
    location: string;
}
