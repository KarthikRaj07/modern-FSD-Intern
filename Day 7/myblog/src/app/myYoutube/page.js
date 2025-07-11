import './youtube.css';

export default function YoutubePage() {
  return (
    <div>
      <h1>🎥 My YouTube Page</h1>

      <div className="video-grid">

        {/* ✅ 1. Image Content */}
        <div className="video-card">
          <img
            src="https://i.ytimg.com/vi/zSWdZVtXT7E/maxresdefault.jpg"
            alt="Interstellar"
            className="thumbnail"
          />
          <h3>Image: Interstellar Poster</h3>
        </div>

        {/* ✅ 2. Video Content */}
        <div className="video-card">
          <h3>Video: Interstellar Trailer</h3>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/zSWdZVtXT7E"
            title="Interstellar Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
