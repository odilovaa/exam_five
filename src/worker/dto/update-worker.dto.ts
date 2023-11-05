import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWorkerDto } from './create-worker.dto';
import { IsDate, IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from 'class-validator';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {
    @ApiProperty({example: "Worker worker", description: "Full name of the worker"})
    @IsOptional()
    @IsString()
    full_name: string;

    @ApiProperty({example: "worker@gmail.com", description: "Email address of the worker"})
    @IsOptional()
    @IsEmail()
    email: string;

    @ApiProperty({example: "992134567", description: "Phone number of the worker"})
    @IsOptional()
    @IsPhoneNumber("UZ")
    phone_number: string;

    @ApiProperty({example: "083028471243", description: "Additional Phone number of the worker"})
    @IsOptional()
    @IsPhoneNumber("UZ")
    phone_number2: string;

    @ApiProperty({example: "Chilonzor 20 1 1", description: "Address of the worker"})
    @IsOptional()
    @IsString()
    address: string;

    @ApiProperty({example: "dsor09tf", description: "Password of the worker"})
    @IsOptional()
    @MinLength(8)
    @IsStrongPassword()
    password: string;

    @ApiProperty({example: "08:00", description: "start time of the work"})
    @IsOptional()
    @IsString()
    start_time: string;

    @ApiProperty({example: "19:00", description: "finish time of the work"})
    @IsOptional()
    @IsString()
    finish_time: string;

    @ApiProperty({example: "10000", description: "salary of the worker"})
    @IsOptional()
    @IsString()
    salary: string;

    @ApiProperty({example: "1", description: "Id of the typr of the worker"})
    @IsOptional()
    @IsNumber()
    worker_type_id: number;

    @ApiProperty({example: "all responsbilities of the worker", description: "all responsbilities of the worker"})
    @IsOptional()
    @IsString()
    resposbilty: string;

    @ApiProperty({example: "12-12-2023", description: "Start date of the contract"})
    @IsOptional()
    @IsDate()
    start_date: Date;

    @ApiProperty({example: "15-12-2024", description: "the end date of the contract"})
    @IsOptional()
    @IsDate()
    finish_date: Date;
}
