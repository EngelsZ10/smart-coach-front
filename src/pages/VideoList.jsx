import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Center, Group, Button } from "@mantine/core";
import Demo from "../Components/uploadPage";
import MostrarVideo from "./mostrarVideo";

import './VideoList.css';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const equipo = searchParams.get('equipo');
  const categoria = searchParams.get('categoria');
  const tipo = searchParams.get('tipo');

  const navigate = useNavigate();

  const theme = getTheme();

  function Upload() {
    const [opened, { toggle, close }] = useDisclosure(false);
    return (
      <>
        <div className="App">
          <Center maw={400} h={100} mx="auto">
            <Group position="center">
              <Button onClick={toggle}>Toggle dialog</Button>
            </Group>
          </Center>
        </div>

        <Demo open={opened} close={close}></Demo>
      </>
    );
  }

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
      <header className="view_header">
        <div className="container">
          <h3 className="header_title">Videos</h3>
          <button className="header_button" onClick={() => navigate(-1)}>
            <i className="fa fa-solid fa-arrow-left"></i>
            Volver
          </button>
        </div>
        <figure className="header_logo">
          <img src="/Logos/Logo circular1.png" alt="Logo Circular 1" className="Logo"/>  
          <img src="/Logos/logo texto1.png" alt="Logo texto 1" className="Logo"/>
        </figure>
      </header>
            <Upload></Upload>
      <div className="video-list">
        {videos.map(video => (
          <div className="video" key={video.id}>
            <img className="video_thumbnail" src={video.thumbnailUrl} alt={video.name} />
            <div className="item_category">{video.name}</div>
          </div>
        ))}
      </div>
      <div className="drag-drop" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          Arrastra un video a esta zona para añadirlo a la lista.
      </div>  
        <MostrarVideo></MostrarVideo>
    </div>
  );
}

export default VideoList;