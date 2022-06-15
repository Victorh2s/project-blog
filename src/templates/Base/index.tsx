import { Menu } from '../../components/Menu';
import React from 'react';
import { SettingsStrapi } from 'shared-typed/settings-strapi';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export type BaseProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const Base = ({ settings, children }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.menuLink}
        BlogName={settings.blogName}
        logo={settings.logo.url}
      />
      <Styled.HeaderContainer>
        <Header
          BlogName={settings.blogName}
          BlogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </Styled.HeaderContainer>

      <Styled.Container>{children}</Styled.Container>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
