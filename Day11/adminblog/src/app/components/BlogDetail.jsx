import React from 'react';

const BlogDetail = ({ blog, onBack }) => (
  <div style={{ padding: 24 }}>
    <button onClick={onBack} style={{ marginBottom: 16 }}>Back</button>
    <img src={blog.image} alt={blog.title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 8 }} />
    <h2>{blog.title}</h2>
    <p>{blog.content}</p>
  </div>
);

export default BlogDetail; 