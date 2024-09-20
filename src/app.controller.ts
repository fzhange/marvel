import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicDecorator } from './foundation/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @PublicDecorator()
  getHello(): string {
    return this.appService.getHello();
  }
}
