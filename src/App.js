import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './features/home';
import PostForm from './features/posts/post-form';
import Button from './components/button';
import { SubCategories } from './features/sub-categories';
import { Posts } from './features/posts';


const defaultPosts = [
  {
    id: 1, url: "http://algorisys.com", title: "Learn HTML", content: "",
    categoryId: 1, subCategoryId: 1,
    subPosts: [
      { id: 1, title: "Post 1", content: "Content 1", url: "#" },
      { id: 2, title: "Post 2", content: "Content 2", url: "#"  },
      { id: 4, title: "Post 3", content: "Content 3", url: "#"  },
      { id: 5, title: "Post 4", content: "Content 4", url: "#" },
    ]
  },
  {
    id: 2, url: "https://medium.com/@rajeshpillai", title: "Medium Blog", content: "",
    categoryId: 1, subCategoryId: 1
  },
  {
    id: 3, url: "https://codeproject.com", title: "CodeProject", content: "",
    categoryId: 1, subCategoryId: 1
  },
  {
    id: 4, url: "https://udemy.com", title: "Udemy", content: "",
    categoryId: 1, subCategoryId: 1
  },
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
  { id: 1, categoryId: 1, title: "HTML" },
  { id: 2, categoryId: 1, title: "CSS" },
  { id: 3, categoryId: 1, title: "JavaScript" },
  { id: 4, categoryId: 1, title: "React" },
  { id: 5, categoryId: 1, title: "Angular" },
  { id: 6, categoryId: 1, title: "Vue" },
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
      return subCat.categoryId == idSearch;
    })
    return <SubCategories data={result} />
  }

  function loadPosts(props) {
    let catId = Number(props.match.params.catId);
    let subId = Number(props.match.params.subId);
    let result = defaultPosts.find((post) => {
      return post.subCategoryId == subId && post.categoryId == catId;
    });
    return <Posts data={result} />
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
        <Route path="/categories/:catId/:subId/posts" render={loadPosts}></Route>
      </div>
    </Router>
  );
}

export default App;
