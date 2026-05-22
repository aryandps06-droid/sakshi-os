import React from "react";
import { motion } from "framer-motion";

const incidents = [
  {
    title: "Eye Contact Breach",
    detail: "stability systems failed instantly"
  },
  {
    title: "Hmm Weapon Deployment",
    detail: "critical emotional damage recorded"
  },
  {
    title: "Smile Event",
    detail: "peace recovery impossible"
  },
  {
    title: "Unexpected Innocence Act",
    detail: "suspicion levels increased"
  }
];

export default function BrowserApp() {
  return (
    <div className="browser-app">
      <div className="intel-header">
        <div className="intel-search">
          intelligence://sakshi-classified.local
        </div>

        <div className="threat-panel">
          <div>
            <span>SUBJECT</span>
            <h2>Sakshi</h2>
          </div>

          <div>
            <span>THREAT LEVEL</span>
            <h2>MAXIMUM ❤️</h2>
          </div>

          <div>
            <span>STATUS</span>
            <h2>dangerously memorable</h2>
          </div>
        </div>
      </div>

      <div className="intel-grid">
        <div className="intel-left">
          <div className="intel-radar">
            <div className="radar-ring ring1"></div>
            <div className="radar-ring ring2"></div>
            <div className="radar-dot"></div>
          </div>
        </div>

        <div className="intel-right">
          {incidents.map((item, i) => (
            <motion.div
              key={i}
              className="incident-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}