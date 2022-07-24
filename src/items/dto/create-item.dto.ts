import { ItemStatus } from "../item-status.enum";

export class CreateItemDto {
    name: string;
    price: number;
    description: string;
}