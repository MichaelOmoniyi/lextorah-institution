"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./UnilagNavbar.module.css";

interface UnilagNavbarProps {
  logo?: string;
  loginHref?: string;
  helpHref?: string;
}

export default function UnilagNavbar({logo = "/images/grange/UNILAG-International-School-Logo.png",
  loginHref = "#",
  helpHref = "#",
}: UnilagNavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/unilag-schools" className={styles.logo}>
          <Image
            src={logo}
            alt="UNILAG International School Logo"
            width={80}
            height={80}
            className={styles.logoImage}
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
};
