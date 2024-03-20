import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for product characteristics
class ProductCharacteristicDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    value?: string;
}

// Product editing schema
@Schema()
export class EditProduct {
    @Prop( { required: false } )
    @IsOptional()
    @IsString()
    image?: string;

    @Prop( { required: false } )
    @IsOptional()
    @IsString()
    title?: string;

    @Prop( { required: false } )
    @IsOptional()
    @IsString()
    link?: string;

    @Prop( { required: false, min: 1, max: 5 } )
    @IsOptional()
    @IsNumber()
    initialRating?: number;

    @Prop( { required: false, type: Number } )
    @IsOptional()
    @IsNumber()
    price?: number;

    @Prop( { required: false, type: Number } )
    @IsOptional()
    @IsNumber()
    credit?: number;

    @Prop( { required: false } )
    @IsOptional()
    @IsString()
    category?: string;

    @Prop( { required: false } )
    @IsOptional()
    @IsString()
    description?: string;

    @Prop( { required: false } )
    @IsOptional()
    @IsString()
    advantages?: string;

    @Prop( { required: false } )
    @IsOptional()
    @IsString()
    disAdvantages?: string;

    @Prop( { required: false, type: [ String ] } )
    @IsOptional()
    @IsArray()
    @IsString( { each: true } )
    categories?: string[];

    @Prop( { required: false, type: Boolean } )
    @IsOptional()
    @IsBoolean()
    inStock?: boolean;

    @Prop( { required: false, type: [ ProductCharacteristicDto ] } )
    @IsOptional()
    @IsArray()
    @ValidateNested( { each: true } )
    @Type( () => ProductCharacteristicDto )
    characteristics?: ProductCharacteristicDto[];
}

export type EditProductDocument = EditProduct & Document;

export const EditProductSchema = SchemaFactory.createForClass( EditProduct );
