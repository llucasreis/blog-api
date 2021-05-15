import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';
import AppError from 'presentation/errors/AppError';

import * as DeletePostBoundary from './DeletePostBoundary';

export default class DeletePostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({ id, userId }: DeletePostBoundary.Params): Promise<void> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new AppError('Post não existe', 404);
    }

    if (post.userId !== userId) {
      throw new AppError('Usuário não autorizado', 401);
    }

    await this.postsRepository.delete(id);
  }
}
