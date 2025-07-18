"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const initialBlogs = [
  {
    id: 3,
    title: 'Rajinikanth: The Superstar of South India',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ13IUY3FGHxF6wymRUJwMm0D0Xw0j9ziFc_SKZ72AnuWFrf2l4htwtV8iELs99BE5ibj9vOfqQZF5lv5MiwrHpVsJYqNoqBcVjqpaHQ6bk',
    description: 'A look at the life and career of Rajinikanth, the iconic superstar of Tamil cinema.',
    content: `Rajinikanth, born Shivaji Rao Gaekwad, is one of the most celebrated actors in Indian cinema, especially in the South. Known for his unique style, charisma, and humility, Rajinikanth has acted in over 160 films, primarily in Tamil, but also in Telugu, Kannada, Hindi, and other languages. His journey from a bus conductor to a superstar is an inspiration to millions. Some of his most famous movies include "Baashha", "Enthiran", "Kabali", and "Sivaji". Rajinikanth's fan following is legendary, and he is revered as a cultural icon in South India.`
  },
  {
    id: 4,
    title: 'Kamal Haasan: The Versatile Legend',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kamal_Haasan_at_Vikatan_Awards_2017.jpg',
    description: 'Exploring the multifaceted career of Kamal Haasan, actor, director, and producer.',
    content: `Kamal Haasan is renowned for his versatility and dedication to cinema. With a career spanning over six decades, he has acted in Tamil, Telugu, Malayalam, Kannada, Hindi, and Bengali films. Kamal is known for his experimental roles and has won numerous awards, including several National Film Awards. Notable films include "Nayakan", "Indian", "Hey Ram", and "Vishwaroopam". He is also a successful director, producer, and screenwriter.`
  },
  {
    id: 5,
    title: 'Mammootty: The Megastar of Malayalam Cinema',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mammootty_at_Ennum_Eppozhum_audio_launch.jpg',
    description: 'A profile of Mammootty, the legendary actor from Kerala.',
    content: `Mammootty is a leading actor in Malayalam cinema, with a career spanning over four decades and more than 400 films. He is known for his powerful performances and has won three National Film Awards for Best Actor. Some of his acclaimed movies are "Oru Vadakkan Veeragatha", "Dr. Babasaheb Ambedkar", and "Peranbu". Mammootty is also involved in various philanthropic activities.`
  },
  {
    id: 6,
    title: 'Mohanlal: The Complete Actor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Mohanlal_Vanitha_Film_Awards_2017.jpg',
    description: 'Celebrating Mohanlal, one of the most beloved actors in Indian cinema.',
    content: `Mohanlal is widely regarded as one of the greatest actors in Indian cinema. He has acted in over 340 films, mainly in Malayalam, but also in Tamil, Telugu, and Hindi. Mohanlal is known for his natural acting style and has received numerous awards, including five National Film Awards. His notable films include "Kireedam", "Bharatham", "Vanaprastham", and "Drishyam".`
  }
];

export default function AdminPage() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [form, setForm] = useState({ id: null, title: '', image: '', description: '', content: '' });
  const [editingId, setEditingId] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingId) {
      // Update
      setBlogs(blogs.map(blog => blog.id === editingId ? { ...form, id: editingId } : blog));
      setEditingId(null);
    } else {
      // Create
      const newId = blogs.length ? Math.max(...blogs.map(b => b.id)) + 1 : 1;
      setBlogs([...blogs, { ...form, id: newId }]);
    }
    setForm({ id: null, title: '', image: '', description: '', content: '' });
  };

  const handleEdit = id => {
    const blog = blogs.find(b => b.id === id);
    setForm(blog);
    setEditingId(id);
  };

  const handleDelete = id => {
    setBlogs(blogs.filter(b => b.id !== id));
    if (editingId === id) {
      setForm({ id: null, title: '', image: '', description: '', content: '' });
      setEditingId(null);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '24px auto', display: 'flex', flexDirection: 'column', gap: 12, border: '1px solid #eee', padding: 16, borderRadius: 8 }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <input name="description" placeholder="Short Description" value={form.description} onChange={handleChange} required />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} required rows={4} />
        <button type="submit">{editingId ? 'Update' : 'Create'} Blog</button>
        {editingId && <button type="button" onClick={() => { setForm({ id: null, title: '', image: '', description: '', content: '' }); setEditingId(null); }}>Cancel Edit</button>}
      </form>
      <table style={{ width: '100%', maxWidth: 800, margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.description}</td>
              <td>
                <button onClick={() => handleEdit(blog.id)}>Edit</button>
                <button onClick={() => handleDelete(blog.id)} style={{ marginLeft: 8 }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 