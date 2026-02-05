import { Metadata } from "next";
import Link from "next/link";
import { DefaultLayout } from "@/components/layout";
import {
  LearnerHero,
  LearnerFeatures,
  ResponsibleUseBanner,
  LearnerSubjectsSupported,
  ExamPreparation,
  FAQSection,
  LearnerCTA,
} from "@/components/sections";
import {
  msLexiLearnerDescription,
  howLextorahHelpsLearn,
  learnTheRightWay,
  responsibleUseSupportLearners,
  academicSubjectsGrid,
  languageLearningGrid,
  subjectCategories,
  examPrepCategories,
  examPrepFeatures,
  learnerFAQs,
  learnerCtaSection,
} from "@/data/learnerData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "For Learners & Students | Lextorah - Learn Better, Practise Smarter, Build Confidence",
  description:
    "Learn better, practise smarter, and build confidence with Lextorah AI and Ms. Lexi®. Get personalized learning support for all subjects and exam preparation.",
};

export default function LearnersPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <LearnerHero
        badge="For Learners & Students"
        title="Learn Better. Practise Smarter. Build Confidence."
        primaryButtonText="Try Ms. Lexi® Now"
        primaryButtonHref="/chat"
        secondaryButtonText="Request Access"
        secondaryButtonHref="/request-access"
        backgroundImage="/images/student-hero.png"
        align="center"
      />

      {/* Powerful Features for Effective Learning */}
      <LearnerFeatures
        msLexiInfo={msLexiLearnerDescription}
        howItHelps={howLextorahHelpsLearn}
        learnRightWay={learnTheRightWay}
      />

      {/* Responsible Use Banner */}
      <ResponsibleUseBanner items={responsibleUseSupportLearners} />

      {/* Subjects, Languages & Exams Supported */}
      <LearnerSubjectsSupported
        subjects={academicSubjectsGrid}
        languages={languageLearningGrid}
        categories={subjectCategories}
      />

      {/* Exam Preparation Support */}
      <ExamPreparation
        categories={examPrepCategories}
        features={examPrepFeatures}
      />

      {/* Frequently Asked Questions */}
      <section className={styles.faqSection}>
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Lextorah AI and Ms Lexi®"
          faqs={learnerFAQs}
        />
        <div className={styles.faqCta}>
          <p>Lextorah AI is here to support your learning — your effort, honesty, and curiosity make the difference</p>
          <Link href="/contact" className={styles.faqLink}>
            Still Have Questions? Contact Us
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <LearnerCTA
        title={learnerCtaSection.title}
        description={learnerCtaSection.description}
        buttons={learnerCtaSection.buttons}
      />
    </DefaultLayout>
  );
}
