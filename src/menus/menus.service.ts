import { Injectable, Inject } from '@nestjs/common';
import { DATA_SOURCE } from '@src/foundation/constant/index.constant';
import { DataSource } from 'typeorm';
import { Request } from 'express';
import { UsersService } from '@src/users/users.service';

@Injectable()
export class MenusService {
  constructor(
    @Inject(DATA_SOURCE) private dataSource: DataSource,
    private usersService: UsersService,
  ) {}

  async getPermissions(request: Request) {
    const { sub } = request.user;
    return this.usersService.findOneById(sub);
  }
}
