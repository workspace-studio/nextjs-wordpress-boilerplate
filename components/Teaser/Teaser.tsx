import React from 'react';

import Avatar from 'components/Avatar';
import CoverImage from 'components/CoverImage';
import DateFormatter from 'components/DateFormatter';
import Hyperlink from 'components/Hyperlink';
import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';

import styles from './Teaser.module.scss';

interface TeaserProps {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

const Teaser: React.FC<TeaserProps> = ({ title, coverImage, date, excerpt, author, slug }) => (
  <div className={styles.container}>
    <div className={styles.marginBottom}>
      <CoverImage title={title} coverImage={coverImage} slug={slug} />
    </div>
    <h3 className={styles.title}>
      <Hyperlink
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        AnchorProps={{
          className: styles.link,
          dangerouslySetInnerHTML: { __html: title },
        }}
      />
    </h3>
    <div className={styles.date}>
      <DateFormatter dateString={date} />
    </div>
    <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
    <Avatar author={author} />
  </div>
);

export default Teaser;
