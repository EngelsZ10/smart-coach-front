import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import './VideoList.css';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const equipo = searchParams.get('equipo');
  const categoria = searchParams.get('categoria');
  const tipo = searchParams.get('tipo');

  const navigate = useNavigate();

  const theme = getTheme();

  function getTheme() {
    if(equipo) {
      return equipo === 'steelers' ? 'black' : 'yellow';
    }
    let theme;
    switch(categoria) {
      case 'drills':
        theme = 'white';
        break;
      case 'acondicionamiento':
        theme = 'red';
        break;
    }

    return theme;
  };

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
    <div className={`list-view view--${theme}`}>
      <header className="view__header">
        <div className="container">
          <h3 className="header__title">Videos</h3>
          <button className="header__button" onClick={() => navigate(-1)}>
            <i className="fa fa-solid fa-arrow-left"></i>
            Volver
          </button>
        </div>
        <figure className="header__logo">
          <img src="/Logos/Logo circular1.png" alt="Logo Circular 1" className="Logo"/>  
          <img src="/Logos/logo texto1.png" alt="Logo texto 1" className="Logo"/>
        </figure>
      </header>
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