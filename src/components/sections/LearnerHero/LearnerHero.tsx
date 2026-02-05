import Link from "next/link";
import Image from "next/image";
import styles from "../HeroSection/HeroSection.module.css";
import heroStyles from "./LearnerHero.module.css";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
  align?: "left" | "center";
}

export default function LearnerHero({
  title,
  subtitle,
  badge,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage = "/images/student-hero.png",
  align = "left",
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={`${styles.container} ${align === "center" ? styles.containerCenter : ""}`}>
        <div className={`${styles.content} ${align === "center" ? styles.contentCenter : ""}`}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.buttons}>
            <Link href={primaryButtonHref} className={`btn btn-primary ${styles.primaryBtn}`}>
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link href={secondaryButtonHref} className={`btn btn-secondary ${styles.secondaryBtn} ${heroStyles.secondaryBtn}`}>
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
