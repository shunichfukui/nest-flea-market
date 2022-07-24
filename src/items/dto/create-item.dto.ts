import { ItemStatus } from "../item-status.enum";

export class CreateItemDto {
    id: string;
    name: string;
    price: number;
    description: string;
}