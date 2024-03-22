import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EditProductDto } from './dto/edit-product.dto';


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
