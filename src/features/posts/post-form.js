import React, { useState } from 'react';
import './posts.css';

export default function PostForm(props) {
  const initialFormState = props.post ? props.post : { id: null, url: "", title: "", desc: "", category: "" }
  const [post, setPost] = useState(initialFormState);

  let editPost = props.post || null;

  const handleInputChange = event => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
  }

  const btnLabel = editPost ? "UPDATE POST" : "ADD POST";

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!post.title) return
        props.updatePost(post)
        setPost(initialFormState)
      }}
    >
      <h2>{editPost ? "EDIT POST" : "NEW POST"}</h2>
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
        <button className="btn btn-default">{btnLabel}</button>
      </div>
    </form>
  )

}