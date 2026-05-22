import React from "react";
import { motion } from "framer-motion";

const locations = [
  {
    title: "Peace disappearance zone",
    status: "Last signal detected here 😭"
  },
  {
    title: "Dangerous smile hotspot",
    status: "High emotional damage risk ❤️"
  },
  {
    title: "Overthinking command center",
    status: "24/7 active"
  }
];

export default function MapsApp() {
  return (
    <div className="maps-app">
      <div className="maps-header">
        <h1>EMOTIONAL TERRITORY</h1>
        <p>tracking unstable coordinates...</p>
      </div>

      <div className="map-screen">
        <div className="scan-ring"></div>
        <div className="scan-ring second"></div>

        <div className="map-grid"></div>

        <motion.div
          className="map-marker marker1"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <motion.div
          className="map-marker marker2"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
        />

        <motion.div
          className="map-marker marker3"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ repeat: Infinity, duration: 2.8 }}
        />
      </div>

      <div className="map-locations">
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            className="location-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{loc.title}</h3>
            <p>{loc.status}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}