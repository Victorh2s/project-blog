import * as Styled from './styles';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';

import { Heading } from '../Heading';
import { StrapiImage } from 'shared-typed/strapi-img';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  createdAt,
  categories,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big" colorDark={true}>
        {title}
      </Heading>
      <Styled.Text>{excerpt}</Styled.Text>
      <Styled.Img src={cover.url} alt={cover.alternativeText} />
      <ArticleMeta
        author={author}
        createdAt={createdAt}
        categories={categories}
      />
    </Styled.Wrapper>
  );
};
