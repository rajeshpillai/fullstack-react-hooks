import React from 'react';
import { SubCategory } from './sub-category';


export function SubCategories({ data }) {
  function NoDataView(props) {
    return <h1>No Sub Categories yet! Be awesome and create some!</h1>;
  }

  function loadData() {
    return data.map((subCategory) => {
      return <SubCategory data={subCategory} />;
    });
  }
  let view = data.length === 0 ? <NoDataView />
    : loadData(data);

  return (
    <div className="categories-container ">
      <div className="categories">
        {view}
      </div>
    </div>
  );
}

