import { SettingsStrapi } from 'shared-typed/settings-strapi';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { data } from './dados.json';
export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

export const loadPosts = async () => {
  await delay(0);
  return data;
};

async function delay(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}
