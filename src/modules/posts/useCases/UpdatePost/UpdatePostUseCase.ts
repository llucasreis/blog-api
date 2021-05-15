import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';
import AppError from 'presentation/errors/AppError';

import { UseCaseParams, Result } from './UpdatePostBoundary';

export default class UpdatePostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    id,
    title,
    content,
    userId,
  }: UseCaseParams): Promise<Result> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new AppError('Post não existe', 404);
    }

    if (post.userId !== userId) {
      throw new AppError('Usuário não autorizado', 401);
    }

    const updatedPost = await this.postsRepository.update(post, {
      title,
      content,
    });

    return updatedPost;
  }
}
