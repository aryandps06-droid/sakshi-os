import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "First Emotional Disturbance",
    date: "Classified 😌"
  },
  {
    title: "Pimple Incident",
    date: "Highly sensitive record 💀"
  },
  {
    title: "System Stability Failure",
    date: "Still ongoing 😭"
  },
  {
    title: "Unexpected Smile Attack",
    date: "Multiple occurrences ❤️"
  }
];

export default function CalendarApp() {
  return (
    <div className="calendar-app">
      <h1>EMOTIONAL TIMELINE</h1>

      <div className="timeline compact-timeline">
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="timeline-card compact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}