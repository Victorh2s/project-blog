import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { TextComponent } from '../TextComponent';

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
      <ArticleHeader
        id={id}
        author={author}
        categories={categories}
        title={title}
        excerpt={excerpt}
        createdAt={createdAt}
        cover={cover}
      />
      <TextComponent html={content} />
    </Styled.Wrapper>
  );
};
