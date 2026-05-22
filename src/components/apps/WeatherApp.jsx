import React from "react";
import { motion } from "framer-motion";

const forecast = [
  {
    title: "Thinking About You",
    level: "92%"
  },
  {
    title: "Calmness",
    level: "3%"
  },
  {
    title: "Missing her",
    level: "∞"
  }
];

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <div className="weather-header">
        <h1>EMOTIONAL FORECAST</h1>
        <p>live atmospheric instability detected</p>
      </div>

      <div className="weather-main">
        <div className="weather-visual">
          <motion.div
            className="weather-core"
            animate={{
              scale: [1, 1.08, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5
            }}
          />

          <div className="rain rain1"></div>
          <div className="rain rain2"></div>
          <div className="rain rain3"></div>

          <div className="temp-display">∞°</div>
        </div>

        <div className="weather-info">
          <div className="forecast-card">
            Condition: emotionally unstable 😭
          </div>

          <div className="forecast-card">
            Primary cause: Sakshi ❤️
          </div>

          <div className="forecast-card">
            Recovery estimate: unknown
          </div>
        </div>
      </div>

      <div className="forecast-grid">
        {forecast.map((item, i) => (
          <motion.div
            key={i}
            className="mini-forecast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <h3>{item.title}</h3>
            <p>{item.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}