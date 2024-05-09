import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';
import { Admin, AdminGuard } from 'src/auth/guards/admin.guard';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { EditCategoryDto } from './dto/edit-category.dto';


@ApiTags( 'category' )
@Controller( 'category' )
export class CategoryController {
    constructor( private readonly categoryService: CategoryService ) { }

    @Get()
    @ApiOperation( { summary: 'Get all categories' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The list of categories', type: [ Category ] } )
    async getAll(): Promise<Category[]> {
        return this.categoryService.getAll();
    }

    @Get( ':id' )
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Get a category by ID' } )
    @ApiParam( { name: 'id', description: 'The product ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The category', type: Category } )
    async getOne( @Param( 'id' ) id: string ): Promise<Category> {
        return this.categoryService.getById( id );
    }

    @Post()
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.CREATED )
    @ApiOperation( { summary: 'Create a category' } )
    @ApiResponse( { status: HttpStatus.CREATED, description: 'The category', type: Category } )
    async create( @Body() createCategoryDto: CreateCategoryDto ): Promise<Category> {
        return this.categoryService.create( createCategoryDto );
    }

    @Delete( ':id' )
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.NO_CONTENT )
    @ApiOperation( { summary: 'Delete a category' } )
    @ApiParam( { name: 'id', description: 'The category ID' } )
    @ApiResponse( { status: HttpStatus.NO_CONTENT, description: 'The category has been deleted' } )
    async remove( @Param( 'id' ) id: string ): Promise<void> {
        await this.categoryService.remove( id );
    }

    @Put( ':id' )
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Update a category' } )
    @ApiParam( { name: 'id', description: 'The category ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The updated category', type: Category } )
    async update( @Param( 'id' ) id: string, @Body() updateCategoryDto: UpdateCategoryDto ): Promise<Category> {
        return this.categoryService.update( id, updateCategoryDto );
    }

    @Patch( ':id' )
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Edit a category' } )
    @ApiParam( { name: 'id', description: 'The category ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The edited category', type: Category } )
    async edit( @Param( 'id' ) id: string, @Body() editCategoryDto: EditCategoryDto ): Promise<Category> {
        return this.categoryService.edit( id, editCategoryDto );
    }
}
