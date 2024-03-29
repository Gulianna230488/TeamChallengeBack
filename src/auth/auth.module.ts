import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { UserSchema } from "./schemas/user.schema";
import { JwtStrategy } from "./jwt.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";


@Module({
 imports: [
	PassportModule.register({defaultStrategy: 'jwt'}),
	JwtModule.registerAsync({
		inject: [ConfigService],
		useFactory: (config: ConfigService) => {
			return {
				secret: config.get<string>('JWT_SECRET'),
				signOptions: {
					expiresIn: config.get<string | number>('JWT_EXPIRES'),
				},
			};
		},
	}),
	MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
 ],
 controllers: [AuthController],
 providers: [AuthService, JwtStrategy],
 exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}