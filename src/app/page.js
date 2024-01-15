import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.js</code>
          </p>
          <div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              Sharafath Ali
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1>hello next.js</h1>
        </div>

        <div className={styles.grid}>
          <p>i am ready to learn you😅😅😅😅❤️❤️❤️</p>
        </div>
      </main>
    </>
  );
}
