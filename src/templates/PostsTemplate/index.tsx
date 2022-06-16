import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from 'shared-typed/post-strapi';
import { SettingsStrapi } from 'shared-typed/settings-strapi';
import { Base } from '../Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <Base settings={settings}>
      <PostGrid posts={posts} />
    </Base>
  );
};
