import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateSubCategoryDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsArray()
    categoryId?: string[];

    @IsOptional()
    @IsArray()
    products?: string[];

    @IsString()
    subCategoryId: string;
}