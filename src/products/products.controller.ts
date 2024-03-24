import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EditProductDto } from './dto/edit-product.dto';
import { Product } from './schemas/product.schema';
import { ApiOperation, ApiParam, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SearchDto } from './dto/search.dto';

@ApiTags( 'products' )
@Controller( 'products' )
export class ProductsController {
    constructor( private readonly productsService: ProductsService ) { }

    @Get()
    @ApiOperation( { summary: 'Get all products' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The list of products', type: [ Product ] } )
    async getAll(): Promise<Product[]> {
        return this.productsService.getAll();
    }

    @Get( ':id' )
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Get a product by ID' } )
    @ApiParam( { name: 'id', description: 'The product ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The product', type: Product } )
    async getOne( @Param( 'id' ) id: string ): Promise<Product> {
        return this.productsService.getById( id );
    }

    @Post()
    @HttpCode( HttpStatus.CREATED )
    @ApiOperation( { summary: 'Create a product' } )
    @ApiResponse( { status: HttpStatus.CREATED, description: 'The product', type: Product } )
    async create( @Body() createProductDto: CreateProductDto ): Promise<Product> {
        return this.productsService.create( createProductDto );
    }

    @Delete( ':id' )
    @HttpCode( HttpStatus.NO_CONTENT )
    @ApiOperation( { summary: 'Delete a product' } )
    @ApiParam( { name: 'id', description: 'The product ID' } )
    @ApiResponse( { status: HttpStatus.NO_CONTENT, description: 'The product has been deleted' } )
    async remove( @Param( 'id' ) id: string ): Promise<void> {
        await this.productsService.remove( id );
    }

    @Put( ':id' )
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Update a product' } )
    @ApiParam( { name: 'id', description: 'The product ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The updated product', type: Product } )
    async update( @Param( 'id' ) id: string, @Body() updateProductDto: UpdateProductDto ): Promise<Product> {
        return this.productsService.update( id, updateProductDto );
    }

    @Patch( ':id' )
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Edit a product' } )
    @ApiParam( { name: 'id', description: 'The product ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The edited product', type: Product } )
    async edit( @Param( 'id' ) id: string, @Body() editProductDto: EditProductDto ): Promise<Product> {
        return this.productsService.edit( id, editProductDto );
    }

    @Get( 'search' )
    @ApiOperation( {
        summary: 'Search for products',
        description: 'Search for products by keyword or category',
    } )
    @HttpCode( HttpStatus.OK )
    async getProductsBySearch( @Query() searchDto: SearchDto ): Promise<Product[]> {
        const { q, category } = searchDto;
        return this.productsService.findProducts( q, category );
    }
}

