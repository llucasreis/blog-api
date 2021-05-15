import Post from '@modules/posts/entities/Post';

export interface Params {
  title: string;
  content: string;
  userId: number;
}

export type Result = Post;
