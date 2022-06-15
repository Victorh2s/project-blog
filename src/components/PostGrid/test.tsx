import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

const props: PostGridProps = mock;

describe('<PostGrid />', () => {
  it('should not render NotFound', () => {
    renderTheme(<PostGrid {...props} />);

    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument();
  });

  it('should render NotFound', () => {
    renderTheme(<PostGrid {...props} posts={[]} />);

    expect(screen.queryByText(/Nenhum post/i)).toBeInTheDocument();
  });

  it('should render posts', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument();

    expect(container.querySelectorAll('p')).toHaveLength(3);
  });

  it('should render snapshot', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(container).toMatchSnapshot();
  });
});
