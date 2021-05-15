import Post from '@modules/posts/entities/Post';
import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';

export default class SearchPostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute(searchTerm: string): Promise<Post[]> {
    let posts: Post[] = [];

    if (searchTerm !== '') {
      posts = await this.postsRepository.search(searchTerm);
    } else {
      posts = await this.postsRepository.findAll();
    }

    return posts;
  }
}
