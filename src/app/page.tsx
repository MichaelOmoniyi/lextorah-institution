import Link from "next/link";
import { DefaultLayout } from "@/components/layout";
import styles from "./page.module.css";

const pageLinks = [
  { label: "For Parents", href: "/parents", description: "Supporting your child's learning journey" },
  { label: "For Teachers", href: "/teachers", description: "Empower your teaching with AI tools" },
  { label: "For Learners", href: "/learners", description: "Personalized learning support" },
  { label: "About Us", href: "/about", description: "Learn about Lextorah's mission" },
  { label: "Contact Us", href: "/contact", description: "Get in touch with our team" },
  { label: "Book a Demo", href: "/book-demo", description: "See Lextorah in action" },
  { label: "Request Access", href: "/request-access", description: "Join the Lextorah community" },
];

const legalLinks = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Home() {
  return (
    <DefaultLayout>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>AI-Powered Learning Support</div>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Lextorah</span>
          </h1>
          <p className={styles.subtitle}>
            Empowering students, teachers, and parents with Ms. Lexi® — your intelligent AI tutor 
            for personalized, responsible, and effective learning support.
          </p>
          
          <div className={styles.ctaButtons}>
            <Link href="/book-demo" className={styles.primaryButton}>
              Book a Demo
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.linksSection}>
        <div className={styles.linksContainer}>
          <h2 className={styles.sectionTitle}>Explore Our Platform</h2>
          <p className={styles.sectionSubtitle}>
            Discover how Lextorah can support your educational journey
          </p>
          
          <div className={styles.linksGrid}>
            {pageLinks.map((link, index) => (
              <Link key={index} href={link.href} className={styles.linkCard}>
                <h3 className={styles.linkTitle}>{link.label}</h3>
                <p className={styles.linkDescription}>{link.description}</p>
                <span className={styles.linkArrow}>→</span>
              </Link>
            ))}
          </div>

          <div className={styles.legalLinks}>
            {legalLinks.map((link, index) => (
              <Link key={index} href={link.href} className={styles.legalLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
