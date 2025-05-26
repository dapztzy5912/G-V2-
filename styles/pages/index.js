import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Perkenalan Diri - [Nama Kamu]</title>
      </Head>

      <main className={styles.main}>
        <img src="/profile.jpg" alt="Foto Profil" className={styles.profile} />
        <h1>Halo, saya <span className={styles.highlight}>[Nama Kamu]</span></h1>
        <p className={styles.description}>
          Saya adalah seorang [profesi atau pelajar] yang tertarik pada [bidang].<br />
          Saat ini saya sedang belajar Next.js untuk membuat website keren!
        </p>
        <div className={styles.socials}>
          <a href="https://github.com/username" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/username" target="_blank">LinkedIn</a>
        </div>
      </main>
    </div>
  )
}
