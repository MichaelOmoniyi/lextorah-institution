"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./LagoonNavbar.module.css";

interface LagoonNavbarProps {
  logo?: string;
  brandName?: string;
  loginHref?: string;
  helpHref?: string;
}

export default function LagoonNavbar({
  logo = "/images/lagoon/logo.png",
  brandName = "Lagoon Schools",
  loginHref = "#",
  helpHref = "#",
}: LagoonNavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/lagoon-schools" className={styles.brand}>
          <Image
            src={logo}
            alt="Lagoon Schools Logo"
            width={32}
            height={32}
            priority
          />
          <span className={styles.brandName}>{brandName}</span>
        </Link>

        <div className={styles.navActions}>
          <Link href={loginHref} className={styles.loginBtn}>
            Log In
          </Link>
          <Link href={helpHref} className={styles.helpBtn}>
            Get Help
          </Link>
        </div>
      </nav>
    </header>
  );
}
