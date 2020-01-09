// src/app.module.ts

import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [ItemsModule, AuthzModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
