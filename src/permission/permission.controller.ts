import { Controller, Body, Post } from '@nestjs/common';
import { PermissionEntity } from './permission.entity';
import { PermissionService } from './permission.service';
import { ValidationPipe } from '@src/foundation/pipes/index';

@Controller('permission')
export class PermissionController {
  constructor(private service: PermissionService) {}

  @Post('/save')
  async save(@Body(new ValidationPipe()) permissionEntity: PermissionEntity) {
    return this.service.save(permissionEntity);
  }

  @Post('/update')
  async update(@Body() permission: PermissionEntity) {
    return this.service.update(permission);
  }
}
