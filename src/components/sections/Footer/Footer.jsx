"use client";

import React from "react";
import { Code, Github, Linkedin, Twitter } from "lucide-react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <Code className={styles.logoIcon} />
              </div>
              <span className={styles.brandName}>Rootix</span>
            </div>
            <p className={styles.text}>
              Empowering help businesses and people use the latest technology
              and provide great solution.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.list}>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Internal Systems</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.list}>
              <li>About Us</li>
              <li>Projects</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Follow Us</h4>
            <div className={styles.social}>
              <Github className={styles.socialIcon} />
              <Linkedin className={styles.socialIcon} />
              <Twitter className={styles.socialIcon} />
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p>&copy; 2025 Rootix For Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
