import UserMapper from '@modules/accounts/mappers/UserMapper';
import { Request, Response } from 'express';

import ListUsersUseCase from './ListUsersUseCase';

export default class ListUsersController {
  constructor(private useCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.useCase.execute();

    return response.status(200).send(UserMapper.toDTOs(users));
  }
}
