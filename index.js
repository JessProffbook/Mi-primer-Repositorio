
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Gavel, BookOpen, User, Lightbulb } from 'lucide-react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ProffBook</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>P✏️</div>
        <h1>ProffBook</h1>
      </header>

      <nav className={styles.sidebar}>
        <ul>
          <li>Inicio</li>
          <li>Mi Perfil</li>
          <li>Historias</li>
          <li>Recursos</li>
          <li><Gavel size={16} /> Zona Legal (Premium)</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h2>Realidades docentes del mundo 🌎</h2>
        <p>Una red social exclusiva para compartir vivencias reales de la docencia.</p>
        <button className={styles.button}>Explorar Historias</button>

        <section className={styles.cardSection}>
          <div className={styles.card}>
            <h3>Historia 1</h3>
            <p>“Mi mayor desafío fue enseñar en medio de una protesta…”</p>
            <small><User size={12} /> @ProfeLina</small>
          </div>
          <div className={styles.card}>
            <h3>Historia 2</h3>
            <p>“Cómo enfrenté una acusación falsa de un padre de familia.”</p>
            <small><Gavel size={12} /> Zona Legal</small>
          </div>
        </section>

        <section className={styles.share}>
          <h2>Comparte tu historia</h2>
          <input type="text" placeholder="Tu nombre o seudónimo" />
          <textarea placeholder="Escribe tu experiencia aquí..." rows={5}></textarea>
          <button className={styles.button}>Publicar</button>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2025 ProffBook. Todos los derechos reservados.
      </footer>
    </div>
  )
}
