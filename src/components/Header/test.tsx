import props from './mock';
import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Header/>', () => {
  it('Should render Header with a logo, heading and textcomponent', () => {
    renderTheme(<Header {...props} showText={true} />);
    expect(
      screen.getByRole('heading', { name: props.BlogName }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Usuário teste/i })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(screen.getByText(props.BlogDescription)).toBeInTheDocument();
  });

  it('Should render only Image', () => {
    renderTheme(<Header {...props} showText={false} />);
    expect(screen.queryByRole(props.BlogName)).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Usuário teste/i })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(screen.queryByRole(props.BlogDescription)).not.toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
