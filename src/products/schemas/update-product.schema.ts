import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for product characteristics
class ProductCharacteristicDto {
    @IsString()
    name: string;

    @IsString()
    value: string;
}

// Update product scheme
@Schema()
export class UpdateProduct {
    @Prop( { required: true } )
    @IsString()
    image: string;

    @Prop( { required: true } )
    @IsString()
    title: string;

    @Prop( { required: true } )
    @IsString()
    link: string;

    @Prop( { required: true, min: 1, max: 5 } )
    @IsNumber()
    initialRating: number;

    @Prop( { required: true, type: Number } )
    @IsNumber()
    price: number;

    @Prop( { type: Number } )
    @IsOptional()
    @IsNumber()
    oldPrice?: number;

    @Prop( { required: true, type: Number } )
    @IsNumber()
    credit: number;

    @Prop( { required: true } )
    @IsString()
    category: string;

    @Prop( { required: true } )
    @IsString()
    description: string;

    @Prop( { required: true } )
    @IsString()
    advantages: string;

    @Prop()
    @IsOptional()
    @IsString()
    disAdvantages?: string;

    @Prop( { required: true, type: [ String ] } )
    @IsArray()
    @IsString( { each: true } )
    categories: string[];

    @Prop( { required: true, type: Boolean } )
    @IsBoolean()
    inStock: boolean;

    @Prop( { required: true, type: [ String ] } )
    @IsArray()
    @IsString( { each: true } )
    tags: string[];

    @Prop( { required: true, type: [ ProductCharacteristicDto ] } )
    @IsArray()
    @ValidateNested( { each: true } )
    @Type( () => ProductCharacteristicDto )
    characteristics: ProductCharacteristicDto[];
}

export type UpdateProductDocument = UpdateProduct & Document;

export const UpdateProductSchema = SchemaFactory.createForClass( UpdateProduct );
