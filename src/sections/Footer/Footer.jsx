import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a 
          href="https://github.com/GabrielFagundes18" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialIcon}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gabrielfagundesdeoliveira/" className={styles.socialIcon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/gabrielfagundes___/" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className={styles.copyright}>
       <p className={styles.copyrightText}>
  © {currentYear} — <span className={styles.terminalPrompt}>$</span> 
  construído por <span className={styles.name}>Gabriel Fagundes de Oliveira</span>
  <span className={styles.cursor}>_</span>
</p>
        <p className={styles.stack}>
          React 19 + Framer Motion + Particles.js + lucide-react
        </p>
      </div>
    </footer>
  );
}