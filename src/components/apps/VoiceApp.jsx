import React from "react";

export default function VoiceApp() {
  return (
    <div className="voice-app">
      <div className="voice-core">
        <div className="voice-orb"></div>

        <h1>SAKSHI AI</h1>

        <p className="voice-sub">
          Voice interface restricted.
          <br />
          Reason: emotional interference detected ❤️
        </p>

        <div className="voice-log">
          <div className="voice-line">
            "Would you like help?"
          </div>

          <div className="voice-line">
            → emotional instability detected
          </div>

          <div className="voice-line">
            "Opening calm mode..."
          </div>

          <div className="voice-line">
            → interrupted by memories
          </div>

          <div className="voice-line">
            "Restoring logic..."
          </div>

          <div className="voice-line failed">
            → failed successfully 😌
          </div>
        </div>
      </div>
    </div>
  );
}