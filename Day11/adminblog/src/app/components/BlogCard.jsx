"use client";

import React from 'react';

const BlogCard = ({ blog, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md p-4 m-4 max-w-xs cursor-pointer hover:shadow-xl transition-shadow flex flex-col items-center"
    onClick={() => onClick(blog.id)}
  >
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-44 object-cover rounded-md mb-3"
    />
    <h3 className="text-lg font-bold mb-1 text-center">{blog.title}</h3>
    <p className="text-gray-600 text-sm text-center">{blog.description}</p>
  </div>
);

export default BlogCard; 