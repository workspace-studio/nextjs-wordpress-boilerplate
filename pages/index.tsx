import React from 'react';
import Container from 'components/Container';
import RelatedPosts from 'components/RelatedPosts';
import HeroPost from 'components/HeroPost';
import Intro from 'components/Intro';
import Layout from 'components/Layout';
import Post from 'types/posts/post';

import { GetStaticProps } from 'next';
import { getAllPostsForHome } from 'lib/api';
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
          <RelatedPosts posts={morePosts} />
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
