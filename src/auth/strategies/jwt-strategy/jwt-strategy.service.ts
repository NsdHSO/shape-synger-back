import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID')
    });
  }

  async validate(payload, done: Function) {
    try {
      // You could add a function to the authService to verify the claims of the token:
      // i.e. does the user still have the roles that are claimed by the token
      //const validClaims = await this.authService.verifyTokenClaims(payload);

      //if (!validClaims)
      //    return done(new UnauthorizedException('invalid token claims'), false);

      done(null, payload);
    } catch (err) {
      throw new UnauthorizedException('unauthorized', err.message);
    }
  }
}
