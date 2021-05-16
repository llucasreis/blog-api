import { Request, Response } from 'express';

import * as CreateUserBoundary from './CreateUserBoundary';
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { displayName, email, password, image } =
      request.body as CreateUserBoundary.Params;

    const { token } = await this.useCase.execute({
      displayName,
      email,
      password,
      image,
    });

    return response.status(201).json({ token });
  }
}
