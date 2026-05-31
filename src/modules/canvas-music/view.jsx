// src/modules/canvas-music/view.jsx
import React, { useEffect, useRef } from "react";

export default function CanvasMusicView() {
  const canvasRef = useRef(null);
  const mod = window.Portal.modules["canvas-music"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function render(t) {
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "#05070a";
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      // simple MVV: orbiting circles reacting to time
      const time = t / 1000;
      const radius = 80 + 20 * Math.sin(time * 2);
      ctx.strokeStyle = "#27f3ff";
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }, []);

  return (
    <div className="module-view canvas-music">
      <h2>Canvas Music</h2>
      <canvas
        ref={canvasRef}
        width={800}
        height={480}
        className="canvas-surface"
      />
    </div>
  );
}
