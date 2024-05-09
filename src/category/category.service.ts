import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { EditCategoryDto } from './dto/edit-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel( Category.name ) private categoryModel: Model<CategoryDocument>
    ) { }

    async getAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async getById( id: string ): Promise<Category> {
        return this.categoryModel.findById( id );
    }

    async getByName( name: string ): Promise<Category> {
        return this.categoryModel.findOne( { name } );
    }

    async create( categoryDto: CreateCategoryDto ): Promise<Category> {
        const newCategory = new this.categoryModel( categoryDto );
        return newCategory.save();
    }

    async update( id: string, categoryDto: UpdateCategoryDto ): Promise<Category> {
        return this.categoryModel.findByIdAndUpdate( id, categoryDto, { new: true } );
    }

    async edit( id: string, categoryDto: EditCategoryDto ): Promise<Category> {
        return this.categoryModel.findByIdAndUpdate( id, categoryDto, { new: true } );
    }

    async remove( id: string ): Promise<Category> {
        return this.categoryModel.findByIdAndDelete( id );
    }
}
