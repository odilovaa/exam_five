import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkerTypeDto {
    @ApiProperty({example: "Traslater", description: "Type'name of the worker"})
    @IsNotEmpty()
    @IsString()
    title: string;
}
