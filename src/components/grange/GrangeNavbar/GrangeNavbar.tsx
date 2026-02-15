"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./GrangeNavbar.module.css";

interface GrangeNavbarProps {
  logo?: string;
  loginHref?: string;
  helpHref?: string;
}

export default function GrangeNavbar({
  logo = "/images/grange/Grange-School-Logo.png",
  loginHref = "#",
  helpHref = "#",
}: GrangeNavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/grange-schools" className={styles.logo}>
          <Image
            src={logo}
            alt="Grange Schools Logo"
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
