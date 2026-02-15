"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./CoronaNavbar.module.css";

interface CoronaNavbarProps {
  logo?: string;
  loginHref?: string;
  helpHref?: string;
}

export default function CoronaNavbar({
  logo = "/images/corona/logo.png",
  loginHref = "#",
  helpHref = "#",
}: CoronaNavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/corona-schools" className={styles.logo}>
          <Image
            src={logo}
            alt="Corona Schools Logo"
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
