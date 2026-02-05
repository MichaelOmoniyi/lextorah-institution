import { Metadata } from "next";
import { DefaultLayout } from "@/components/layout";
import {
  HeroSection,
  MeetMsLexiTeacher,
  TeacherBenefits,
  TeacherSubjectsSupported,
  FormalEducation,
  ResponsibleProfessionalUse,
  GettingStarted,
  FAQSection,
  TeacherCTA,
} from "@/components/sections";
import {
  msLexiTeachingFeatures,
  teacherBenefits,
  teacherExamsSupported,
  formalEducationFeatures,
  responsibleProfessionalUse,
  gettingStartedSteps,
  teacherFAQs,
  teacherCtaSection,
} from "@/data/teachersData";

export const metadata: Metadata = {
  title: "For Teachers & Tutors | Lextorah AI Teaching Support Hub",
  description:
    "Teach with clarity. Support students better. Reduce academic overload. Discover how Lextorah AI and Ms. Lexi® help teachers and tutors work more effectively.",
};

export default function TeachersPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <HeroSection
        title="Lextorah AI Teaching Support Hub"
        subtitle="Teach with clarity. Support students better. Reduce academic overload."
        primaryButtonText="Request Institutional Access"
        primaryButtonHref="/request-access"
        secondaryButtonText="Log In"
        secondaryButtonHref="/login"
        backgroundImage="/images/teacher-hero.png"
        align="center"
      />

      {/* Meet Ms Lexi Section */}
      <MeetMsLexiTeacher features={msLexiTeachingFeatures} />

      {/* How Lextorah AI Supports You */}
      <TeacherBenefits benefits={teacherBenefits} />

      {/* Subjects, Languages & Exam Support */}
      <TeacherSubjectsSupported exams={teacherExamsSupported} />

      {/* Designed for Formal Education */}
      <FormalEducation features={formalEducationFeatures} />

      {/* Responsible & Professional Use */}
      <ResponsibleProfessionalUse features={responsibleProfessionalUse} />

      {/* Getting Started & Support */}
      <GettingStarted steps={gettingStartedSteps} />

      {/* Frequently Asked Questions */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything teachers need to know about Lextorah AI"
        faqs={teacherFAQs}
      />

      {/* Call to Action */}
      <TeacherCTA
        title={teacherCtaSection.title}
        description={teacherCtaSection.description}
        buttons={teacherCtaSection.buttons}
      />
    </DefaultLayout>
  );
}
