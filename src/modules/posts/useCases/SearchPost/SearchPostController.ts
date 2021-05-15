import PostMapper from '@modules/posts/mappers/PostMapper';
import { Request, Response } from 'express';

import SearchPostUseCase from './SearchPostUseCase';

export default class SearchPostController {
  constructor(private useCase: SearchPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { q: searchTerm } = request.query;
    console.log('SEARCH TERM: ', searchTerm);
    const posts = await this.useCase.execute(searchTerm as string);

    return response.status(200).send(PostMapper.toDTOs(posts));
  }
}
