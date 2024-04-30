import { AuthService } from './auth.service';
import { UserEntity } from '../users/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: UserEntity): Promise<{
        access_token: string;
    }>;
    signUp(signUpDto: UserEntity): Promise<{
        message: string;
    }>;
}
