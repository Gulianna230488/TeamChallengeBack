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


export class UpdateProductDto {
    @IsString()
    image: string;

    @IsString()
    title: string;

    @IsNumber()
    price: number;

    @IsOptional()
    @IsNumber()
    oldPrice?: number;

    @IsBoolean()
    bestPrice: boolean;

    @IsNumber()
    quantity: number;

    @IsBoolean()
    inCart: boolean;

    @IsBoolean()
    favorite: boolean;

    @IsBoolean()
    salesLeader: boolean;

    @IsBoolean()
    newProduct: boolean;

    @IsOptional()
    @IsArray()
    categoryId?: string[];

    @IsOptional()
    @IsArray()
    subCategoryId?: string[];

    @IsOptional()
    @IsArray()
    generalSpecifications?: string[];

    @IsString()
    productId: string;
}


// import { Type } from 'class-transformer';

// class ProductCharacteristicDto {

//     @IsString()
//     name: string;

//     @IsString()
//     value: string;
// }

// @IsString()
// link: string;

// @Min( 1 )
// @Max( 5 )
// @IsNumber()
// initialRating: number;

    // @IsString()
    // subCategory: string;

    // @IsString()
    // description: string;

    // @IsString()
    // advantages: string;

    // @IsOptional()
    // @IsString()
    // disAdvantages?: string;

    // @IsArray()
    // @IsString( { each: true } )
    // categories: string[];

    // @IsBoolean()
    // inStock: boolean; 

    // @IsArray()
    // @IsString( { each: true } )
    // tags: string[];

    // @IsArray()
    // @ValidateNested()
    // @Type( () => ProductCharacteristicDto )
    // characteristics: ProductCharacteristicDto[];
