import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({
	timestamps: true,
})
export class User extends Document {
	@Prop({unique: true, required: true})
	firstname: string;

	@Prop({unique: true, required: true})
	lastname: string;

	@Prop({required: true})
    phone: string;

	@Prop({required: true})
	password: string;

	@Prop({unique: true, required: true})
	email: string;

	@Prop({required: false, default: null})
	country: string;
	 
	@Prop({required: false, default: null})
	city: string;

	@Prop({required: false, default: null})
    adressline: string;
};

export const UserSchema = SchemaFactory.createForClass(User);