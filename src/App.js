import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './features/home';
import PostForm from './features/posts/post-form';
import Button from './components/button';
import { SubCategories } from './features/sub-categories';


const defaultPosts = [
  { id: 1, url: "http://algorisys.com", title: "Algorisys", desc: "", category: "Beginner" },
  { id: 2, url: "https://medium.com/@rajeshpillai", title: "Medium Blog", desc: "", category: "Beginner" },
  { id: 3, url: "https://codeproject.com", title: "CodeProject", desc: "", category: "Website" },
  { id: 4, url: "https://udemy.com", title: "Udemy", desc: "", category: "Advanced" },
];

const categories = [
  { id: 1, title: "Web Development" },
  { id: 2, title: "Fullstack Development" },
  { id: 3, title: "Server Programming" },
  { id: 4, title: "Mobile Development" },
  { id: 5, title: "Data Structures and Algorithms" },
  { id: 6, title: "Database Development" },
]

const subCategories = [
  { id: 1, catId: 1, title: "HTML" },
  { id: 2, catId: 1, title: "CSS" },
  { id: 3, catId: 1, title: "JavaScript" },
  { id: 4, catId: 1, title: "React" },
  { id: 5, catId: 1, title: "Angular" },
  { id: 6, catId: 1, title: "Vue" },
]


function App() {
  const [posts, setPosts] = useState(defaultPosts);

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
    return <PostForm updatePost={editPost} post={post} />
  }

  function loadSubCategories(props) {
    let idSearch = Number(props.match.params.subId);
    let result = subCategories.filter((subCat) => {
      return subCat.catId == idSearch;
    })
    return <SubCategories data={result} />
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/"><span className="logo">ക</span>Self Study School</Link>
          <Link className="btn-newpost" to="/posts/new"><Button /></Link>
        </header>
        <Route exact path="/" render={() => <Home categories={categories} />}></Route>
        <Route path="/posts/new" render={() => <PostForm updatePost={addPost} />}></Route>
        <Route path="/posts/edit/:postId" render={loadEditPost}></Route>
        <Route path="/categories/sub/:subId" render={loadSubCategories}></Route>
      </div>
    </Router>
  );
}

export default App;
