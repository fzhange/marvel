import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { FoundationModule } from './foundation/foundation.module';

@Module({
  imports: [
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    FoundationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
