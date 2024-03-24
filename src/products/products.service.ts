import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EditProductDto } from './dto/edit-product.dto';
import { SearchDto } from './dto/search.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel( Product.name ) private productModel: Model<ProductDocument>
    ) { }

    async getAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async getById( id: string ): Promise<Product> {
        return this.productModel.findById( id );
    }

    async getByCategory( category: string ): Promise<Product[]> {
        return this.productModel.find( { category } ).exec();
    }

    async getByName( name: string ): Promise<Product[]> {
        return this.productModel.find( { name } ).exec();
    }

    async findProducts( query: string, category: string ): Promise<Product[]> {
        const regex = new RegExp( query, 'i' );
        let searchQuery: any = {};

        if ( query ) {
            searchQuery.name = regex;
        }

        if ( category ) {
            searchQuery.category = category;
        }

        return this.productModel.find( searchQuery ).exec();
    }

    async create( productDto: CreateProductDto ): Promise<Product> {
        const newProduct = new this.productModel( productDto );
        return newProduct.save();
    }

    async update( id: string, productDto: UpdateProductDto ): Promise<Product> {
        return this.productModel.findByIdAndUpdate( id, productDto, { new: true } );
    }

    async edit( id: string, productDto: EditProductDto ): Promise<Product> {
        return this.productModel.findByIdAndUpdate( id, productDto, { new: true } );
    }

    async remove( id: string ): Promise<Product> {
        return this.productModel.findByIdAndDelete( id );
    }
}
