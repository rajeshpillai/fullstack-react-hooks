import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function Post({ data }) {
  return (
    <div className="post">
      <a href={data.url} className="post-url"
        target="_blank" title="open in new window">{data.title}🔗</a>
      <Link to="">{data.category}</Link>

      <div className="post-actions">
        <Link className="post-edit-link" to={`/posts/edit/${data.id}`}>EDIT</Link>
      </div>
    </div>);
}
