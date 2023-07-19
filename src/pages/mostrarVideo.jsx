import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function MostrarVideo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const [canvasCTX, setCanvasCTX] = useState(null);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
    ctx.lineTo(e.clientX, e.clientY - r.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    // Set the line cap to round
    ctx.lineCap = "round";
    ctx.stroke();
  };

  return (
    <div>
      <Link to="/">
        <button>BACK</button>
      </Link>
      <h1>Video</h1>

      <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      <canvas
        ref={canvasRef}
        onMouseMove={(e) => Draw(e)}
        onMouseDown={(e) => SetPos(e)}
      ></canvas>
    </div>
  );
}

export default MostrarVideo;