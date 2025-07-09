import React, { useState } from 'react';
import './website.css';

function App() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Form submitted successfully!\nWelcome, ${formData.username}`);

    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="app-container">

      <nav className="navbar">
        <div className="logo">template4u</div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection('home')}>home</li>
          <li onClick={() => scrollToSection('explore')}>explore</li>
          <li onClick={() => scrollToSection('create')}>create</li>
          <li onClick={() => scrollToSection('share')}>share</li>
        </ul>
      </nav>


      <section id="home" className="section home-section">
        <div className="home-content">
          <h1>Build Social Profiles and Gain Revenue Profits</h1>
          <p>Grow your digital presence by creating compelling social profiles that attract your target audience and drive engagement.</p>
          <p>Connect with people around the globe, share your stories, and unlock new opportunities to monetize your content and creativity.</p>
          <p>Our platform empowers individuals and businesses to reach new heights through smart branding, social reach, and monetization tools.</p>
        </div>

        <div
          className="form-container"
          style={{
            width: "500px",
            padding: "2.5rem",
            margin: "2.5rem auto",
            boxSizing: "border-box",
            fontSize: "1.15rem",
            minHeight: "420px"
          }}
        >
          <h2>Sign Up Today</h2>
          <p>Please fill out this form to register</p>
          <form onSubmit={handleSubmit}>
            {/*
              Define a style object for input fields.
            */}
            {(() => {
              const inputStyle = {
                width: "100%",
                padding: "0.9rem",
                margin: "0.7rem 0",
                fontSize: "1.1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                boxSizing: "border-box",
                background: "#f9f9f9"
              };
              return (
                <>
                  <input type="text" name="username" placeholder="username" value={formData.username} onChange={handleChange} required style={inputStyle} />
                  <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                  <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} required style={inputStyle} />
                  <input type="password" name="confirmPassword" placeholder="confirm password" value={formData.confirmPassword} onChange={handleChange} required style={inputStyle} />
                  <button type="submit" style={{ ...inputStyle, background: "#007bff", color: "#fff", cursor: "pointer", border: "none" }}>submit</button>
                </>
              );
            })()}
          </form>
        </div>
      </section>


      <section id="explore" className="section explore-section">
        <h1 className="section-title">explore</h1>
        <p className="section-description">
          Discover the latest trends, connect with inspiring creators, and find content that aligns with your interests and goals.
        </p>
        <button className="findout-button">findout</button>

        <div className="explore-content">
          <img src="https://i.ibb.co/1RxNwhF/phone.png" alt="phone" />
          <div className="text-content">
            <h3>Explore & Connect</h3>
            <p>Whether you're a creator, entrepreneur, or enthusiast, our platform helps you connect with a community that shares your passion.</p>
            <p>Explore personalized content feeds, engage in real-time discussions, and follow trending topics that matter to you.</p>
            <p>With powerful discovery tools, you’ll never miss out on what’s trending, relevant, and meaningful to your journey.</p>
          </div>
        </div>
      </section>


      <section id="create" className="section create-section">
        <div className="create-header">
          <h1 className="section-title">create</h1>
          <p>Bring your ideas to life through a platform built for creators. Share your talents, build your brand, and grow your influence.</p>
          <button className="findout-button">findout</button>
        </div>

        <div className="create-content">
          <div className="text-content">
            <h3>Create Your Passion</h3>
            <p>Turn your creativity into action by crafting engaging posts, videos, and blogs that resonate with your audience.</p>
            <p>Whether you're sharing educational content, entertainment, or insights—this is your space to shine and build your legacy.</p>
            <p>Every creation you publish has the potential to inspire, educate, or entertain someone across the globe.</p>
          </div>
          <img src="https://i.ibb.co/xL3RV5K/tab.png" alt="tablet" />
        </div>
      </section>


      <section id="share" className="section share-section">
        <h1>Share Section Coming Soon...</h1>
        <p>We’re working on a dedicated space for users to share and promote each other’s content. Stay tuned for powerful collaboration tools!</p>
      </section>
    </div>
  );
}

export default App;