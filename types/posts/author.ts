import Avatar from './avatar';

type Author = {
  name: string;
  avatar: Avatar;
  firstName?: string | null;
  lastName?: string | null;
  description?: string | null;
  jobTitle?: string | null;
};

export default Author;
