import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(email: any, pass: any): Promise<{
        access_token: string;
    }>;
    signUp(payload: CreateUserDto): Promise<{
        message: string;
    }>;
}
