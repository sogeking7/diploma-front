"use client";

import { useState, useEffect } from "react";

export const useWebSocket = (url: string) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [results, setResults] = useState<
    { name: string; confidence: number }[]
  >([]);
  const [faces, setFaces] = useState<
    { x: number; y: number; w: number; h: number }[]
  >([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setResults(data.results);
      setFaces(data.faces);
    };

    socket.onclose = () => console.log("WebSocket closed.");
    setWs(socket);

    return () => {
      socket.close();
    };
  }, [url]);

  return { ws, results, faces };
};
