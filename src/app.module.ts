import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module( {
  imports: [
    MongooseModule.forRoot( 'mongodb+srv://Nataly:mFid220821@cluster0.bjaedo8.mongodb.net/db-test-shop?retryWrites=true&w=majority' ),
    ProductsModule,
  ],
} )
export class AppModule { }
