import React from "react";
import styles from "./styles.module.scss";

export default function TeamMember({ name, role, avatar }) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        {avatar ||
          name
            .split(" ")
            .map((n) => n[0])
            .join("")}
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
