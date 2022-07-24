import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
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
    findById(@Param('id', ParseUUIDPipe) id: string): Item {        
        return this.ItemsService.findById(id);
    }

    @Patch(':id')
    updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.ItemsService.updateStatus(id)
    }

    @Delete(':id')
    deleteItem(@Param('id', ParseUUIDPipe) id: string): void {
        this.ItemsService.deleteItem(id);
    }

    @Post()
    create(@Body() createItemDto :CreateItemDto): Item {
        return this.ItemsService.create(createItemDto);
    }
}
