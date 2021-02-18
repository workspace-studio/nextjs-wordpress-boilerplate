import React from 'react';
import useFactory from 'utils/hooks/useFactory';
import Author from 'types/posts/author';

import styles from './Avatar.module.scss';

interface AvatarProps {
  author: Author;
}

const Avatar: React.FC<AvatarProps> = ({ author }) => {
  const name = useFactory(() => {
    if (author) {
      if (author.firstName && author.lastName) {
        return `${author.firstName} ${author.lastName}`;
      }

      return author.name;
    }

    return null;
  });

  return (
    <>
      {author && (
        <div className={styles.container}>
          <img src={author.avatar.url} className={styles.image} alt={name} />
          <div className={styles.name}>{name}</div>
        </div>
      )}
    </>
  );
};

export default Avatar;
