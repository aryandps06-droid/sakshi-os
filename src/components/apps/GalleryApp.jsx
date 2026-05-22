import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import sakshi1 from "../../assets/photos/sakshi1.jpg";
import sakshi2 from "../../assets/photos/sakshi2.jpg";
import sakshi3 from "../../assets/photos/sakshi3.jpg";
import smile1 from "../../assets/photos/smile1.jpg";
import cute1 from "../../assets/photos/cute1.jpg";
import memory1 from "../../assets/photos/memory1.jpg";
import funny1 from "../../assets/photos/funny1.jpg";

const albums = {
  "Cute Evidence": [
    sakshi1,
    cute1,
    sakshi2
  ],

  "Dangerous Smile Archive": [
    smile1,
    sakshi3
  ],

  "Classified Memories": [
    memory1,
    sakshi2,
    sakshi3
  ],

  "Funny Chaos": [
    funny1,
    cute1,
    sakshi1
  ]
};

export default function GalleryApp() {
  const [selectedAlbum, setSelectedAlbum] = useState("Cute Evidence");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="gallery-app">
      <div className="gallery-sidebar">
        <h2>Gallery</h2>

        {Object.keys(albums).map((album) => (
          <div
            key={album}
            className={`album-item ${
              selectedAlbum === album ? "active-album" : ""
            }`}
            onClick={() => setSelectedAlbum(album)}
          >
            {album}
          </div>
        ))}
      </div>

      <div className="gallery-grid">
        {albums[selectedAlbum].map((photo, i) => (
          <motion.img
            key={i}
            src={photo}
            className="gallery-photo"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              src={selectedPhoto}
              className="fullscreen-photo"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}