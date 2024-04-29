import { Injectable, NestMiddleware } from '@nestjs/common';

/* eslint-disable no-console*/
@Injectable()
export class LoggingMiddlewareService implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.headers.host);
    console.log(req.protocol);
    next();
  }
}


