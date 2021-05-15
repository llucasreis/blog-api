import { Request, Response } from 'express';

import DeletePostUseCase from './DeletePostUseCase';

export default class DeletePostController {
  constructor(private useCase: DeletePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userId } = request.user;

    await this.useCase.execute({ id: parseInt(id, 10), userId });

    return response.status(204).send();
  }
}
