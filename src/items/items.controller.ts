import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly ItemsService: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.ItemsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Item {        
        return this.ItemsService.findById(id);
    }

    @Patch(':id')
    updateStatus(@Param('id') id: string): Item {
        return this.ItemsService.updateStatus(id)
    }

    @Delete(':id')
    deleteItem(@Param('id') id: string): void {
        this.ItemsService.deleteItem(id);
    }

    @Post()
    create(
        @Body('id') id: string,
        @Body('name') name: string,
        @Body('price') price: number,
        @Body('description') description: string
    ): Item {
        const item: Item = {
            id,
            name,
            price,
            description,
            status: ItemStatus.ON_SALE,
        }
        return this.ItemsService.create(item);
    }
}
