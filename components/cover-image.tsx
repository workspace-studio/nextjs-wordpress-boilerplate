import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import FeaturedImage from 'types/posts/featuredImage';

interface CoverImageProps {
  title: string;
  coverImage: FeaturedImage;
  slug?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ title, coverImage, slug }) => {
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage;
