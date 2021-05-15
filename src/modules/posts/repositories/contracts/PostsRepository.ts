import Post from '@modules/posts/entities/Post';

import * as CreatePostBoundary from '../../useCases/CreatePost/CreatePostBoundary';
import * as UpdatePostBoundary from '../../useCases/UpdatePost/UpdatePostBoundary';

export default interface PostsRepository {
  create(data: CreatePostBoundary.Params): Promise<Post>;
  findById(id: number): Promise<Post | undefined>;
  findAll(): Promise<Post[]>;
  update(post: Post, data: UpdatePostBoundary.Params): Promise<Post>;
  delete(id: number): Promise<void>;
  search(searchTerm: string): Promise<Post[]>;
}
