import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';
import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('link', { name: 'Victor H' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Victor H' })).toHaveAttribute(
      'href',
      '/author/victor-henrique',
    );

    expect(screen.getByRole('link', { name: 'Tech' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute(
      'href',
      '/category/tech',
    );

    expect(screen.getByRole('link', { name: 'JS' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
      'href',
      '/category/javascript',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByText('10 de jun. de 2022')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without author', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} author={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without categories', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} categories={[]} />,
    );

    expect(container).toMatchSnapshot();
  });
});
