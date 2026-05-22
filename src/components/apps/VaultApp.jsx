import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memories = [
  "First Smile Archive ❤️",
  "Dangerous Cute Evidence 😌",
  "Peace Theft Incident 😭",
  "Private Thought Fragments ✨",
  "Open only if you miss me ❤️"
];

export default function VaultApp() {
  const [phase, setPhase] = useState("gate");
  const [progress, setProgress] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const startScan = () => {
    setPhase("scan");

    let value = 0;

    const timer = setInterval(() => {
      value += 12;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);

        setTimeout(() => {
          setPhase("vault");
        }, 1000);
      }

      setProgress(value);
    }, 300);
  };

  return (
    <div className="vault-app">
      <AnimatePresence mode="wait">

        {phase === "gate" && (
          <motion.div
            key="gate"
            className="vault-gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="fingerprint"></div>

            <h1>RESTRICTED MEMORY VAULT</h1>
            <p>authorized emotional access only</p>

            <button onClick={startScan}>
              BEGIN SCAN
            </button>
          </motion.div>
        )}

        {phase === "scan" && (
          <motion.div
            key="scan"
            className="vault-scan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="scan-circle"></div>

            <h1>Decrypting emotional archives...</h1>
            <div className="vault-progress">{progress}%</div>
          </motion.div>
        )}

        {phase === "vault" && (
          <motion.div
            key="vault"
            className="vault-room"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1>SECRET MEMORY CHAMBER ❤️</h1>

            <div className="memory-grid">
              {memories.map((item, i) => (
                <motion.div
                  key={i}
                  className="memory-card"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => {
                    if (item.includes("miss me")) {
                      setShowSecret(true);
                    }
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      <AnimatePresence>
        {showSecret && (
          <motion.div
            className="secret-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="secret-box"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h2>Curiosity confirmed 😌❤️</h2>

              <p>
                If you're here...
                <br /><br />
                you were definitely curious 😭❤️
                <br /><br />
                and honestly,
                that makes this even cuter.
              </p>

              <button onClick={() => setShowSecret(false)}>
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}