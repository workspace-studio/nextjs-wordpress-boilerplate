import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Container from 'components/container';
import HeroPost from 'components/hero-post';
import Intro from 'components/intro';
import Layout from 'components/layout';
import MoreStories from 'components/more-stories';
import { getAllPostsForHome } from 'lib/api';
import { CMS_NAME } from 'lib/constants';
import Post from 'types/posts/post';
import { Edges } from 'types/common';

interface HomepageProps {
  allPosts: Edges<Post>;
  preview: boolean;
}

const Homepage: React.FC<HomepageProps> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>
            Next.js Blog Example with
            {CMS_NAME}
          </title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Homepage;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
};
