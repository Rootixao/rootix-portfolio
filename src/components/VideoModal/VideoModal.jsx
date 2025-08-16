import React from "react";
import { X, Play } from "lucide-react";
import styles from "./styles.module.scss";

export default function VideoModal({ videoId, onClose }) {
  console.log(videoId);
  //https://www.youtube.com/watch?v=KHeiKqpzepQ&list=RDKHeiKqpzepQ&index=1

  const getEmbedUrl = (url) => {
    const match = url.match(/v=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}`;
    return url; // fallback
  };
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X className={styles.closeIcon} />
        </button>
        <div className={styles.content}>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="515"
              src={`${getEmbedUrl(videoId)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* <div className={styles.videoWrapper}>
            <div className={styles.videoPlaceholder}>
              <Play className={styles.playIcon} />
              <p className={styles.title}>Demo Video Player</p>
              <p className={styles.videoId}>Video ID: {videoId}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
