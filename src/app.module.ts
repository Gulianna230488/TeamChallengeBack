import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module( {
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot( process.env.MONGODB_URI ),
    ProductsModule,
  ],
} )
export class AppModule { }
