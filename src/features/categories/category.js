import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function Category({ data }) {
  return (
    <div className="category">
      <Link to={`/categories/sub/${data.id}`}>{data.title}</Link>
    </div >);
}
