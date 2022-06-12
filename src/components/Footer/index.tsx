import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <TextComponent html={footerHtml} />
    </Styled.Container>
  );
};
