import { Metadata } from "next";
import { DefaultLayout } from "@/components/layout";
import {
  HeroSection,
  MeetMsLexi,
  SubjectsSupported,
  ParentBenefits,
  ResponsibleUse,
  FAQSection,
  DataProtection,
  CTASection,
} from "@/components/sections";
import { parentFAQs, msLexiFAQs } from "@/data/parentsData";

export const metadata: Metadata = {
  title: "For Parents | Lextorah - Supporting Your Child's Learning Responsibly",
  description:
    "Learn how Lextorah AI and Ms. Lexi® provide safe, responsible academic support for your child. Clear academic support. Responsible technology. Confidence for parents.",
};

export default function ParentsPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <HeroSection
        title="Supporting Your Child's Learning — Responsibly"
        subtitle="Clear academic support. Responsible technology. Confidence for parents."
        primaryButtonText="How Ms Lexi Supports Learning"
        primaryButtonHref="#ms-lexi"
        secondaryButtonText="Parent FAQs"
        secondaryButtonHref="#faqs"
        backgroundImage="/images/parent-hero.png"
      />

      {/* Meet Ms Lexi Section */}
      <div id="ms-lexi">
        <MeetMsLexi />
      </div>

      {/* Subjects, Languages & Exams Section */}
      <SubjectsSupported />

      {/* What This Means for Parents */}
      <ParentBenefits />

      {/* Responsible Use & Academic Integrity */}
      <ResponsibleUse />

      {/* Frequently Asked Questions */}
      <div id="faqs">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything parents need to know about Lextorah AI"
          faqs={parentFAQs}
        />
      </div>

      {/* How Ms Lexi Supports Learning */}
      <FAQSection
        title="How Ms Lexi® Supports Learning"
        subtitle="Quick answers about how Ms Lexi® helps students"
        faqs={msLexiFAQs}
      />

      {/* Data Protection & Privacy */}
      <DataProtection />

      {/* Call to Action */}
      <CTASection />
    </DefaultLayout>
  );
}
