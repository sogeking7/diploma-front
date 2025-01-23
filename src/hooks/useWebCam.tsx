"use client";

import { useEffect, useRef } from "react";

export const useWebcam = (ws: WebSocket | null, sendInterval: number = 250) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sendFrame = () => {
    if (!canvasRef.current || !videoRef.current || !ws) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;

      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result?.toString().split(",")[1];
        if (base64Data && ws.readyState === WebSocket.OPEN) {
          ws.send(base64Data);
        }
      };
      reader.readAsDataURL(blob);
    }, "image/jpeg");
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the webcam:", error);
      }
    };

    startCamera();

    const interval = setInterval(sendFrame, sendInterval);

    return () => {
      clearInterval(interval);
    };
  }, [ws, sendInterval]);

  return { videoRef, canvasRef };
};
