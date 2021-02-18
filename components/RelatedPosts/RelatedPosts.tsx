import React from 'react';
import Teaser from 'components/Teaser';
import Post from 'types/posts/post';

import { Node } from 'types/common';

import styles from './RelatedPosts.module.scss';

interface RelatedPostsProps {
  posts: Node<Post>[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (!posts.length) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Related articles</h2>
      <div className={styles.grid}>
        {posts.map(({ node }) => (
          <Teaser
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
