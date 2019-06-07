import React, { useState } from 'react';
import Button from '../../components/button';
import { Posts } from '../posts/posts';

export default function Home(props) {
  const { posts } = props;

  function NoPostView(props) {
    return <h1>No posts yet! Be awesome and create some!</h1>;
  }

  let view = posts.length === 0 ? <NoPostView /> : <Posts posts={posts} />

  return (
    <div className="posts">
      <h2>Reading List</h2>
      <div>
        {view}
      </div>
    </div>
  );
}        
