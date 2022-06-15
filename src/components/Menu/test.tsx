import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...props} links={undefined} />);

    const button = screen.getByRole('link', { name: 'Open or Close Menu' });
    const openMenuIcon = screen.getByLabelText('Open Menu');

    expect(button).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close Menu')).not.toBeInTheDocument();
  });

  it('should open/close menu on button click', () => {
    const { container } = renderTheme(<Menu {...props} />);

    const button = screen.getByRole('link', { name: 'Open or Close Menu' });
    fireEvent.click(button);

    expect(screen.queryByLabelText('Close Menu')).toBeInTheDocument();
    expect(screen.queryByRole('navigation')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open Menu')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Victor' }));
    expect(screen.getByRole('img', { name: 'Victor' }));
    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(mock.links.length);

    fireEvent.click(button);

    expect(screen.queryByLabelText('Close Menu')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Open Menu')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
