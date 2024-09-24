import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}
  @Get('/getPermissions')
  getPermissions(@Req() request: Request) {
    return this.menusService.getPermissions(request);
  }
}
