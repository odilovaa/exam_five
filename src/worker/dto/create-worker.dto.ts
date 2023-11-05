import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from "class-validator";


export class CreateWorkerDto {
    @ApiProperty({example: "Worker worker", description: "Full name of the worker"})
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @ApiProperty({example: "worker@gmail.com", description: "Email address of the worker"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({example: "992134567", description: "Phone number of the worker"})
    @IsPhoneNumber("UZ")
    phone_number: string;

    @ApiProperty({example: "083028471243", description: "Additional Phone number of the worker"})
    @IsPhoneNumber("UZ")
    phone_number2: string;

    @ApiProperty({example: "Chilonzor 20 1 1", description: "Address of the worker"})
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({example: "dsor09tf", description: "Password of the worker"})
    @MinLength(8)
    @IsStrongPassword()
    password: string;

    @ApiProperty({example: "08:00", description: "start time of the work"})
    @IsNotEmpty()
    @IsString()
    start_time: string;

    @ApiProperty({example: "19:00", description: "finish time of the work"})
    @IsNotEmpty()
    @IsString()
    finish_time: string;

    @ApiProperty({example: "10000", description: "salary of the worker"})
    @IsNotEmpty()
    @IsString()
    salary: string;

    @ApiProperty({example: "1", description: "Id of the typr of the worker"})
    @IsNotEmpty()
    @IsNumber()
    worker_type_id: number;

    @ApiProperty({example: "all responsbilities of the worker", description: "all responsbilities of the worker"})
    @IsNotEmpty()
    @IsString()
    resposbilty: string;

    @ApiProperty({example: "12-12-2023", description: "Start date of the contract"})
    @IsNotEmpty()
    @IsDate()
    start_date: Date;

    @ApiProperty({example: "15-12-2024", description: "the end date of the contract"})
    @IsNotEmpty()
    @IsDate()
    finish_date: Date;

}
