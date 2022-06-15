import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  width: 100%;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
  max-width: 120rem;
  max-height: 300rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: ${theme.spacings.large};
  padding: ${theme.spacings.large};
  text-overflow: ellipsis;

  @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const NotFound = styled.p`
${({ theme }) => css`

    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};

`}
`;
