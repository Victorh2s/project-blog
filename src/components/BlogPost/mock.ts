import { BlogPostProps } from '.';
import { data } from '../api/dados.json';

const { title, excerpt, content, cover, author, categories, createdAt } =
  data.posts[0];

export default {
  title,
  excerpt,
  content,
  cover,
  author,
  categories,
  createdAt,
} as BlogPostProps;
