import React, { useRef, useState } from "react";
import IntroSequence from "./components/core/IntroSequence";
import BootScreen from "./components/core/BootScreen";
import LockScreen from "./components/core/LockScreen";
import HomeScreen from "./components/core/HomeScreen";
import "./styles/theme.css";

export default function App() {
  const [stage, setStage] = useState("intro");

  const bgMusicRef = useRef(null);
  const introMusicRef = useRef(null);

  const startMainMusic = () => {
    if (!bgMusicRef.current) return;

    bgMusicRef.current.volume = 0.45;
    bgMusicRef.current.loop = true;
    bgMusicRef.current.play().catch(() => {});
  };

  const stopIntroMusic = () => {
    if (!introMusicRef.current) return;

    introMusicRef.current.pause();
    introMusicRef.current.currentTime = 0;
  };

  return (
    <>
      {/* INSANE INTRO MUSIC */}
      <audio
        ref={introMusicRef}
        src="/audio/intro-cinematic.mp3"
      />

      {/* MAIN AMBIENT MUSIC */}
      <audio
        ref={bgMusicRef}
        src="/audio/startup-theme.mp3"
      />

      {stage === "intro" && (
        <IntroSequence
          onComplete={() => {
            stopIntroMusic();
            startMainMusic();
            setStage("boot");
          }}
          introMusicRef={introMusicRef}
        />
      )}

      {stage === "boot" && (
        <BootScreen
          onComplete={() => setStage("lock")}
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