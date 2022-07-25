import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemsService {
    constructor(private readonly itemRepository: ItemRepository) {}

    private items: Item[] = [];

    findAll(): Item[] {
        return this.items;
    }

    findById(id: string): Item {
        const item = this.items.find((item) => item.id === id);
        if (!item) {
            throw new NotFoundException();
        }

        return item;
    }

    updateStatus(id: string): Item {
        const item = this.findById(id);
        item.status = ItemStatus.SOLD_OUT;
        return item;
    }

    deleteItem(id: string): void {
        this.items = this.items.filter((item) => item.id !== id);
    }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        return await this.itemRepository.createItem(createItemDto);
    }
}
