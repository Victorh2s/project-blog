import * as Styled from './styles';

export type TextComponentProps = {
  html: string;
};

export const TextComponent = ({ html }: TextComponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
