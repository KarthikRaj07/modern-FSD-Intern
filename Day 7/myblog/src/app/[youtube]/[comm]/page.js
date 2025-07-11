import "./style.css";

export default function Comm({ params }) {
  const channelId = params.comm;

  return (
    <div className="comm-container">
  
      <div className="channel-header">
        <h2>{channelId}</h2>
        <p>Community Channel</p>
      </div>

      
      <div className="channel-tabs">
        <button>Posts</button>
        <button>About</button>
      </div>

    
      <div className="channel-posts">
        <div className="post">
          <p>{channelId} says:</p>
          <p>New update launching soon!</p>
          <small>1 day ago</small>
        </div>

        <div className="post">
          <p><strong>{channelId}</strong> says:</p>
          <p> Let us know your  feedback!</p>
          <small>3 days ago</small>
        </div>
      </div>
    </div>
  );
}