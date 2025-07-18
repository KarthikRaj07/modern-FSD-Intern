"use client";
import React from 'react';
import BlogDetail from '../../components/BlogDetail';
import Navbar from '../../components/Navbar';

const demoBlogs = [
  {
    id: 1,
    title: 'First Blog Post',
    image: 'https://via.placeholder.com/400x200',
    description: 'This is a short description of the first blog.',
    content: 'Full content of the first blog post goes here.'
  },
  {
    id: 2,
    title: 'Second Blog Post',
    image: 'https://via.placeholder.com/400x200',
    description: 'This is a short description of the second blog.',
    content: 'Full content of the second blog post goes here.'
  },
  {
    id: 3,
    title: 'Rajinikanth: The Superstar of South India',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Rajinikanth_at_Enthiran_audio_release.jpg',
    description: 'A look at the life and career of Rajinikanth, the iconic superstar of Tamil cinema.',
    content: `Rajinikanth, born Shivaji Rao Gaekwad, is one of the most celebrated actors in Indian cinema, especially in the South. Known for his unique style, charisma, and humility, Rajinikanth has acted in over 160 films, primarily in Tamil, but also in Telugu, Kannada, Hindi, and other languages. His journey from a bus conductor to a superstar is an inspiration to millions. Some of his most famous movies include "Baashha", "Enthiran", "Kabali", and "Sivaji". Rajinikanth's fan following is legendary, and he is revered as a cultural icon in South India.`
  },
];

export default function BlogDetailPage({ params }) {
  const actualParams = React.use(params);
  const blog = demoBlogs.find(b => b.id === Number(actualParams.id));
  if (!blog) return <div><Navbar /><h2>Blog not found</h2></div>;
  return (
    <div>
      <Navbar />
      <BlogDetail blog={blog} onBack={() => window.history.back()} />
    </div>
  );
} 