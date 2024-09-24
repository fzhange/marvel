import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { UsersModule } from '@src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [MenusService],
  controllers: [MenusController],
})
export class MenusModule {}
