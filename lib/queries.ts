import Post from '../types/posts/post';

import { Edges, QueryEdgesResult } from '../types/common';
import { Preview } from '../types/posts/preview';

export type GetPreviewPostResult = Preview;

export const GET_PREVIEW_POST = `
  query PreviewPost($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      databaseId
      slug
      status
    }
  }`;

export type GetAllPostsWithSlugResult = QueryEdgesResult<'posts', Post>;

export const GET_ALL_POSTS_WITH_SLUG = `
  {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }`;

export type GetAllPostsForHomeResult = QueryEdgesResult<'posts', Post>;

export const GET_ALL_POSTS_FOR_HOME = `
  query AllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }`;

export type GetPostAndMorePostsResult = {
  post: Post;
  posts: Edges<Post>;
};

export const GET_POST_AND_MORE_POSTS = (isRevision: boolean) => `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
  fragment PostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          name
        }
      }
    }
  }
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
      ${
        // Only some of the fields of a revision are considered as there are some inconsistencies
        isRevision
          ? `
      revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            content
            author {
              node {
                ...AuthorFields
              }
            }
          }
        }
      }
      `
          : ''
      }
    }
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }`;
