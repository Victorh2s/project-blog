import { PostTemplateProps } from '.';
import { data } from '../../components/api/dados.json';

export default {
  settings: data.setting,
  post: data.posts[0],
} as PostTemplateProps;
