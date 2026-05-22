import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const calls = [
  {
    name: "Me ❤️",
    subtitle: "Private line",
    type: "popup"
  },
  {
    name: "Universe 🌌",
    subtitle: "System communication",
    type: "audio",
    audio: "/audio/call-universe.mp3"
  },
  {
    name: "Unknown Emotion",
    subtitle: "Restricted access",
    type: "audio",
    audio: "/audio/call-secret.mp3"
  }
];

export default function CallsApp() {
  const [activeCall, setActiveCall] = useState(null);
  const [inCall, setInCall] = useState(false);
  const audioRef = useRef(null);

  const acceptCall = () => {
    setInCall(true);

    if (activeCall.type === "audio") {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 200);
    }
  };

  const endCall = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setActiveCall(null);
    setInCall(false);
  };

  return (
    <div className="calls-app">
      <div className="calls-list">
        <h2>Recent Calls</h2>

        {calls.map((call, i) => (
          <motion.div
            key={i}
            className="call-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCall(call)}
          >
            <div className="call-avatar">📞</div>

            <div>
              <div className="call-name">{call.name}</div>
              <div className="call-sub">{call.subtitle}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCall && (
          <motion.div
            className="call-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="caller-avatar"
              animate={{
                scale: [1, 1.08, 1]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity
              }}
            >
              📞
            </motion.div>

            <h1>{activeCall.name}</h1>

            {!inCall && (
              <p>{activeCall.subtitle}</p>
            )}

            {inCall && activeCall.type === "popup" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="blocked-feed"
              >
                <div className="blocked-line">
                  User you are trying to contact is already in front of you 😌❤️
                </div>

                <div className="blocked-line">
                  Direct communication unnecessary.
                </div>

                <div className="blocked-line">
                  Visual presence already detected ✨
                </div>
              </motion.div>
            )}

            <div className="call-actions">
              {!inCall && (
                <button
                  className="accept-btn"
                  onClick={acceptCall}
                >
                  Accept
                </button>
              )}

              <button
                className="decline-btn"
                onClick={endCall}
              >
                {inCall ? "End Call" : "Decline"}
              </button>
            </div>

            {activeCall.type === "audio" && (
              <audio
                ref={audioRef}
                src={activeCall.audio}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}