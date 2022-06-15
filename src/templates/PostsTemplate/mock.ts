import { PostsTemplateProps } from '.';
import { data } from '../../components/api/dados.json';

export default {
  settings: data.setting,
  posts: data.posts,
} as PostsTemplateProps;
