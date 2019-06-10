import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function SubCategory({ data }) {
  return (
    <div className="category">
      <Link to={`/categories/${data.categoryId}/${data.id}/posts`}>{data.title}</Link>
    </div>);
}
