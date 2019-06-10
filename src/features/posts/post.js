import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function Post({ post }) {
  return (
    <div className="post">
      <a href={post.url} className="post-url"
        target="_blank" title="open in new window">{post.title}🔗</a>
      <Link to="">{post.category}</Link>

      <div className="post-actions">
        <Link className="post-edit-link" to={`/posts/edit/${post.id}`}>EDIT</Link>
      </div>
    </div>);
}
