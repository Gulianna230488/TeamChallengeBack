import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EditProductDto } from './dto/edit-product.dto';

@Controller( 'products' )
export class ProductsController {
    constructor( private readonly productsService: ProductsService ) { }

    @Get()
    getAll() {
        return 'getAll'
    }

    @Get( ':id' )
    getOne( @Param( 'id' ) id: string ) {
        return 'getOne ' + id
    }

    @Post()
    create( @Body() createProductDto: CreateProductDto ): string {
        return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
    }

    @Delete( ':id' )
    remove( @Param( 'id' ) id: string ) {
        return 'Remove ' + id;
    }

    @Put( ':id' )
    update( @Body() updateProductDto: UpdateProductDto, @Param( 'id' ) id: string ) {
        return 'Updated ' + id;
    }

    @Patch( ':id' )
    edit( @Body() editProductDto: EditProductDto, @Param( 'id' ) id: string ) {
        return `Edited  ` + id;
    }
}
