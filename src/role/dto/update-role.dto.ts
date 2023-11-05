import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @ApiProperty({example: "SUPERADMIN", description: "Admin's role"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: "It's SuperAdmin", description: "Description about role"})
    @IsOptional()
    @IsString()
    description?: string;
}
