import Head from 'next/head';
import {
  loadPosts,
  StrapiPostAndSettings,
} from '../../components/api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function AuthorPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>
          Author: {posts[0].author.displayName} - {setting.blogName}
        </title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
    revalidate: 24 * 60 * 60,
  };
};
