import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const correctPattern = [1, 2, 3, 6, 9];

export default function LockScreen({ onUnlock }) {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const handleDotClick = (num) => {
    if (selected.includes(num) || unlocking) return;

    const newPattern = [...selected, num];
    setSelected(newPattern);

    if (newPattern.length === correctPattern.length) {
      const match =
        JSON.stringify(newPattern) === JSON.stringify(correctPattern);

      if (match) {
        setUnlocking(true);

        setTimeout(() => {
          onUnlock();
        }, 1400);
      } else {
        setError(true);

        setTimeout(() => {
          setSelected([]);
          setError(false);
        }, 1200);
      }
    }
  };

  return (
    <motion.div
      className={`lock-screen ${unlocking ? "unlocking" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="lock-bg-glow"></div>

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="lock-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`
          }}
        />
      ))}

      <div className={`lock-panel ${error ? "shake" : ""}`}>
        <motion.h1
          className="lock-time"
          animate={{
            scale: [1, 1.03, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 4
          }}
        >
          11:11
        </motion.h1>

        <p className="lock-subtitle">
          A special moment ✨
        </p>

        <p className="lock-message">
          Only the right touch unlocks this ❤️
        </p>

        <div className="pattern-grid">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              className={`pattern-dot ${
                selected.includes(num) ? "active" : ""
              }`}
              onClick={() => handleDotClick(num)}
            />
          ))}
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              className="pattern-error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Wrong touch 😈
            </motion.p>
          )}
        </AnimatePresence>

        {unlocking && (
          <motion.div
            className="unlock-bloom"
            initial={{ scale: 0 }}
            animate={{ scale: 12 }}
            transition={{ duration: 1.2 }}
          />
        )}
      </div>
    </motion.div>
  );
}