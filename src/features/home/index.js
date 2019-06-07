import React, { useState } from 'react';
import Button from '../../components/button';
import { Posts } from '../posts/posts';

export default function Home(props) {
  const { posts } = props;

  let view = posts.length === 0 ? <NoPostView /> : <Posts posts={posts} />

  return (
    <div>
      <Button onClick={props.onShowNewPost} />
      {view}
    </div>
  );
}

function NoPostView(props) {
  return <h1>No posts yet! Be awesome and create some!</h1>;
}


