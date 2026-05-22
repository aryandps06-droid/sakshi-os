import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MessagesApp from "../apps/MessagesApp";
import GalleryApp from "../apps/GalleryApp";
import MusicApp from "../apps/MusicApp";
import CallsApp from "../apps/CallsApp";
import VaultApp from "../apps/VaultApp";
import NotesApp from "../apps/NotesApp";
import CalendarApp from "../apps/CalendarApp";
import WeatherApp from "../apps/WeatherApp";
import BrowserApp from "../apps/BrowserApp";
import MapsApp from "../apps/MapsApp";
import SettingsApp from "../apps/SettingsApp";
import VoiceApp from "../apps/VoiceApp";
import FinalTransmission from "../ui/FinalTransmission";

const apps = [
  { icon: "💬", name: "Messages" },
  { icon: "📸", name: "Gallery" },
  { icon: "🎵", name: "Music" },
  { icon: "📝", name: "Notes" },
  { icon: "📞", name: "Calls" },
  { icon: "📅", name: "Calendar" },
  { icon: "🌦️", name: "Weather" },
  { icon: "🌐", name: "Browser" },
  { icon: "🗺️", name: "Maps" },
  { icon: "⚙️", name: "Settings" },
  { icon: "🎙️", name: "Voice" },
  { icon: "🔒", name: "Vault" }
];

const TOTAL_APPS = apps.length;

export default function HomeScreen() {
  const [openApp, setOpenApp] = useState(null);
  const [openedApps, setOpenedApps] = useState([]);
  const [showFinalButton, setShowFinalButton] = useState(false);
  const [showFinalSequence, setShowFinalSequence] = useState(false);

  const openAppHandler = (app) => {
    setOpenApp(app);

    if (!openedApps.includes(app.name)) {
      const updated = [...openedApps, app.name];
      setOpenedApps(updated);

      if (updated.length >= TOTAL_APPS) {
        setTimeout(() => {
          setShowFinalButton(true);
        }, 2000);
      }
    }
  };

  return (
    <div className="home-screen">

      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="home-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}

      <div className="home-glow"></div>

      <div className="status-bar">
        <span>11:11</span>
        <span>SAKSHI OS</span>
        <span>100% ⚡</span>
      </div>

      <div className="app-grid">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            className="app-icon"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => openAppHandler(app)}
          >
            <div className="icon-circle">{app.icon}</div>
            <p>{app.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="dock">
        <motion.div whileHover={{ scale: 1.18 }} className="dock-icon">
          💬
        </motion.div>

        <motion.div whileHover={{ scale: 1.18 }} className="dock-icon">
          🎵
        </motion.div>

        <motion.div whileHover={{ scale: 1.18 }} className="dock-icon">
          📸
        </motion.div>

        <motion.div whileHover={{ scale: 1.18 }} className="dock-icon">
          🔒
        </motion.div>
      </div>

      {showFinalButton && !showFinalSequence && (
        <motion.button
          className="final-transmission-btn"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowFinalSequence(true)}
        >
          ONE LAST THING ❤️
        </motion.button>
      )}

      {showFinalSequence && <FinalTransmission />}

      <AnimatePresence>
        {openApp && (
          <motion.div
            className="app-window"
            initial={{
              scale: 0.82,
              opacity: 0,
              y: 40,
              filter: "blur(18px)"
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            }}
            exit={{
              scale: 0.88,
              opacity: 0,
              y: 20,
              filter: "blur(12px)"
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="app-header">
              <span>
                {openApp.icon} {openApp.name}
              </span>

              <button
                className="close-btn"
                onClick={() => setOpenApp(null)}
              >
                ✕
              </button>
            </div>

            {openApp.name === "Messages" ? (
              <MessagesApp />
            ) : openApp.name === "Gallery" ? (
              <GalleryApp />
            ) : openApp.name === "Music" ? (
              <MusicApp />
            ) : openApp.name === "Calls" ? (
              <CallsApp />
            ) : openApp.name === "Vault" ? (
              <VaultApp />
            ) : openApp.name === "Notes" ? (
              <NotesApp />
            ) : openApp.name === "Calendar" ? (
              <CalendarApp />
            ) : openApp.name === "Weather" ? (
              <WeatherApp />
            ) : openApp.name === "Browser" ? (
              <BrowserApp />
            ) : openApp.name === "Maps" ? (
              <MapsApp />
            ) : openApp.name === "Settings" ? (
              <SettingsApp />
            ) : openApp.name === "Voice" ? (
              <VoiceApp />
            ) : (
              `${openApp.name} app coming soon 😈❤️`
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}