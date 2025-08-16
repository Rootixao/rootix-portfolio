"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation(); // إضافة i18n لتغيير اللغة
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [lang, setLang] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);

    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

    console.log("Language changed to:", newLang);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>
              {t("Root")}
              <span className={styles.logoHighlight}>{t("ix")}</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={styles.navLink}
                >
                  {t(item)}
                </a>
              )
            )}

            {/* Language Toggle */}
            <button className={styles.langButton} onClick={toggleLanguage}>
              <Globe size={20} />
              <span className={styles.langText}>
                {t(lang.toUpperCase() === "AR" ? "EN" : "AR")}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={styles.themeButton}
            >
              {darkMode ? (
                <Sun className={styles.iconSmall} />
              ) : (
                <Moon className={styles.iconSmall} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileButtons}>
            <button className={styles.langButton} onClick={toggleLanguage}>
              <Globe size={20} />
              <span className={styles.langText}>
                {t(lang.toUpperCase() === "AR" ? "EN" : "AR")}
              </span>
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={styles.themeButton}
            >
              {darkMode ? (
                <Sun className={styles.iconSmall} />
              ) : (
                <Moon className={styles.iconSmall} />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.menuButton}
            >
              {mobileMenuOpen ? (
                <X className={styles.icon} />
              ) : (
                <Menu className={styles.icon} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={styles.mobileNavLink}
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
