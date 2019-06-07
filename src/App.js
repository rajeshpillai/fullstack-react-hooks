import React, {useState} from 'react';
import './App.css';
import Home from './features/home';
import PostForm from './features/posts/post-form';

function App() {
  const [posts, setPosts] = useState([]);
  const [showPostForm, togglePostForm] = useState(false);

  function onShowNewPost() {
    togglePostForm(!showPostForm);
  }

  function addPost(post) {
    setPosts([...posts, post]);
    onShowNewPost();
  }

  return (
    <div className="app">
      <header className="app-header">
        Self Study School
      </header>
      <Home posts={posts} onShowNewPost={onShowNewPost} />
      {showPostForm && <PostForm addPost = {addPost} />}
    </div>
  );
}

export default App;
