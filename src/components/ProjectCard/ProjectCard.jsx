import React from "react";
import { Code, Play } from "lucide-react";
import styles from "./styles.module.scss";

export default function ProjectCard({
  title,
  description,
  image,
  demoVideo,
  setActiveVideo,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {image ? (
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <Code className={styles.placeholderIcon} />
          </div>
        )}

        {demoVideo && (
          <div className={styles.overlay}>
            <button
              onClick={() =>
                setActiveVideo(
                  "https://www.youtube.com/watch?v=KHeiKqpzepQ&list=RDKHeiKqpzepQ&index=1"
                )
              }
              className={styles.playButton}
            >
              <Play className={styles.playIcon} />
            </button>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.detailsButton}>View Details →</button>
      </div>
    </div>
  );
}
