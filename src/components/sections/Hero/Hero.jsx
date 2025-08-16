"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.background}>
        <div className={styles.bgShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className={styles.floatingCode}>
        <div className={styles.code1}>{t("<div>")}</div>
        <div className={styles.code2}>{t("function()")}</div>
        <div className={styles.code3}>{t("useState()")}</div>
        <div className={styles.code4}>{t("</>")}</div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          {t("Rootix For")}
          <span className={styles.gradientText}>{t("Software Solutions")}</span>
        </h1>
        <p className={styles.subtitle}>
          {t(
            "We create digital solutions that help businesses and people use the latest technology and provide great experiences."
          )}
        </p>

        <div className={styles.buttons}>
          <button className={styles.getStarted}>{t("Get Started")}</button>
          <button className={styles.viewWork}>{t("View Our Work")}</button>
        </div>
      </div>
    </section>
  );
}
