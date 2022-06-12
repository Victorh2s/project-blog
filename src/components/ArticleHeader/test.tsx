import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader } from '.';
import mock from './mock';
import { formatDate } from '../utils/format-date';

const props = mock;

describe('<ArticleHeader />', () => {
  it('should render Heading, Text and meta', () => {
    renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
  });

  it('should render img', () => {
    renderTheme(<ArticleHeader {...props} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should match Snapshot', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);
    expect(container).toMatchSnapshot();
  });
});
