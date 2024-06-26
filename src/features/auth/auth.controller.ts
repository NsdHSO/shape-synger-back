import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards, } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, } from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';

import { BaseUser } from '../../dto/base-user.dto';
import { UserEntity } from '../../users/entities/user.entity';
import { AuthService } from './auth.service';
import { Public } from './public-key/public-strategy';

@Controller('auth')
@ApiBearerAuth()
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'User Login' })
  @ApiResponse({
    status: 200,
    description: 'The record found',
  })
  signIn(@Body() signInDto: UserEntity) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @ApiOperation({ summary: 'User Signup' })
  @ApiResponse({
    status: 200,
    description: 'The record found',
    type: [BaseUser],
  })
  signUp(@Body() signUpDto: UserEntity) {
    const payload = {
      username: signUpDto.username,
      email: signUpDto.email,
      password: signUpDto.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return this.authService.signUp(payload as any);
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() response) {
    return this.authService.googleRedirect(req, response);
  }

  @Post('google/login')
  async googleLogin(@Req() req, @Res() response) {
    let returnedValue;
    returnedValue = await this.authService.googleLogin(req);

    return response
      .send({ data: btoa(JSON.stringify(returnedValue)) })
      .status(HttpStatus.OK);
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource() {
    return 'JWT is working!';
  }
}
