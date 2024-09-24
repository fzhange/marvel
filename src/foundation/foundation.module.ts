import { Module } from '@nestjs/common';
import { JWT_CONFIG_INFO } from './constant/index.constant';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true, // we don't need to import the JwtModule anywhere else in our application.
      secret: JWT_CONFIG_INFO.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [],
  exports: [],
})
export class FoundationModule {}
