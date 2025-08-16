import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function Projects({ setActiveVideo }) {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("Our Recent")}{" "}
            <span className={styles.highlight}>{t("Projects")}</span>
          </h2>
          <p className={styles.subtitle}>
            {t("Showcasing our latest work and innovative solutions")}
          </p>
        </div>

        <div className={styles.grid}>
          <ProjectCard
            title={t("Spangile E-Commerce")}
            description={t(
              "A feature-rich e-commerce platform with AI product recommendations, Stripe payments, and advanced analytics."
            )}
            demoVideo="ecommerce-demo"
            setActiveVideo={setActiveVideo}
          />
          <ProjectCard
            title={t("Portfolio")}
            description={t(
              "A comprehensive internal dashboard to manage employees, attendance, payroll, leaves, and performance metrics."
            )}
            demoVideo="hr-demo"
            setActiveVideo={setActiveVideo}
          />
          <ProjectCard
            title={t("Postman App")}
            description={t(
              "A modern CRM for real estate agencies, including property management, client tracking, and workflow automation."
            )}
            setActiveVideo={setActiveVideo}
          />
          <ProjectCard
            title={t("Ticketing System")}
            description={t(
              "A patient management platform with appointment scheduling, medical record handling, and telemedicine support."
            )}
            setActiveVideo={setActiveVideo}
          />
          <ProjectCard
            title={t("Evaluation System")}
            description={t(
              "An interactive learning management system with video streaming, progress tracking, and collaboration tools."
            )}
            demoVideo="education-demo"
            setActiveVideo={setActiveVideo}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.viewAllButton}>
            {t("View All Projects")}
          </button>
        </div>
      </div>
    </section>
  );
}
