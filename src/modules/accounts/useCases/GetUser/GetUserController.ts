import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import GetUserUseCase from './GetUserUseCase';

export default class GetUserController {
  constructor(private useCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user = await this.useCase.execute(id);

    return response.status(200).send(classToClass(user));
  }
}
