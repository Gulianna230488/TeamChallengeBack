import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';

class ProductCharacteristicDto {

    @IsString()
    name: string;

    @IsString()
    value: string;
}

export class CreateProductDto {
    @IsString()
    image: string;

    @IsString()
    title: string;

    @IsString()
    link: string;

    @Min( 1 )
    @Max( 5 )
    @IsNumber()
    initialRating: number;

    @IsNumber()
    price: number;

    @IsOptional()
    @IsNumber()
    oldPrice?: number;

    @IsNumber()
    credit: number;

    @IsString()
    category: string;


    @IsString()
    description: string;

    @IsString()
    advantages: string;

    @IsOptional()
    @IsString()
    disAdvantages?: string;

    @IsArray()
    @IsString( { each: true } )
    categories: string[];

    @IsBoolean()
    inStock: boolean;

    @IsArray()
    @IsString( { each: true } )
    tags: string[];

    @IsArray()
    @ValidateNested()
    @Type( () => ProductCharacteristicDto )
    characteristics: ProductCharacteristicDto[];
}