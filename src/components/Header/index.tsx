import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type HeaderProps = {
  BlogName: string;
  BlogDescription: string;
  logo: string;
  showText: boolean;
};

export const Header = ({
  BlogName,
  BlogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        srcImg={logo}
        text={`${BlogName} - ${BlogDescription}`}
        newTab={true}
        link="/"
      />

      {showText && (
        <Styled.Content>
          <Heading colorDark={true} as={'h1'} size={'big'}>
            {BlogName}
          </Heading>
          <TextComponent html={BlogDescription} />
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
