import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './features/home';
import PostForm from './features/posts/post-form';
import Button from './components/button';


const defaultState = [
  { id: 1, url: "http://algorisys.com", title: "Algorisys", desc: "", category:"Beginner" },
  { id: 2,url: "https://medium.com/@rajeshpillai", title: "Medium Blog",desc: "", category:"Beginner"  },
  { id: 3, url: "https://codeproject.com", title: "CodeProject", desc: "", category:"Website" },
  { id: 4,url: "https://udemy.com", title: "Udemy",desc: "", category:"Advanced"  },
  
];
function App() {
  const [posts, setPosts] = useState(defaultState);

  function addPost(post) {
    post.id = posts.length;
    setPosts([...posts, post]);
  }

  function editPost(post) {
    let newPosts = posts.map((p) => {
      if (p.id === post.id) return post;
      return p;
    })
    setPosts([...newPosts]);
  }

  function loadEditPost(props) {
    let idSearch = Number(props.match.params.postId);
    let post = posts.find((p) => p.id === idSearch);
    return <PostForm updatePost={editPost} post = {post} />
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/"><span className="logo">ക</span>Self Study School</Link>
          <Link className="btn-newpost" to="/posts/new"><Button /></Link>
        </header>
        <Route exact path="/" render={() => <Home posts={posts} />}></Route>
        <Route path="/posts/new" render={() => <PostForm updatePost={addPost} />}></Route>
        <Route path="/posts/edit/:postId" render={loadEditPost}></Route>
      </div>
    </Router>
  );
}

export default App;
