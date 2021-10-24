import React from 'react';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from 'components/Container';
import Header from 'components/Header';
import Layout from 'components/Layout';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import PostTitle from 'components/PostTitle';
import RelatedArticles from 'components/RelatedPosts';
import SectionSeparator from 'components/SectionSeparator';
import Tags from 'components/Tags/Tags';
import PostType from 'types/posts/post';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import { Edges } from 'types/common';
import { Preview } from 'types/posts/preview';

interface PostProps {
  post: PostType;
  posts: Edges<PostType>;
  preview: boolean;
}

const Post: React.FC<PostProps> = ({ post, posts, preview }) => {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>{post.tags.edges.length > 0 && <Tags tags={post.tags} />}</footer>
            </article>

            <SectionSeparator />
            <RelatedArticles posts={morePosts} />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<{}, { slug: string }> = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params.slug, preview, previewData as Preview);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
