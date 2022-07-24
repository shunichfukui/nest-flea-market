import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [],
  exports: []
})

export class AppModule {}
