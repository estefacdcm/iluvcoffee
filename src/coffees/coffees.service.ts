import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';


@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [{
        id: 1,
        name: "Shipwreck roast",
        brand: "Buddy Brew",
        flavors: ["chocolate", "vainilla"]
    }]

    findAll() {
        return this.coffees;
    }

    findOne(id: number){
        let coffee = this.coffees.find(item => item.id === +id);
        if(!coffee){
            throw new HttpException(`No existe el item con id ${id}`, HttpStatus.NOT_FOUND);
        }
        return coffee;
    }

    create(createCoffeeDTO: any){
        this.coffees.push(createCoffeeDTO);
    }

    update(id: number, createCoffeeDTO: any){
        const existObject = this.findOne(id);
        if(existObject){
            
        }
    }

    remove(id: number){
        const indexObject = this.coffees.findIndex(item => item.id === id);
        if(indexObject >= 1){
            this.coffees.splice(indexObject,1);
        }
    }
}
