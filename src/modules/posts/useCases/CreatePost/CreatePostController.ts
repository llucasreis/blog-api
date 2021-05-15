import PostMapper from '@modules/posts/mappers/PostMapper';
import { Request, Response } from 'express';

import { Params } from './CreatePostBoundary';
import CreatePostUseCase from './CreatePostUseCase';

export default class CreatePostController {
  constructor(private useCase: CreatePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content } = request.body as Omit<Params, 'userId'>;
    const { id: userId } = request.user;

    const post = await this.useCase.execute({
      title,
      content,
      userId,
    });

    return response.status(201).send(PostMapper.toSimpleDTO(post));
  }
}
