import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { FoundationModule } from './foundation/foundation.module';
import { RolesModule } from './roles/roles.module';
import { PermissionModule } from './permission/permission.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [
    RolesModule,
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    FoundationModule,
    PermissionModule,
    MenusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
