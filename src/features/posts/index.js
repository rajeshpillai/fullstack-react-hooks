import React from 'react';
import { Post } from './post';


export function Posts({data}) {
  function NoPostView(props) {
    return <h1>No posts yet! Be awesome and create some!</h1>;
  }

  function loadPosts(subPosts){
    return subPosts.map((post) => {
      return <Post data={post} />;
    });
  }
  let view = data.subPosts.length === 0 ? <NoPostView />
    : loadPosts(data.subPosts);

  return (
    <div className="posts">
      <h2>Reading List</h2>
      <div>
        <h2>{data.title}</h2>
        {view}
      </div>
    </div>
  );
}        

