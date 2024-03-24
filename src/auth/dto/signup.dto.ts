import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignUpDto {
	@IsNotEmpty()
	@IsString()
	readonly firstname: string;

	@IsNotEmpty()
	@IsString()
	readonly lastname: string;

	@IsNotEmpty()
	@IsString()
	readonly phone: string;


	@IsNotEmpty()
	@IsEmail({}, {message: 'Please enter correct email'})
	readonly email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(6)
	readonly password: string;
}