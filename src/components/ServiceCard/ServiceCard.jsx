import React from "react";
import styles from "./styles.module.scss";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
