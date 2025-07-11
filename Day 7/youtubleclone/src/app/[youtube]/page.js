import "./style.css";

export default function ChannelPage({ params }) {
  const channelId = params?.youtube || "Unknown Channel";

  return (
    <div className="channel-container">
      {/* Channel Banner */}
      <div className="banner"></div>

      {/* Channel Info */}
      <div className="channel-info">
        <img
          className="profile-img"
          src="https://yt3.ggpht.com/ytc/AAUvwngJQJQJ0S0_fake_profile.jpg"
          alt="Channel"
        />
        <div>
          <h2>{channelId}</h2>
          <p>1M subscribers</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button>Home</button>
        <button>Videos</button>
        <button>About</button>
      </div>

      {/* About Section */}
      <div className="about">
        <h3>About This Channel</h3>
        <p>This channel shares educational and tech-related videos.</p>
      </div>

      {/* Videos Section */}
      <div className="videos">
        <h3>Latest Videos</h3>
        <div className="video-list">
          <div className="video-card">
            <img
              src="https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg"
              alt="React Basics"
            />
            <p>Learn React Basics</p>
          </div>
          <div className="video-card">
            <img
              src="https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
              alt="Next.js Intro"
            />
            <p>Intro to Next.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}
