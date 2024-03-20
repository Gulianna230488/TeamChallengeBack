import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EditProduct, EditProductDocument } from './schemas/edit-product.schema';
import { EditProductDto } from './dto/edit-product.dto';
import { UpdateProduct, UpdateProductDocument } from './schemas/update-product.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel( Product.name ) private productModel: Model<ProductDocument>,
        @InjectModel( UpdateProduct.name ) private updateProductModel: Model<UpdateProductDocument>, // Добавлено
        @InjectModel( EditProduct.name ) private editProductModel: Model<EditProductDocument>, // Добавлено
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

    async update( id: string, productDto: UpdateProductDto ): Promise<UpdateProduct> {
        return this.updateProductModel.findByIdAndUpdate( id, productDto, { new: true } );
    }

    async edit( id: string, productDto: EditProductDto ): Promise<EditProduct> {
        return this.editProductModel.findByIdAndUpdate( id, productDto, { new: true } );
    }

    async remove( id: string ): Promise<Product> {
        return this.productModel.findByIdAndDelete( id );
    }
}
