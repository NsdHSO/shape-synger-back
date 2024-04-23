import { BaseUser } from './base-user.dto';

export class UpdateUserDto extends BaseUser {
  updated_at: Date;
}
