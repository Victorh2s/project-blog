import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base, BaseProps } from '.';
import mock from './mock';

const props: BaseProps = mock;

describe('<Base />', () => {
  it('should render base elements (img, button, footer and Go to top)', () => {
    renderTheme(<Base {...props} />);

    expect(
      screen.getByRole('img', {
        name: 'Usuário teste - Uma descrição para o seu blog.',
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText('Open or Close Menu')).toBeInTheDocument();
    expect(screen.getByText('O texto da footer')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should match snapshot)', () => {
    const { container } = renderTheme(<Base {...props} />);

    expect(container).toMatchSnapshot();
  });
});
