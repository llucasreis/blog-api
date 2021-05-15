import PostsRepository from '@modules/posts/repositories/contracts/PostsRepository';
import TypeORMPostsRepository from '@modules/posts/repositories/typeorm/TypeORMPostsRepository';

export default function PostsRepositoryFactory(): PostsRepository {
  const PostsRepository = new TypeORMPostsRepository();

  return PostsRepository;
}
