import PostMapper from '@modules/posts/mappers/PostMapper';
import { Request, Response } from 'express';

import { Params } from './UpdatePostBoundary';
import UpdatePostUseCase from './UpdatePostUseCase';

export default class UpdatePostController {
  constructor(private useCase: UpdatePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userId } = request.user;
    const { title, content } = request.body as Params;

    const updatedPost = await this.useCase.execute({
      id: parseInt(id, 10),
      title,
      content,
      userId,
    });

    return response.status(200).send(PostMapper.toSimpleDTO(updatedPost));
  }
}
