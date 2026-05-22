import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  "decrypting archive_11_11.mem",
  "recovering unstable emotional fragments...",
  "loading affection.core",
  "overthinking.dll loaded",
  "heartfirewall disabled",
  "identity scan initiated..."
];

export default function IntroSequence({
  onComplete,
  introMusicRef
}) {
  const [phase, setPhase] = useState("signal");
  const [typedLines, setTypedLines] = useState([]);
  const [password, setPassword] = useState("");
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("warning"), 3000),
      setTimeout(() => setPhase("terminal"), 5500),
      setTimeout(() => setPhase("heartbeat"), 10000),
      setTimeout(() => setPhase("password"), 13500)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase !== "terminal") return;

    let i = 0;

    const timer = setInterval(() => {
      if (i < terminalLines.length) {
        setTypedLines((prev) => [...prev, terminalLines[i]]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 700);

    return () => clearInterval(timer);
  }, [phase]);

  const unlock = () => {
    if (password === "sakshi1111") {
      if (introMusicRef?.current) {
        introMusicRef.current.volume = 1;
        introMusicRef.current.play().catch(() => {});
      }

      setPhase("granted");

      setTimeout(() => {
        setPhase("logo");
      }, 2500);

      setTimeout(() => {
        onComplete();
      }, 5000);
    } else {
      setDenied(true);

      setTimeout(() => {
        setDenied(false);
      }, 2000);
    }
  };

  return (
    <div className="intro-sequence">
      <div className="crt-overlay"></div>
      <div className="scanlines"></div>

      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="glitch-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <AnimatePresence mode="wait">
        {phase === "signal" && (
          <motion.div
            key="signal"
            className="intro-message glitch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            SIGNAL INTERCEPTED
          </motion.div>
        )}

        {phase === "warning" && (
          <motion.div
            key="warning"
            className="intro-warning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1>WARNING</h1>
            <p>Subject linked to unstable emotional dependency.</p>
          </motion.div>
        )}

        {phase === "terminal" && (
          <motion.div
            key="terminal"
            className="intro-terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {typedLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </motion.div>
        )}

        {phase === "heartbeat" && (
          <motion.div
            key="heartbeat"
            className="heartbeat-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="heart-pulse"></div>
            <h1>HEART SIGNAL FOUND ❤️</h1>
          </motion.div>
        )}

        {phase === "password" && (
          <motion.div
            key="password"
            className="password-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="password-orb"></div>

            <h1>ACCESS KEY REQUIRED</h1>

            <input
              type="password"
              placeholder="Enter access key..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={unlock}>
              UNLOCK
            </button>

            {denied && (
              <p className="denied-text">
                ACCESS DENIED.
              </p>
            )}
          </motion.div>
        )}

        {phase === "granted" && (
          <motion.div
            key="granted"
            className="access-granted"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            ACCESS GRANTED ❤️
          </motion.div>
        )}

        {phase === "logo" && (
          <motion.div
            key="logo"
            className="sakshi-logo-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="logo-orb"
              animate={{
                scale: [1, 1.2, 1],
                rotate: 360
              }}
              transition={{
                repeat: Infinity,
                duration: 5
              }}
            />
            <h1>SAKSHI OS</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}