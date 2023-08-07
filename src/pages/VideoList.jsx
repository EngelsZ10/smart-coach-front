import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconX } from "@tabler/icons-react";
import MostrarVideo from "./mostrarVideo";

import "./VideoList.css";
import "./CategoryView.css";

function VideoList() {
  const [able, setAble] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const equipo = searchParams.get("equipo");
  const categoria = searchParams.get("categoria");
  const tipo = searchParams.get("tipo");

  const navigate = useNavigate();

  const theme = getTheme();

  function getTheme() {
    let theme;
    switch (equipo) {
      case "steelers":
        theme = "black";
        break;
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

  const [opened, { open, close }] = useDisclosure(false);
  const [link, setLink] = useState({ name: "", link: "" });
  return (
    <div className={`list-view view--${theme}`}>
      <Modal
        color="red"
        opened={opened}
        fullScreen
        onClose={close}
        title={link.name}
      >
        <MostrarVideo link={link.link} equipo={equipo} />
      </Modal>
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
      <div className="video-list">
        {videos.map((video) => (
          <div className="video nav-item" key={video.id}>
            <ActionIcon
              color="red"
              radius="xl"
              variant="filled"
              style={{ marginBottom: -12, margin: -12 }}
            >
              <IconX />
            </ActionIcon>

            <div
              onClick={() => {
                var team = localStorage.getItem("equipo");
                var dir = tipo ? "/" + tipo : "";
                setLink({
                  name: video.name,
                  link: `${team}/${equipo}/${categoria}${dir}/${video.name}`,
                });
                open();
              }}
            >
              <img
                className="video_thumbnail"
                src={video.thumbnailUrl}
                alt={video.name}
              />
              <div className="item_category">{video.name}</div>
            </div>
          </div>
        ))}
      </div>
      <Dropzone
        loading={able}
        onDrop={(files) => {
          //start
          setAble(true);
          var file = files[0];
          var formdata = new FormData();
          var requestOptions = {
            method: "POST",
            redirect: "follow",
          };
          var team = localStorage.getItem("equipo");
          var dir = tipo ? "/" + tipo : "";

          // is image
          if (files[0].type.includes("image/")) {
            var reader = new FileReader();
            reader.onloadend = function () {
              formdata.append("File", files[0]);
              formdata.append("Image", reader.result);
              requestOptions.body = formdata;

              fetch(
                `http://localhost:8080/myapp/uploadFile.php?dir=${team}/${equipo}/${categoria}${dir}&filename=${files[0].name}`,
                requestOptions
              )
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));
            };
            reader.readAsDataURL(file);
            setAble(false);
            return;
          }

          //is not video
          if (!files[0].type.includes("video/")) {
            setAble(false);
            return;
          }

          //isvideo
          var url = URL.createObjectURL(file);
          var video = document.createElement("video");
          video.src = url;

          var snapshot = function () {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            video.currentTime = 3;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            formdata.append("File", files[0]);
            formdata.append("Image", canvas.toDataURL("image/png"));
            requestOptions.body = formdata;
            video.removeEventListener("canplay", snapshot);
            fetch(
              `http://localhost:8080/myapp/uploadFile.php?dir=${team}/${equipo}/${categoria}${dir}&filename=${files[0].name}`,
              requestOptions
            )
              .then((response) => {
                setAble(false);
                return response.text();
              })
              .then((result) => console.log(result))
              .catch((error) => {
                setAble(false);
                console.log("error", error);
              });
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
