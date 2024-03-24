import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module( {
  imports: [
    MongooseModule.forRoot( 'mongodb+srv://Nataly:mFid220821@cluster0.bjaedo8.mongodb.net/db-test-shop?retryWrites=true&w=majority' ),
    ProductsModule,
  ],

} )
export class AppModule { }
