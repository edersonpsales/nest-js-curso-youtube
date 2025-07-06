import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { v4 as uuidv4 } from 'uuid';
import { hashSync as bcrypt } from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [];

  create(user: UserDto) {
    user.id = uuidv4(); // Generate a unique ID for the new user
    user.password = bcrypt(user.password, 10); // Hash the password
    this.users.push(user);
    console.log(this.users);
  }
}
