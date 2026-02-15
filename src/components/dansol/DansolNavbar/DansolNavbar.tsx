"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DansolNavbar.module.css";

const DansolNavbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/dansol-schools" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              src="/images/dansol/Dansol-Schools-Logo.png"
              alt="Supreme Foundation Schools Logo"
              width={34}
              height={34}
              priority
            />
          </div>
          <span className={styles.logoText}>Lextorah</span>
        </Link>

        <div className={styles.actions}>
          <Link href="#login" className={styles.loginBtn}>
            Log In
          </Link>
          <Link href="#support" className={styles.helpBtn}>
            Get Help
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default DansolNavbar;
