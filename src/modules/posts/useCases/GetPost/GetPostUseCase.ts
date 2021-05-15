import Post from '@modules/posts/entities/Post';
import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';
import AppError from 'presentation/errors/AppError';

export default class GetPostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute(id: number): Promise<Post> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new AppError('Post não existe', 404);
    }

    return post;
  }
}
