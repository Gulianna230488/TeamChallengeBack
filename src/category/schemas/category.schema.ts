import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsString } from 'class-validator';
import { Document, SchemaTypes } from 'mongoose';
import { SubCategoryDocument } from 'src/subCategory/schemas/subCategory.schema';

@Schema()
export class Category {
    @Prop( { required: true } )
    @IsString()
    name: string;

    @IsArray()
    @Prop( { type: [ { type: SchemaTypes.ObjectId, ref: 'SubCategory' } ] } )
    subCategories: SubCategoryDocument[];
}

export type CategoryDocument = Category & Document;

export const CategorySchema = SchemaFactory.createForClass( Category );