import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SubCategoryModule } from './subCategory/subCategory.module';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';

@Module( {
  imports: [
    ConfigModule.forRoot( {
      envFilePath: '.env',
      isGlobal: true,
    } ),
    AuthModule,
    MongooseModule.forRoot( process.env.DB_CONNECT ),
    ProductsModule,
    SubCategoryModule,
    CategoryModule

  ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
