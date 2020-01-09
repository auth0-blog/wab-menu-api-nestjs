import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
