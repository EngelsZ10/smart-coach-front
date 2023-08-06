import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Center, Group, Button } from "@mantine/core";
import Demo from "../Components/uploadPage";
import { Dropzone } from "@mantine/dropzone";

import MostrarVideo from "./mostrarVideo";

import "./VideoList.css";
import { render } from "@testing-library/react";

function VideoList() {
  const [image, setImage] = useState(
    "https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg"
  );
  const [able, setAble] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const equipo = searchParams.get("equipo");
  const categoria = searchParams.get("categoria");
  const tipo = searchParams.get("tipo");

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
    let theme;
    switch (equipo) {
      case "steelers":
        theme = "black";
      case "drills":
        theme = "white";
        break;
      case "acondicionamiento":
        theme = "red";
        break;
      default:
        theme = "yellow";
        break;
    }

    return theme;
  }

  // TODO: Connect to db to retrieve real videos
  function fetchVideos() {
    setVideos([
      {
        id: "1",
        name: "video 1",
        thumbnailUrl:
          "https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg",
      },
      {
        id: "2",
        name: "video 2",
        thumbnailUrl:
          "https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg",
      },
      {
        id: "3",
        name: "video 3",
        thumbnailUrl:
          "https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg",
      },
      {
        id: "4",
        name: "video 4",
        thumbnailUrl:
          "https://e2.365dm.com/21/09/2048x1152/skysports-nfl-logo-badge_5530522.jpg",
      },
    ]);
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
          <img
            src="/Logos/Logo circular1.png"
            alt="Logo Circular 1"
            className="Logo"
          />
          <img
            src="/Logos/logo texto1.png"
            alt="Logo texto 1"
            className="Logo"
          />
        </figure>
      </header>
      <Upload />
      <div className="video-list">
        {videos.map((video) => (
          <div className="video" key={video.id}>
            <img
              className="video_thumbnail"
              src={image /* video.thumbnailUrl */}
              alt={video.name}
            />
            <div className="item_category">{video.name}</div>
          </div>
        ))}
      </div>
      <Dropzone
        loading={able}
        onDrop={(files) => {
          var file = files[0];
          var formdata = new FormData();
          var requestOptions = {
            method: "POST",
            redirect: "follow",
          };
          console.log(file.type);
          if (files[0].type.includes("image/")) {
            console.log("upload image");
            var reader = new FileReader();
            reader.onloadend = function () {
              console.log("onload");
              formdata.append("File", files[0]);
              formdata.append("Image", reader.result);
              requestOptions.body = formdata;
              var team = localStorage.getItem("equipo");
              var dir = tipo ? "/" + tipo : "";

              fetch(
                `http://localhost:8080/myapp/uploadFile.php?dir=public_html/back/datos/${team}/${equipo}/${categoria}${dir}&filename=${files[0].name}`,
                requestOptions
              )
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));
            };
            reader.readAsDataURL(file);
            return;
          }

          if (!files[0].type.includes("video/")) return;

          setAble(true);
          var url = URL.devDependencies(file);
          console.log(url);

          var video = document.createElement("video");
          video.src = url;
          video.currentTime = 3;

          var snapshot = function () {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            formdata.append("File", files[0]);
            formdata.append("Image", canvas.toDataURL("image/png"));
            setImage(canvas.toDataURL("image/png"));
            requestOptions.body = formdata;

            /*  fetch(
              "http://localhost:8080/myapp/uploadFile.php?dir=public_html/back/datos/&filename=archivo",
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.log("error", error)); */
            video.removeEventListener("canplay", snapshot);
            setAble(false);
          };
          video.addEventListener("canplay", snapshot);
        }}
        style={{
          backgroundColor: "transparent",
          border: 0,
        }}
      >
        <Dropzone.Idle>
          <div className="drag-drop">
            Arrastra un video a esta zona para añadirlo a la lista.
          </div>
        </Dropzone.Idle>
        <Dropzone.Accept>
          <div className="drag-drop">Agregar archivo.</div>
        </Dropzone.Accept>
        <Dropzone.Reject>
          <div className="drag-drop">Archivo no compatible</div>
        </Dropzone.Reject>
      </Dropzone>
    </div>
  );
}
//<MostrarVideo />

export default VideoList;
