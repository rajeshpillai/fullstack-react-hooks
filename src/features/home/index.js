import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Categories } from '../categories';

import '../categories/categories.css';

export default function Home(props) {
  const { categories } = props;

  function NoDataView(props) {
    return <h1>No caegories yet! Be awesome and create some!</h1>;
  }

  let view = categories.length === 0
    ? <NoDataView />
    : <Categories data={categories} />

  return (
    <div className="categories-container ">
      {view}
    </div>
  );
}        
