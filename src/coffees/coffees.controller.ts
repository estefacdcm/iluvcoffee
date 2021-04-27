import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query } from '@nestjs/common';
import { get } from 'http';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeServices: CoffeesService){
    }
    
    @Get()
    findAll(){
        return this.coffeeServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.coffeeServices.findOne(id);
    }

    @Post()
    //@HttpCode(HttpStatus.GONE) respuesta con un codigo de error estatico
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        return createCoffeeDto;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return `This action is update patch ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.coffeeServices.remove(id);
    }

    @Get('paginationCoffee/query')
    getPaginatedResults(@Query() paginationQuery){
        const {limit, offset} = paginationQuery;
        return `This action return all coffees ${limit}, ${offset}`;
    }



}
