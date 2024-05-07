import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsArray()
    subCategories?: string[];

    @IsString()
    categoryId: string;
}