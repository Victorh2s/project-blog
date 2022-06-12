import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BlogPost, BlogPostProps } from '.';
import mock from './mock';
import { formatDate } from '../utils/format-date';

const props: BlogPostProps = mock;

describe('<BlogPost />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<BlogPost {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(/^Fugit aliquip erroribus eu eam/i)[0],
    ).toBeInTheDocument();

    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();

    expect(
      screen.getByText(/^Blockquote: Et sed legere rationibus/i),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
