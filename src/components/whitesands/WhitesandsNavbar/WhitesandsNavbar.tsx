"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./WhitesandsNavbar.module.css";

interface WhitesandsNavbarProps {
  logo?: string;
  loginHref?: string;
  helpHref?: string;
}

export default function WhitesandsNavbar({
  logo = "/images/whitesands/Whitesands-School-Logo.png",
  loginHref = "#",
  helpHref = "#",
}: WhitesandsNavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/whitesands-schools" className={styles.logo}>
          <Image
            src={logo}
            alt="Whitesands Schools Logo"
            width={40}
            height={40}
            priority
          />
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
