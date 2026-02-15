"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ChrislandNavbar.module.css";

interface ChrislandNavbarProps {
  logo?: string;
  loginHref?: string;
  helpHref?: string;
}

export default function ChrislandNavbar({
  logo = "/images/chrisland/Chrisland-Schools-Logo.png",
  loginHref = "#",
  helpHref = "#",
}: ChrislandNavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/chrisland-schools" className={styles.logo}>
          <Image
            src={logo}
            alt="Chrisland Schools Logo"
            width={60}
            height={60}
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
