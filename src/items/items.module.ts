import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';

@Module({
  providers: [ItemsService],
})
export class ItemsModule {}
