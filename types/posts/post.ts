import { Edges, Node } from '../common';

import Author from './author';
import Category from './category';
import FeaturedImage from './featuredImage';
import Revision from './revision';
import Tag from './tag';

type Post = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: Node<FeaturedImage>;
  author: Node<Author>;
  categories?: Edges<Category>;
  tags?: Edges<Tag>;
  content?: string;
  revisions?: Edges<Revision>;
};

export default Post;
