import React from "react";

const notes = [
  "draft that was never sent:\nI was supposed to stay normal around you.",
  "restricted memo:\nSubject weaponizes innocence with suspicious precision.",
  "deleted before sending:\nYou looked way too good in that moment.",
  "private observation:\nThat one tiny expression still replays randomly.",
  "classified thought:\nPretending not to care has been technically unsuccessful.",
  "incident report:\nPeace levels dropped immediately after interaction.",
  "unsaved draft:\nDefinitely did not reopen old chats at 2am.",
  "internal diagnostics:\nEmotional firewall breached beyond recovery ❤️"
];

export default function NotesApp() {
  return (
    <div className="notes-app">
      <h1>UNSENT THOUGHTS</h1>

      <div className="notes-grid">
        {notes.map((note, i) => (
          <div key={i} className="note-card">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}