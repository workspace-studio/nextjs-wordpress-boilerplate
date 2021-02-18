import React from 'react';

import Avatar from 'components/Avatar';
import Categories from 'components/Categories';
import CoverImage from 'components/CoverImage';
import DateFormatter from 'components/DateFormatter';
import PostTitle from 'components/PostTitle';
import Author from 'types/posts/author';
import Category from 'types/posts/category';
import FeaturedImage from 'types/posts/featuredImage';

import { Edges } from 'types/common';

import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  author: Author;
  categories: Edges<Category>;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date, author, categories }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className={styles.author}>
      <Avatar author={author} />
    </div>
    <div className={styles.coverImage}>
      <CoverImage title={title} coverImage={coverImage} />
    </div>
    <div className={styles.container}>
      <div className={styles.author}>
        <Avatar author={author} />
      </div>
      <div className={styles.byline}>
        Posted 
        {' '}
        <DateFormatter dateString={date} />
        <Categories categories={categories} />
      </div>
    </div>
  </>
);

export default PostHeader;
