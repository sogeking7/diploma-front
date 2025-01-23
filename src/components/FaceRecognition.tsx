"use client";

import React, { useEffect, useState } from "react";
import { useWebSocket } from "@/hooks/useWebSocket";
import { useWebcam } from "@/hooks/useWebCam";

export const FaceRecognition = () => {
  const [wsUrl] = useState("ws://localhost:8000/ws");

  const { ws, results: rs, faces } = useWebSocket(wsUrl);
  const { videoRef, canvasRef } = useWebcam(ws, 200);

  const drawRectangles = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx && faces.length > 0) {
      faces.forEach(({ x, y, w, h }) => {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "lime";
        ctx.stroke();
      });
    }
  };

  useEffect(() => {
    drawRectangles();
  }, [faces]);

  const res = {
    name: rs[0]?.name || "",
    confidence: rs[0]?.confidence || 0,
  };

  return (
    <div className={"relative h-full"}>
      <video
        ref={videoRef}
        autoPlay
        className={"!w-0 !h-0 opacity-0 !size-0 block"}
      ></video>
      <canvas ref={canvasRef} className={"w-full h-full rounded-0"}></canvas>
      <div className={"absolute w-full  -bottom-[26px] text-center"}>
        {res.name && <p>{res.name}</p>}
      </div>
    </div>
  );
};
