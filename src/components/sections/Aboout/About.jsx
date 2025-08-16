import React from "react";
import TeamMember from "@/components/TeamMember/TeamMember";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("Who We")} <span className={styles.highlight}>{t("Are")}</span>
          </h2>
          <p className={styles.subtitle}>
            {t(
              "Rootix For Software Solutions is a team of passionate engineers, designers, and problem solvers. We craft reliable, scalable, and user-centered software products that solve real business challenges and drive digital transformation."
            )}
          </p>
        </div>

        <div className={styles.teamGrid}>
          <TeamMember
            name={"Omar Alkhateen"}
            role={t("Full-Stack Developer")}
          />
          <TeamMember
            name={"Ayman Albilbase"}
            role={t("Full-Stack Developer")}
          />
          <TeamMember name={"Developer"} role={t("UI/UX Design")} />
          <TeamMember name={"Developer"} role={t("Mobile App Developer")} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumberBlue}>50+</div>
              <p className={styles.statText}>{t("Projects Completed")}</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumberPurple}>5+</div>
              <p className={styles.statText}>{t("Years Experience")}</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumberGreen}>100%</div>
              <p className={styles.statText}>{t("Client Satisfaction")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
