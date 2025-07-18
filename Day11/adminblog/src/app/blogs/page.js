"use client";
import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import BlogDetail from '../components/BlogDetail';
import Navbar from '../components/Navbar';

const demoBlogs = [
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

export default function BlogsPage() {
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const selectedBlog = demoBlogs.find(b => b.id === selectedBlogId);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Blogs</h1>
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlogId(null)} />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {demoBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlogId} />
          ))}
        </div>
      )}
    </div>
  );
} 