import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';
import { Container as LogoLinkstyles } from '../LogoLink/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacings.huge};
    width: 100%;
    max-width: 96rem;
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    margin: 0 auto;

    ${HeadingStyles} {
      margin: 0 0 calc(${theme.spacings.small} - 1rem);
    }

    ${LogoLinkstyles}{
      >img{
        border: 0.3rem solid;
        border-color:  rgb(74 222 128);
      }
    }

    @media ${theme.media.lteMedium}{
      display:flex;
      flex-flow: column wrap;

      & > ${HeadingStyles} {
        margin: 0 0 ${theme.spacings.medium} 0;
      }

    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;

    @media ${theme.media.lteMedium}{
      margin-left: 0;
    }
  `}
`;
