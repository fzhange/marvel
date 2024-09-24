import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@src/users/users.service';
import { SignInDto } from './sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const user = await this.usersService.findOneByName(signInDto.name);
    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    return {
      access_token: `Bearer ${await this.jwtService.signAsync({ sub: user.id })}`,
    };
  }
}
