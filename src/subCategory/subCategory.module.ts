import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SubCategoryController } from './subCategory.controller';
import { SubCategoryService } from './subCategory.service';
import { SubCategory, SubCategorySchema } from './schemas/subCategory.schema';

@Module( {
  imports: [
    MongooseModule.forFeature( [ { name: SubCategory.name, schema: SubCategorySchema } ] ),
  ],
  controllers: [ SubCategoryController ],
  providers: [ SubCategoryService ]
} )
export class SubCategoryModule { }
