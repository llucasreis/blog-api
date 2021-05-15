import PostMapper from '@modules/posts/mappers/PostMapper';
import { Request, Response } from 'express';

import ListPostsUseCase from './ListPostsUseCase';

export default class ListPostsController {
  constructor(private useCase: ListPostsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const posts = await this.useCase.execute();

    return response.status(200).send(PostMapper.toDTOs(posts));
  }
}
