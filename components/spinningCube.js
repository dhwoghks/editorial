"use client";

import { useEffect, useRef } from "react";

export default function AsciiCubeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ASCII canvas settings
    const width = 160;
    const height = 44;
    const pixelW = 6; // width of ASCII char block
    const pixelH = 12; // height of ASCII char block

    canvas.width = width * pixelW;
    canvas.height = height * pixelH;

    // background white
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let A = 0, B = 0, C = 0;

    const K1 = 40;
    const distanceFromCam = 100;
    const incrementSpeed = 0.6;

    function project(cubeX, cubeY, cubeZ, ch, horizontalOffset, color, zBuffer, buffer) {
      const x =
        cubeY * Math.sin(A) * Math.sin(B) * Math.cos(C) -
        cubeZ * Math.cos(A) * Math.sin(B) * Math.cos(C) +
        cubeY * Math.cos(A) * Math.sin(C) +
        cubeZ * Math.sin(A) * Math.sin(C) +
        cubeX * Math.cos(B) * Math.cos(C);

      const y =
        cubeY * Math.cos(A) * Math.cos(C) +
        cubeZ * Math.sin(A) * Math.cos(C) -
        cubeY * Math.sin(A) * Math.sin(B) * Math.sin(C) +
        cubeZ * Math.cos(A) * Math.sin(B) * Math.sin(C) -
        cubeX * Math.cos(B) * Math.sin(C);

      const z =
        cubeZ * Math.cos(A) * Math.cos(B) -
        cubeY * Math.sin(A) * Math.cos(B) +
        cubeX * Math.sin(B) +
        distanceFromCam;

      const ooz = 1 / z;
      const xp = Math.floor(width / 2 + horizontalOffset + K1 * ooz * x * 2);
      const yp = Math.floor(height / 2 + K1 * ooz * y);

      const idx = xp + yp * width;

      if (idx >= 0 && idx < width * height && ooz > zBuffer[idx]) {
        zBuffer[idx] = ooz;
        buffer[idx] = { ch, color };
      }
    }

    function frame() {
      // clear canvas
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const buffer = new Array(width * height).fill(null);
      const zBuffer = new Array(width * height).fill(0);

      // cube color mapping
      const faces = {
        front:   { ch: "@", color: "green" },
        back:    { ch: "$", color: "blue" },
        left:    { ch: "~", color: "orange" },
        right:   { ch: "#", color: "red" },
        top:     { ch: "+", color: "white" },
        bottom:  { ch: ";", color: "yellow" }
      };

      // cubes of different sizes
      const cubes = [
        { size: 20, offset: -40 },
        { size: 10, offset: 10 },
        { size: 5,  offset: 40 }
      ];

      cubes.forEach(c => {
        for (let x = -c.size; x < c.size; x += incrementSpeed) {
          for (let y = -c.size; y < c.size; y += incrementSpeed) {

            project(x, y, -c.size, faces.front.ch, c.offset, faces.front.color, zBuffer, buffer);
            project(c.size, y, x, faces.right.ch, c.offset, faces.right.color, zBuffer, buffer);
            project(-c.size, y, -x, faces.back.ch, c.offset, faces.back.color, zBuffer, buffer);
            project(-x, y, c.size, faces.left.ch, c.offset, faces.left.color, zBuffer, buffer);
            project(x, -c.size, -y, faces.bottom.ch, c.offset, faces.bottom.color, zBuffer, buffer);
            project(x, c.size, y, faces.top.ch, c.offset, faces.top.color, zBuffer, buffer);
          }
        }
      });

      // Draw ASCII to canvas
      ctx.font = `${pixelH}px monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < buffer.length; i++) {
        const cell = buffer[i];
        if (!cell) continue;

        const x = (i % width) * pixelW;
        const y = Math.floor(i / width) * pixelH;

        ctx.fillStyle = cell.color;
        ctx.fillText(cell.ch, x, y);
      }

      A += 0.005;
      B += 0.005;
      C += 0.001;

      requestAnimationFrame(frame);
    }

    frame();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        margin: "0 auto",
        background: "black"
      }}
    />
  );
}
