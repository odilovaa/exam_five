import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: "SUPERADMIN", description: "Admin's role"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: "It's SuperAdmin", description: "Description about role"})
    @IsOptional()
    @IsString()
    description?: string;
}
