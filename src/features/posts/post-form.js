import React, { useState } from 'react';
import './posts.css';

export default function PostForm(props) {
  const initialFormState = { id: null, url: "", title: "", desc:"",category:"" }
  const [post, setPost] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!post.title) return
        props.addPost(post)
        setPost(initialFormState)
      }}
    >
      <div className="form">
        <div className="form-field">
          <label>Url</label>
          <input type="text" name="url" value={post.url} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label>Title</label>
          <input type="text" name="title" value={post.title} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label>Description</label>
          <input type="text" name="desc" value={post.desc} onChange={handleInputChange} />
        </div>
        <div className="form-field">
          <label>Category</label>
          <input type="text" name="category" value={post.category} onChange={handleInputChange} />
        </div>
        <button className="btn">Add new post</button>
      </div>
    </form>
  )

}