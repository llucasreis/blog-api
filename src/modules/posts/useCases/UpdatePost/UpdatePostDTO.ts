import Post from '@modules/posts/entities/Post';

export interface Params {
  title: string;
  content: string;
}

export interface RequestParams {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export type Result = Post;
