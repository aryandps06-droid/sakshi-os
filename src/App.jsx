import React, { useRef, useState } from "react";
import BootScreen from "./components/core/BootScreen";
import LockScreen from "./components/core/LockScreen";
import HomeScreen from "./components/core/HomeScreen";
import "./styles/theme.css";

export default function App() {
  const [stage, setStage] = useState("boot");
  const bgMusicRef = useRef(null);

  const startMusic = () => {
    if (!bgMusicRef.current) return;

    bgMusicRef.current.volume = 0.45;
    bgMusicRef.current.loop = true;

    bgMusicRef.current.play().catch(() => {});
  };

  return (
    <>
      <audio
        ref={bgMusicRef}
        src="/audio/startup-theme.mp3"
      />

      {stage === "boot" && (
        <BootScreen
          onComplete={() => setStage("lock")}
          onStartMusic={startMusic}
        />
      )}

      {stage === "lock" && (
        <LockScreen
          onUnlock={() => setStage("home")}
        />
      )}

      {stage === "home" && (
        <HomeScreen />
      )}
    </>
  );
}