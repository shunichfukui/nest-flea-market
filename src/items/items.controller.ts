import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseUUIDPipe) id: string): Item {        
        return this.itemsService.findById(id);
    }

    @Patch(':id')
    updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.itemsService.updateStatus(id)
    }

    @Delete(':id')
    deleteItem(@Param('id', ParseUUIDPipe) id: string): void {
        this.itemsService.deleteItem(id);
    }

    @Post()
    async create(@Body() createItemDto :CreateItemDto): Promise<Item> {
        return await this.itemsService.create(createItemDto);
    }
}
