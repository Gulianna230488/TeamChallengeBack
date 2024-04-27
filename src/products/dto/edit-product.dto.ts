import {
    IsArray,
    IsBoolean,
    IsNumber,
    IsOptional,
    IsString,
    // Max, 
    // Min, 
    // ValidateNested 
} from 'class-validator';


export class EditProductDto {
    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsBoolean()
    bestPrice?: boolean;

    @IsOptional()
    @IsNumber()
    quantity?: number;

    @IsOptional()
    @IsBoolean()
    inCart?: boolean;

    @IsOptional()
    @IsBoolean()
    favorite?: boolean;

    @IsOptional()
    @IsBoolean()
    salesLeader?: boolean;

    @IsOptional()
    @IsBoolean()
    newProduct?: boolean;

    @IsOptional()
    @IsString()
    subCategoryId?: string;

    @IsOptional()
    @IsArray()
    generalSpecifications?: string[];
}

// import { Type } from 'class-transformer';

// class ProductCharacteristicDto {
//     @IsOptional()
//     @IsString()
//     name?: string;

//     @IsOptional()
//     @IsString()
//     value?: string;
// }

// @IsOptional()
// @IsString()
// link?: string;

// @IsOptional()
// @Min( 1 )
// @Max( 5 )
// @IsNumber()
// initialRating?: number;

// @IsOptional()
// @IsString()
// subCategory?: string;

// @IsOptional()
// @IsString()
// description?: string;

// @IsOptional()
// @IsString()
// advantages?: string;

// @IsOptional()
// @IsString()
// disAdvantages?: string;

// @IsOptional()
// @IsArray()
// @IsString( { each: true } )
// categories?: string[];

// @IsOptional()
// @IsBoolean()
// inStock?: boolean;

// @IsOptional()
// @IsArray()
// @IsString( { each: true } )
// tags?: string[];

//     @IsOptional()
//     @IsArray()
//     @ValidateNested()
//     @Type( () => ProductCharacteristicDto )
//     characteristics?: ProductCharacteristicDto[];

