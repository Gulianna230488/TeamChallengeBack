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
		@InjectModel(User.name)
		private userModel: Model<User>,
		private jwtService: JwtService,
	) {}

	async signUp(signUpDto: SignUpDto): Promise<{token: string}> {
		const {username, password, email} = signUpDto;
        
		const isDuplicateUsername = await this.userModel.findOne({username});
		if(isDuplicateUsername) {
		throw new UnauthorizedException('User with the same username is already exists');
        }

		const isDuplicateEmail = await this.userModel.findOne({email});
		if(isDuplicateEmail) {
		throw new UnauthorizedException('User with the same email is already exists');
        }

		const hashedPassword = await bcrypt.hash(password, 10);
     
		const user = await this.userModel.create({
			username,
			password: hashedPassword,
			email,
		});

		const token = this.jwtService.sign({ id: user._id});

		return {token};
	}

	async login(loginDto: LoginDto): Promise<{token: string}> {
		const {email, password} = loginDto;
		const user = await this.userModel.findOne({email});

		if(!user) {
			throw new UnauthorizedException('Invalid email or password');
		}

		const isPasswordMatched = await bcrypt.compare(password, user.password);

		if(!isPasswordMatched) {
			throw new UnauthorizedException('Invalid email or password');
		}

		const token = this.jwtService.sign({ id: user._id});

		return {token};
 	}
}
