import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("Have a Project in")}{" "}
            <span className={styles.highlight}>{t("Mind?")}</span>
          </h2>
          <p className={styles.subtitle}>
            {t(
              "Let's work together to make it happen. Get in touch and let's discuss your next big idea."
            )}
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>{t("Send us a message")}</h3>
            <div className={styles.contactForm}></div>

            {/* Contact Info & Map */}
            <div>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <h4 className={styles.contactHeading}>{t("Address")}</h4>
                    <p className={styles.contactText}>
                      {t("Amman")}
                      <br />
                      {t("Jordan")}
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <h4 className={styles.contactHeading}>{t("Email")}</h4>
                    <p className={styles.contactText}>info@rootix.dev</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <h4 className={styles.contactHeading}>{t("Phone")}</h4>
                    <p className={styles.contactText}>
                      +962 798838600 / +962 782966707
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock Map */}
              <div className={styles.map}>
                <div className={styles.mapContent}>
                  <MapPin className={styles.mapIcon} />
                  <p>{t("Interactive Map")}</p>
                  <p className={styles.mapLocation}>{t("Amman, Jordan")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
