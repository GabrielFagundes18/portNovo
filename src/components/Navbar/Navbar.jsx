import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Code2, User, Send, Layers, Home } from "lucide-react";
import styles from "./Navbar.module.css";
import { Button } from "../Button/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className={styles.header}>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.navIsland}
      >
        <div className={styles.logo}>
          G<span>.</span> Fagundes
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tech">Stack</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
        </ul>

        <Button href="#contact" className={styles.cta} variant="primary">
          <Send size={16} />
          <span>Contato</span>
        </Button>

        
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className={styles.mobileContent}
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <a href="#home" onClick={() => setIsOpen(false)}>
                <Home size={24} /> Home
              </a>

              <a href="#tech" onClick={() => setIsOpen(false)}>
                <Code2 size={24} /> Tecnologia
              </a>

              <a href="#projects" onClick={() => setIsOpen(false)}>
                <Layers size={24} /> Projetos
              </a>

              <a href="#about" onClick={() => setIsOpen(false)}>
                <User size={24} /> Sobre
              </a>

              <a
                href="#contact"
                className={styles.mobileCta}
                onClick={() => setIsOpen(false)}
              >
                <Send size={20} /> Mandar Mensagem
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
