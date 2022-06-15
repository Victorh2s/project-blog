import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { TextComponent } from '../TextComponent';
import { PostContainer } from '../PostContainer';

export type BlogPostProps = {
  content: string;
} & ArticleHeaderProps;

export const BlogPost = ({
  id,
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  content,
}: BlogPostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          id={id}
          author={author}
          categories={categories}
          title={title}
          excerpt={excerpt}
          createdAt={createdAt}
          cover={cover}
        />
      </PostContainer>

      <PostContainer size="content">
        <TextComponent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
