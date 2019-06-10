import React from 'react';
import { Category } from './category';


export function Categories({ data }) {
  function NoDataView(props) {
    return <h1>No Categories yet! Be awesome and create some!</h1>;
  }

  function loadData() {
    return data.map((category) => {
      return <Category data={category} />;
    });
  }
  let view = data.length === 0 ? <NoDataView />
    : loadData(data);

  return (
    <div className="categories">
      {view}
    </div>

  );
}

