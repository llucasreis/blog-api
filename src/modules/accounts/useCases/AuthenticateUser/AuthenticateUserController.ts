import { Request, Response } from 'express';

import { Params } from './AuthenticateUserDTO';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

export default class AuthenticateUserController {
  constructor(private useCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body as Params;

    const { token } = await this.useCase.execute({
      email,
      password,
    });

    return response.status(200).json({ token });
  }
}
