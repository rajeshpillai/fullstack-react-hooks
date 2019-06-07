import React from 'react';
export function Post({ post }) {
  return (<div className="post">
    {post.url}
  </div>);
}
