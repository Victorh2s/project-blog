import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTemplate, PostTemplateProps } from '.';
import mock from './mock';

const props: PostTemplateProps = mock;

describe('<PostTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTemplate {...props} />);

    expect(
      screen.getByRole('img', {
        name: 'Usuário teste - Uma descrição para o seu blog.',
      }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without posts ', () => {
    const { container } = renderTheme(<PostTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
