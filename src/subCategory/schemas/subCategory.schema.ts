import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsString } from 'class-validator';
import { Document, SchemaTypes } from 'mongoose';

import { CategoryDocument } from 'src/category/schemas/category.schema';
import { ProductDocument } from 'src/products/schemas/product.schema';


@Schema()
export class SubCategory {
    @Prop( { required: true } )
    @IsString()
    name: string;

    @Prop( { type: SchemaTypes.ObjectId, ref: 'Category' } )
    owner: CategoryDocument;

    @IsArray()
    @Prop( { type: [ { type: SchemaTypes.ObjectId, ref: 'Product' } ] } )
    products: ProductDocument[];
}

export type SubCategoryDocument = SubCategory & Document;

export const SubCategorySchema = SchemaFactory.createForClass( SubCategory );