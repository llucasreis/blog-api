import Post from '@modules/posts/entities/Post';
import * as CreatePostDTO from '@modules/posts/useCases/CreatePost/CreatePostDTO';
import { getRepository, Repository } from 'typeorm';

import PostsRepository from '../contracts/PostsRepository';

export default class TypeORMPostsRepository implements PostsRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = getRepository(Post);
  }

  async create({
    title,
    content,
    userId,
  }: CreatePostDTO.Params): Promise<Post> {
    const post = this.repository.create({
      title,
      content,
      userId,
    });

    return this.repository.save(post);
  }
}
