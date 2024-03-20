import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { UpdateProduct, UpdateProductSchema } from './schemas/update-product.schema'; // Проверьте правильность пути
import { EditProduct, EditProductSchema } from './schemas/edit-product.schema';

@Module( {
  providers: [ ProductsService ],
  controllers: [ ProductsController ],
  imports: [
    MongooseModule.forFeature( [
      { name: Product.name, schema: ProductSchema },
      { name: UpdateProduct.name, schema: UpdateProductSchema },
      { name: EditProduct.name, schema: EditProductSchema },
    ] ),
  ],
} )
export class ProductsModule { }

