import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function Post({ post }) {
  return (
    <div className="post">
      <span className="post-url">{post.url}</span>

      <div className="post-actions">
        <Link className="post-edit-link" to={`/posts/edit/${post.id}`}>EDIT</Link>
        <a href={post.url} className="post-open-new" target="_blank" title="open in new window">🔗</a>
      </div>
    </div>);
}
