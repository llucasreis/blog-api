import { Request, Response } from 'express';

import * as CreateUserDTO from './CreateUserDTO';
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { displayName, email, password, image } =
      request.body as CreateUserDTO.Params;

    const { token } = await this.useCase.execute({
      displayName,
      email,
      password,
      image,
    });

    return response.status(201).json({ token });
  }
}
