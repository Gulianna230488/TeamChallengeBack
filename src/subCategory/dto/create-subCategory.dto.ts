import { IsArray, IsString } from 'class-validator';

export class CreateSubCategoryDto {
    @IsString()
    name: string;

    @IsString()
    categoryId: string;

    @IsArray()
    products: string[];
}