import fetchAPI from './fetchApi';
import { Preview } from '../types/posts/preview';

import {
  GET_PREVIEW_POST,
  GET_ALL_POSTS_WITH_SLUG,
  GET_ALL_POSTS_FOR_HOME,
  GET_POST_AND_MORE_POSTS,
  GetPostAndMorePostsResult,
  GetAllPostsWithSlugResult,
  GetAllPostsForHomeResult,
  GetPreviewPostResult,
} from './queries';

export async function getPreviewPost(id: string | string[], idType = 'DATABASE_ID') {
  const data = await fetchAPI<GetPreviewPostResult>(GET_PREVIEW_POST, {
    variables: { id, idType },
  });

  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI<GetAllPostsWithSlugResult>(GET_ALL_POSTS_WITH_SLUG);

  return data.posts;
}

export async function getAllPostsForHome(preview: boolean) {
  const data = await fetchAPI<GetAllPostsForHomeResult>(GET_ALL_POSTS_FOR_HOME, {
    variables: {
      onlyEnabled: !preview,
      preview,
    },
  });

  return data.posts;
}

export async function getPostAndMorePosts(slug: string, preview: boolean, previewData?: Preview) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId && postPreview ? Number(slug) === postPreview.id : postPreview && slug === postPreview.slug;
  const isDraft = Boolean(isSamePost && postPreview && postPreview.status === 'draft');
  const isRevision = Boolean(isSamePost && postPreview && postPreview.status === 'publish');

  const data = await fetchAPI<GetPostAndMorePostsResult>(GET_POST_AND_MORE_POSTS(isRevision), {
    variables: {
      id: isDraft && postPreview ? postPreview.id : slug,
      idType: isDraft ? 'DATABASE_ID' : 'SLUG',
    },
  });

  // Draft posts may not have an slug
  if (isDraft && postPreview) {
    data.post.slug = `${postPreview.id}`;
  }

  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) {
      Object.assign(data.post, revision);
    }

    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) {
    data.posts.edges.pop();
  }

  return data;
}
