import { Injectable } from '@nestjs/common';
import { TUser } from './user.type';

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 1,
      login: 'john',
      password: '123',
    },
    {
      id: 2,
      login: 'maria',
      password: '123',
    },
    {
      id: 3,
      login: 'ana',
      password: '123',
    },
  ];

  constructor() {}

  find(login: string, password: string): TUser {
    return this.users.find(
      (user) => user.login === login && user.password === password,
    );
  }
}
