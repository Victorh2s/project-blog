import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  Visible: boolean;
};

const ContainerChanger = (
  Visible: MenuBehaviorProps['Visible'],
  theme: DefaultTheme,
) => css`
  left: ${Visible ? 0 : '-35rem'};
  overflow-y: ${Visible ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${Visible ? '0' : '-35rem'};
  }
`;

export const Container = styled.div<MenuBehaviorProps>`
  ${({ theme, Visible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${ContainerChanger(Visible, theme)}
  `}
`;

export const Nav = styled.nav`
    margin: 0 auto;
    width: 100%;
`;

export const MenuLinks = styled.div`

   margin-bottom: 5rem;

`;

export const Logo = styled.div`

    ${HeadingStyles} {

      img{
        margin: 0 auto;
        margin-bottom: 3rem;
      }
    }

`;

const ButtonChanger = (
  Visible: MenuBehaviorProps['Visible'],
  theme: DefaultTheme,
) => css`
  left: ${Visible ? '26rem,' : '1rem'};
  color: ${Visible ? theme.colors.secondary : theme.colors.primary};

  @media ${theme.media.lteMedium} {
    left: ${Visible ? '26rem' : '-0.5rem'};
  }
`;

export const Button = styled.a<MenuBehaviorProps>`
  ${({ theme, Visible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    left: 26rem;
    color: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    transition: all 300ms ease-in-out;
    ${ButtonChanger(Visible, theme)}
  `}
`;
