import React from 'react';
import { Post } from './post';
export function Posts({ posts }) {
  return posts.map((post) => {
    return <Post post={post} />;
  });
}
