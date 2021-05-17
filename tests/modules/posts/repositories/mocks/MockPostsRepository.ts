import Post from '@modules/posts/entities/Post';
import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';
import * as CreatePostBoundary from '@modules/posts/useCases/CreatePost/CreatePostBoundary';
import * as UpdatePostBoundary from '@modules/posts/useCases/UpdatePost/UpdatePostBoundary';
import faker from 'faker';

export default class MockPostsRepository implements PostsRepository {
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  create({ title, content, userId }: CreatePostBoundary.Params): Promise<Post> {
    const post = new Post();

    Object.assign(post, {
      id: faker.datatype.number(),
      title,
      content,
      userId,
    });

    this.posts.push(post);

    return new Promise(resolve => resolve(post));
  }

  findById(id: number): Promise<Post | undefined> {
    const post = this.posts.find(post => post.id === id);

    return new Promise(resolve => resolve(post));
  }

  findAll(): Promise<Post[]> {
    return new Promise(resolve => resolve(this.posts));
  }

  update(post: Post, data: UpdatePostBoundary.Params): Promise<Post> {
    const { id } = post;
    const index = this.posts.findIndex(post => post.id === id);

    Object.assign(this.posts[index], {
      ...data,
    });

    return new Promise(resolve => resolve(this.posts[index]));
  }

  delete(id: number): Promise<void> {
    const index = this.posts.findIndex(post => post.id === id);

    this.posts.splice(index, 1);

    return new Promise(resolve => resolve());
  }

  search(searchTerm: string): Promise<Post[]> {
    const posts = this.posts.filter(
      post =>
        post.title.toLowerCase() === searchTerm.toLowerCase() ||
        post.content.toLowerCase() === searchTerm.toLowerCase(),
    );

    return new Promise(resolve => resolve(posts));
  }
}
