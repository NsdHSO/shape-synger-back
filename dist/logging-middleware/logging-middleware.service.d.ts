import { NestMiddleware } from '@nestjs/common';
export declare class LoggingMiddlewareService implements NestMiddleware {
    use(req: any, res: Response, next: () => void): void;
}
