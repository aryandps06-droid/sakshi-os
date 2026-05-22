import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const chats = [
  {
    name: "Me",
    avatar: "❤️",
    online: true,
    animated: true,
    messages: [
      "hey 😌",
      "small observation...",
      "if the moon ever got insecure, it would probably be because of your face 🌙😌",
      "okay that sounded smoother in my head 😭",
      "but still valid.",
      "serious question...",
      "how do you manage to act innocent after causing complete emotional chaos? 😭❤️",
      "and yes...",
      "even that one pimple had main character energy 👀😭",
      "SORRY SORRY 😭❤️",
      "that was disrespectful 😭",
      "but still... adorable 😌❤️"
    ]
  },

  {
    name: "Universe",
    avatar: "🌌",
    online: false,
    animated: false,
    messages: [
      "system warning.",
      "subject remains emotionally unstable.",
      "primary trigger still active."
    ]
  },

  {
  name: "Emotional Telemetry ❤️",
  avatar: "❤️",
  online: true,
  animated: false,
  messages: [
    "emotional telemetry active.",
    "memory spikes detected.",
    "logic override unsuccessful.",
    "subject remains unusually memorable."
  ]
}
];

export default function MessagesApp() { 
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    if (!activeChat.animated) {
      setVisibleMessages(activeChat.messages);
      return;
    }

    setVisibleMessages([]);
    let i = 0;

    const interval = setInterval(() => {
      setVisibleMessages((prev) => [...prev, activeChat.messages[i]]);
      i++;

      if (i >= activeChat.messages.length) {
        clearInterval(interval);
      }
    }, 1600);

    return () => clearInterval(interval);
  }, [activeChat]);

  return (
    <div className="premium-messages">
      <div className="contacts-panel">
        <div className="messages-heading">Messages</div>

        {chats.map((chat, i) => (
          <motion.div
            key={i}
            className={`contact-card ${
              activeChat.name === chat.name ? "active-contact" : ""
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveChat(chat)}
          >
            <div className="contact-avatar">{chat.avatar}</div>

            <div>
              <div className="contact-name">{chat.name}</div>
              <div className="contact-status">
                {chat.online ? "Online now" : "Offline"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="chat-panel">
        <div className="chat-topbar">
          <div className="chat-user">
            <div className="contact-avatar">{activeChat.avatar}</div>

            <div>
              <div className="contact-name">{activeChat.name}</div>
              <div className="contact-status">
                {activeChat.online ? "Online now" : "Last seen earlier"}
              </div>
            </div>
          </div>
        </div>

        <div className="chat-body">
          {visibleMessages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`chat-bubble ${i % 2 === 0 ? "received" : "sent"}`}
            >
              {msg}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}