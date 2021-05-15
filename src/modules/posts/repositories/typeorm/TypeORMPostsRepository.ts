import Post from '@modules/posts/entities/Post';
import * as CreatePostDTO from '@modules/posts/useCases/CreatePost/CreatePostDTO';
import * as UpdatePostDTO from '@modules/posts/useCases/UpdatePost/UpdatePostDTO';
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

  async findById(id: number): Promise<Post | undefined> {
    const user = await this.repository.findOne(id, {
      relations: ['user'],
    });

    return user;
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.repository.find({
      relations: ['user'],
    });

    return posts;
  }

  async update(post: Post, data: UpdatePostDTO.Params): Promise<Post> {
    const updatedPost = await this.repository.save({
      ...post,
      ...data,
    });
    return updatedPost;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
