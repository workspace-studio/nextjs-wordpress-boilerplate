import React from 'react';
import Avatar from 'components/Avatar';
import CoverImage from 'components/CoverImage';
import DateFormatter from 'components/DateFormatter';
import Hyperlink from 'components/Hyperlink';
import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';

import styles from './HeroPost.module.scss';

interface HeroPostProps {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

const HeroPost: React.FC<HeroPostProps> = ({ title, coverImage, date, excerpt, author, slug }) => (
  <section>
    <div className={styles.cover}>
      <CoverImage title={title} coverImage={coverImage} slug={slug} />
    </div>
    <div className={styles.container}>
      <div>
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
      </div>
      <div>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Avatar author={author} />
      </div>
    </div>
  </section>
);

export default HeroPost;
