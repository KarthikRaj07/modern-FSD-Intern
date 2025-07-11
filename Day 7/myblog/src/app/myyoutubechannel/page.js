// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';

// const videos = [
//   { id: 1, title: 'My React Video', thumbnail: '/thumbnails/video1.png' },
//   { id: 2, title: 'Next.js Tutorial', thumbnail: '/thumbnails/video2.png' }
// ];

// const YouTubeHome = () => {
//   const router = useRouter();

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>My YouTube Channel</h1>
//       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         {videos.map((video) => (
//           <div
//             key={video.id}
//             onClick={() => router.push(`/myyoutubechannel/video/${video.id}`)}
//             style={{
//               cursor: 'pointer',
//               width: '250px',
//               border: '1px solid #ddd',
//               borderRadius: '10px',
//               overflow: 'hidden'
//             }}
//           >
//             <img
//               src={video.thumbnail}
//               alt={video.title}
//               style={{ width: '100%', height: '150px', objectFit: 'cover' }}
//             />
//             <div style={{ padding: '10px' }}>
//               <h4>{video.title}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YouTubeHome;
