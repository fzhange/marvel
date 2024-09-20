import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthenticationService } from '../authentication/authentication.service';
import { SignInDto } from './sign-in.dto';
import { PublicDecorator } from '../foundation/public.decorator';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  @PublicDecorator()
  signIn(@Body() signInDto: SignInDto) {
    return this.authenticationService.signIn(signInDto);
  }
}
