import React, { useState } from 'react';
import { Posts } from '../posts/posts';

export default function Home(props) {
  const { posts } = props;

  let view = posts.length === 0 ? <NoPostView /> : <Posts posts={posts} />

  return (
    <div>
      {view}
    </div>
  );
}

function NoPostView(props) {
  return <h1>No posts yet! Be awesome and create some!</h1>;
}


