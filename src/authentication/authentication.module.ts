import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from '@src/users/users.module';
import { AuthenticationGuard } from './authentication.guard';

@Module({
  imports: [UsersModule],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    {
      provide: APP_GUARD, // register the guard globally in the AppModule (or any other module) using the APP_GUARD token.
      useClass: AuthenticationGuard,
    },
  ],
})
export class AuthenticationModule {}
