"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BasilNavbar.module.css";

const BasilNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/basil-schools" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              src="/images/basil/Basil-Schools-logo.png"
              alt="Supreme Foundation Schools Logo"
              width={34}
              height={34}
              priority
            />
          </div>
        </Link>

        <div className={styles.navActions}>
          <Link href="#login" className={styles.loginButton}>
            Log In
          </Link>
          <Link href="#support" className={styles.helpButton}>
            Get Help
          </Link>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}></span>
        </button>

        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="#login" className={styles.mobileLoginButton} onClick={() => setMobileMenuOpen(false)}>
              Log In
            </Link>
            <Link href="#support" className={styles.mobileHelpButton} onClick={() => setMobileMenuOpen(false)}>
              Get Help
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BasilNavbar;
