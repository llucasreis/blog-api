import Post from '@modules/posts/entities/Post';

import * as CreatePostDTO from '../../useCases/CreatePost/CreatePostDTO';
import * as UpdatePostDTO from '../../useCases/UpdatePost/UpdatePostDTO';

export default interface PostsRepository {
  create(data: CreatePostDTO.Params): Promise<Post>;
  findById(id: number): Promise<Post | undefined>;
  findAll(): Promise<Post[]>;
  update(post: Post, data: UpdatePostDTO.Params): Promise<Post>;
}
