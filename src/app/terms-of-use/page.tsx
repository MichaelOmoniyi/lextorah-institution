import { Metadata } from "next";
import { DefaultLayout } from "@/components/layout";
import { LegalHero, LegalContent, LegalCTA } from "@/components/sections";
import { termsOfUseData } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Use | Lextorah Education",
  description:
    "Read Lextorah Education's Terms of Use. These terms govern access to and use of the website(s), platform(s), applications, AI tutoring systems, and digital learning resources.",
};

export default function TermsOfUsePage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <LegalHero
        title={termsOfUseData.title}
        lastUpdated={termsOfUseData.lastUpdated}
      />

      {/* Content */}
      <LegalContent
        intro={termsOfUseData.intro}
        sections={termsOfUseData.sections}
        disclaimer={termsOfUseData.disclaimer}
      />

      {/* CTA */}
      <LegalCTA
        title={termsOfUseData.cta.title}
        subtitle={termsOfUseData.cta.subtitle}
        buttonText={termsOfUseData.cta.buttonText}
        buttonHref={termsOfUseData.cta.buttonHref}
      />
    </DefaultLayout>
  );
}
