import { Controller, Body, Post } from '@nestjs/common';
import { ValidationPipe } from '@src/foundation/pipes/index';
import { RolesEntity } from './roles.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private service: RolesService) {}

  @Post('/save')
  async save(@Body(new ValidationPipe()) role: RolesEntity) {
    return this.service.save(role);
  }

  @Post('/update')
  async update(@Body() role: RolesEntity) {
    return this.service.update(role);
  }
}
