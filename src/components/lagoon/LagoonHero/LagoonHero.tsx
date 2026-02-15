import Link from "next/link";
import Image from "next/image";
import styles from "./LagoonHero.module.css";

interface LagoonHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  badge: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  image: string;
  supportBadge: string;
}

export default function LagoonHero({
  title,
  highlight,
  subtitle,
  badge,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  image,
  supportBadge,
}: LagoonHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title} <span className={styles.highlight}>{highlight}</span> {subtitle}
          </h1>
          <span className={styles.badge}>
            <Image
                      src="/images/lagoon/icons/powered-by.png"
              alt={`Powered By Icon`}
              width={20}
              height={20}
            />
            {badge}
          </span>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttons}>
            <Link href={primaryButtonHref} className={styles.primaryBtn}>
              {primaryButtonText}
            </Link>
            <Link href={secondaryButtonHref} className={styles.secondaryBtn}>
              {secondaryButtonText}
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt="Students at Lagoon Schools"
            width={500}
            height={400}
            className={styles.image}
            priority
          />
          <div className={styles.supportBadge}>
            <div className={styles.supportIcon}>
              <Image
                        src="/images/lagoon/icons/robot.png"
                alt={`Robot Icon`}
                width={20}
                height={20}
              />
            </div>
            <div className={styles.supportText}>
              <span className={styles.supportLabel}>AI Powered</span>
              <span className={styles.supportValue}>{supportBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
