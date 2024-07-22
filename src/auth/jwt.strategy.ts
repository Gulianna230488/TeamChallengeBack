import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { ConfigService } from "@nestjs/config";

interface JwtPayload {
	sub: string;
	username: string;
	role: string;
}


@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {
	constructor(
		@InjectModel( User.name )
		private userModel: Model<User>,
		private configService: ConfigService,
	) {
		super( {
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get<string>( 'JWT_SECRET' ),
		} );
	}

	async validate( payload: JwtPayload ) {
		const { sub } = payload;//  we use sub  wich corresponds user.id
		const user = await this.userModel.findById( sub );
		if ( !user ) {
			throw new UnauthorizedException( 'Login first to access this endpoint' )
		}

		return user;
	}
}