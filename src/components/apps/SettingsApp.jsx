import React from "react";
import { motion } from "framer-motion";

const diagnostics = [
  {
    title: "Emotional Core",
    value: "Compromised ❤️"
  },
  {
    title: "Thought Processing",
    value: "Sakshi overloaded"
  },
  {
    title: "Memory Cache",
    value: "Mostly her face"
  },
  {
    title: "Logic Engine",
    value: "temporarily unavailable 😭"
  }
];

export default function SettingsApp() {
  return (
    <div className="settings-app">
      <div className="profile-panel">
        <div className="profile-orb">❤️</div>

        <div>
          <h1>System Profile</h1>
          <p>Owner influence detected</p>
        </div>
      </div>

      <div className="settings-grid">
        {diagnostics.map((item, i) => (
          <motion.div
            key={i}
            className="diag-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <span>{item.title}</span>
            <strong>{item.value}</strong>
          </motion.div>
        ))}
      </div>

      <div className="special-panel">
        <h2>Restricted Controls</h2>

        <div className="control-row">
          <span>Forget her</span>
          <button disabled>Unavailable</button>
        </div>

        <div className="control-row">
          <span>Stop overthinking</span>
          <button disabled>Permission denied</button>
        </div>

        <div className="control-row">
          <span>Restore peace</span>
          <button disabled>System conflict</button>
        </div>
      </div>
    </div>
  );
}