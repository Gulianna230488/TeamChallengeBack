import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schema";
import { SignUpDto } from "./dto/signup.dto";
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./dto/login.dto";


@Injectable()
export class AuthService {
	constructor(
		@InjectModel( User.name )
		private userModel: Model<User>,
		private jwtService: JwtService,
	) { }

	async signUp( signUpDto: SignUpDto ): Promise<{ token: string }> {
		const { firstname, lastname, password, phone, email } = signUpDto;

		const isDuplicateEmail = await this.userModel.findOne( { email } );
		if ( isDuplicateEmail ) {
			throw new UnauthorizedException( 'User with the same email is already exists' );
		}

		const hashedPassword = await bcrypt.hash( password, 10 );

		const user = await this.userModel.create( {
			firstname,
			lastname,
			phone,
			password: hashedPassword,
			email,
			role: 'user', // по замовчуванню призначаємо роль 'user'
		} );

		await user.save();

		const payload = {
			username: user.email,
			sub: user._id,
			role: user.role
		};

		const token = this.jwtService.sign( payload );

		return { token };
	}

	async login( loginDto: LoginDto ): Promise<{ token: string }> {
		const { email, password } = loginDto;
		const user = await this.userModel.findOne( { email } );

		if ( !user || !( await bcrypt.compare( password, user.password ) ) ) {
			throw new Error( 'Invalid credentials' );
		}

		const payload = {
			username: user.email,
			sub: user._id,
			role: user.role
		}

		const token = this.jwtService.sign( payload );

		return { token };
	}
}
