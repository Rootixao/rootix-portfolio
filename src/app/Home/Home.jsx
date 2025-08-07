import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.brand}>🚧 Rootix</h1>
        <h2 className={styles.tagline}>Innovative Software Solutions</h2>
        <p className={styles.message}>
          Our website is currently under development.
        </p>
        <p className={styles.note}>
          We're building something great. Stay tuned!
        </p>
      </div>
    </div>
  );
}
