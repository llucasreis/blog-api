import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';

import * as CreatePostBoundary from './CreatePostBoundary';

export default class CreatePostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    title,
    content,
    userId,
  }: CreatePostBoundary.Params): Promise<CreatePostBoundary.Result> {
    const post = await this.postsRepository.create({
      title,
      content,
      userId,
    });

    return post;
  }
}
