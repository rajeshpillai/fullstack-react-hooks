import React from 'react';
import { Post } from './post';


export default function Posts({posts}) {
  function NoPostView(props) {
    return <h1>No posts yet! Be awesome and create some!</h1>;
  }

  function loadPosts(){
    return posts.map((post) => {
      return <Post post={post} />;
    });
  }
  let view = posts.length === 0 ? <NoPostView />
    : loadPosts(posts);

  return (
    <div className="posts">
      <h2>Reading List</h2>
      <div>
        {view}
      </div>
    </div>
  );
}        

