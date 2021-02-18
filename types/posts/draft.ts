import Post from './post';

type Draft = {
  id?: number;
  databaseId?: number;
  slug: string;
  status: string;
  post: Post;
};

export default Draft;
