import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './mostrarVideo.css';

function MostrarVideo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const [canvasCTX, setCanvasCTX] = useState(null);
  const [color, setColor] = useState("#000000");
  const [dibujar, setDibujar] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.85;

    setCanvasCTX(ctx);
  }, [canvasRef]);

  const SetPos = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const Draw = (e) => {
    const canvas = canvasRef.current;
    let r = canvas.getBoundingClientRect();
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
    if (e.buttons !== 1) return;
    const ctx = canvasCTX;
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y - r.y);
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
    if (dibujar === 1){
      ctx.lineTo(e.clientX, e.clientY - r.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 10;
    }else{
      ctx.clearRect(e.clientX, e.clientY - r.y, 20, 20);
    }
    // Set the line cap to round
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const Erase = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <div style={{backgroundColor: "transparent", width: 450, textAlign: "center", margin: 5}}>
        <button onClick={(e) => {setColor("black"); setDibujar(1)}} class = "opciones"><div class="color" style={{backgroundColor: "black", color: "black"}}>n</div></button>
        <button onClick={(e) => {setColor("red"); setDibujar(1)}} class = "opciones"><div class="color" style={{backgroundColor: "red", color: "red"}}>l</div></button>
        <button onClick={(e) => {setColor("green"); setDibujar(1)}} class = "opciones"><div class="color" style={{backgroundColor: "green", color: "green"}}>n</div></button>
        <button onClick={(e) => {setColor("blue"); setDibujar(1)}} class = "opciones"><div class="color" style={{backgroundColor: "blue", color: "blue"}}>n</div></button>
        <button onClick={(e) => {setColor("yellow"); setDibujar(1)}} class = "opciones"><div class="color" style={{backgroundColor: "yellow", color: "yellow"}}>n</div></button>
        <div>
        <button onClick={(e) => {setDibujar(2)}} style={{marginBottom: 10, marginRight:"1vw"}}>Borrar</button>
        <button onClick={(e) => {Erase();}} style={{marginBottom: 10}}>Borrar Todo</button>
        </div>
      </div>

      <div class="cuerpo">
        {/*Agrega aqui el video*/}
        <video controls></video>
        <canvas
          ref={canvasRef}
          onMouseMove={(e) => Draw(e)}
          onMouseDown={(e) => SetPos(e)}
        ></canvas>
      </div>
    </div>
  );
}

export default MostrarVideo;