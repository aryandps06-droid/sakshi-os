import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  "Establishing neural handshake...",
  "Decrypting emotional archives...",
  "Reconstructing private memory clusters...",
  "Heart firewall integrity: FAILED",
  "Scanning behavioral anomalies...",
  "Detected suspicious smile patterns...",
  "Manual override accepted...",
  "Primary subject identified: SAKSHI ❤️"
];

const metrics = [
  "Eye Contact Impact........98%",
  "Emotional Interference....93%",
  "Calmness Retention........4%",
  "Logic Stability...........FAILED"
];

export default function BootScreen({
  onComplete,
  onStartMusic
}) {
  const [phase, setPhase] = useState("access");
  const [visibleLines, setVisibleLines] = useState([]);
  const [visibleMetrics, setVisibleMetrics] = useState([]);
  const [scanProgress, setScanProgress] = useState(0);

  const startBoot = () => {
    onStartMusic();
    setPhase("signal");

    setTimeout(() => {
      setPhase("terminal");
    }, 1800);
  };

  const fakeNo = () => {
    setPhase("denied");

    setTimeout(() => {
      startBoot();
    }, 1800);
  };

  useEffect(() => {
    if (phase !== "terminal") return;

    let i = 0;

    const timer = setInterval(() => {
      if (i < terminalLines.length) {
        setVisibleLines((prev) => [
          ...prev,
          terminalLines[i]
        ]);
        i++;
      } else {
        clearInterval(timer);

        setTimeout(() => {
          setPhase("scan");
        }, 1200);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "scan") return;

    let progress = 0;
    let metricIndex = 0;

    const scanTimer = setInterval(() => {
      progress += 10;

      if (metricIndex < metrics.length) {
        setVisibleMetrics((prev) => [
          ...prev,
          metrics[metricIndex]
        ]);
        metricIndex++;
      }

      if (progress >= 100) {
        progress = 100;
        clearInterval(scanTimer);

        setTimeout(() => {
          setPhase("granted");
        }, 1000);

        setTimeout(() => {
          onComplete();
        }, 3500);
      }

      setScanProgress(progress);
    }, 450);

    return () => clearInterval(scanTimer);
  }, [phase, onComplete]);

  return (
    <div className="boot-screen">
      <AnimatePresence mode="wait">

        {phase === "access" && (
          <motion.div
            key="access"
            className="access-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="boot-core small"></div>

            <h1>UNKNOWN DEVICE DETECTED</h1>

            <p>
              Do you wish to access
              <br />
              SAKSHI Operating System?
            </p>

            <div className="access-buttons">
              <button onClick={startBoot}>
                YES — Enter
              </button>

              <button onClick={fakeNo}>
                NO — Retreat 😌
              </button>
            </div>
          </motion.div>
        )}

        {phase === "denied" && (
          <motion.div
            key="denied"
            className="boot-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Too late now ❤️
          </motion.div>
        )}

        {phase === "signal" && (
          <motion.div
            key="signal"
            className="boot-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            UNAUTHORIZED SIGNAL DETECTED
          </motion.div>
        )}

        {phase === "terminal" && (
          <motion.div
            key="terminal"
            className="boot-terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {visibleLines.map((line, i) => (
              <div key={i} className="boot-line">
                {line}
              </div>
            ))}
          </motion.div>
        )}

        {phase === "scan" && (
          <motion.div
            key="scan"
            className="scan-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="boot-core"></div>

            <h1>ANALYZING PRIMARY SUBJECT</h1>

            <div className="scan-progress">
              {scanProgress}%
            </div>

            <div className="metrics-box">
              {visibleMetrics.map((metric, i) => (
                <div key={i}>{metric}</div>
              ))}
            </div>
          </motion.div>
        )}

        {phase === "granted" && (
          <motion.div
            key="granted"
            className="granted-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1>ACCESS GRANTED</h1>
            <p>WELCOME BACK ❤️</p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}