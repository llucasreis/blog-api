import UserMapper from '@modules/accounts/mappers/UserMapper';
import { Request, Response } from 'express';

import GetUserUseCase from './GetUserUseCase';

export default class GetUserController {
  constructor(private useCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user = await this.useCase.execute(parseInt(id, 10));

    return response.status(200).send(UserMapper.toDTO(user));
  }
}
