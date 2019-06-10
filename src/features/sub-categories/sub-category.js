import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function SubCategory({ data }) {
  return (
    <div className="category">
      {data.title}
    </div>);
}
