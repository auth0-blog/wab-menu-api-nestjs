// src/item.ts

import { IsString, IsNumber, IsOptional } from 'class-validator';

export class Item {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly name: string;
  @IsNumber() readonly price: number;
  @IsString() readonly description: string;
  @IsString() readonly image: string;
}
