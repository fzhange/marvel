import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const payload = { sub: user.id, username: user.name };

    // TODO: Generate a JWT and return it here
    // instead of the user object
    return {
      access_token: `Bearer ${await this.jwtService.signAsync(payload)}`,
    };
  }
}
