import React from 'react';
import cn from 'classnames';
import Hyperlink from 'components/Hyperlink';
import FeaturedImage from 'types/posts/featuredImage';

import styles from './CoverImage.module.scss';

interface CoverImageProps {
  title: string;
  coverImage: FeaturedImage;
  slug?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ title, coverImage, slug }) => {
  if (!coverImage) {
    return null;
  }

  const image = (
    <img
      src={coverImage.sourceUrl}
      className={cn(styles.image, {
        [styles.thumbnail]: slug,
      })}
      alt="Cover"
    />
  );

  return (
    <div className={styles.container}>
      {slug ? (
        <Hyperlink as={`/posts/${slug}`} href="/posts/[slug]" AnchorProps={{ 'aria-label': title }}>
          {image}
        </Hyperlink>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
