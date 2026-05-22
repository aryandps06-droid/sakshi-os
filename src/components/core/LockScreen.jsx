import React from "react";
import { motion } from "framer-motion";

export default function LockScreen({ onUnlock }) {
  const time = "11:11";
  const date = "A special moment";

  return (
    <motion.div
      className="lockscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="lock-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`
          }}
        />
      ))}

      <div className="wallpaper-glow"></div>

      <div className="lock-top">
        <div className="lock-time">{time}</div>
        <div className="lock-date">{date}</div>
      </div>

      <motion.div
        className="notification-stack"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="lock-notification">
          ❤️ 1 unread emotional transmission
        </div>

        <div className="lock-notification">
          Neural Monitor: stability warning
        </div>
      </motion.div>

      <motion.div
        className="unlock-pill"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onUnlock}
      >
        TAP TO UNLOCK
      </motion.div>
    </motion.div>
  );
}