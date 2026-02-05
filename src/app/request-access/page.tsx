import { Metadata } from "next";
import { DefaultLayout } from "@/components/layout";
import { ContactHero, RequestAccessForm } from "@/components/sections";
import { requestAccessData } from "@/data/accessData";

export const metadata: Metadata = {
  title: "Request Institutional Access | Lextorah Education",
  description:
    "Request institutional access to Lextorah Education as a Learner or Tutor. Fill out the form to apply for access to our educational platform.",
};

export default function RequestAccessPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <ContactHero
        title={requestAccessData.hero.title}
        subtitle={requestAccessData.hero.subtitle}
      />

      {/* Request Access Form */}
      <RequestAccessForm
        sections={requestAccessData.form.sections}
        submitButton={requestAccessData.form.submitButton}
      />
    </DefaultLayout>
  );
}
