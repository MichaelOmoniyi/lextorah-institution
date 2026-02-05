"use client";

import Link from "next/link";
import { DefaultLayout } from "@/components/layout";
import styles from "./not-found.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "For Parents", href: "/parents" },
  { label: "For Teachers", href: "/teachers" },
  { label: "For Learners", href: "/learners" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book a Demo", href: "/book-demo" },
];

export default function NotFound() {
  return (
    <DefaultLayout>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* 404 Icon */}
          <div className={styles.iconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>

          {/* Error Code */}
          <h1 className={styles.errorCode}>404</h1>

          {/* Title */}
          <h2 className={styles.title}>Page Not Found</h2>

          {/* Description */}
          <p className={styles.description}>
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Don&apos;t worry, let&apos;s get you back on track.
          </p>

          {/* Primary CTA */}
          <Link href="/" className={styles.primaryButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </Link>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <p className={styles.quickLinksTitle}>Or explore these pages:</p>
            <div className={styles.linksGrid}>
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className={styles.quickLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <p className={styles.helpText}>
            Need help? <Link href="/contact" className={styles.contactLink}>Contact our support team</Link>
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
