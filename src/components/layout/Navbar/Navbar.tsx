import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/data/navbarData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img
            src="/images/logo.png"
            alt="Lextorah Logo"
            width={120}
            height={32}
            
          />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.navActions}>
            <Link to="/chat" className={`btn btn-primary ${styles.chatBtn}`}>
              Chat Now!
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuBtn}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ""}`}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/chat"
            className={`btn btn-primary ${styles.mobileChatBtn}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Chat Now!
          </Link>
        </div>
      </nav>
    </header>
  );
}
