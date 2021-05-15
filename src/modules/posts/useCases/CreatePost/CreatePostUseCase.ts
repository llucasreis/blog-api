import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';

import * as CreatePostDTO from './CreatePostDTO';

export default class CreatePostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    title,
    content,
    userId,
  }: CreatePostDTO.Params): Promise<CreatePostDTO.Result> {
    const post = await this.postsRepository.create({
      title,
      content,
      userId,
    });

    return post;
  }
}
