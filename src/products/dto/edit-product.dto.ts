import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';

class ProductCharacteristicDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    value?: string;
}

export class EditProductDto {
    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    link?: string;

    @IsOptional()
    @Min( 1 )
    @Max( 5 )
    @IsNumber()
    initialRating?: number;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    credit?: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    advantages?: string;

    @IsOptional()
    @IsString()
    disAdvantages?: string;

    @IsOptional()
    @IsArray()
    @IsString( { each: true } )
    categories?: string[];

    @IsOptional()
    @IsBoolean()
    inStock?: boolean;

    @IsOptional()
    @IsArray()
    @IsString( { each: true } )
    tags?: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type( () => ProductCharacteristicDto )
    characteristics?: ProductCharacteristicDto[];
}
