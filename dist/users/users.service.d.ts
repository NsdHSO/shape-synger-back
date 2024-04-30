import { MongoRepository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: MongoRepository<UserEntity>);
    findOneBy(email: string): Promise<UserEntity | undefined>;
    create(createUserDto: CreateUserDto): Promise<{
        createdAt: Date;
        created_at: Date;
        id?: string;
        username?: string;
        email: string;
        password: string;
        confirmPassword?: string;
        designation?: string;
    } & UserEntity>;
}
