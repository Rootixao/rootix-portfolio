import React from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { Code, Smartphone, Palette, Users, Server } from "lucide-react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function Service() {
  const { t } = useTranslation();

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("What We")}{" "}
            <span className={styles.highlight}>{t("Offer")}</span>
          </h2>
          <p className={styles.subtitle}>
            {t(
              "Comprehensive digital solutions tailored to your business needs"
            )}
          </p>
        </div>

        <div className={styles.grid}>
          <ServiceCard
            icon={Code}
            title={t("Web Development")}
            description={t(
              "We create fast, scalable, and modern websites using Next.js, React, Laravel , Node.js and cutting-edge technologies."
            )}
          />
          <ServiceCard
            icon={Smartphone}
            title={t("Mobile Applications")}
            description={t(
              "Cross-platform mobile apps with stunning performance and intuitive user experiences."
            )}
          />
          {/* <ServiceCard
            icon={Palette}
            title={t("UI/UX Design")}
            description={t(
              "Beautiful designs focused on clarity, simplicity, and exceptional user experience."
            )}
          /> */}
          <ServiceCard
            icon={Users}
            title={t("Software Consulting")}
            description={t(
              "Strategic guidance and technical expertise to accelerate your digital transformation."
            )}
          />
          <ServiceCard
            icon={Server}
            title={t("Internal Systems")}
            description={t(
              "Custom internal systems and tools to streamline operations, boost productivity, and integrate your business processes."
            )}
          />
        </div>
      </div>
    </section>
  );
}
