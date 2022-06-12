import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`

  text-align: center;
  justify-content: center;
  margin-bottom: ${theme.spacings.xlarge};
  border-bottom: 0.1rem solid ${theme.colors.darkeyGray};

  ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
    }

  @media ${theme.media.lteMedium} {
      ${HeadingStyles}{
      font-size: ${theme.font.sizes.large};
    }
  }

`}
`;

export const Text = styled.p`
  text-align: center;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 100%;
  display: block;
`;
