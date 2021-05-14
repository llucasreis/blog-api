import { Request, Response } from 'express';

import DeleteUserUseCase from './DeleteUserUseCase';

export default class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    await this.useCase.execute(id);

    return response.status(204).send();
  }
}
