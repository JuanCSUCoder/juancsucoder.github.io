import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Juan Camilo Sánchez Urrego</h1>

        <p className={styles.description}>Freelance Web Developer</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with NextJS and Github Pages
        </a>
      </footer>
    </>
  );
}
