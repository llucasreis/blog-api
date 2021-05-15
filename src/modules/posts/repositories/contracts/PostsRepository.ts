import Post from '@modules/posts/entities/Post';

import * as CreatePostDTO from '../../useCases/CreatePost/CreatePostDTO';

export default interface PostsRepository {
  create(data: CreatePostDTO.Params): Promise<Post>;
  findAll(): Promise<Post[]>;
}
