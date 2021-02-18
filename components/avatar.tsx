import React from 'react';
import Author from 'types/posts/author';

interface AvatarProps {
  author?: Author;
}

const Avatar: React.FC<AvatarProps> = ({ author }) => {
  const name = (() => {
    if (author) {
      if (author.firstName && author.lastName) {
        return `${author.firstName} ${author.lastName}`;
      }

      return author.name;
    }

    return null;
  })();

  return (
    <>
      {author && (
        <div className="flex items-center">
          <img
            src={author.avatar.url}
            className="w-12 h-12 rounded-full mr-4"
            alt={name}
          />
          <div className="text-xl font-bold">{name}</div>
        </div>
      )}
    </>
  )
}

export default Avatar;
