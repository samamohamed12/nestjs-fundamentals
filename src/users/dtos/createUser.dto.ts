// dto => data transfer object
// Once class-validator is installed, uncomment these imports
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
     @IsNotEmpty()
     @IsString()
     @Length(3, 20)
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly country: string;

    // no business logic
}