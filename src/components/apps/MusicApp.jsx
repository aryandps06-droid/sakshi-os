import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import sakshi1 from "../../assets/photos/sakshi1.jpg";

const tracks = [
  {
    title: "You Ruined My Peace 😌",
    subtitle: "Late Night Thoughts",
    file: "/audio/song1.mp3"
  },
  {
    title: "Main Character Energy ✨",
    subtitle: "Emotional Instability Dept.",
    file: "/audio/song2.mp3"
  },
  {
    title: "Private Transmission ❤️",
    subtitle: "From Me",
    file: "/audio/voice-note.mp3"
  }
];

export default function MusicApp() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef(null);

  const playTrack = (track) => {
    setCurrentTrack(track);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.src = track.file;
        audioRef.current.play();
      }
    }, 150);
  };

  return (
    <div className="music-app">
      <div className="music-left">
        <motion.img
          src={sakshi1}
          alt="album"
          className="album-art"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <h1>{currentTrack.title}</h1>
        <p>{currentTrack.subtitle}</p>

        <div className="music-controls">
          <button
            className="music-btn"
            onClick={() => audioRef.current?.play()}
          >
            ▶
          </button>

          <button
            className="music-btn"
            onClick={() => audioRef.current?.pause()}
          >
            ⏸
          </button>
        </div>

        <audio ref={audioRef} />
      </div>

      <div className="music-right">
        <h2>Playlist</h2>

        {tracks.map((track, i) => (
          <div
            key={i}
            className="track-card"
            onClick={() => playTrack(track)}
          >
            <h3>{track.title}</h3>
            <p>{track.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}