import { MenuPropsLinks } from 'components/Menu';
import { StrapiImage } from './strapi-img';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  menuLink: MenuPropsLinks[];
  text: string;
};
