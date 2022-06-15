import React, { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';

export type MenuProps = {
  links: MenuPropsLinks[];
  BlogName: string;
  logo: string;
};

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export const Menu = ({ links = [], BlogName, logo }: MenuProps) => {
  const [Visible, SetVisible] = useState(false);

  const handleOpenClosedMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    SetVisible((v) => !v);
  };
  return (
    <>
      <Styled.Button
        Visible={Visible}
        href="#"
        aria-label="Open or Close Menu"
        title="Open or Close Menu"
        onClick={handleOpenClosedMenu}
      >
        {Visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Container Visible={Visible} arial-hidden={!Visible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={BlogName} srcImg={logo} />
          </Styled.Logo>
          <Styled.MenuLinks>
            {links.map((link) => (
              <MenuLink link={link.link} key={link.id} newTab={link.newTab}>
                {link.text}
              </MenuLink>
            ))}
          </Styled.MenuLinks>
        </Styled.Nav>
      </Styled.Container>
    </>
  );
};
