import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import ListUsersUseCase from './ListUsersUseCase';

export default class ListUsersController {
  constructor(private useCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.useCase.execute();

    return response.status(200).send(classToClass(users));
  }
}
