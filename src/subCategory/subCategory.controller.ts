import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { SubCategoryService } from './subCategory.service';
import { SubCategory } from './schemas/subCategory.schema';
import { Admin, AdminGuard } from 'src/auth/guards/admin.guard';
import { CreateSubCategoryDto } from './dto/create-subCategory.dto';
import { EditSubCategoryDto } from './dto/edit-subCategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subCategory.dto';


@Controller( 'subcategory' )
export class SubCategoryController {
    constructor( private readonly subCategoryService: SubCategoryService ) { }

    @Get()
    @ApiOperation( { summary: 'Get all subcategories' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The list of subcategories', type: [ SubCategory ] } )
    async getAll(): Promise<SubCategory[]> {
        return this.subCategoryService.getAll();
    }

    @Get( ':id' )
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Get a subcategory by ID' } )
    @ApiParam( { name: 'id', description: 'The product ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The subcategory', type: SubCategory } )
    async getOne( @Param( 'id' ) id: string ): Promise<SubCategory> {
        return this.subCategoryService.getById( id );
    }

    @Post()
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.CREATED )
    @ApiOperation( { summary: 'Create a subcategory' } )
    @ApiResponse( { status: HttpStatus.CREATED, description: 'The category', type: SubCategory } )
    async create( @Body() createCategoryDto: CreateSubCategoryDto ): Promise<SubCategory> {
        return this.subCategoryService.create( createCategoryDto );
    }

    @Delete( ':id' )
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.NO_CONTENT )
    @ApiOperation( { summary: 'Delete a subcategory' } )
    @ApiParam( { name: 'id', description: 'The subcategory ID' } )
    @ApiResponse( { status: HttpStatus.NO_CONTENT, description: 'The subcategory has been deleted' } )
    async remove( @Param( 'id' ) id: string ): Promise<void> {
        await this.subCategoryService.remove( id );
    }

    @Put( ':id' )
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Update a subcategory' } )
    @ApiParam( { name: 'id', description: 'The subcategory ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The updated subcategory', type: SubCategory } )
    async update( @Param( 'id' ) id: string, @Body() updateCategoryDto: UpdateSubCategoryDto ): Promise<SubCategory> {
        return this.subCategoryService.update( id, updateCategoryDto );
    }

    @Patch( ':id' )
    @UseGuards( AdminGuard )
    @Admin()
    @HttpCode( HttpStatus.OK )
    @ApiOperation( { summary: 'Edit a subcategory' } )
    @ApiParam( { name: 'id', description: 'The subcategory ID' } )
    @ApiResponse( { status: HttpStatus.OK, description: 'The edited subcategory', type: SubCategory } )
    async edit( @Param( 'id' ) id: string, @Body() editSubCategoryDto: EditSubCategoryDto ): Promise<SubCategory> {
        return this.subCategoryService.edit( id, editSubCategoryDto );
    }
}
