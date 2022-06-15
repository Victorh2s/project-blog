import { PostStrapi } from 'shared-typed/post-strapi';
import { SettingsStrapi } from 'shared-typed/settings-strapi';
import { Base } from '../Base';
import { BlogPost } from '../../components/BlogPost';
import { PostTags } from '../../components/PostTags';
import * as Styled from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <Base settings={settings}>
      <BlogPost {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
    </Base>
  );
};
