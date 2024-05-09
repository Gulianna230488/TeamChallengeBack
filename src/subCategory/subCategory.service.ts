import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { SubCategory, SubCategoryDocument } from './schemas/subCategory.schema';
import { CreateSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subCategory.dto';
import { EditSubCategoryDto } from './dto/edit-subCategory.dto';



@Injectable()
export class SubCategoryService {
    constructor( @InjectModel( SubCategory.name ) private subCategoryModel: Model<SubCategoryDocument>
    ) { }

    async getAll(): Promise<SubCategory[]> {
        return this.subCategoryModel.find().exec();
    }

    async getById( id: string ): Promise<SubCategory> {
        return this.subCategoryModel.findById( id );
    }

    async getByName( name: string ): Promise<SubCategory> {
        return this.subCategoryModel.findOne( { name } );
    }

    async create( categoryDto: CreateSubCategoryDto ): Promise<SubCategory> {
        const newSubCategory = new this.subCategoryModel( categoryDto );
        return newSubCategory.save();
    }

    async update( id: string, categoryDto: UpdateSubCategoryDto ): Promise<SubCategory> {
        return this.subCategoryModel.findByIdAndUpdate( id, categoryDto, { new: true } );
    }

    async edit( id: string, subCategoryDto: EditSubCategoryDto ): Promise<SubCategory> {
        return this.subCategoryModel.findByIdAndUpdate( id, subCategoryDto, { new: true } );
    }

    async remove( id: string ): Promise<SubCategory> {
        return this.subCategoryModel.findByIdAndDelete( id );
    }
}
