import PostMapper from '@modules/posts/mappers/PostMapper';
import { Request, Response } from 'express';

import GetPostUseCase from './GetPostUseCase';

export default class GetPostController {
  constructor(private useCase: GetPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const post = await this.useCase.execute(parseInt(id, 10));

    return response.status(200).send(PostMapper.toDTO(post));
  }
}
