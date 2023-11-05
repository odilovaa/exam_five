import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword, MinLength } from "class-validator";


export class LoginWorkerdto {

    @ApiProperty({example:'Ad1#$n190', description:'Password of Worker'})
    @MinLength(6)
    @IsStrongPassword()
    password: string;

    @ApiProperty({example:'john213@gmail.com', description:'Email address of Worker'})
    @IsEmail()
    email: string;
}