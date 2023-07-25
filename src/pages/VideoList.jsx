import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import './VideoList.css';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    // TODO: Save files on server
  };

  // TODO: Connect to db to retrieve real videos
  function fetchVideos() {
    setVideos([
      {
        id: '1',
        name: 'video 1',
        thumbnailUrl: 'https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg'
      },
      {
        id: '2',
        name: 'video 2',
        thumbnailUrl: 'https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg'
      },
      {
        id: '3',
        name: 'video 3',
        thumbnailUrl: 'https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg'
      },
      {
        id: '4',
        name: 'video 4',
        thumbnailUrl: 'https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg'
      },
    ])
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="list-view">
      <h2 className="title">Videos</h2>
      <div className="video-list" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        {videos.map(video => (
          <div className="video" key={video.id}>
            <img className="video__thumbnail" src={video.thumbnailUrl} alt={video.name} />
            <div className="video__name">{video.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;