import { BaseUser } from './base-user.dto';

export class CreateUserDto extends BaseUser {
  created_at: Date;
}
