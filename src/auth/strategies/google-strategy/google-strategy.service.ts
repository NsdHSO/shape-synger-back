import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategyService extends PassportStrategy(
  Strategy,
  'google',
) {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_SECRET'),
      callbackURL: configService.get<string>('REDIRECT_URI'),
      scope: ['email', 'profile'],
      access_type: 'offline',
      prompt: 'select_account', // <=== Add your prompt setting here
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function,
  ) {
    try {
      const { emails, name, photos } = profile;
      const user = {
        email: emails[0],
        firstName: name.givenName,
        lastName: name.familyName,
        picture: photos[0].value,
      };
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err, false); // Or return a specific error response
    }
  }
}
