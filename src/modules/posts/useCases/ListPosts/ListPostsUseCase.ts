import Post from '@modules/posts/entities/Post';
import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';

export default class ListPostsUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute(): Promise<Post[]> {
    const posts = await this.postsRepository.findAll();

    return posts;
  }
}
