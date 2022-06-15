import { BlogPostProps } from '../components/BlogPost';
import { PostTag } from './category copy';

export type PostStrapi = BlogPostProps & {
  tags: PostTag[];
  slug: string;
};
