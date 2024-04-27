import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import {
    IsArray, IsBoolean, IsNumber, IsOptional, IsString, Max,
    //  Min, ValidateNested 
} from 'class-validator';

// Product scheme
@Schema()
export class Product {
    @Prop( { required: true } )
    @IsString()
    image: string;

    @Prop( { required: true } )
    @IsString()
    title: string;

    @Prop( { required: true, type: Number } )
    @IsNumber()
    price: number;

    @Prop( { type: Number } )
    @IsOptional()
    @IsNumber()
    oldPrice?: number;

    @Prop( { required: true, type: Boolean } )
    @IsBoolean()
    bestPrice: boolean;

    @Prop( { required: true, type: Number } )
    @IsNumber()
    quantity: number;

    @Prop( { required: true, type: Boolean } )
    @IsBoolean()
    inCart: boolean;

    @Prop( { required: true, type: Boolean } )
    @IsBoolean()
    favorite: boolean;

    @Prop( { required: true, type: Boolean } )
    @IsBoolean()
    salesLeader: boolean;

    @Prop( { required: true, type: Boolean } )
    @IsBoolean()
    newProduct: boolean;

    @Prop( { type: SchemaTypes.ObjectId, ref: 'SubCategory' } )
    owner: string; //Временно пока так

    @IsArray()
    @Prop( { type: SchemaTypes.ObjectId, ref: 'GeneralSpecification' } )
    generalSpecifications: string[];
}

export type ProductDocument = Product & Document

export const ProductSchema = SchemaFactory.createForClass( Product );


// import { Type } from 'class-transformer';

// DTO for product characteristics
// class ProductCharacteristicDto {
//     @IsString()
//     name: string;

//     @IsString()
//     value: string;
// }



// @Prop( { required: true } )
// @IsString()
// category: string;

// @Prop( { required: true } )
// @IsString()
// description: string;

// @Prop( { required: true } )
// @IsString()
// advantages: string;

// @Prop()
// @IsOptional()
// @IsString()
// disAdvantages?: string;

// @Prop( { required: true, type: [ String ] } )
// @IsArray()
// @IsString( { each: true } )
// categories: string[];

    // @Prop( { required: true } )
    // @IsString()
    // link: string;

    // @Prop( { required: true, min: 1, max: 5 } )
    // @IsNumber()
    // initialRating: number;
    
    // @Prop( { required: true, type: [ String ] } )
    // @IsArray()
    // @IsString( { each: true } )
    // tags: string[];

    // @Prop( { required: true, type: [ ProductCharacteristicDto ] } )
    // @IsArray()
    // @ValidateNested( { each: true } )
    // @Type( () => ProductCharacteristicDto )
    // characteristics: ProductCharacteristicDto[];