/* eslint-disable max-classes-per-file */
import { classToClass } from 'class-transformer';

import Post from '../entities/Post';

interface PostSimpleDTO {
  title: string;
  content: string;
  userId: number;
}

export default class PostMapper {
  static toSimpleDTO({ title, content, userId }: Post): PostSimpleDTO {
    return {
      title,
      content,
      userId,
    };
  }

  static toDTO(post: Post): Post {
    return classToClass(post);
  }

  static toDTOs(posts: Post[]): Post[] {
    return classToClass(posts);
  }
}
