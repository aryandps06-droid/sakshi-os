import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "You opened every archive...",
  "You explored every memory...",
  "You survived emotional instability...",
  "But one thing remained constant...",
  "Every route somehow led back to you."
];

export default function FinalTransmission() {
  const [index, setIndex] = useState(0);
  const [shutdown, setShutdown] = useState(false);
  const [credits, setCredits] = useState(false);
  const [epilogue, setEpilogue] = useState(0);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2600);

      return () => clearTimeout(timer);
    }

    if (index === messages.length - 1) {
      setTimeout(() => setShutdown(true), 2500);
      setTimeout(() => setCredits(true), 4800);
    }
  }, [index]);

  useEffect(() => {
    if (!credits) return;

    const timers = [
      setTimeout(() => setEpilogue(1), 3500),
      setTimeout(() => setEpilogue(2), 6500),
      setTimeout(() => setEpilogue(3), 9800)
    ];

    return () => timers.forEach(clearTimeout);
  }, [credits]);

  return (
    <div className="final-sequence">

      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="rose-particle"
          initial={{
            y: -100,
            x: Math.random() * window.innerWidth,
            opacity: 0
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          🌹
        </motion.div>
      ))}

      <AnimatePresence mode="wait">
        {!shutdown && !credits && (
          <motion.div
            key={index}
            className="final-message glitch-text"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {messages[index]}
          </motion.div>
        )}
      </AnimatePresence>

      {shutdown && !credits && (
        <motion.div
          className="shutdown-wrapper"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="shutdown-line"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.2 }}
          />

          <motion.div
            className="shutdown-glow"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.6 }}
          />
        </motion.div>
      )}

      {credits && (
        <div className="credits-screen">

          {epilogue === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1>Made with Love ❤️</h1>
              <p>By .......</p>
              <span>For Sakshi.</span>
            </motion.div>
          )}

          {epilogue === 1 && (
            <motion.div
              className="epilogue-text glitch-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              One more thing...
            </motion.div>
          )}

          {epilogue === 2 && (
            <motion.div
              className="epilogue-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              If you smiled while using this...
              <br />
              mission accomplished ❤️
            </motion.div>
          )}

          {epilogue === 3 && (
            <motion.div
              className="restart-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>Session terminated.</p>

              <button
                className="boot-again-btn"
                onClick={() => window.location.reload()}
              >
                BOOT AGAIN ❤️
              </button>
            </motion.div>
          )}

        </div>
      )}
    </div>
  );
}