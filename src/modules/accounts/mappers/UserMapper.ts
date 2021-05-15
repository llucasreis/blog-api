import { classToClass } from 'class-transformer';

import User from '../entities/User';

export default class UserMapper {
  static toDTO(user: User): User {
    return classToClass(user);
  }

  static toDTOs(users: User[]): User[] {
    return classToClass(users);
  }
}
