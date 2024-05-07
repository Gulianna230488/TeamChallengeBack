import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditSubCategoryDto {
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