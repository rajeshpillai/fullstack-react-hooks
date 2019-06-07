import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './features/home';
import PostForm from './features/posts/post-form';
import Button from './components/button';


const defaultState = [
  { url: "http://algorisys.com", title: "Algorisys", desc: "", category:"" },
  { url: "https://medium.com/@rajeshpillai", title: "Medium Blog",desc: "", category:""  },
  
];
function App() {
  const [posts, setPosts] = useState(defaultState);
  const [showPostForm, togglePostForm] = useState(false);

  function onShowNewPost() {
    togglePostForm(!showPostForm);
  }

  function addPost(post) {
    setPosts([...posts, post]);
    onShowNewPost();
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/">Self Study School</Link>
          <Link className="btn-newpost" to="/posts/new"><Button onClick={onShowNewPost} /></Link>
        </header>
        <Route exact path="/" render={()=><Home posts={posts} onShowNewPost={onShowNewPost} />}></Route>
        <Route path="/posts/new" render={()=><PostForm addPost={addPost} />}></Route>
      </div>
    </Router>
  );
}

export default App;
